import { ApplicationWithAnalysis } from "../types/application";

const DISCORD_WEBHOOK_URL = process.env.APPLICATION_DISCORD_WEBHOOK_URL!;

export async function sendApplicationToDiscord(
  application: ApplicationWithAnalysis,
) {
  try {
    const statusColor = {
      APPROVED: 0x00ff00, // Green
      REJECTED: 0xff0000, // Red
      NEEDS_REVIEW: 0xffff00, // Yellow
      PENDING: 0x808080, // Gray
    }[application.finalStatus];

    const embed = {
      title: "New Application Received",
      color: statusColor,
      fields: [
        {
          name: "Candidate",
          value: application.candidateName,
          inline: true,
        },
        {
          name: "Email",
          value: application.email,
          inline: true,
        },
        {
          name: "Status",
          value: application.finalStatus,
          inline: true,
        },
        {
          name: "LinkedIn",
          value: application.linkedinUrl,
          inline: false,
        },
        {
          name: "First Analysis",
          value: `Status: ${application.firstAnalysis.status}
Confidence: ${(application.firstAnalysis.confidence * 100).toFixed(1)}%
Reasoning: ${application.firstAnalysis.reasoning}`,
          inline: false,
        },
        {
          name: "Second Analysis",
          value: `Status: ${application.secondAnalysis.status}
Confidence: ${(application.secondAnalysis.confidence * 100).toFixed(1)}%
Reasoning: ${application.secondAnalysis.reasoning}`,
          inline: false,
        },
      ],
      timestamp: new Date(application.timestamp).toISOString(),
    };

    await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [embed],
      }),
    });
  } catch (error) {
    console.error("Error sending to Discord:", error);
  }
}
