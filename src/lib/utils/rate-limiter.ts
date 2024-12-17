class RateLimiter {
  private requests: number[] = []
  private readonly maxRequests: number
  private readonly timeWindow: number // in milliseconds

  constructor(maxRequests: number, timeWindowInSeconds: number = 60) {
    this.maxRequests = maxRequests
    this.timeWindow = timeWindowInSeconds * 1000
  }

  async waitForSlot(): Promise<void> {
    const now = Date.now()
    this.requests = this.requests.filter(time => now - time < this.timeWindow)

    if (this.requests.length >= this.maxRequests) {
      const oldestRequest = this.requests[0]
      const waitTime = this.timeWindow - (now - oldestRequest)
      await new Promise(resolve => setTimeout(resolve, waitTime))
      return this.waitForSlot()
    }

    this.requests.push(now)
  }
}

// Create rate limiters for different services
export const searchRateLimiter = new RateLimiter(
  parseInt(process.env.MAX_REQUESTS_PER_MINUTE || '60')
)

export const enrichRateLimiter = new RateLimiter(
  parseInt(process.env.MAX_REQUESTS_PER_MINUTE || '60')
)

export const openaiRateLimiter = new RateLimiter(
  parseInt(process.env.MAX_REQUESTS_PER_MINUTE || '60')
) 