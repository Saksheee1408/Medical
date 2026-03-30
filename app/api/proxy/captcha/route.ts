import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/captcha/challenge`);
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    // Fallback math captcha if backend is unreachable
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    return NextResponse.json({ question: `${a} + ${b} = ?`, answer: a + b });
  }
}
