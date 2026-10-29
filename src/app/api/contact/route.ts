import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_TO = process.env.CONTACT_TO ?? "enquiries@ihe.co.zw";
const CONTACT_FROM =
  process.env.CONTACT_FROM ?? "onboarding@resend.dev";

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

type IntakeResult = {
  reference?: string;
  enquiryId?: string;
};

async function createOpsEnquiry(input: {
  name: string;
  email: string;
  title: string;
  message: string;
}): Promise<IntakeResult | null> {
  const baseUrl = process.env.OPS_INTAKE_URL?.replace(/\/$/, "");
  const apiKey = process.env.OPS_INTAKE_API_KEY;

  if (!baseUrl || !apiKey) {
    console.error("Ops intake is not configured (OPS_INTAKE_URL / OPS_INTAKE_API_KEY)");
    return null;
  }

  try {
    const res = await fetch(`${baseUrl}/api/intake/enquiry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify({
        name: input.name,
        email: input.email,
        title: input.title,
        message: input.message,
      }),
    });

    const data = (await res.json().catch(() => ({}))) as IntakeResult & {
      error?: string;
    };

    if (!res.ok) {
      console.error("Ops intake failed:", res.status, data.error ?? data);
      return null;
    }

    return {
      reference: data.reference,
      enquiryId: data.enquiryId,
    };
  } catch (err) {
    console.error("Ops intake request error:", err);
    return null;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

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
    const cleanSubject =
      typeof subject === "string" && subject.trim().length > 0
        ? subject.trim()
        : "General enquiry";
    const cleanMessage = message.trim();

    const intake = await createOpsEnquiry({
      name: cleanName,
      email: cleanEmail,
      title: cleanSubject,
      message: cleanMessage,
    });

    const staffSubject = intake?.reference
      ? `Contact form: ${cleanName} (${intake.reference})`
      : `Contact form: ${cleanName}`;

    const staffText = [
      intake?.reference ? `Ops enquiry: ${intake.reference}` : null,
      `Subject: ${cleanSubject}`,
      "",
      cleanMessage,
    ]
      .filter(Boolean)
      .join("\n");

    const { error: notifyError } = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: cleanEmail,
      subject: staffSubject,
      text: staffText,
      html: `
        <p><strong>From:</strong> ${escapeHtml(cleanName)} &lt;${escapeHtml(cleanEmail)}&gt;</p>
        <p><strong>Subject:</strong> ${escapeHtml(cleanSubject)}</p>
        ${
          intake?.reference
            ? `<p><strong>Ops enquiry:</strong> ${escapeHtml(intake.reference)}</p>`
            : ""
        }
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
      text: `Hi ${cleanName},\n\nThanks for reaching out to IHE. We've received your message and a member of our team will get back to you within one working day.\n\nFor your records, here's what you sent:\n\nSubject: ${cleanSubject}\n\n${cleanMessage}\n\n— The IHE team\nNo. 23 Lincoln Rd, L.I.S Gweru, Zimbabwe`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #18181b; max-width: 560px;">
          <p>Hi ${escapeHtml(cleanName)},</p>
          <p>Thanks for reaching out to <strong>IHE</strong>. We've received your message and a member of our team will get back to you within one working day.</p>
          <p style="color: #71717a; font-size: 14px;">For your records, here's what you sent:</p>
          <p style="color: #71717a; font-size: 14px;"><strong>Subject:</strong> ${escapeHtml(cleanSubject)}</p>
          <pre style="white-space: pre-wrap; font-family: inherit; background: #f4f4f5; border-left: 3px solid #d4d4d8; padding: 12px 16px; border-radius: 4px;">${escapeHtml(cleanMessage)}</pre>
          <p style="margin-top: 32px;">— The IHE team<br/><span style="color: #71717a; font-size: 14px;">No. 23 Lincoln Rd, L.I.S Gweru, Zimbabwe</span></p>
        </div>
      `,
    });

    if (confirmError) {
      console.error("Resend error (visitor confirmation):", confirmError);
    }

    return NextResponse.json({
      success: true,
      ...(intake?.reference ? { reference: intake.reference } : {}),
    });
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
