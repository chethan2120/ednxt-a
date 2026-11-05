import { NextResponse } from 'next/server';
import { createEnquiry } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      parent_name,
      email,
      phone,
      student_name,
      grade,
      curriculum,
      interested_stream,
      preferred_contact_method,
      message
    } = body;

    // Field Validations
    if (!parent_name || !parent_name.trim()) {
      return NextResponse.json({ error: 'Parent name is required.' }, { status: 400 });
    }
    if (!email || !email.includes('@') || !email.includes('.')) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }
    if (!student_name || !student_name.trim()) {
      return NextResponse.json({ error: 'Student name is required.' }, { status: 400 });
    }
    if (!grade) {
      return NextResponse.json({ error: 'Please select a grade.' }, { status: 400 });
    }
    if (!curriculum) {
      return NextResponse.json({ error: 'Please select a curriculum (CBSE or British).' }, { status: 400 });
    }
    if (!interested_stream) {
      return NextResponse.json({ error: 'Please select an interested stream.' }, { status: 400 });
    }

    // Save to real database
    const enquiryId = createEnquiry({
      type: 'free_trial',
      name: parent_name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : '',
      student_name: student_name.trim(),
      grade,
      curriculum,
      interested_stream,
      preferred_contact_method: preferred_contact_method || 'WhatsApp',
      subject: `Free Trial Booking - ${interested_stream} (${grade})`,
      message: message ? message.trim() : ''
    });

    return NextResponse.json({
      success: true,
      message: 'Free trial request successfully submitted! Our academic advisor will contact you within 24 hours.',
      enquiryId
    });
  } catch (err: any) {
    console.error('Error in free-trial API:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred while booking your free trial. Please try again.' },
      { status: 500 }
    );
  }
}
