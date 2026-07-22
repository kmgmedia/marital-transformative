"use client";

import { useRef, useState } from "react";

export default function NewsletterForm() {
  const inputRef = useRef(null);
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const value = inputRef.current?.value || "";
    if (!value.includes("@")) return;
    setSubscribed(true);
    if (inputRef.current) inputRef.current.value = "";
    setTimeout(() => setSubscribed(false), 3000);
  }

  return (
    <form className="newsletter__form" noValidate onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="email"
        className="newsletter__input"
        placeholder="Your email address"
        aria-label="Email address"
      />
      <button
        type="submit"
        className="newsletter__btn"
        style={subscribed ? { background: "var(--forest-light)" } : undefined}
      >
        {subscribed ? "Subscribed ✓" : "Subscribe"}
      </button>
    </form>
  );
}
