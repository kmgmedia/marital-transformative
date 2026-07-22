"use client";

import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Recaptcha, { recaptchaOk, resetRecaptcha } from "./Recaptcha";
import BookingCalendar from "./BookingCalendar";
import TimeSlotPicker from "./TimeSlotPicker";

const SERVICE_OPTIONS = [
  "Premarital Counselling",
  "Couples Therapy",
  "Crisis Intervention",
  "Family Restoration",
  "Individual Support",
  "Faith Integration",
  "Not Sure"
];

export default function BookingForm() {
  const formRef = useRef(null);
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [errors, setErrors] = useState({});
  const [consentError, setConsentError] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState(false);
  const [generalError, setGeneralError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [bookDate, setBookDate] = useState("");
  const [bookTime, setBookTime] = useState("");

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
    values.consent = form.elements.consentCheck.checked;
    values.bookDate = bookDate;
    values.bookTime = bookTime;

    const nextErrors = {};
    ["firstName", "lastName", "email", "phone", "service"].forEach((field) => {
      if (!values[field]?.trim()) nextErrors[field] = true;
    });
    setConsentError(!values.consent);

    const recaptchaValid = recaptchaOk(form);
    setRecaptchaError(!recaptchaValid);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length || !values.consent || !recaptchaValid) return;

    setSubmitting(true);
    setGeneralError(false);
    try {
      const recaptchaToken = window.grecaptcha ? window.grecaptcha.getResponse() : undefined;
      const res = await fetch("/api/booking", {
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
      <div className="form-success visible" id="bookingSuccess">
        <h4>Booking Request Received!</h4>
        <p>Thank you! One of our counsellors will contact you within 24 hours to confirm your appointment. If you need to speak to us sooner, please WhatsApp us on +234 801 234 5678.</p>
      </div>
    );
  }

  return (
    <form id="bookingForm" noValidate ref={formRef} onSubmit={handleSubmit}>
      <input type="text" name="_gotcha" className="form-honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" aria-label="Leave this field blank" />
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="bookFirstName">First Name <span>*</span></label>
          <input type="text" id="bookFirstName" name="firstName" className={`form-input${errors.firstName ? " error" : ""}`} placeholder="First name" autoComplete="given-name" onChange={() => clearError("firstName")} />
          {errors.firstName && <span className="form-error visible">Required.</span>}
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="bookLastName">Last Name <span>*</span></label>
          <input type="text" id="bookLastName" name="lastName" className={`form-input${errors.lastName ? " error" : ""}`} placeholder="Last name" autoComplete="family-name" onChange={() => clearError("lastName")} />
          {errors.lastName && <span className="form-error visible">Required.</span>}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="bookEmail">Email Address <span>*</span></label>
          <input type="email" id="bookEmail" name="email" className={`form-input${errors.email ? " error" : ""}`} placeholder="you@email.com" autoComplete="email" onChange={() => clearError("email")} />
          {errors.email && <span className="form-error visible">Required.</span>}
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="bookPhone">Phone / WhatsApp <span>*</span></label>
          <input type="tel" id="bookPhone" name="phone" className={`form-input${errors.phone ? " error" : ""}`} placeholder="+234 800 000 0000" autoComplete="tel" onChange={() => clearError("phone")} />
          {errors.phone && <span className="form-error visible">Required.</span>}
        </div>
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="serviceSelect">Service Required <span>*</span></label>
        <select
          id="serviceSelect"
          name="service"
          className="form-select"
          defaultValue={SERVICE_OPTIONS.includes(preselectedService) ? preselectedService : ""}
          onChange={() => clearError("service")}
        >
          <option value="">Select a service…</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option value={opt} key={opt}>{opt === "Not Sure" ? "Not Sure (Discuss in Consultation)" : opt}</option>
          ))}
        </select>
        {errors.service && <span className="form-error visible">Please select a service.</span>}
      </div>
      <div className="form-group">
        <label className="form-label">Session Format</label>
        <div className="radio-group">
          <label className="radio-option">
            <input type="radio" name="sessionFormat" value="in-person" defaultChecked /> In-Person (Lagos)
          </label>
          <label className="radio-option">
            <input type="radio" name="sessionFormat" value="online" /> Online (Video Call)
          </label>
          <label className="radio-option">
            <input type="radio" name="sessionFormat" value="no-preference" /> No Preference
          </label>
        </div>
      </div>
      <div className="form-group">
        <label className="form-label">Preferred Date</label>
        <BookingCalendar onSelectDate={(iso) => setBookDate(iso)} />
      </div>
      <div className="form-group">
        <label className="form-label">Preferred Time</label>
        <TimeSlotPicker onSelectTime={(time) => setBookTime(time)} />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="bookNotes">Brief Background (Optional)</label>
        <textarea id="bookNotes" name="notes" className="form-textarea" rows={3} placeholder="Briefly describe what brings you to us, so we can match you with the right counsellor…" />
      </div>
      <div className="form-group form-group--consent">
        <label className="checkbox-option">
          <input type="checkbox" id="consentCheck" name="consentCheck" onChange={() => setConsentError(false)} />
          I understand that all sessions are completely confidential and I consent to be contacted by Marital Transformative Consult to confirm my appointment.
        </label>
        {consentError && <span className="form-error consent-error--indent visible">Please confirm your consent to proceed.</span>}
      </div>
      <Recaptcha errorId="bookingRecaptchaError" errorMessage={recaptchaError ? "Please confirm you're not a robot." : ""} />
      <button type="submit" className="btn btn-primary btn-full btn-lg" disabled={submitting}>
        {submitting ? "Sending…" : "Request My Session"}
      </button>
      {generalError && (
        <p className="form-error form-error--general visible">
          Something went wrong sending your request. Please try again or WhatsApp us directly.
        </p>
      )}
    </form>
  );
}
