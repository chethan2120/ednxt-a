import { NextResponse } from 'next/server';
import { getCurrentSession } from '@/lib/auth';
import { getEnquiryById, updateEnquiryStatus, deleteEnquiry, logActivity } from '@/lib/db';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = getCurrentSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const id = parseInt(params.id, 10);
  const enquiry = getEnquiryById(id);
  if (!enquiry) {
    return NextResponse.json({ error: 'Enquiry not found.' }, { status: 404 });
  }

  return NextResponse.json({ enquiry });
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = getCurrentSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const id = parseInt(params.id, 10);
    const { status, internal_notes } = await request.json();

    const validStatuses = ['New', 'Contacted', 'Trial Scheduled', 'Converted', 'Closed'];
    if (status && !validStatuses.includes(status)) {
      return NextResponse.json({ error: 'Invalid status value.' }, { status: 400 });
    }

    updateEnquiryStatus(id, status, internal_notes);
    logActivity(
      session.email,
      'UPDATE_ENQUIRY',
      'enquiry',
      String(id),
      `Updated enquiry status to "${status}"`
    );

    return NextResponse.json({ success: true, message: 'Enquiry updated successfully.' });
  } catch (err: any) {
    console.error('Enquiry update error:', err);
    return NextResponse.json({ error: 'Failed to update enquiry.' }, { status: 500 });
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
    deleteEnquiry(id);
    logActivity(session.email, 'DELETE_ENQUIRY', 'enquiry', String(id), `Deleted enquiry ID: ${id}`);

    return NextResponse.json({ success: true, message: 'Enquiry deleted successfully.' });
  } catch (err: any) {
    console.error('Enquiry delete error:', err);
    return NextResponse.json({ error: 'Failed to delete enquiry.' }, { status: 500 });
  }
}
