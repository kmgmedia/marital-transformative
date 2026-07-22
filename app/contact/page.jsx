import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Marital Transformative Consult. Call, WhatsApp, email us or fill in the contact form — we're here to help.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact Us | Marital Transformative Consult",
    description: "Get in touch with Marital Transformative Consult. Call, WhatsApp, email us or fill in the contact form — we're here to help.",
    url: `${SITE_URL}/contact`
  },
  twitter: {
    title: "Contact Us | Marital Transformative Consult",
    description: "Get in touch with Marital Transformative Consult. Call, WhatsApp, email us or fill in the contact form — we're here to help."
  }
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__inner">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb__sep">/</span>
              <span>Contact Us</span>
            </div>
            <h1 className="text-white" data-animate="">Contact Us</h1>
            <p className="body-l page-hero__sub--contact" data-animate="" data-animate-delay="1">
              We are here for you. Reach out by any channel that works best for you.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-parchment">
        <div className="container">
          <div className="grid-2">
            <div data-animate="left">
              <div className="section-header">
                <span className="section-label">Get in Touch</span>
                <h2>We&apos;d Love to Hear From You</h2>
                <p>Whether you have a question, need more information about our services, or are ready to take the first step — we are here.</p>
              </div>
              <div className="contact-info">
                <div className="contact-row">
                  <div className="contact-row__icon">
                    <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012.88 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" fill="none" stroke="var(--forest-mid)" strokeWidth="1.5" /></svg>
                  </div>
                  <div>
                    <div className="contact-row__label">Phone</div>
                    <div className="contact-row__value"><a href="tel:+2348012345678">+234 801 234 5678</a></div>
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-row__icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12.004 2C6.478 2 2.002 6.474 2 11.998c-.001 1.874.49 3.703 1.42 5.313L2 22l4.854-1.392c1.541.86 3.287 1.317 5.074 1.317h.004c5.523 0 9.998-4.474 10-9.997.001-2.67-1.038-5.18-2.925-7.068A9.955 9.955 0 0012.004 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="contact-row__label">WhatsApp</div>
                    <div className="contact-row__value"><a href="https://wa.me/2348012345678" target="_blank" rel="noopener">+234 801 234 5678</a></div>
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-row__icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="var(--forest-mid)" strokeWidth="1.5" />
                      <polyline points="22,6 12,13 2,6" fill="none" stroke="var(--forest-mid)" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="contact-row__label">Email</div>
                    <div className="contact-row__value"><a href="mailto:info@maritaltransformative.org">info@maritaltransformative.org</a></div>
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-row__icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" fill="none" stroke="var(--forest-mid)" strokeWidth="1.5" />
                      <circle cx="12" cy="10" r="3" fill="none" stroke="var(--forest-mid)" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="contact-row__label">Location</div>
                    <div className="contact-row__value">Lagos, Nigeria (In-person &amp; Online)</div>
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-row__icon">
                    <svg viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" fill="none" stroke="var(--forest-mid)" strokeWidth="1.5" />
                      <polyline points="12 6 12 12 16 14" fill="none" stroke="var(--forest-mid)" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="contact-row__label">Office Hours</div>
                    <div className="contact-row__value">Mon – Fri: 9am – 6pm<br />Saturday: 10am – 3pm</div>
                  </div>
                </div>
              </div>
              <div className="contact-social-label">
                <div className="contact-row__label">Follow Us</div>
                <div className="social-row">
                  <a href="#" className="social-btn" aria-label="Facebook">
                    <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                  </a>
                  <a href="#" className="social-btn" aria-label="Instagram">
                    <svg viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                    </svg>
                  </a>
                  <a href="#" className="social-btn" aria-label="YouTube">
                    <svg viewBox="0 0 24 24">
                      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div data-animate="" data-animate-delay="1">
              <div className="form-card form-card--panel">
                <h3 className="form-card__heading">Send Us a Message</h3>
                <p className="form-card__sub">We typically respond within 24 hours on business days.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <div data-animate="">
            <h2>Ready to Book a Session?</h2>
            <p>Skip the message and book your free 30-minute consultation directly.</p>
            <div className="actions">
              <Link href="/booking" className="btn btn-white btn-lg">Book a Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
