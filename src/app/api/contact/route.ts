import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { fullName, email, phone, stage, howDidYouHear, message } = await req.json();

  const { error } = await resend.emails.send({
    from: "OverRidge Contact Form <contact@noreply.overridge.com>",
    to: "Dane@overridge.com",
    reply_to: email,
    subject: `New Contact Form Submission — ${fullName}`,
    html: `
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Stage:</strong> ${stage}</p>
      <p><strong>How they heard about us:</strong> ${howDidYouHear}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
