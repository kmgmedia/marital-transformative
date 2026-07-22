import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
  robots: { index: false, follow: false }
};

export default function NotFound() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__inner">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb__sep">/</span>
              <span>Page Not Found</span>
            </div>
            <h1 className="text-white error-heading">404</h1>
            <h2 className="error-subheading">Page Not Found</h2>
            <p className="body-l error-body">
              The page you are looking for may have been moved, deleted, or may never have existed.
            </p>
            <div className="error-actions">
              <Link href="/" className="btn btn-white btn-lg">Go to Homepage</Link>
              <Link href="/contact" className="btn btn-outline-white btn-lg">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-parchment">
        <div className="container">
          <div className="section-header centered" data-animate="">
            <span className="section-label">You might be looking for</span>
            <h2>Our Main Pages</h2>
          </div>
          <div className="grid-3 error-nav-grid">
            <Link href="/services" className="error-nav-link">
              <div className="service-card error-nav-card" data-animate="" data-animate-delay="1">
                <div className="service-card__body error-nav-card__body">
                  <h3 className="service-card__title">Our Services</h3>
                  <p className="service-card__desc">Browse all 6 faith-based counselling services we offer.</p>
                </div>
              </div>
            </Link>
            <Link href="/booking" className="error-nav-link">
              <div className="service-card error-nav-card" data-animate="" data-animate-delay="2">
                <div className="service-card__body error-nav-card__body">
                  <h3 className="service-card__title">Book a Session</h3>
                  <p className="service-card__desc">Request your free 30-minute consultation today.</p>
                </div>
              </div>
            </Link>
            <Link href="/faq" className="error-nav-link">
              <div className="service-card error-nav-card" data-animate="" data-animate-delay="3">
                <div className="service-card__body error-nav-card__body">
                  <h3 className="service-card__title">FAQ</h3>
                  <p className="service-card__desc">Answers to common questions about our counselling process.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
