import { NextResponse } from 'next/server'
import { ApplicationAnalyzer } from '@/lib/services/application-analyzer'
import { sendApplicationToDiscord } from '@/lib/services/discord'
import { prisma } from '@/db/index'
import { ApplicationStatus } from '@/lib/types/application'
import { prompt } from '@/lib/utils/prompt'
import { parseResumeFromDrive } from '@/lib/services/resume-parser'

const SYSTEM_PROMPT = prompt;
export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    console.log('[Webhook] Received application webhook request');
    const formResponse = await req.json()
    
    // Get resume ID from responses
    const resumeId = formResponse.responses?.['upload resume'];
    
    console.log('[Webhook] Application data:', {
      name: formResponse.candidateName,
      email: formResponse.email,
      hasResume: Boolean(resumeId),
      resumeId
    });
    
    // Parse resume if available
    let resumeData = null;
    if (resumeId) {
      console.log('[Webhook] Resume file ID found, starting parse:', resumeId);
      try {
        resumeData = await parseResumeFromDrive(resumeId);
        console.log('[Webhook] Successfully parsed resume:', {
          textLength: resumeData.rawText.length,
          hasStructuredData: Boolean(resumeData.parsedData),
          extractedFields: resumeData.parsedData ? Object.keys(resumeData.parsedData) : []
        });
      } catch (error) {
        console.error('[Webhook] Failed to parse resume:', error);
        // Continue without resume if parsing fails
      }
    }

    console.log('[Webhook] Starting application analysis');
    const analyzer = new ApplicationAnalyzer(SYSTEM_PROMPT)
    const analysis = await analyzer.analyzeApplication({
      ...formResponse,
      resumeData: resumeData?.parsedData
    })
    console.log('[Webhook] Analysis complete:', {
      firstAnalysis: {
        status: analysis.firstAnalysis.status,
        confidence: analysis.firstAnalysis.confidence
      },
      secondAnalysis: {
        status: analysis.secondAnalysis.status,
        confidence: analysis.secondAnalysis.confidence
      },
      needsReview: analysis.needsManualReview
    });

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

    // Create application with resume
    console.log('[Webhook] Saving application to database');
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
        resume: resumeData ? {
          create: {
            rawText: resumeData.rawText,
            parsedData: resumeData.parsedData
          }
        } : undefined
      },
      include: {
        resume: true
      }
    })
    console.log('[Webhook] Successfully saved application:', {
      id: savedApplication.id,
      hasResume: Boolean(savedApplication.resume)
    });

    console.log('[Webhook] Sending to Discord');
    await sendApplicationToDiscord({
      ...formResponse,
      ...analysis,
      resumeData: resumeData?.parsedData
    })
    console.log('[Webhook] Successfully sent to Discord');

    return NextResponse.json(savedApplication)
  } catch (error) {
    console.error('[Webhook] Failed to process application:', error);
    if (error instanceof Error) {
      console.error('[Webhook] Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
    }
    return NextResponse.json(
      { error: 'Failed to process application' },
      { status: 500 }
    )
  }
}