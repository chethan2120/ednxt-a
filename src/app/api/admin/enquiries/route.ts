import { NextResponse } from 'next/server';
import { getCurrentSession } from '@/lib/auth';
import { getAllEnquiries } from '@/lib/db';

export async function GET(request: Request) {
  const session = getCurrentSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type') || undefined;
  const status = searchParams.get('status') || undefined;
  const search = searchParams.get('search') || undefined;

  const enquiries = getAllEnquiries(type, status, search);
  return NextResponse.json({ enquiries });
}
