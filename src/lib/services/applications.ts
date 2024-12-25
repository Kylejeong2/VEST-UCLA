import { prisma } from '@/db/index'
import { ApplicationStatus } from '@prisma/client'

export const runtime = 'edge'

export async function createApplication(data: {
  id: string
  timestamp: Date
  candidateName: string
  email: string
  responses: any
  firstAnalysis: any
  secondAnalysis: any
  finalStatus: ApplicationStatus
  firstReasoning: string
  secondStatus: ApplicationStatus
  secondReasoning: string
  needsManualReview: boolean
  linkedinUrl?: string
  resumeUrl?: string
}) {
  return await prisma.application.create({
    data
  })
}

export async function getAllApplications() {
  return await prisma.application.findMany({
    orderBy: { timestamp: 'desc' },
  })
}

export async function updateApplicationStatus(id: string, status: ApplicationStatus) {
  return await prisma.application.update({
    where: { id },
    data: {
      finalStatus: status,
      needsManualReview: false,
      updatedAt: new Date(),
    },
  })
} 