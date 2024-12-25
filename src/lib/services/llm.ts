import OpenAI from "openai";
import {
  ApplicationResponse,
  AnalysisResult,
  ApplicationStatus,
} from "../types/application";
import { z } from "zod";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const AnalysisSchema = z.object({
  status: z.enum(["PENDING", "APPROVED", "REJECTED", "NEEDS_REVIEW"] as const),
  confidence: z.number(),
  reasoning: z.string(),
});

export async function analyzeApplication(
  application: ApplicationResponse,
  systemPrompt: string,
): Promise<AnalysisResult> {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `${systemPrompt}\nYou must respond with a valid JSON object containing exactly these fields:\n{\n  "status": "PENDING" | "APPROVED" | "REJECTED" | "NEEDS_REVIEW",\n  "confidence": number between 0 and 1,\n  "reasoning": string\n}`,
        },
        {
          role: "user",
          content: JSON.stringify(application),
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
