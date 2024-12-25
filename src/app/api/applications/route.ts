import { NextResponse } from 'next/server'
import { prisma } from '@/db/index'

export const runtime = 'nodejs'

export async function GET() {
  try {
    const applications = await prisma.application.findMany({
      orderBy: { timestamp: 'desc' },
    })
    return NextResponse.json(applications)
  } catch (error) {
    console.error('Failed to fetch applications:', error)
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    )
  }
}
