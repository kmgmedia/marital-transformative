import { verifyRecaptcha, isHoneypotTripped, sendFormEmail } from "@/lib/formHandler";

const REQUIRED_FIELDS = ["name", "email", "subject", "message"];

export async function POST(request) {
  const fields = await request.json();

  if (isHoneypotTripped(fields)) {
    // Don't tip off bots — pretend it worked, but never relay anywhere.
    return Response.json({ ok: true });
  }

  const missing = REQUIRED_FIELDS.filter((key) => !fields[key] || !String(fields[key]).trim());
  if (missing.length) {
    return Response.json({ ok: false, error: "missing_fields", fields: missing }, { status: 400 });
  }

  const recaptchaValid = await verifyRecaptcha(fields.recaptchaToken);
  if (!recaptchaValid) {
    return Response.json({ ok: false, error: "recaptcha_failed" }, { status: 400 });
  }

  try {
    await sendFormEmail(fields, "New message from website contact form");
  } catch (err) {
    return Response.json({ ok: false, error: "submission_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
