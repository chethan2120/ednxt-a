import { NextResponse } from 'next/server';
import { getCurrentSession } from '@/lib/auth';
import { updateCourse, deleteCourse, logActivity } from '@/lib/db';

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = getCurrentSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const id = parseInt(params.id, 10);
    const data = await request.json();
    updateCourse(id, data);

    logActivity(session.email, 'UPDATE_COURSE', 'course', String(id), `Updated course ID: ${id}`);
    return NextResponse.json({ success: true, message: 'Course updated successfully.' });
  } catch (err: any) {
    console.error('Course update error:', err);
    return NextResponse.json({ error: 'Failed to update course.' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = getCurrentSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const id = parseInt(params.id, 10);
    deleteCourse(id);
    logActivity(session.email, 'DELETE_COURSE', 'course', String(id), `Deleted course ID: ${id}`);
    return NextResponse.json({ success: true, message: 'Course deleted successfully.' });
  } catch (err: any) {
    console.error('Course deletion error:', err);
    return NextResponse.json({ error: 'Failed to delete course.' }, { status: 500 });
  }
}
