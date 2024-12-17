import { google } from 'googleapis'
import { ApplicationResponse } from '../types/application'

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY!),
  scopes: ['https://www.googleapis.com/auth/forms.responses.readonly'],
})

export async function fetchFormResponses(formId: string): Promise<ApplicationResponse[]> {
  try {
    const forms = google.forms({
      version: 'v1',
      auth,
    })

    const response = await forms.forms.responses.list({
      formId,
    })

    if (!response.data.responses) {
      return []
    }

    return response.data.responses.map((response: any) => {
      const answers = response.answers || {}
      const responses: Record<string, string> = {}

      Object.entries(answers).forEach(([questionId, answer]: [string, any]) => {
        responses[questionId] = answer.textAnswers?.answers?.[0]?.value || ''
      })

      return {
        id: response.responseId!,
        timestamp: response.createTime!,
        candidateName: responses['name'] || 'Unknown',
        email: responses['email'] || 'No email provided',
        responses,
        linkedinUrl: responses['linkedin'] || undefined,
      }
    })
  } catch (error) {
    console.error('Error fetching form responses:', error)
    return []
  }
} 