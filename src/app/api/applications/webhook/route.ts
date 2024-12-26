import { NextResponse } from 'next/server'
import { ApplicationAnalyzer } from '@/lib/services/application-analyzer'
import { sendApplicationToDiscord } from '@/lib/services/discord'
import { prisma } from '@/db/index'
import { ApplicationStatus } from '@/lib/types/application'
import { prompt } from '@/lib/utils/prompt'

const SYSTEM_PROMPT = prompt;
export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const formResponse = await req.json()
    
    const analyzer = new ApplicationAnalyzer(SYSTEM_PROMPT)
    const analysis = await analyzer.analyzeApplication(formResponse)

    const firstAnalysis = {
      status: analysis.firstAnalysis.status || 'NEEDS_REVIEW',
      confidence: analysis.firstAnalysis.confidence || 0,
      reasoning: analysis.firstAnalysis.reasoning || ''
    }

    const secondAnalysis = {
      status: analysis.secondAnalysis.status || 'NEEDS_REVIEW',
      confidence: analysis.secondAnalysis.confidence || 0,
      reasoning: analysis.secondAnalysis.reasoning || ''
    }

    const savedApplication = await prisma.application.create({
      data: {
        id: formResponse.id,
        timestamp: new Date(formResponse.timestamp),
        candidateName: formResponse.candidateName,
        email: formResponse.email,
        responses: formResponse.responses || {},
        firstAnalysis,
        secondAnalysis,
        finalStatus: analysis.firstAnalysis.status as ApplicationStatus,
        needsManualReview: analysis.needsManualReview || true,
      },
    })

    await sendApplicationToDiscord({
      ...formResponse,
      ...analysis,
    })

    return NextResponse.json(savedApplication)
  } catch (error) {
    console.error('Failed to process application:', error)
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    )
  }
} 