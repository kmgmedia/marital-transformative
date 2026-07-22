import { SITE_URL, SITE_NAME } from "@/lib/site";
import { servicesFull } from "@/lib/content/services";
import { faqGroups } from "@/lib/content/faq";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description:
      "Professional faith-based marital counselling in Nigeria. Premarital counselling, couples therapy, crisis intervention and family restoration.",
    url: SITE_URL,
    telephone: "+2348012345678",
    email: "info@maritaltransformative.org",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG"
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00"
      },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "15:00" }
    ],
    logo: `${SITE_URL}/images/logo.png`,
    sameAs: []
  };
}

export function servicesItemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Marital Counselling Services",
    url: `${SITE_URL}/services`,
    itemListElement: servicesFull.map((service, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: service.title,
      url: `${SITE_URL}/booking?service=${service.slug}`
    }))
  };
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGroups.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.html ? item.a.replace(/<[^>]+>/g, "") : item.a
        }
      }))
    )
  };
}

export function articleJsonLd(post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.png` }
    },
    datePublished: new Date(post.date).toISOString().split("T")[0],
    url: `${SITE_URL}/blog/${post.slug}`
  };
}
