import { NextResponse } from "next/server";
import { prisma } from "@/db";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const member = await prisma.member.findUnique({
      where: {
        slug: params.slug,
      },
    });

    if (!member) {
      return NextResponse.json(
        { error: "Member not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(member);
  } catch (error) {
    console.error("Error fetching member:", error);
    return NextResponse.json(
      { error: "Failed to fetch member" },
      { status: 500 }
    );
  }
} 