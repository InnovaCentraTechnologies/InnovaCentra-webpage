import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Input Validation & Security
    const allowedFields = ['type', 'fullName', 'email', 'phone', 'company', 'description'];
    const sanitizedBody: Record<string, string> = {};

    for (const key of allowedFields) {
      if (typeof body[key] === 'string') {
        // Trim and limit length to prevent huge payloads (e.g. max 1000 chars)
        sanitizedBody[key] = body[key].trim().substring(0, 1000);
      }
    }

    if (!sanitizedBody.fullName || !sanitizedBody.phone) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }
    
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      console.warn("GOOGLE_SCRIPT_URL is not defined in .env.local. Simulating success.");
      return NextResponse.json({ success: true, message: "Simulated success" });
    }

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sanitizedBody),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: "Failed to submit to Google Sheets" }, { status: 500 });
    }
    
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
