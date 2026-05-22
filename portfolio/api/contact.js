import { Resend } from "resend";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  const { name = "", email = "", message = "" } = request.body || {};
  const trimmedName = String(name).trim();
  const trimmedEmail = String(email).trim();
  const trimmedMessage = String(message).trim();

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return response.status(400).json({ error: "Please complete every field." });
  }

  if (!emailPattern.test(trimmedEmail)) {
    return response.status(400).json({ error: "Please enter a valid email address." });
  }

  if (!process.env.RESEND_API_KEY) {
    return response.status(500).json({ error: "Contact email is not configured yet." });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = process.env.CONTACT_TO_EMAIL || "johnjustinrl15@gmail.com";

  try {
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
      to,
      replyTo: trimmedEmail,
      subject: `Portfolio message from ${trimmedName}`,
      text: [
        `Name: ${trimmedName}`,
        `Email: ${trimmedEmail}`,
        "",
        "Message:",
        trimmedMessage,
      ].join("\n"),
    });

    return response.status(200).json({ ok: true });
  } catch (error) {
    return response.status(500).json({
      error: error?.message || "Unable to send message right now.",
    });
  }
}
