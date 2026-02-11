import {
  GuestbookMessage,
  CreateGuestbookMessageDto,
  GuestbookApiResponse,
  PaginationParams,
} from "@/lib/types/guestbook";

// In-memory cache with 5 minute TTL
const CACHE_TTL = 5 * 60 * 1000; 
const cache = new Map<string, { data: GuestbookApiResponse; timestamp: number }>();

function getCacheKey(page: number, limit: number): string {
  return `${page}-${limit}`;
}

function invalidateCache() {
  cache.clear();
}

/**
 * Fetches guestbook messages from the API with pagination.
 * Results are cached for 5 minutes to avoid unnecessary requests.
 */
export async function fetchGuestbookMessages(
  params: PaginationParams = {}
): Promise<GuestbookApiResponse> {
  const { page = 1, limit = 10 } = params;
  const key = getCacheKey(page, limit);

  // Return cached data if still valid
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }

  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });

  const response = await fetch(`/api/guestbook?${queryParams}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || "Failed to fetch messages");
  }

  const data: GuestbookApiResponse = await response.json();

  // Store in cache
  cache.set(key, { data, timestamp: Date.now() });

  return data;
}

/**
 * Creates a new guestbook message.
 * Invalidates the cache so the next fetch returns fresh data.
 */
export async function createGuestbookMessage(
  messageData: CreateGuestbookMessageDto
): Promise<GuestbookMessage> {
  const response = await fetch("/api/guestbook", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(messageData),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || "Failed to create message");
  }

  // Invalidate cache so next fetch gets fresh data with the new message
  invalidateCache();

  const data = await response.json();
  return data.message;
}
