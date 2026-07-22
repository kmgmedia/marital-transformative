"use client";

import { useRef, useState } from "react";
import Recaptcha, { recaptchaOk, resetRecaptcha } from "./Recaptcha";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [recaptchaError, setRecaptchaError] = useState(false);
  const [generalError, setGeneralError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function clearError(field) {
    setErrors((prev) => {
      if (!(field in prev)) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = formRef.current;
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries());

    const nextErrors = {};
    ["name", "email", "subject", "message"].forEach((field) => {
      if (!values[field]?.trim()) {
        nextErrors[field] = field === "email" ? "Please enter your email." : "This field is required.";
      }
    });
    if (values.email?.trim() && !EMAIL_RE.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    const recaptchaValid = recaptchaOk(form);
    setRecaptchaError(!recaptchaValid);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length || !recaptchaValid) return;

    setSubmitting(true);
    setGeneralError(false);
    try {
      const recaptchaToken = window.grecaptcha ? window.grecaptcha.getResponse() : undefined;
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, recaptchaToken })
      });
      if (!res.ok) throw new Error("submission failed");
      setSuccess(true);
    } catch (err) {
      setGeneralError(true);
      resetRecaptcha(form);
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="form-success visible" id="contactSuccess">
        <h4>Message Sent!</h4>
        <p>Thank you for reaching out. We will respond to your message within 24 hours on business days. If you need urgent help, please WhatsApp us directly.</p>
      </div>
    );
  }

  return (
    <form id="contactForm" noValidate ref={formRef} onSubmit={handleSubmit}>
      <input type="text" name="_gotcha" className="form-honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" aria-label="Leave this field blank" />
      <div className="form-group">
        <label className="form-label" htmlFor="contactName">Full Name <span>*</span></label>
        <input
          type="text"
          id="contactName"
          name="name"
          className={`form-input${errors.name ? " error" : ""}`}
          placeholder="Your full name"
          autoComplete="name"
          onChange={() => clearError("name")}
        />
        {errors.name && <span className="form-error visible">{errors.name}</span>}
      </div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="contactEmail">Email Address <span>*</span></label>
          <input
            type="email"
            id="contactEmail"
            name="email"
            className={`form-input${errors.email ? " error" : ""}`}
            placeholder="you@email.com"
            autoComplete="email"
            onChange={() => clearError("email")}
          />
          {errors.email && <span className="form-error visible">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="contactPhone">Phone Number</label>
          <input type="tel" id="contactPhone" name="phone" className="form-input" placeholder="+234 800 000 0000" autoComplete="tel" />
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="contactSubject">Subject <span>*</span></label>
        <input
          type="text"
          id="contactSubject"
          name="subject"
          className={`form-input${errors.subject ? " error" : ""}`}
          placeholder="e.g. Enquiry about couples therapy"
          onChange={() => clearError("subject")}
        />
        {errors.subject && <span className="form-error visible">{errors.subject}</span>}
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="contactMessage">Message <span>*</span></label>
        <textarea
          id="contactMessage"
          name="message"
          className={`form-textarea${errors.message ? " error" : ""}`}
          placeholder="Tell us how we can help you…"
          rows={5}
          onChange={() => clearError("message")}
        />
        {errors.message && <span className="form-error visible">{errors.message}</span>}
      </div>
      <Recaptcha errorId="contactRecaptchaError" errorMessage={recaptchaError ? "Please confirm you're not a robot." : ""} />
      <button type="submit" className="btn btn-primary btn-full btn-lg form-card__btn-mt" disabled={submitting}>
        {submitting ? "Sending…" : "Send Message"}
      </button>
      {generalError && (
        <p className="form-error form-error--general visible">
          Something went wrong sending your message. Please try again or WhatsApp us directly.
        </p>
      )}
    </form>
  );
}
