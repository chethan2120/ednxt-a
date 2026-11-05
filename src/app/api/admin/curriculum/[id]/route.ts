import { NextResponse } from 'next/server';
import { getCurrentSession } from '@/lib/auth';
import { updateCurriculumTopic, logActivity } from '@/lib/db';

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = getCurrentSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const id = decodeURIComponent(params.id);
    const data = await request.json();
    updateCurriculumTopic(id, data);

    logActivity(session.email, 'UPDATE_CURRICULUM', 'curriculum', id, `Updated curriculum topic: ${id}`);
    return NextResponse.json({ success: true, message: 'Curriculum updated successfully.' });
  } catch (err: any) {
    console.error('Curriculum update error:', err);
    return NextResponse.json({ error: 'Failed to update curriculum.' }, { status: 500 });
  }
}
