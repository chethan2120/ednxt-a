import { NextResponse } from 'next/server';
import { verifyUserCredentials, logActivity } from '@/lib/db';
import { signSession, setSessionCookie } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
    }

    const user = verifyUserCredentials(email.trim().toLowerCase(), password);

    if (!user) {
      return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 });
    }

    // Create session token & set cookie
    const token = signSession({
      email: user.email,
      name: user.name,
      role: user.role
    });

    setSessionCookie(token);
    logActivity(user.email, 'LOGIN', 'auth', String(user.id), 'Admin logged in successfully');

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
      }
    });
  } catch (err: any) {
    console.error('Login error:', err);
    return NextResponse.json({ error: 'Authentication failed.' }, { status: 500 });
  }
}
