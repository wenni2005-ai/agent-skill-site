import type { MetadataRoute } from "next";
import { allNews, allSkills, allTutorials } from "@/lib/content";
import { absoluteUrl } from "@/lib/utils";

const staticRoutes = ["", "/skills", "/tutorials", "/news"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  const skillEntries: MetadataRoute.Sitemap = allSkills.map((item) => ({
    url: absoluteUrl(`/skills/${item.slug}`),
    lastModified: new Date(item.createdAt),
    changeFrequency: "monthly",
    priority: item.featured ? 0.9 : 0.7,
  }));

  const tutorialEntries: MetadataRoute.Sitemap = allTutorials.map((item) => ({
    url: absoluteUrl(`/tutorials/${item.slug}`),
    lastModified: new Date(item.createdAt),
    changeFrequency: "monthly",
    priority: item.featured ? 0.9 : 0.7,
  }));

  const newsEntries: MetadataRoute.Sitemap = allNews.map((item) => ({
    url: absoluteUrl(`/news/${item.slug}`),
    lastModified: new Date(item.publishedAt),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticEntries, ...skillEntries, ...tutorialEntries, ...newsEntries];
}
