// sitemap-generator.js
const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");

async function generateSitemap() {
  const sitemap = new SitemapStream({
    hostname: "https://portfolio-anikett77.vercel.app/", // CHANGE THIS
  });

  sitemap.write({ url: "/", changefreq: "weekly", priority: 1.0 });
  sitemap.write({ url: "/about", changefreq: "monthly", priority: 0.8 });
  sitemap.write({ url: "/projects", changefreq: "weekly", priority: 0.9 });
  sitemap.write({ url: "/contact", changefreq: "yearly", priority: 0.6 });

  // OPTIONAL: your real projects only
  const projects = [
    "autoxplore",
    "netflix-clone",
    "music-player",
  ];

  projects.forEach((slug) => {
    sitemap.write({
      url: `/projects/${slug}`,
      changefreq: "monthly",
      priority: 0.7,
    });
  });

  sitemap.end();

  const sitemapXML = await streamToPromise(sitemap);
  fs.writeFileSync("./public/sitemap.xml", sitemapXML.toString());
}

generateSitemap();
