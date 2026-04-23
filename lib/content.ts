import skills from "@/data/skills.json";
import tutorials from "@/data/tutorials.json";
import news from "@/data/news.json";
import type { News, Skill, Tutorial } from "@/types";

export const allSkills = skills as Skill[];
export const allTutorials = tutorials as Tutorial[];
export const allNews = news as News[];

export const featuredSkills = allSkills.filter((item) => item.featured);
export const featuredTutorials = allTutorials.filter((item) => item.featured);
export const featuredNews = [...allNews].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

export const skillCategories = [...new Set(allSkills.map((item) => item.category))];
export const trendingTags = [...new Set(allSkills.flatMap((item) => item.tags))].slice(0, 8);

export function getSkillBySlug(slug: string) {
  return allSkills.find((item) => item.slug === slug);
}

export function getTutorialBySlug(slug: string) {
  return allTutorials.find((item) => item.slug === slug);
}

export function getNewsBySlug(slug: string) {
  return allNews.find((item) => item.slug === slug);
}
