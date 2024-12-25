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
    });

    // Send update to Discord
    await sendApplicationToDiscord({
      ...updatedApplication,
      timestamp: updatedApplication.timestamp.toISOString(),
      createdAt: updatedApplication.createdAt.toISOString(),
      updatedAt: updatedApplication.updatedAt.toISOString(),
      firstAnalysis: updatedApplication.firstAnalysis as any,
      secondAnalysis: updatedApplication.secondAnalysis as any,
      linkedinUrl: (updatedApplication.responses as any)?.["linkedin url"] || undefined,
      resumeUrl: (updatedApplication.responses as any)?.["resume url"] || undefined,
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
