export interface GuestbookMessage {
  id: string;
  name: string;
  content: string;
  createdAt: string;
}

export interface CreateGuestbookMessageDto {
  name: string;
  content: string;
}

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface GuestbookApiResponse {
  data: GuestbookMessage[];
  meta: PaginationMeta;
}

export interface GuestbookErrorResponse {
  error: string;
  statusCode?: number;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}
