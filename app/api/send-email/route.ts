import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { to_email, from_name, from_email, subject, message, reply_to } = body;

    // Validate required fields
    if (!from_name || !from_email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(from_email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Here you would integrate with your email service
    // For example: SendGrid, Nodemailer, Resend, etc.
    
    // Example with a hypothetical email service:
    /*
    const emailService = new EmailService(process.env.EMAIL_API_KEY);
    await emailService.send({
      to: 'joyli.rumao1425@gmail.com',
      from: from_email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${from_name}</p>
        <p><strong>Email:</strong> ${from_email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: reply_to || from_email
    });
    */

    // For now, we'll log the email data (in production, replace with actual email sending)
    console.log('Email would be sent to joyli.rumao1425@gmail.com with data:', {
      from_name,
      from_email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    // Simulate successful email sending
    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully to joyli.rumao1425@gmail.com' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
