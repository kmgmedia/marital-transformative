import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchPosts, fetchPostBySlug, getRelatedPosts, readableDate } from "@/lib/sanity";
import { articleJsonLd } from "@/lib/jsonld";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await fetchPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${SITE_URL}${post.url}` },
    openGraph: {
      type: "article",
      title: `${post.title} | ${SITE_NAME}`,
      description: post.description,
      url: `${SITE_URL}${post.url}`,
      images: [post.heroImage]
    },
    twitter: {
      title: `${post.title} | ${SITE_NAME}`,
      description: post.description,
      images: [post.heroImage]
    }
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([fetchPostBySlug(slug), fetchPosts()]);
  if (!post) notFound();

  const related = getRelatedPosts(allPosts, post.slug, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(post)) }} />

      <section className="page-hero page-hero--post">
        <div className="container">
          <div className="page-hero__inner">
            <div className="breadcrumb">
              <Link href="/">Home</Link>
              <span className="breadcrumb__sep">/</span>
              <Link href="/blog">Blog</Link>
              <span className="breadcrumb__sep">/</span>
              <span>{post.title}</span>
            </div>
            <span className="blog-card__tag post-hero-tag">{post.categoryLabel}</span>
            <h1 className="text-white post-hero-title" data-animate="">{post.title}</h1>
            <div className="post-meta" data-animate="" data-animate-delay="1">
              <div className="post-meta__author">
                <div className="post-meta__avatar">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="5" fill="rgba(255,255,255,.6)" /><path d="M3 21c0-6.6 4-12 9-12s9 5.4 9 12" fill="rgba(255,255,255,.3)" /></svg>
                </div>
                <span className="post-meta__name">{post.author}</span>
              </div>
              <span className="post-meta__sep">·</span>
              <span className="post-meta__date">{readableDate(post.date)}</span>
              <span className="post-meta__sep">·</span>
              <span className="post-meta__read">{post.readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-parchment">
        <div className="container">
          <div className="post-body" data-animate="">
            <div className="post-hero-img">
              <img src={post.heroImage} alt={post.heroImageAlt} loading="lazy" />
            </div>

            <div dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />

            <div className="author-card">
              <div className="author-card__photo author-card__photo--img">
                <img src={post.authorPhoto} alt={post.author} loading="lazy" />
              </div>
              <div>
                <div className="author-card__name">{post.author}</div>
                <div className="author-card__role">{post.authorRole}</div>
                <p className="author-card__bio">{post.authorBio}</p>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="related-articles" data-animate="">
              <h3 className="related-articles__heading">Related Articles</h3>
              <div className="grid-3 related-grid">
                {related.map((rel) => (
                  <div className="blog-card" key={rel.slug}>
                    <div className="blog-card__img blog-card__img--sm">
                      <img src={rel.heroImage} alt={rel.heroImageAlt} loading="lazy" />
                    </div>
                    <div className="blog-card__body">
                      <span className="blog-card__tag">{rel.categoryLabel}</span>
                      <h4 className="blog-card__title blog-card__title--sm"><Link href={rel.url}>{rel.title}</Link></h4>
                      <Link href={rel.url} className="blog-card__read-link">Read Article</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <div data-animate="">
            <h2>Is Your Marriage Going Through a Crisis?</h2>
            <p>You don&apos;t have to navigate this alone. Our counsellors are here to help you find a way forward.</p>
            <div className="actions">
              <Link href="/booking" className="btn btn-white btn-lg">Book a Consultation</Link>
              <Link href="/contact" className="btn btn-outline-white btn-lg">Talk to Us First</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
