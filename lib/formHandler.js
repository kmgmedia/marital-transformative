import { Resend } from "resend";

export async function verifyRecaptcha(token) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return true; // reCAPTCHA not configured — nothing to verify against
  if (!token) return false;

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token })
  });
  const data = await res.json();
  return data.success === true;
}

export function isHoneypotTripped(fields) {
  return Boolean(fields._gotcha && fields._gotcha.trim().length > 0);
}

function fieldLabel(key) {
  return key.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/^./, (c) => c.toUpperCase());
}

function fieldsToHtml(fields) {
  const rows = Object.entries(fields)
    .filter(([key, value]) => key !== "recaptchaToken" && key !== "_gotcha" && value !== undefined && value !== null && value !== "")
    .map(
      ([key, value]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top;">${fieldLabel(key)}</td><td style="padding:6px 12px;">${String(value).replace(/\n/g, "<br>")}</td></tr>`
    )
    .join("");
  return `<table cellspacing="0" cellpadding="0">${rows}</table>`;
}

export async function sendFormEmail(fields, subject) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set — see .env.example.");
  }
  const to = process.env.CONTACT_TO_EMAIL;
  if (!to) {
    throw new Error("CONTACT_TO_EMAIL is not set — see .env.example.");
  }
  const from = process.env.RESEND_FROM_EMAIL || "Marital Transformative Consult <no-reply@maritaltransformative.org>";
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: fields.email,
    subject,
    html: fieldsToHtml(fields)
  });
  if (error) throw new Error(error.message || "Resend submission failed");
}
