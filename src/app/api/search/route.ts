import { NextResponse } from "next/server";

export const runtime = "edge";

// Helper to delay between API calls
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function searchExa(query: string) {
  try {
    const exaResponse = await fetch("https://api.exa.ai/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.EXA_API_KEY!,
      },
      body: JSON.stringify({
        query,
        category: "linkedin profile",
        useAutoprompt: true,
        max_results: 10,
      }),
    });

    if (!exaResponse.ok) {
      console.error(
        `Exa API error for query "${query}":`,
        await exaResponse.text(),
      );
      return [];
    }

    const exaData = await exaResponse.json();
    if (!exaData || !exaData.results) {
      console.error(`Invalid Exa API response for query "${query}":`, exaData);
      return [];
    }

    return exaData.results;
  } catch (error) {
    console.error(`Error in Exa search for query "${query}":`, error);
    return [];
  }
}

async function enrichWithApollo(profiles: any[]) {
  if (profiles.length === 0) return [];

  try {
    const apolloResponse = await fetch(
      "https://api.apollo.io/api/v1/people/bulk_match",
      {
        method: "POST",
        headers: {
          "Cache-Control": "no-cache",
          "Content-Type": "application/json",
          "Api-Key": process.env.APOLLO_API_KEY!,
        },
        body: JSON.stringify({
          api_key: process.env.APOLLO_API_KEY,
          details: profiles.map((profile: any) => ({
            linkedin_url: profile.url,
          })),
        }),
      },
    );

    if (!apolloResponse.ok) {
      console.error("Apollo API error:", await apolloResponse.text());
      throw new Error("Apollo API error");
    }

    const apolloData = await apolloResponse.json();
    return profiles.map((profile: any, index: number) => {
      const match = apolloData.matches?.[index];
      return {
        name: profile.author || match?.name || "N/A",
        email: match?.email || "N/A",
        linkedinUrl: profile.url,
        position: match?.title || profile.title || "N/A",
        company: match?.organization?.name || "N/A",
      };
    });
  } catch (error) {
    console.error("Error in Apollo enrichment:", error);
    // Return non-enriched profiles as fallback
    return profiles.map((profile) => ({
      name: profile.author || "N/A",
      email: "N/A",
      linkedinUrl: profile.url,
      position: profile.title || "N/A",
      company: "N/A",
    }));
  }
}

export async function POST(request: Request) {
  try {
    const { query } = await request.json();

    // Generate query variations
    const variationsResponse = await fetch(
      `${request.url.split("/api/")[0]}/api/generate-queries`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      },
    );

    if (!variationsResponse.ok) {
      throw new Error("Failed to generate query variations");
    }

    const { queries } = await variationsResponse.json();
    const allQueries = [query, ...queries]; // Include original query

    // Process queries in smaller batches with delays
    const batchSize = 5; // Reduced batch size
    const allResults = new Set<string>(); // Use Set to track unique LinkedIn URLs
    const enrichedResults = [];

    for (
      let i = 0;
      i < allQueries.length && allResults.size < 1000;
      i += batchSize
    ) {
      // Add delay between batches to prevent rate limiting
      if (i > 0) {
        await delay(1000); // 1 second delay between batches
      }

      const batchQueries = allQueries.slice(i, i + batchSize);
      const batchResults = await Promise.all(
        batchQueries.map(async (q, index) => {
          // Add small delay between queries in the same batch
          if (index > 0) {
            await delay(200); // 200ms delay between queries
          }
          return searchExa(q);
        }),
      );

      // Flatten and deduplicate results
      const uniqueProfiles = batchResults.flat().filter((profile) => {
        if (!profile.url || allResults.has(profile.url)) {
          return false;
        }
        allResults.add(profile.url);
        return true;
      });

      if (uniqueProfiles.length > 0) {
        // Enrich unique profiles in batches of 10
        for (let j = 0; j < uniqueProfiles.length; j += 10) {
          await delay(500); // 500ms delay between Apollo API calls
          const enrichBatch = uniqueProfiles.slice(j, j + 10);
          const enriched = await enrichWithApollo(enrichBatch);
          enrichedResults.push(...enriched);
        }
      }
    }

    if (enrichedResults.length === 0) {
      return NextResponse.json({ error: "No results found" }, { status: 404 });
    }

    return NextResponse.json(enrichedResults);
  } catch (error) {
    console.error("Search error:", error);
    if (error instanceof Error) {
      console.error("Error details:", error.message, error.stack);
    }
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
