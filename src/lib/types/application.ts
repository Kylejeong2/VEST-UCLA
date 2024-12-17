export type ApplicationStatus = 'PENDING' | 'APPROVED' | 'REJECTED' | 'NEEDS_REVIEW'

export interface ApplicationResponse {
  id: string
  timestamp: string
  candidateName: string
  email: string
  responses: Record<string, string> | any
  linkedinUrl?: string
  createdAt?: string
  updatedAt?: string
}

export interface AnalysisResult {
  status: ApplicationStatus
  confidence: number
  reasoning: string
}

export interface ApplicationAnalysis {
  firstAnalysis: AnalysisResult
  secondAnalysis: AnalysisResult
  finalStatus: ApplicationStatus
  needsManualReview: boolean
}

export interface ApplicationWithAnalysis extends ApplicationResponse, ApplicationAnalysis {}

export interface Application extends ApplicationResponse, ApplicationAnalysis {} 