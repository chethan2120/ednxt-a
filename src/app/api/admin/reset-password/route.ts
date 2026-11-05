import { NextResponse } from 'next/server';
import { getUserByEmail, updateUserPassword, logActivity } from '@/lib/db';
import { getCurrentSession } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { email, current_password, new_password } = await request.json();

    if (!email || !new_password) {
      return NextResponse.json({ error: 'Email and new password are required.' }, { status: 400 });
    }

    if (new_password.length < 8) {
      return NextResponse.json({ error: 'New password must be at least 8 characters long.' }, { status: 400 });
    }

    const session = getCurrentSession();
    const targetUser = getUserByEmail(email.trim().toLowerCase());

    if (!targetUser) {
      return NextResponse.json({ error: 'User not found.' }, { status: 404 });
    }

    // Update password
    updateUserPassword(targetUser.email, new_password);
    logActivity(
      session ? session.email : targetUser.email,
      'PASSWORD_RESET',
      'user',
      String(targetUser.id),
      `Password reset performed for ${targetUser.email}`
    );

    return NextResponse.json({ success: true, message: 'Password has been successfully updated.' });
  } catch (err: any) {
    console.error('Password reset error:', err);
    return NextResponse.json({ error: 'Failed to reset password.' }, { status: 500 });
  }
}
