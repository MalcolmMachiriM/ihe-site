import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_TO = process.env.CONTACT_TO ?? "enquiries@ihe.co.zw";
const CONTACT_FROM =
  process.env.CONTACT_FROM ?? "onboarding@resend.dev";

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }
    if (!email || typeof email !== "string" || !isValidEmail(email.trim())) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }
    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 503 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    const { error: notifyError } = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: cleanEmail,
      subject: `Contact form: ${cleanName}`,
      text: cleanMessage,
      html: `
        <p><strong>From:</strong> ${escapeHtml(cleanName)} &lt;${escapeHtml(cleanEmail)}&gt;</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space: pre-wrap; font-family: inherit;">${escapeHtml(cleanMessage)}</pre>
      `,
    });

    if (notifyError) {
      console.error("Resend error (owner notification):", notifyError);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    const { error: confirmError } = await resend.emails.send({
      from: CONTACT_FROM,
      to: cleanEmail,
      replyTo: CONTACT_TO,
      subject: "We received your message — IHE",
      text: `Hi ${cleanName},\n\nThanks for reaching out to IHE. We've received your message and a member of our team will get back to you within one working day.\n\nFor your records, here's what you sent:\n\n${cleanMessage}\n\n— The IHE team\nNo. 23 Lincoln Rd, L.I.S Gweru, Zimbabwe`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #18181b; max-width: 560px;">
          <p>Hi ${escapeHtml(cleanName)},</p>
          <p>Thanks for reaching out to <strong>IHE</strong>. We've received your message and a member of our team will get back to you within one working day.</p>
          <p style="color: #71717a; font-size: 14px;">For your records, here's what you sent:</p>
          <pre style="white-space: pre-wrap; font-family: inherit; background: #f4f4f5; border-left: 3px solid #d4d4d8; padding: 12px 16px; border-radius: 4px;">${escapeHtml(cleanMessage)}</pre>
          <p style="margin-top: 32px;">— The IHE team<br/><span style="color: #71717a; font-size: 14px;">No. 23 Lincoln Rd, L.I.S Gweru, Zimbabwe</span></p>
        </div>
      `,
    });

    if (confirmError) {
      console.error("Resend error (visitor confirmation):", confirmError);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
