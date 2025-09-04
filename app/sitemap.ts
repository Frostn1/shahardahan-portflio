import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.shahardahan.com";

  // Supported languages
  const languages = ["en", "he"];

  // Define your static pages
  const pages = [
    { path: "/", priority: 1.0, changefreq: "weekly" },
    // later you can add: { path: "/about", priority: 0.9, changefreq: "monthly" }
  ];

  // Generate sitemap entries for each language
  const urls: MetadataRoute.Sitemap = [];

  pages.forEach((page) => {
    languages.forEach((lang) => {
      urls.push({
        url: `${baseUrl}/${lang}${page.path === "/" ? "" : page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changefreq as any,
        priority: page.priority,
      });
    });
  });

  return urls;
}
