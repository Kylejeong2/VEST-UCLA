import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs/server";
import { Prisma, prisma } from "@/db";

export async function GET() {
  const user = await currentUser();
  
  if (!user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    let member = await prisma.member.findUnique({
      where: { clerkId: user.id },
    });

    if (!member) {
      // Create a new member if they don't exist
      member = await prisma.member.create({
        data: {
          clerkId: user.id,
          firstName: user.firstName || '',
          lastName: user.lastName || '',
          email: user.emailAddresses[0]?.emailAddress || '',
          headshot: user.imageUrl || '',
          description: '',
          projects: [],
          skills: [],
          applicationResponses: {},
          isAvailable: true,
          slug: `${(user.firstName || '').toLowerCase()}-${(user.lastName || '').toLowerCase()}`,
        },
      });
    }

    return NextResponse.json(member);
  } catch (error) {
    // Check if it's a Prisma error related to missing column
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2022') {
      console.error("Database schema needs to be updated. Run prisma migrate.");
      return NextResponse.json(
        { error: "Database configuration issue" },
        { status: 500 }
      );
    }

    console.error("Error fetching/creating member:", error);
    return NextResponse.json(
      { error: "Failed to fetch/create member" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  const user = await currentUser();
  
  if (!user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await request.json();
    
    // Try to find the member first
    const existingMember = await prisma.member.findUnique({
      where: { clerkId: user.id },
    });

    // If member doesn't exist, create it
    if (!existingMember) {
      const member = await prisma.member.create({
        data: {
          clerkId: user.id,
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          email: data.email || user.emailAddresses[0]?.emailAddress || '',
          headshot: data.headshot || user.imageUrl || '',
          description: data.description || '',
          projects: data.projects || [],
          skills: data.skills || [],
          applicationResponses: {},
          isAvailable: data.isAvailable ?? true,
          slug: `${(data.firstName || '').toLowerCase()}-${(data.lastName || '').toLowerCase()}`,
        },
      });
      return NextResponse.json(member);
    }

    // Otherwise update the existing member
    const member = await prisma.member.update({
      where: { clerkId: user.id },
      data: {
        firstName: data.firstName || '',
        lastName: data.lastName || '',
        email: data.email || user.emailAddresses[0]?.emailAddress || '',
        headshot: data.headshot || user.imageUrl || '',
        description: data.description || '',
        resumeUrl: data.resumeUrl,
        linkedinUrl: data.linkedinUrl,
        projects: data.projects || [],
        skills: data.skills || [],
        isAvailable: data.isAvailable ?? true,
        slug: `${(data.firstName || '').toLowerCase()}-${(data.lastName || '').toLowerCase()}`,
      },
    });

    return NextResponse.json(member);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2022') {
      console.error("Database schema needs to be updated. Run prisma migrate.");
      return NextResponse.json(
        { error: "Database configuration issue" },
        { status: 500 }
      );
    }

    console.error("Error updating member:", error);
    return NextResponse.json(
      { error: "Failed to update member" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const user = await currentUser();
  
  if (!user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await request.json();
    const member = await prisma.member.create({
      data: {
        clerkId: user.id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        headshot: data.headshot,
        description: data.description,
        resumeUrl: data.resumeUrl,
        linkedinUrl: data.linkedinUrl,
        projects: data.projects || [],
        skills: data.skills || [],
        isAvailable: true,
        slug: `${data.firstName.toLowerCase()}-${data.lastName.toLowerCase()}`,
        applicationResponses: data.applicationResponses || {},
      },
    });

    return NextResponse.json(member);
  } catch (error) {
    console.error("Error creating member:", error);
    return NextResponse.json(
      { error: "Failed to create member" },
      { status: 500 }
    );
  }
} 