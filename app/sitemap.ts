import type { MetadataRoute } from "next";
import { allNews, allSkills, allTutorials } from "@/lib/content";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/skills", "/tutorials", "/news"].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
  }));

  const skillRoutes = allSkills.map((item) => ({ url: absoluteUrl(`/skills/${item.slug}`), lastModified: new Date(item.createdAt) }));
  const tutorialRoutes = allTutorials.map((item) => ({ url: absoluteUrl(`/tutorials/${item.slug}`), lastModified: new Date(item.createdAt) }));
  const newsRoutes = allNews.map((item) => ({ url: absoluteUrl(`/news/${item.slug}`), lastModified: new Date(item.createdAt) }));

  return [...staticRoutes, ...skillRoutes, ...tutorialRoutes, ...newsRoutes];
}
