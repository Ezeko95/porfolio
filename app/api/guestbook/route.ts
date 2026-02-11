import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";

/**
 * GET /api/guestbook
 * Fetches guestbook messages from NestJS backend with pagination
 */
export async function GET(request: NextRequest) {
  try {
    // Get pagination params from query string
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get("page") || "1";
    const limit = searchParams.get("limit") || "10";

    // Build query string for backend
    const queryParams = new URLSearchParams({
      page,
      limit,
    });

    const response = await fetch(`${BACKEND_URL}/messages?${queryParams}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_BACKEND_API_KEY || "",
      },
      cache: "no-store", // Disable caching to always get fresh data
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData.message || "Failed to fetch messages" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Guestbook GET error:", error);
    return NextResponse.json(
      { error: "Failed to connect to backend server" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/guestbook
 * Creates a new guestbook message in NestJS backend
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, message } = body;

    // Validate required fields
    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message are required" },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters" },
        { status: 400 }
      );
    }

    if (name.trim().length > 50) {
      return NextResponse.json(
        { error: "Name must not exceed 50 characters" },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters" },
        { status: 400 }
      );
    }

    if (message.trim().length > 500) {
      return NextResponse.json(
        { error: "Message must not exceed 500 characters" },
        { status: 400 }
      );
    }

    // Send to NestJS backend
    const response = await fetch(`${BACKEND_URL}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_BACKEND_API_KEY || "",
      },
      body: JSON.stringify({
        name: name.trim(),
        content: message.trim(),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData.message || "Failed to create message" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(
      { message: data },
      { status: 201 }
    );
  } catch (error) {
    console.error("Guestbook POST error:", error);
    return NextResponse.json(
      { error: "Failed to connect to backend server" },
      { status: 500 }
    );
  }
}
