import { NextResponse } from 'next/server';
import { getCurrentSession } from '@/lib/auth';
import { getAllCurriculum } from '@/lib/db';

export async function GET() {
  const session = getCurrentSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const items = getAllCurriculum();
  return NextResponse.json({ curriculum: items });
}
