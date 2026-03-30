import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // This could proxy to a lead generation endpoint if available
    return NextResponse.json({ success: true, message: 'Message received. We will get back to you.' });
  } catch {
    return NextResponse.json({ success: false, message: 'Failed to process request.' }, { status: 400 });
  }
}
