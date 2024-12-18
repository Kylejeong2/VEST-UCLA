import OpenAI from 'openai'
import { ApplicationResponse, AnalysisResult, ApplicationStatus } from '../types/application'
import { z } from 'zod'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const AnalysisSchema = z.object({
  status: z.enum(['PENDING', 'APPROVED', 'REJECTED', 'NEEDS_REVIEW'] as const),
  confidence: z.number(),
  reasoning: z.string()
})

export async function analyzeApplication(
  application: ApplicationResponse,
  systemPrompt: string
): Promise<AnalysisResult> {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `${systemPrompt}\nProvide your response as a JSON object with the following structure: { "status": "PENDING"|"APPROVED"|"REJECTED"|"NEEDS_REVIEW", "confidence": number, "reasoning": string }`
        },
        {
          role: "user",
          content: JSON.stringify(application)
        }
      ],
      temperature: 0.3,
      response_format: { type: "json_object" }
    })

    const response = completion.choices[0]?.message?.content
    if (!response) {
      throw new Error('No response from OpenAI')
    }

    const parsedResponse = AnalysisSchema.parse(JSON.parse(response))
    return parsedResponse

  } catch (error) {
    console.error('Error analyzing application:', error)
    return {
      status: 'NEEDS_REVIEW',
      confidence: 0,
      reasoning: 'Error during analysis'
    }
  }
}