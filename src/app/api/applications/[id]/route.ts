import { NextResponse } from "next/server";
import { prisma } from "@/db/index";
import { sendApplicationToDiscord } from "@/lib/services/discord";
import { ApplicationStatus } from "@/lib/types/application";

export const runtime = "nodejs";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { status } = await request.json();
    const { id } = params;

    const updatedApplication = await prisma.application.update({
      where: { id },
      data: {
        finalStatus: status as ApplicationStatus,
        needsManualReview: false,
        updatedAt: new Date(),
      },
      select: {
        id: true,
        timestamp: true,
        candidateName: true,
        email: true,
        responses: true,
        linkedinUrl: true,
        resumeUrl: true,
        firstAnalysis: true,
        secondAnalysis: true,
        finalStatus: true,
        firstReasoning: true,
        secondStatus: true,
        secondReasoning: true,
        needsManualReview: true,
        createdAt: true,
        updatedAt: true
      }
    });

    // Send update to Discord
    await sendApplicationToDiscord({
      ...updatedApplication,
      linkedinUrl: updatedApplication.linkedinUrl as string,
      resumeUrl: updatedApplication.resumeUrl as string, // this is the id so to view you have to parse
      timestamp: updatedApplication.timestamp.toISOString(),
      createdAt: updatedApplication.createdAt.toISOString(),
      updatedAt: updatedApplication.updatedAt.toISOString(),
      finalStatus: updatedApplication.finalStatus as ApplicationStatus,
      firstAnalysis: updatedApplication.firstAnalysis as any,
      secondAnalysis: updatedApplication.secondAnalysis as any,
    });

    return NextResponse.json(updatedApplication);
  } catch (error) {
    console.error("Failed to update application:", error);
    return NextResponse.json(
      { error: "Failed to update application" },
      { status: 500 },
    );
  }
}
