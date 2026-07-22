import { createClient } from "@sanity/client";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt({ html: false, linkify: true });

function getClient() {
  if (!process.env.SANITY_PROJECT_ID) return null;
  return createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET || "production",
    apiVersion: "2024-01-01",
    useCdn: true
  });
}

function mapPost(doc) {
  return {
    slug: doc.slug.current,
    url: `/blog/${doc.slug.current}`,
    date: new Date(doc.date),
    title: doc.title,
    description: doc.description,
    author: doc.author,
    authorRole: doc.authorRole,
    authorBio: doc.authorBio,
    authorPhoto: doc.authorPhoto,
    readTime: doc.readTime,
    category: doc.category,
    categoryLabel: doc.categoryLabel,
    heroImage: doc.heroImage,
    heroImageAlt: doc.heroImageAlt,
    bodyHtml: md.render(doc.body || "")
  };
}

export async function fetchPosts() {
  const client = getClient();
  if (!client) {
    console.warn("SANITY_PROJECT_ID is not set — blog posts will be empty. See .env.example.");
    return [];
  }
  const docs = await client.fetch('*[_type == "post"] | order(date desc)');
  return docs.map(mapPost);
}

export async function fetchPostBySlug(slug) {
  const client = getClient();
  if (!client) return null;
  const doc = await client.fetch('*[_type == "post" && slug.current == $slug][0]', { slug });
  return doc ? mapPost(doc) : null;
}

export function getRelatedPosts(posts, currentSlug, n = 3) {
  return posts.filter((p) => p.slug !== currentSlug).slice(0, n);
}

export function readableDate(date) {
  return new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export function isoDate(date) {
  return new Date(date).toISOString().split("T")[0];
}
