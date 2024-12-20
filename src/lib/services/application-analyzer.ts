import {
  ApplicationResponse,
  ApplicationStatus,
  AnalysisResult,
} from "../types/application";
import { analyzeApplication } from "./llm";

export class ApplicationAnalyzer {
  private systemPrompt: string;

  constructor(systemPrompt: string) {
    this.systemPrompt = systemPrompt;
  }

  async analyzeApplication(application: ApplicationResponse): Promise<{
    firstAnalysis: AnalysisResult;
    secondAnalysis: AnalysisResult;
    finalStatus: ApplicationStatus;
    needsManualReview: boolean;
  }> {
    // First analysis
    const firstAnalysis = await this.runAnalysis(application);

    // Second analysis
    const secondAnalysis = await this.runAnalysis(application);

    // Compare analyses and determine final status
    const finalStatus = this.determineFinalStatus(
      firstAnalysis,
      secondAnalysis,
    );
    const needsManualReview = this.checkIfNeedsReview(
      firstAnalysis,
      secondAnalysis,
    );

    return {
      firstAnalysis,
      secondAnalysis,
      finalStatus,
      needsManualReview,
    };
  }

  private async runAnalysis(
    application: ApplicationResponse,
  ): Promise<AnalysisResult> {
    return await analyzeApplication(application, this.systemPrompt);
  }

  private determineFinalStatus(
    first: AnalysisResult,
    second: AnalysisResult,
  ): ApplicationStatus {
    if (first.status === second.status) {
      return first.status;
    }
    return "NEEDS_REVIEW";
  }

  private checkIfNeedsReview(
    first: AnalysisResult,
    second: AnalysisResult,
  ): boolean {
    return (
      first.status !== second.status ||
      first.confidence < 0.8 ||
      second.confidence < 0.8 ||
      first.status === "NEEDS_REVIEW" ||
      second.status === "NEEDS_REVIEW"
    );
  }
}
