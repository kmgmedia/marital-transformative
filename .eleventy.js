require("dotenv").config();

module.exports = function (eleventyConfig) {

  eleventyConfig.setTemplateFormats(["njk"]);

  // Static pages are never templated -- copied through byte-for-byte.
  ["about.html", "services.html", "faq.html", "index.html",
   "contact.html", "booking.html", "privacy.html", "404.html"
  ].forEach(page => eleventyConfig.addPassthroughCopy(page));

  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy("manifest.webmanifest");
  eleventyConfig.addPassthroughCopy("robots.txt");

  eleventyConfig.addFilter("readableDate", (d) =>
    new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
  );

  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString().split("T")[0]);

  eleventyConfig.addFilter("getRelatedPosts", (posts, currentUrl, n = 3) =>
    posts.filter((p) => p.url !== currentUrl).slice(0, n)
  );

  return {
    dir: { input: ".", output: "_site" }
  };
};
