import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Get Formspree endpoint from environment variable
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;

    if (!formspreeEndpoint) {
      return NextResponse.json(
        { error: "Formspree endpoint not configured" },
        { status: 500 }
      );
    }

    // Send to Formspree
    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData.error || "Failed to send message" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(
      { message: "Message sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
