import { ApplicationWithAnalysis } from "../types/application";
import { ApplicationStatus } from '@prisma/client';

const DISCORD_WEBHOOK_URL = process.env.APPLICATION_DISCORD_WEBHOOK_URL!;

export async function sendApplicationToDiscord(
  application: ApplicationWithAnalysis,
) {
  try {
    const statusColor = {
      ACCEPTED: 0x00ff00, // Green
      REJECTED: 0xff0000, // Red
      NEEDS_REVIEW: 0xffff00, // Yellow
      PENDING: 0x808080, // Gray
    }[application.finalStatus] || 0x808080;

    const embed = {
      title: "New Application Received",
      color: statusColor,
      fields: [
        {
          name: "Candidate",
          value: application.candidateName || "No name provided",
          inline: true,
        },
        {
          name: "Email",
          value: application.email || "No email provided",
          inline: true,
        },
        {
          name: "Status",
          value: application.finalStatus || "PENDING",
          inline: true,
        },
        {
          name: "LinkedIn",
          value: (application.responses as any)?.["linkedin url"] || "Not provided",
          inline: false,
        },
        {
          name: "First Analysis",
          value: application.firstAnalysis ? 
            `Status: ${application.firstAnalysis.status}
Confidence: ${(application.firstAnalysis.confidence * 100).toFixed(1)}%
Reasoning: ${application.firstAnalysis.reasoning}` : "No analysis available",
          inline: false,
        },
        {
          name: "Second Analysis",
          value: application.secondAnalysis ? 
            `Status: ${application.secondAnalysis.status}
Confidence: ${(application.secondAnalysis.confidence * 100).toFixed(1)}%
Reasoning: ${application.secondAnalysis.reasoning}` : "No analysis available",
          inline: false,
        },
      ],
      timestamp: new Date().toISOString(),
    };

    console.log('Sending to Discord:', JSON.stringify(embed, null, 2));

    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [embed],
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Discord webhook failed: ${response.status} ${text}`);
    }
  } catch (error) {
    console.error("Error sending to Discord:", error);
    throw error; // Re-throw to see the error in the logs
  }
}
