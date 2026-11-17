import { NextResponse } from 'next/server';
import { getCurrentSession } from '@/lib/auth';
import { getDashboardStats, getRecentActivities } from '@/lib/db';

export async function GET() {
  const session = getCurrentSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  }

  const stats = await getDashboardStats();
  const recentActivities = await getRecentActivities(10);

  return NextResponse.json({
    stats,
    recentActivities
  });
}
