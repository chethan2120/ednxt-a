import { NextResponse } from 'next/server';
import { clearSessionCookie, getCurrentSession } from '@/lib/auth';
import { logActivity } from '@/lib/db';

export async function POST() {
  try {
    const session = getCurrentSession();
    if (session) {
      logActivity(session.email, 'LOGOUT', 'auth', '', 'Admin logged out');
    }
    clearSessionCookie();
    return NextResponse.json({ success: true, message: 'Logged out successfully.' });
  } catch (err: any) {
    return NextResponse.json({ error: 'Logout failed.' }, { status: 500 });
  }
}
