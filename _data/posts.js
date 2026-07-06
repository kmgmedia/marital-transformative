const { createClient } = require("@sanity/client");
const MarkdownIt = require("markdown-it");

const md = new MarkdownIt({ html: false, linkify: true });

module.exports = async function () {
  if (!process.env.SANITY_PROJECT_ID) {
    console.warn("SANITY_PROJECT_ID is not set — blog posts will be empty. See .env.example.");
    return [];
  }

  const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET || "production",
    apiVersion: "2024-01-01",
    useCdn: true
  });

  const docs = await client.fetch('*[_type == "post"] | order(date desc)');

  return docs.map((doc) => ({
    url: `/blog/${doc.slug.current}.html`,
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
  }));
};
