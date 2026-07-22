"use client";

import Link from "next/link";
import { useState } from "react";

const CATEGORIES = [
  { key: "all", label: "All Articles" },
  { key: "marriage", label: "Marriage" },
  { key: "communication", label: "Communication" },
  { key: "healing", label: "Healing & Restoration" },
  { key: "family", label: "Family" }
];

export default function BlogFilter({ posts }) {
  const [active, setActive] = useState("all");
  const visible = active === "all" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <div className="filter-bar" data-animate="">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            type="button"
            className={`filter-btn${active === cat.key ? " active" : ""}`}
            onClick={() => setActive(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid-3">
        {visible.map((post, i) => (
          <div className="blog-card" data-animate="" data-animate-delay={(i % 3) + 1} key={post.slug}>
            <div className="blog-card__img">
              <img src={post.heroImage} alt={post.heroImageAlt} loading="lazy" />
            </div>
            <div className="blog-card__body">
              <span className="blog-card__tag">{post.categoryLabel}</span>
              <h3 className="blog-card__title"><Link href={post.url}>{post.title}</Link></h3>
              <p className="blog-card__excerpt">{post.description}</p>
              <div className="blog-card__meta">
                <span><span className="blog-card__author">{post.author}</span> · {post.readTime} min read</span>
                <Link href={post.url} className="blog-card__read-link">Read</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
