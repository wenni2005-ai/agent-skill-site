import type { Metadata } from "next";
import { NewsClient } from "@/components/news-client";
import { SectionHeading } from "@/components/section-heading";
import { allNews } from "@/lib/content";

export const metadata: Metadata = {
  title: "动态资讯",
  description: "跟踪 Agent Skill 生态、Next.js 与开发者工具的动态资讯。",
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-8 px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Newsroom" title="生态动态与行业资讯" description="把内容站做成持续更新的入口，适合承接搜索流量和社区传播。" />
      <NewsClient news={allNews} />
    </section>
  );
}
