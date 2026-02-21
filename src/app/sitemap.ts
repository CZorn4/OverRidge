import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.overridge.com";

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/about-us`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/clients`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/community`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/resources`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.7 },
  ];
}
