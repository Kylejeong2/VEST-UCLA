import { NextResponse } from "next/server";
import { prisma } from "@/db/index";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const DISCORD_WEBHOOK_URL = process.env.CLIENT_DISCORD_WEBHOOK_URL;

    const body = await req.json();
    const { type, companyName, contactName, email, companyInfo, requirements } =
      body;

    // TODO: not working for some reason
    // const workRequest = await prisma.WorkRequest.create({
    //   data: {
    //     type,
    //     companyName,
    //     contactName,
    //     email,
    //     companyInfo,
    //     requirements,
    //   },
    // });

    if (
      DISCORD_WEBHOOK_URL &&
      !DISCORD_WEBHOOK_URL.startsWith("https://discord.com/api/webhooks/")
    ) {
      console.error("Invalid Discord webhook URL");
      return NextResponse.json(
        { success: false, error: "Invalid webhook configuration" },
        { status: 500 },
      );
    }

    if (DISCORD_WEBHOOK_URL) {
      const discordMessage = {
        embeds: [
          {
            title: `New ${type} Work Request`,
            color: type === "VC" ? 0x4299e1 : 0x34d399, // Blue for VC, Green for Startup
            fields: [
              {
                name: "Company",
                value: companyName,
                inline: true,
              },
              {
                name: "Contact",
                value: contactName,
                inline: true,
              },
              {
                name: "Email",
                value: email,
                inline: true,
              },
              {
                name: "Company Info",
                value: companyInfo,
              },
              {
                name: "Requirements",
                value: requirements,
              },
            ],
            timestamp: new Date().toISOString(),
            footer: {
              text: "VEST Work Request",
            },
          },
        ],
      };

      await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(discordMessage),
      });
    }

    // return NextResponse.json({ success: true, data: workRequest });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Work request error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit work request" },
      { status: 500 },
    );
  }
}
