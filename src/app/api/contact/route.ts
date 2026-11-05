import { NextResponse } from 'next/server';
import { createEnquiry } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Field Validations
    if (!name || !name.trim()) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    }
    if (!email || !email.includes('@') || !email.includes('.')) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }
    if (!subject || !subject.trim()) {
      return NextResponse.json({ error: 'Subject is required.' }, { status: 400 });
    }
    if (!message || message.trim().length < 5) {
      return NextResponse.json({ error: 'Message must be at least 5 characters long.' }, { status: 400 });
    }

    // Save to real database
    const enquiryId = createEnquiry({
      type: 'contact',
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : '',
      subject: subject.trim(),
      message: message.trim(),
      preferred_contact_method: 'Email'
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you for reaching out! Your message has been received and our team will get back to you shortly.',
      enquiryId
    });
  } catch (err: any) {
    console.error('Error in contact API:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred while sending your message. Please try again.' },
      { status: 500 }
    );
  }
}
