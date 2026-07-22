const staticPageRedirects = ["about", "services", "faq", "contact", "booking", "privacy"].map(
  (page) => ({ source: `/${page}.html`, destination: `/${page}`, permanent: true })
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      ...staticPageRedirects,
      { source: "/blog.html", destination: "/blog", permanent: true },
      { source: "/blog/:slug.html", destination: "/blog/:slug", permanent: true }
    ];
  }
};

module.exports = nextConfig;
