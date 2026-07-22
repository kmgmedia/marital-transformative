"use client";

import Script from "next/script";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export function RecaptchaScript() {
  if (!SITE_KEY) return null;
  return <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />;
}

export default function Recaptcha({ errorId, errorMessage }) {
  if (!SITE_KEY) return null;
  return (
    <div className="form-group">
      <div className="g-recaptcha" data-sitekey={SITE_KEY}></div>
      <span className={`form-error${errorMessage ? " visible" : ""}`} id={errorId}>
        {errorMessage}
      </span>
    </div>
  );
}

export function recaptchaOk(form) {
  const widget = form.querySelector(".g-recaptcha");
  if (!widget) return true;
  return !!(window.grecaptcha && window.grecaptcha.getResponse().length);
}

export function resetRecaptcha(form) {
  const widget = form.querySelector(".g-recaptcha");
  if (widget && window.grecaptcha) window.grecaptcha.reset();
}
