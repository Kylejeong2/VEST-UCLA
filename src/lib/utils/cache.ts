interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

class Cache<T> {
  private cache: Map<string, CacheEntry<T>> = new Map();
  private readonly ttl: number; // Time to live in milliseconds

  constructor(ttlMinutes: number = 60) {
    this.ttl = ttlMinutes * 60 * 1000;
  }

  set(key: string, value: T): void {
    this.cache.set(key, {
      data: value,
      timestamp: Date.now(),
    });
  }

  get(key: string): T | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    const now = Date.now();
    if (now - entry.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  clear(): void {
    this.cache.clear();
  }

  // Clean up expired entries
  cleanup(): void {
    const now = Date.now();
    this.cache.forEach((entry, key) => {
      if (now - entry.timestamp > this.ttl) {
        this.cache.delete(key);
      }
    });
  }
}

// Create caches for different types of data
export const searchCache = new Cache<any[]>(
  parseInt(process.env.CACHE_TTL_MINUTES || "60"),
);

export const queryVariationsCache = new Cache<string[]>(
  parseInt(process.env.CACHE_TTL_MINUTES || "60"),
);

// Run cleanup periodically
setInterval(
  () => {
    searchCache.cleanup();
    queryVariationsCache.cleanup();
  },
  5 * 60 * 1000,
); // Clean up every 5 minutes
