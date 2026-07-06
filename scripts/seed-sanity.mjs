import { readdirSync, readFileSync } from "node:fs";
import { join, basename } from "node:path";
import matter from "gray-matter";
import { createClient } from "@sanity/client";

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || "production";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !token) {
  console.error("SANITY_PROJECT_ID and SANITY_WRITE_TOKEN must be set (see .env.example). Aborting.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false
});

const postsDir = new URL("../posts", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

const files = readdirSync(postsDir).filter((f) => f.endsWith(".md"));

for (const file of files) {
  const slug = basename(file, ".md");
  const raw = readFileSync(join(postsDir, file), "utf8");
  const { data, content } = matter(raw);

  const doc = {
    _id: `post-${slug}`,
    _type: "post",
    title: data.title,
    slug: { _type: "slug", current: slug },
    description: data.description,
    author: data.author,
    authorRole: data.authorRole,
    authorBio: data.authorBio,
    authorPhoto: data.authorPhoto,
    date: new Date(data.date).toISOString(),
    readTime: data.readTime,
    category: data.category,
    categoryLabel: data.categoryLabel,
    heroImage: data.heroImage,
    heroImageAlt: data.heroImageAlt,
    body: content.trim()
  };

  await client.createOrReplace(doc);
  console.log(`Seeded: ${data.title}`);
}

console.log(`Done — seeded ${files.length} post(s) into dataset "${dataset}".`);
