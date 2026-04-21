import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { NewsCard } from "@/components/news-card";
import { SectionHeading } from "@/components/section-heading";
import { SkillCard } from "@/components/skill-card";
import { TutorialCard } from "@/components/tutorial-card";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { featuredNews, featuredSkills, featuredTutorials, trendingTags } from "@/lib/content";

export default function HomePage() {
  return (
    <div className="pb-20">
      <Hero tags={trendingTags} />

      <section className="mx-auto mt-16 grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {[
          { title: "Skill 下载", desc: "技能包列表、详情、GitHub 链接与下载入口。", href: "/skills" },
          { title: "部署教程", desc: "覆盖从本地开发到 Vercel 部署的完整流程。", href: "/tutorials" },
          { title: "动态资讯", desc: "追踪 Agent 生态、框架和社区趋势。", href: "/news" },
        ].map((item) => (
          <Card key={item.title}>
            <Badge>{item.title}</Badge>
            <h3 className="mt-4 text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.desc}</p>
            <Link href={item.href} className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-500 hover:text-cyan-400">
              进入板块 <ArrowRight className="h-4 w-4" />
            </Link>
          </Card>
        ))}
      </section>

      <section className="mx-auto mt-20 max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading eyebrow="精选 Skill" title="热门可复用技能包" description="适合做站点展示的代表性 Skill，支持详情页、标签和平台展示。" />
          <Link href="/skills" className="hidden text-sm text-cyan-500 hover:text-cyan-400 md:block">查看全部</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredSkills.slice(0, 4).map((skill) => <SkillCard key={skill.slug} skill={skill} />)}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="教程精选" title="快速上手与部署指南" description="正文支持 Markdown 和代码高亮，后续升级到 MDX 也很顺。" />
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {featuredTutorials.concat(featuredTutorials.length < 3 ? [] : []).slice(0, 3).map((tutorial) => <TutorialCard key={tutorial.slug} tutorial={tutorial} />)}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="动态追踪" title="Agent 生态最新资讯" description="适合作为内容增长入口，补强站点持续更新感。" />
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredNews.slice(0, 3).map((item) => <NewsCard key={item.slug} item={item} />)}
        </div>
      </section>
    </div>
  );
}
