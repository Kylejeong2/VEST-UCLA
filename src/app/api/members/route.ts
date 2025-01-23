import { NextResponse } from "next/server";
import { prisma } from "@/db";

export async function GET() {
  try {
    const members = await prisma.member.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        slug: true,
        headshot: true,
        description: true,
        skills: true,
        isAvailable: true,
      },
    });

    return NextResponse.json(members);
  } catch (error) {
    console.error("Error fetching members:", error);
    return NextResponse.json(
      { error: "Failed to fetch members" },
      { status: 500 }
    );
  }
} 