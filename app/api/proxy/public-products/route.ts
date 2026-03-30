import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const businessId = searchParams.get('business_id');

  if (!businessId) {
    return NextResponse.json({ success: false, message: 'business_id required' }, { status: 400 });
  }

  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/public/business/${businessId}/products`);
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ success: false, message: 'Unable to load products.' }, { status: 500 });
  }
}
