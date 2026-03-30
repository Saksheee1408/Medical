import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const businessId = searchParams.get('business_id');
  const date = searchParams.get('date');
  const professional = searchParams.get('professional');

  if (!businessId || !date) {
    return NextResponse.json({ success: false, message: 'business_id and date required' }, { status: 400 });
  }

  try {
    let url = `${process.env.BACKEND_URL}/api/public/business/${businessId}/available-slots?date=${encodeURIComponent(date)}`;
    if (professional) url += `&professional=${encodeURIComponent(professional)}`;
    
    const res = await fetch(url);
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ success: false, message: 'Unable to load slots.' }, { status: 500 });
  }
}
