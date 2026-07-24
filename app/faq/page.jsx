import Link from "next/link";
import { faqGroups } from "@/lib/content/faq";
import FaqAccordion from "@/components/FaqAccordion";
import { faqPageJsonLd } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/site";

export const metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about our faith-based marital counselling services, booking process, confidentiality and what to expect.",
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: "Frequently Asked Questions | Marital Transformative Consult",
    description:
      "Answers to common questions about our faith-based marital counselling services, booking process, confidentiality and what to expect.",
    url: `${SITE_URL}/faq`
  },
  twitter: {
    title: "Frequently Asked Questions | Marital Transformative Consult",
    description:
      "Answers to common questions about our faith-based marital counselling services, booking process, confidentiality and what to expect."
  }
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd()) }} />

      <section className="page-hero">
        <div className="container">
          <div className="page-hero__inner">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb__sep">/</span>
              <span>FAQ</span>
            </div>
            <h1 className="text-white" data-animate="">Frequently Asked Questions</h1>
            <p className="body-l page-hero__sub--faq" data-animate="" data-animate-delay="1">
              Everything you need to know before you book. Can&apos;t find your question? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-parchment">
        <div className="container faq-container">
          <FaqAccordion groups={faqGroups} />

          <div className="faq-cta" data-animate="">
            <h3 className="faq-cta__h3">Still Have Questions?</h3>
            <p className="faq-cta__p">Our team is happy to answer any question you have before you book. Reach out; we&apos;re here for you.</p>
            <div className="faq-cta__actions">
              <Link href="/contact" className="btn btn-white">Send Us a Message</Link>
              <a href="https://wa.me/2348012345678" className="btn btn-outline-white" target="_blank" rel="noopener">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
