import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { TutorialsClient } from "@/components/tutorials-client";
import { allTutorials } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "部署教程",
  description: "查看 Agent Skill 站点的搭建、内容组织与 Vercel 部署教程。",
  path: "/tutorials",
  keywords: ["Agent Skill 教程", "Next.js 部署", "Vercel", "How-to"],
});

export default function TutorialsPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-8 px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Tutorials" title="部署与运营教程" description="图文教程列表页，支持搜索、标签过滤，以及详情页代码高亮。" />
      <TutorialsClient tutorials={allTutorials} />
    </section>
  );
}
