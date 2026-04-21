import type { Metadata } from "next";
import { SkillsClient } from "@/components/skills-client";
import { SectionHeading } from "@/components/section-heading";
import { allSkills, skillCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Skill 下载",
  description: "浏览可下载的 Agent Skill，支持搜索、分类和标签筛选。",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-8 px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Skill Library" title="可下载的 Agent Skills" description="MVP 阶段使用本地 JSON 数据，先把检索体验、详情页和 SEO 打好基础。" />
      <SkillsClient skills={allSkills} categories={skillCategories} />
    </section>
  );
}
