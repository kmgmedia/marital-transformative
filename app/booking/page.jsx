import { Suspense } from "react";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Book a Session",
  description: "Book a counselling session with Marital Transformative Consult. Start with a free 30-minute consultation.",
  alternates: { canonical: `${SITE_URL}/booking` },
  openGraph: {
    title: "Book a Session | Marital Transformative Consult",
    description: "Book a counselling session with Marital Transformative Consult. Start with a free 30-minute consultation.",
    url: `${SITE_URL}/booking`
  },
  twitter: {
    title: "Book a Session | Marital Transformative Consult",
    description: "Book a counselling session with Marital Transformative Consult. Start with a free 30-minute consultation."
  }
};

export default function BookingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__inner">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb__sep">/</span>
              <span>Book a Session</span>
            </div>
            <h1 className="text-white" data-animate="">Book a Counselling Session</h1>
            <p className="body-l page-hero__sub--booking" data-animate="" data-animate-delay="1">
              Your first session is a free 30-minute consultation. No pressure, no obligation.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-parchment">
        <div className="container">
          <div className="grid-2 booking-grid">
            <div data-animate="left">
              <div className="booking-img">
                <img
                  src="https://images.unsplash.com/photo-1529519195486-16945f0fb37f?auto=format&fit=crop&w=800&h=560&q=80"
                  alt="Welcoming counselling environment"
                  loading="lazy"
                />
              </div>
              <div className="section-header">
                <span className="section-label">What to Expect</span>
                <h2>Your Journey Starts Here</h2>
                <p>We&apos;ve made getting started as simple and welcoming as possible.</p>
              </div>
              <div className="expect-list">
                <div className="expect-item">
                  <div className="expect-item__dot">1</div>
                  <p className="expect-item__text"><strong>Fill in the form</strong> on this page with your details and preferred service. We&apos;ll confirm your appointment within 24 hours.</p>
                </div>
                <div className="expect-item">
                  <div className="expect-item__dot">2</div>
                  <p className="expect-item__text"><strong>Free 30-minute consultation:</strong> meet your counsellor, share your situation, ask any questions — no commitment required.</p>
                </div>
                <div className="expect-item">
                  <div className="expect-item__dot">3</div>
                  <p className="expect-item__text"><strong>Personalised plan:</strong> if you decide to proceed, your counsellor designs a programme tailored specifically to you.</p>
                </div>
                <div className="expect-item">
                  <div className="expect-item__dot">4</div>
                  <p className="expect-item__text"><strong>Begin your sessions</strong> in-person in Lagos or via secure online video — whichever suits your schedule and location.</p>
                </div>
              </div>

              <div className="booking-quote-box">
                <p className="testimonial-card__text booking-quote-text">
                  &quot;I was nervous to reach out but from the very first call I felt safe and understood. Our
                  counsellor was warm, professional and genuinely invested in our marriage.&quot;
                </p>
                <div className="booking-quote-footer">
                  <div className="booking-quote-avatar">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="5" fill="var(--forest-mid)" /><path d="M3 21c0-6.6 4-12 9-12s9 5.4 9 12" fill="var(--forest-tint)" /></svg>
                  </div>
                  <div>
                    <div className="booking-quote-name">Adaeze I.</div>
                    <div className="booking-quote-role">New client, Couples Therapy</div>
                  </div>
                </div>
              </div>

              <div className="booking-contact-label">
                <div className="label">Prefer to call or message?</div>
                <div className="booking-contact-btns">
                  <a href="tel:+2348012345678" className="btn btn-secondary">
                    <span className="btn-icon--phone">
                      <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012.88 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                    </span>
                    Call Us
                  </a>
                  <a href="https://wa.me/2348012345678" className="btn btn-secondary btn--whatsapp" target="_blank" rel="noopener">
                    <span className="btn-icon--whatsapp">
                      <svg viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12.004 2C6.478 2 2.002 6.474 2 11.998c-.001 1.874.49 3.703 1.42 5.313L2 22l4.854-1.392c1.541.86 3.287 1.317 5.074 1.317h.004c5.523 0 9.998-4.474 10-9.997.001-2.67-1.038-5.18-2.925-7.068A9.955 9.955 0 0012.004 2z" />
                      </svg>
                    </span>
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>

            <div data-animate="" data-animate-delay="1">
              <div className="form-card form-card--panel">
                <h3 className="form-card__heading">Request Your Session</h3>
                <p className="form-card__sub">Complete the form and we&apos;ll confirm your appointment within 24 hours.</p>
                <Suspense fallback={null}>
                  <BookingForm />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
