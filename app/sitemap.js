import { fetchPosts } from "@/lib/sanity";
import { SITE_URL, SITE_LAST_MODIFIED } from "@/lib/site";

const STATIC_PAGES = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/booking", changeFrequency: "monthly", priority: 0.9 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 }
];

export default async function sitemap() {
  const posts = await fetchPosts();

  const staticEntries = STATIC_PAGES.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: SITE_LAST_MODIFIED,
    changeFrequency: page.changeFrequency,
    priority: page.priority
  }));

  const postEntries = posts.map((post) => ({
    url: `${SITE_URL}${post.url}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.6
  }));

  return [...staticEntries, ...postEntries];
}
