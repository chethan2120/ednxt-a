import { NextResponse } from 'next/server';
import { getCurrentSession } from '@/lib/auth';
import { getAllCourses, createCourse, logActivity } from '@/lib/db';

export async function GET() {
  const session = getCurrentSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const courses = getAllCourses();
  return NextResponse.json({ courses });
}

export async function POST(request: Request) {
  const session = getCurrentSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await request.json();
    if (!data.title || !data.stream) {
      return NextResponse.json({ error: 'Title and stream are required.' }, { status: 400 });
    }

    if (!data.slug) {
      data.slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }

    const newId = createCourse(data);
    logActivity(session.email, 'CREATE_COURSE', 'course', String(newId), `Created course: ${data.title}`);

    return NextResponse.json({ success: true, id: newId, message: 'Course created successfully.' });
  } catch (err: any) {
    console.error('Course creation error:', err);
    return NextResponse.json({ error: err.message || 'Failed to create course.' }, { status: 500 });
  }
}
