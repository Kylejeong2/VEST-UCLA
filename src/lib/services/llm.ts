import OpenAI from 'openai'
import { ApplicationResponse, AnalysisResult } from '../types/application'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
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
          content: systemPrompt
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

    const analysis = JSON.parse(response) as AnalysisResult
    return {
      status: analysis.status,
      confidence: analysis.confidence,
      reasoning: analysis.reasoning
    }
  } catch (error) {
    console.error('Error analyzing application:', error)
    return {
      status: 'NEEDS_REVIEW',
      confidence: 0,
      reasoning: 'Error during analysis'
    }
  }
} 