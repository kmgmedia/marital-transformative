import Link from "next/link";
import { servicesShort } from "@/lib/content/services";
import { teamShort } from "@/lib/content/team";
import { testimonials } from "@/lib/content/testimonials";
import ServiceCard from "@/components/ServiceCard";
import TeamMemberCard from "@/components/TeamMemberCard";
import TestimonialCard from "@/components/TestimonialCard";
import NewsletterSection from "@/components/NewsletterSection";
import { localBusinessJsonLd } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Marital Transformative Consult | Faith-Based Marital Counselling in Nigeria",
  description:
    "Professional faith-based marital counselling in Nigeria. Premarital counselling, couples therapy, crisis intervention and family restoration.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Marital Transformative Consult | Faith-Based Marital Counselling in Nigeria",
    description:
      "Professional faith-based marital counselling in Nigeria. Premarital counselling, couples therapy, crisis intervention and family restoration.",
    url: SITE_URL
  },
  twitter: {
    title: "Marital Transformative Consult | Faith-Based Marital Counselling in Nigeria",
    description:
      "Professional faith-based marital counselling in Nigeria. Premarital counselling, couples therapy, crisis intervention and family restoration."
  }
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }} />

      <section className="hero">
        <div className="hero__bg hero__bg--home">
          <div className="hero__bg-pattern"></div>
        </div>
        <div className="container">
          <div className="hero__content">
            <div className="hero__label" data-animate="fade">
              <span className="hero__label-line"></span>
              <span className="hero__label-text">Faith-Based Marital Counselling</span>
            </div>
            <h1 className="display-xl text-white hero__title" data-animate="">
              Transforming Marriages,<br />Restoring Families
            </h1>
            <p className="hero__body" data-animate="" data-animate-delay="1">
              Professional counselling rooted in God&apos;s wisdom — helping couples rebuild trust, deepen intimacy,
              and build marriages that last a lifetime.
            </p>
            <div className="hero__actions" data-animate="" data-animate-delay="2">
              <Link href="/booking" className="btn btn-white btn-lg">Book a Free Consultation</Link>
              <Link href="/services" className="btn btn-outline-white btn-lg">Explore Services</Link>
            </div>
            <div className="hero__trust" data-animate="" data-animate-delay="3">
              <span className="hero__trust-item">
                <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                Certified Counsellors
              </span>
              <span className="hero__trust-item">
                <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                100% Confidential
              </span>
              <span className="hero__trust-item">
                <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                In-Person &amp; Online Sessions
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section--sm bg-gold-tint">
        <div className="container text-center">
          <p className="body-l text-forest intro-quote" data-animate="">
            <em>&quot;A cord of three strands is not quickly broken.&quot; — Ecclesiastes 4:12</em>
          </p>
          <div className="intro-pillars" data-animate="" data-animate-delay="1">
            <span className="label text-forest intro-pill">✦ Faith-Driven</span>
            <span className="label text-forest intro-pill">✦ Professional</span>
            <span className="label text-forest intro-pill">✦ Confidential</span>
            <span className="label text-forest intro-pill">✦ Compassionate</span>
          </div>
        </div>
      </section>

      <section className="section bg-parchment">
        <div className="container">
          <div className="section-header centered" data-animate="">
            <span className="section-label">What We Offer</span>
            <h2>Our Counselling Services</h2>
            <p>Comprehensive, faith-based support at every stage of your marriage journey.</p>
          </div>
          <div className="grid-3 services-grid--mb">
            {servicesShort.map((service, i) => (
              <ServiceCard service={service} animateDelay={(i % 3) + 1} key={service.title} />
            ))}
          </div>
          <div className="text-center" data-animate="">
            <Link href="/services" className="btn btn-secondary btn-lg">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="stats-bar">
        <div className="container">
          <div className="stat-block" data-animate="">
            <div className="stat-number" data-count="100" data-suffix="%">0%</div>
            <div className="stat-block__line"></div>
            <div className="stat-block__label">Confidential Sessions</div>
          </div>
          <div className="stat-block" data-animate="" data-animate-delay="1">
            <div className="stat-number" data-count="6">0</div>
            <div className="stat-block__line"></div>
            <div className="stat-block__label">Counselling Services</div>
          </div>
          <div className="stat-block" data-animate="" data-animate-delay="2">
            <div className="stat-number" data-count="9" data-suffix="+">0+</div>
            <div className="stat-block__line"></div>
            <div className="stat-block__label">Years of Experience</div>
          </div>
          <div className="stat-block" data-animate="" data-animate-delay="3">
            <div className="stat-number stat-number--sm">Faith-Driven</div>
            <div className="stat-block__line"></div>
            <div className="stat-block__label">Approach &amp; Method</div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid-2">
            <div data-animate="left">
              <div className="section-header">
                <span className="section-label">Why Choose Us</span>
                <h2>A Safe Space for Every Marriage</h2>
                <p>
                  We combine professional counselling expertise with deep faith to create a healing environment
                  where marriages are not just saved — they are transformed.
                </p>
              </div>
              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-item__icon">
                    <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="var(--forest-mid)" strokeWidth="1.5" /></svg>
                  </div>
                  <div>
                    <div className="feature-item__title">Certified &amp; Trained Counsellors</div>
                    <div className="feature-item__desc">All our counsellors hold recognised professional qualifications in marital and family therapy.</div>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-item__icon">
                    <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" fill="none" stroke="var(--forest-mid)" strokeWidth="1.5" /></svg>
                  </div>
                  <div>
                    <div className="feature-item__title">Faith-Integrated Approach</div>
                    <div className="feature-item__desc">We weave biblical principles throughout every session, helping couples align spiritually as well as relationally.</div>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-item__icon">
                    <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" fill="none" stroke="var(--forest-mid)" strokeWidth="1.5" /></svg>
                  </div>
                  <div>
                    <div className="feature-item__title">Complete Confidentiality</div>
                    <div className="feature-item__desc">Everything shared in sessions stays private. Your trust and privacy are our highest priority.</div>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-item__icon">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" fill="none" stroke="var(--forest-mid)" strokeWidth="1.5" /></svg>
                  </div>
                  <div>
                    <div className="feature-item__title">Flexible In-Person &amp; Online Sessions</div>
                    <div className="feature-item__desc">Access counselling from anywhere in Nigeria or abroad through our secure online video sessions.</div>
                  </div>
                </div>
              </div>
            </div>
            <div data-animate="" data-animate-delay="1">
              <div className="img-ring-wrapper">
                <div className="img-frame img-frame--tall img-frame--forest-bg">
                  <img
                    src="https://images.unsplash.com/photo-1573497161161-c03ab3627e24?auto=format&fit=crop&w=800&q=80"
                    alt="Marital counselling session"
                    loading="lazy"
                  />
                  <div className="img-overlay">
                    <div>
                      <p className="quote-text quote-text--white">
                        &quot;We don&apos;t give up on marriages. We believe every couple deserves a chance at
                        restoration.&quot;
                      </p>
                      <p className="caption caption--white-faded">— Founder, Marital Transformative Consult</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-parchment">
        <div className="container">
          <div className="section-header centered" data-animate="">
            <span className="section-label">Our Counsellors</span>
            <h2>Meet the Team</h2>
            <p>Certified professionals dedicated to transforming marriages through faith and expertise.</p>
          </div>
          <div className="grid-4">
            {teamShort.map((member, i) => (
              <TeamMemberCard member={member} animateDelay={i + 1} key={member.name} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="section-header centered" data-animate="">
            <span className="section-label">Testimonials</span>
            <h2>Marriages Transformed</h2>
            <p>Hear from couples who walked through our doors and found restoration.</p>
          </div>
          <div className="grid-3">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard testimonial={testimonial} animateDelay={i + 1} key={testimonial.name} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <div data-animate="">
            <h2>Your Marriage Is Worth Fighting For</h2>
            <p>Take the first step today. Book a free 30-minute consultation with one of our counsellors.</p>
            <div className="actions">
              <Link href="/booking" className="btn btn-white btn-lg">Book a Free Consultation</Link>
              <Link href="/contact" className="btn btn-outline-white btn-lg">Contact Us First</Link>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection
        heading="Marriage Insights, Delivered Weekly"
        body="Get practical tips, devotionals, and encouragement for your marriage — straight to your inbox."
        note="We respect your privacy. Unsubscribe at any time."
      />
    </>
  );
}
