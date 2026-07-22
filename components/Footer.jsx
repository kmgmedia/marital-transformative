import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div>
              <div className="footer__logo">
                <img
                  src="/images/logo.png"
                  alt="Marital Transformative Consult"
                  style={{ height: 56, width: "auto", display: "block", filter: "brightness(0) invert(1)" }}
                />
              </div>
              <p className="footer__about">
                Faith-based professional marital counselling helping couples rebuild, strengthen, and
                transform their marriages through God&apos;s wisdom.
              </p>
              <div className="footer__social">
                <a href="#" className="footer__social-btn" aria-label="Facebook">
                  <svg viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="#" className="footer__social-btn" aria-label="Instagram">
                  <svg viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="white" strokeWidth="1.5" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2" />
                  </svg>
                </a>
                <a href="#" className="footer__social-btn" aria-label="YouTube">
                  <svg viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="var(--forest-deep)" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <div className="footer__heading">Quick Links</div>
              <ul className="footer__links">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Our Services</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <div className="footer__heading">Our Services</div>
              <ul className="footer__links">
                <li><Link href="/booking?service=Premarital+Counselling">Premarital Counselling</Link></li>
                <li><Link href="/booking?service=Couples+Therapy">Couples Therapy</Link></li>
                <li><Link href="/booking?service=Crisis+Intervention">Crisis Intervention</Link></li>
                <li><Link href="/booking?service=Family+Restoration">Family Restoration</Link></li>
                <li><Link href="/booking?service=Individual+Support">Individual Support</Link></li>
                <li><Link href="/booking?service=Faith+Integration">Faith Integration</Link></li>
              </ul>
            </div>
            <div>
              <div className="footer__heading">Contact Us</div>
              <div className="footer__contact-row">
                <div className="footer__contact-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.95 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012.88 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div className="footer__contact-text">
                  <strong>Phone / WhatsApp</strong>
                  <a href="tel:+2348012345678" style={{ color: "rgba(255,255,255,.7)" }}>+234 801 234 5678</a>
                </div>
              </div>
              <div className="footer__contact-row">
                <div className="footer__contact-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="footer__contact-text">
                  <strong>Email</strong>
                  <a href="mailto:info@maritaltransformative.org" style={{ color: "rgba(255,255,255,.7)" }}>info@maritaltransformative.org</a>
                </div>
              </div>
              <div className="footer__contact-row">
                <div className="footer__contact-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="footer__contact-text">
                  <strong>Location</strong>
                  Lagos, Nigeria (In-person &amp; Online)
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <p>&copy; {year} Marital Transformative Consult. All rights reserved.</p>
            <div className="footer__bottom-links">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/privacy#terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/2348012345678"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12.004 2C6.478 2 2.002 6.474 2 11.998c-.001 1.874.49 3.703 1.42 5.313L2 22l4.854-1.392c1.541.86 3.287 1.317 5.074 1.317h.004c5.523 0 9.998-4.474 10-9.997.001-2.67-1.038-5.18-2.925-7.068A9.955 9.955 0 0012.004 2z" />
        </svg>
      </a>
    </>
  );
}
