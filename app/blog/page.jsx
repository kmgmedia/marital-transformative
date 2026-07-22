import Link from "next/link";
import { fetchPosts } from "@/lib/sanity";
import BlogFilter from "@/components/BlogFilter";
import NewsletterSection from "@/components/NewsletterSection";
import { SITE_URL } from "@/lib/site";

export const revalidate = 3600;

export const metadata = {
  title: "Blog",
  description: "Marriage insights, biblical wisdom and practical tips from the Marital Transformative Consult team.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Blog | Marital Transformative Consult",
    description: "Marriage insights, biblical wisdom and practical tips from the Marital Transformative Consult team.",
    url: `${SITE_URL}/blog`
  },
  twitter: {
    title: "Blog | Marital Transformative Consult",
    description: "Marriage insights, biblical wisdom and practical tips from the Marital Transformative Consult team."
  }
};

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__inner">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb__sep">/</span>
              <span>Blog</span>
            </div>
            <h1 className="text-white" data-animate="">Marriage Insights &amp; Resources</h1>
            <p className="body-l page-hero__sub--blog" data-animate="" data-animate-delay="1">
              Practical wisdom, biblical encouragement and expert guidance for every stage of your marriage.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-parchment">
        <div className="container">
          <BlogFilter posts={posts} />
        </div>
      </section>

      <NewsletterSection
        heading="Never Miss an Article"
        body="Subscribe to receive our latest marriage insights and resources straight to your inbox."
        note="Weekly emails. No spam. Unsubscribe anytime."
      />
    </>
  );
}
