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

export async function postToFormspree(fields, subject) {
  const formId = process.env.FORMSPREE_FORM_ID;
  if (!formId) {
    throw new Error("FORMSPREE_FORM_ID is not set — see .env.example.");
  }

  const body = new URLSearchParams();
  Object.entries(fields).forEach(([key, value]) => {
    if (key === "recaptchaToken" || key === "_gotcha") return;
    if (value !== undefined && value !== null) body.append(key, value);
  });
  body.append("_subject", subject);

  const res = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/x-www-form-urlencoded" },
    body
  });
  if (!res.ok) throw new Error("Formspree submission failed");
}
