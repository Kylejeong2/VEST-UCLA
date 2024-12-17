import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: Request) {
  try {
    const { query } = await request.json()

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a LinkedIn search query generator. Your task is to generate variations of a search query to find relevant LinkedIn profiles. 
          Focus on different ways to describe the same role, seniority levels, and company types.
          Return exactly 5 variations that would yield different but relevant results.
          Each variation should be semantically different but target the same type of profiles.`
        },
        {
          role: "user",
          content: `Generate 5 LinkedIn search query variations for: "${query}"`
        }
      ],
      temperature: 0.7,
    })

    const response = completion.choices[0]?.message?.content
    if (!response) {
      throw new Error('No response from OpenAI')
    }

    // Split the response into lines and clean them up
    const queries = response
      .split('\n')
      .filter(line => line.trim())
      .map(line => line.replace(/^\d+\.\s*/, '').trim())
      .filter(line => line !== query) // Remove exact matches to original query
      .slice(0, 5) // Ensure we only get 5 variations

    return NextResponse.json({ queries })
  } catch (error) {
    console.error('Query generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate query variations' },
      { status: 500 }
    )
  }
} 