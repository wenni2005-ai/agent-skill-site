import skills from "@/data/skills.json";
import tutorials from "@/data/tutorials.json";
import news from "@/data/news.json";
import type { News, Skill, Tutorial } from "@/types";

export const allSkills = skills as Skill[];
export const allTutorials = tutorials as Tutorial[];
export const allNews = news as News[];

export const featuredSkills = allSkills.filter((item) => item.featured);
export const featuredTutorials = allTutorials.filter((item) => item.featured);
export const featuredNews = [...allNews].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

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

/** 计算今日更新数量 */
export function getTodayCount(): number {
  const today = new Date().toISOString().slice(0, 10);
  const skillToday = allSkills.filter((s) => s.createdAt?.slice(0, 10) === today).length;
  const tutorialToday = allTutorials.filter((t) => t.createdAt?.slice(0, 10) === today).length;
  const newsToday = allNews.filter((n) => n.publishedAt?.slice(0, 10) === today).length;
  return skillToday + tutorialToday + newsToday;
}

/** 最近更新时间线（混合 skills + tutorials + news） */
export type RecentUpdate = {
  slug: string;
  title: string;
  type: "skill" | "tutorial" | "news";
  date: string;
  href: string;
};

export function getRecentUpdates(limit = 5): RecentUpdate[] {
  const items: RecentUpdate[] = [
    ...allSkills.map((s) => ({
      slug: s.slug,
      title: s.title,
      type: "skill" as const,
      date: s.createdAt,
      href: `/skills/${s.slug}`,
    })),
    ...allTutorials.map((t) => ({
      slug: t.slug,
      title: t.title,
      type: "tutorial" as const,
      date: t.createdAt,
      href: `/tutorials/${t.slug}`,
    })),
    ...allNews.map((n) => ({
      slug: n.slug,
      title: n.title,
      type: "news" as const,
      date: n.publishedAt,
      href: `/news/${n.slug}`,
    })),
  ];

  return items
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

/** 标签云（按频率排序） */
export type TagItem = { name: string; count: number };

export function getTagCloud(limit = 15): TagItem[] {
  const freq = new Map<string, number>();

  for (const s of allSkills) {
    for (const t of s.tags) freq.set(t, (freq.get(t) || 0) + 1);
  }
  for (const t of allTutorials) {
    for (const tag of t.tags) freq.set(tag, (freq.get(tag) || 0) + 1);
  }
  for (const n of allNews) {
    for (const tag of n.tags) freq.set(tag, (freq.get(tag) || 0) + 1);
  }

  return [...freq.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}
