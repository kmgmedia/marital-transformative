import Link from "next/link";
import { teamFull } from "@/lib/content/team";
import TeamMemberCard from "@/components/TeamMemberCard";
import NewsletterSection from "@/components/NewsletterSection";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Marital Transformative Consult — our mission, vision, values and the team behind Nigeria's trusted faith-based marital counselling service.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About Us | Marital Transformative Consult",
    description:
      "Learn about Marital Transformative Consult — our mission, vision, values and the team behind Nigeria's trusted faith-based marital counselling service.",
    url: `${SITE_URL}/about`
  },
  twitter: {
    title: "About Us | Marital Transformative Consult",
    description:
      "Learn about Marital Transformative Consult — our mission, vision, values and the team behind Nigeria's trusted faith-based marital counselling service."
  }
};

const values = [
  {
    name: "Faith",
    desc: "We ground every session in God's Word, believing that spiritual wisdom is foundational to lasting marriage transformation.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="var(--forest-mid)" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: "Compassion",
    desc: "We approach every couple without judgement, meeting them in their pain with warmth, empathy and genuine care.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path
          d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
          fill="none"
          stroke="var(--forest-mid)"
          strokeWidth="1.5"
        />
      </svg>
    )
  },
  {
    name: "Confidentiality",
    desc: "Everything shared in our sessions stays private. Your dignity and trust are our highest responsibility.",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" fill="none" stroke="var(--forest-mid)" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: "Excellence",
    desc: "We maintain the highest professional standards, continuously learning and improving to give couples the best possible care.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          fill="none"
          stroke="var(--forest-mid)"
          strokeWidth="1.5"
        />
      </svg>
    )
  },
  {
    name: "Partnership",
    desc: "We walk alongside couples as partners in their journey, not as authorities over them. Their growth is our shared victory.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" fill="none" stroke="var(--forest-mid)" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: "Transformation",
    desc: "We are not satisfied with temporary fixes. We pursue deep, lasting change that shapes marriages for generations.",
    icon: (
      <svg viewBox="0 0 24 24">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" fill="none" stroke="var(--forest-mid)" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: "Inclusivity",
    desc: "We welcome couples from all backgrounds and stages of marriage without prejudice or partiality.",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" fill="none" stroke="var(--forest-mid)" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: "Integrity",
    desc: "We practise what we preach. Our counsellors lead with honesty, accountability and moral uprightness.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" fill="none" stroke="var(--forest-mid)" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: "Hope",
    desc: "We never give up on a marriage. We carry hope for couples when they cannot carry it themselves.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M4.93 4.93l14.14 14.14" fill="none" stroke="var(--forest-mid)" strokeWidth="1.5" />
      </svg>
    )
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__inner">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb__sep">/</span>
              <span>About Us</span>
            </div>
            <h1 className="text-white" data-animate="">About Marital Transformative Consult</h1>
            <p className="body-l page-hero__sub" data-animate="" data-animate-delay="1">
              We are passionate believers in the sanctity and transformative power of marriage — and we are here to
              help yours flourish.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="grid-2">
            <div data-animate="left">
              <div className="section-header">
                <span className="section-label">Our Story</span>
                <h2>Born from a Passion for Restored Marriages</h2>
              </div>
              <p className="body-l about-intro__body-l">
                Marital Transformative Consult was founded with one conviction: no marriage is beyond God&apos;s
                power to restore.
              </p>
              <p className="about-intro__p">
                For over nine years, we have walked alongside couples at every stage — from those preparing for
                marriage to those on the brink of divorce — providing professional, faith-rooted counselling that
                produces lasting transformation.
              </p>
              <p className="about-intro__p--last">
                Our counsellors are not just professionals; they are people who have witnessed the miraculous
                restoration of marriages and are deeply committed to seeing yours thrive.
              </p>
            </div>
            <div data-animate="" data-animate-delay="1">
              <div className="about-story-img">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&h=600&q=80"
                  alt="Couple in a counselling session"
                  loading="lazy"
                />
              </div>
              <blockquote className="about-blockquote">
                &quot;We believe marriage is a divine covenant — not a contract to be discarded, but a promise
                worth every effort to keep and honour.&quot;
                <footer className="about-blockquote__footer">— Founder&apos;s Note</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-parchment">
        <div className="container">
          <div className="section-header centered" data-animate="">
            <span className="section-label">Purpose</span>
            <h2>Mission &amp; Vision</h2>
          </div>
          <div className="grid-2 mission-vision-grid">
            <div className="mission-card" data-animate="">
              <div className="mission-card__icon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div className="label mission-card__label">Our Mission</div>
              <h3 className="mission-card__h3">Transforming Marriages Through Faith &amp; Professional Care</h3>
              <p className="mission-card__p">
                To provide compassionate, professional, and faith-based marital counselling that empowers couples
                to overcome challenges, deepen their connection, and build marriages that glorify God and impact
                generations.
              </p>
            </div>
            <div className="vision-card" data-animate="" data-animate-delay="1">
              <div className="vision-card__icon">
                <svg viewBox="0 0 24 24">
                  <path d="M1 6l11-4 11 4v6c0 5.55-4.68 10.74-11 12C5.68 22.74 1 17.55 1 12V6z" />
                </svg>
              </div>
              <div className="label vision-card__label">Our Vision</div>
              <h3 className="vision-card__h3">A Nigeria Where Families Thrive</h3>
              <p className="vision-card__p">
                To be Nigeria&apos;s most trusted faith-based marital counselling organisation — one that raises a
                generation of strong, covenant-honouring marriages that transform communities and leave a godly
                legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="section-header centered" data-animate="">
            <span className="section-label">What We Stand For</span>
            <h2>Our Core Values</h2>
            <p>Everything we do is shaped by these principles.</p>
          </div>
          <div className="values-grid">
            {values.map((value, i) => (
              <div className="value-card" data-animate="" data-animate-delay={(i % 3) + 1} key={value.name}>
                <div className="value-card__icon">{value.icon}</div>
                <div className="value-card__name">{value.name}</div>
                <p className="value-card__desc">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-parchment">
        <div className="container">
          <div className="section-header centered" data-animate="">
            <span className="section-label">Our Team</span>
            <h2>The People Behind the Transformation</h2>
            <p>Certified, experienced, and passionate about your marriage.</p>
          </div>
          <div className="grid-4">
            {teamFull.map((member, i) => (
              <TeamMemberCard member={member} animateDelay={i + 1} key={member.name} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <div data-animate="">
            <h2>Ready to Begin Your Journey?</h2>
            <p>Take the first step toward a transformed marriage. Our team is ready and waiting to help you.</p>
            <div className="actions">
              <Link href="/booking" className="btn btn-white btn-lg">Book a Consultation</Link>
              <Link href="/services" className="btn btn-outline-white btn-lg">View Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      <NewsletterSection
        heading="Marriage Insights, Delivered Weekly"
        body="Practical tips, devotionals and encouragement for your marriage — delivered to your inbox."
        note="We respect your privacy. Unsubscribe at any time."
      />
    </>
  );
}
