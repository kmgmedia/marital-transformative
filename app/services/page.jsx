import Link from "next/link";
import { servicesFull } from "@/lib/content/services";
import ServiceCard from "@/components/ServiceCard";
import { servicesItemListJsonLd } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Our Services",
  description:
    "Comprehensive faith-based counselling services: premarital counselling, couples therapy, crisis intervention, family restoration, individual support and faith integration.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Our Services | Marital Transformative Consult",
    description:
      "Comprehensive faith-based counselling services: premarital counselling, couples therapy, crisis intervention, family restoration, individual support and faith integration.",
    url: `${SITE_URL}/services`
  },
  twitter: {
    title: "Our Services | Marital Transformative Consult",
    description:
      "Comprehensive faith-based counselling services: premarital counselling, couples therapy, crisis intervention, family restoration, individual support and faith integration."
  }
};

const steps = [
  {
    title: "Book a Free Consultation",
    desc: "Fill out our booking form or call/WhatsApp us to schedule a free 30-minute introductory consultation, no obligation."
  },
  {
    title: "Initial Assessment",
    desc: "Your counsellor conducts a thorough assessment of your situation, goals and history to design a personalised plan."
  },
  {
    title: "Counselling Sessions",
    desc: "Begin regular sessions, weekly or fortnightly, either in-person at our Lagos office or via secure online video call."
  },
  {
    title: "Growth & Follow-Up",
    desc: "Track your progress together. Celebrate breakthroughs. Receive aftercare support and resources to sustain your transformation."
  }
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesItemListJsonLd()) }}
      />

      <section className="page-hero">
        <div className="container">
          <div className="page-hero__inner">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb__sep">/</span>
              <span>Services</span>
            </div>
            <h1 className="text-white" data-animate="">Our Counselling Services</h1>
            <p className="body-l page-hero__sub" data-animate="" data-animate-delay="1">
              Professional, faith-based support at every stage of your marriage journey.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-parchment">
        <div className="container">
          <div className="grid-3 services-grid--mb64">
            {servicesFull.map((service, i) => (
              <ServiceCard service={service} animateDelay={(i % 3) + 1} key={service.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="section-header centered" data-animate="">
            <span className="section-label">The Process</span>
            <h2>How Our Counselling Works</h2>
            <p>A clear, caring journey from your first enquiry to lasting transformation.</p>
          </div>
          <div className="process-steps">
            {steps.map((step, i) => (
              <div className="process-step" data-animate="" data-animate-delay={i + 1} key={step.title}>
                <div className="process-step__num">{i + 1}</div>
                <h4 className="process-step__title">{step.title}</h4>
                <p className="process-step__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <div data-animate="">
            <h2>Not Sure Which Service Is Right for You?</h2>
            <p>Book a free consultation and we&apos;ll guide you to the right support for your situation.</p>
            <div className="actions">
              <Link href="/booking" className="btn btn-white btn-lg">Book a Free Consultation</Link>
              <Link href="/contact" className="btn btn-outline-white btn-lg">Ask a Question</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
