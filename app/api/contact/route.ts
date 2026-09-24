import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, company, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "ZARVON Website <onboarding@resend.dev>",
      to: ["info@zarvonglobal.com"],
      subject: `New Website Enquiry from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Company: ${company || "Not provided"}

Message:
${message}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);

    return Response.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}