import OpenAI from "openai";
import {
  ApplicationResponse,
  AnalysisResult,
} from "../types/application";
import { z } from "zod";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const AnalysisSchema = z.object({
  status: z.enum(["PENDING", "ACCEPTED", "REJECTED", "NEEDS_REVIEW"] as const),
  confidence: z.number(),
  reasoning: z.string(),
});

export async function analyzeApplication(
  application: ApplicationResponse & { 
    resumeText?: string | null;
    resumeData?: {
      education?: string;
      work_experience?: string;
      skills?: string;
      projects?: string;
      achievements?: string;
    } | null;
  },
  systemPrompt: string,
): Promise<AnalysisResult> {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: `Application: ${JSON.stringify(application)}
${application.resumeData ? `\nStructured Resume Data:\n${JSON.stringify(application.resumeData, null, 2)}` : ''}
`
        },
      ],
      temperature: 0.3,
      response_format: { type: "json_object" },
    });

    const response = completion.choices[0]?.message?.content;
    if (!response || typeof response !== "string") {
      throw new Error("Invalid response from OpenAI");
    }

    try {
      const parsedResponse = JSON.parse(response.trim());
      const validatedResponse = AnalysisSchema.parse(parsedResponse);
      return validatedResponse;
    } catch (parseError) {
      console.error("Failed to parse OpenAI response:", response);
      throw new Error("Invalid JSON response from OpenAI");
    }
  } catch (error) {
    console.error("Error analyzing application:", error);
    return {
      status: "NEEDS_REVIEW",
      confidence: 0,
      reasoning: "Error during analysis: " + (error as Error).message,
    };
  }
}
