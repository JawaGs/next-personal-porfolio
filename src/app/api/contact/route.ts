import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    if (!email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Basic sanitization
    const safeEmail = String(email).slice(0, 254);
    const safeSubject = String(subject).slice(0, 200);
    const safeMessage = String(message).slice(0, 5000);

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "jose.alfredo.valor@gmail.com",
      replyTo: safeEmail,
      subject: `[Portfolio] ${safeSubject}`,
      text: `From: ${safeEmail}\n\n${safeMessage}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#6366f1">New message from your portfolio</h2>
          <p><strong>From:</strong> ${safeEmail}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <hr style="border-color:#e5e7eb"/>
          <p style="white-space:pre-wrap">${safeMessage}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
