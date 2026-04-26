import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { CategoryNav } from "@/components/category-nav";
import { RecentUpdates } from "@/components/recent-updates";
import { TagCloud } from "@/components/tag-cloud";
// Newsletter disabled — no backend wired yet
// import { Newsletter } from "@/components/newsletter";
import { NewsCard } from "@/components/news-card";
import { SectionHeading } from "@/components/section-heading";
import { SkillCard } from "@/components/skill-card";
import { TutorialCard } from "@/components/tutorial-card";
import {
  allSkills,
  allTutorials,
  allNews,
  featuredNews,
  featuredSkills,
  featuredTutorials,
  trendingTags,
  skillCategories,
  getTodayCount,
  getRecentUpdates,
  getTagCloud,
} from "@/lib/content";
import { buildMetadata, jsonLdScript, siteConfig } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Agent Skill Hub | 面向 AI 开发者的技能资源站",
  description: "集中发现可复用 Agent Skills、部署教程与生态资讯，适合 AI 开发者快速搭建内容站。",
  path: "/",
  keywords: ["Agent Skills", "Skill Hub", "OpenClaw", "Next.js", "AI 开发者"],
});

const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "zh-CN",
    potentialAction: {
      "@type": "SearchAction",
      target: `${absoluteUrl("/skills")}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.organizationName,
    url: siteConfig.url,
    logo: siteConfig.organizationLogo,
    sameAs: [siteConfig.url],
  },
];

export default function HomePage() {
  const recentUpdates = getRecentUpdates(5);
  const tagCloud = getTagCloud(15);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(homeJsonLd) }}
      />
      <div className="pb-20">
        <Hero
          tags={trendingTags}
          stats={{
            skillCount: allSkills.length,
            tutorialCount: allTutorials.length,
            newsCount: allNews.length,
            todayCount: getTodayCount(),
          }}
        />

        {/* Category nav */}
        <CategoryNav categories={skillCategories} />

        {/* Recent updates — compact timeline */}
        <section className="container mx-auto mt-16 max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="最近更新"
            title="站点最新动态"
            description="Skill、教程和资讯的最近更新。"
          />
          <RecentUpdates updates={recentUpdates} />
        </section>

        {/* Featured Skills */}
        <section className="container mx-auto mt-20 max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading
              eyebrow="精选 Skill"
              title="热门可复用技能包"
              description="代表性 Skill，一行命令安装即用。"
            />
            <Link
              href="/skills"
              className="hidden text-sm text-cyan-500 hover:text-cyan-400 md:block"
            >
              查看全部
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredSkills.slice(0, 4).map((skill) => (
              <SkillCard key={skill.slug} skill={skill} />
            ))}
          </div>
        </section>

        {/* Tutorials */}
        <section className="container mx-auto mt-20 max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="教程精选"
            title="快速上手与部署指南"
            description="从安装到上线，手把手带你走。"
          />
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {featuredTutorials.slice(0, 3).map((tutorial) => (
              <TutorialCard key={tutorial.slug} tutorial={tutorial} />
            ))}
          </div>
        </section>

        {/* News */}
        <section className="container mx-auto mt-20 max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="动态追踪"
            title="Agent 生态最新资讯"
            description="追踪行业趋势，保持领先。"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredNews.slice(0, 3).map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>
        </section>

        {/* Tags */}
        <section className="container mx-auto mt-20 max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="热门标签"
            title="发现更多内容"
            description="按标签浏览，快速定位。"
          />
          <TagCloud tags={tagCloud} />
        </section>

        {/* Open Source CTA — Taxonomy style */}
        <section className="container mx-auto py-16 md:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-3xl md:text-5xl">
              Proudly Open Source
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Agent Skill Hub 是开源项目，代码托管在{" "}
              <Link
                href="https://github.com/wenni2005-ai/agent-skill-site"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                GitHub
              </Link>
              。欢迎贡献 Skill、教程和资讯。
            </p>
            <Link
              href="https://github.com/wenni2005-ai/agent-skill-site"
              target="_blank"
              rel="noreferrer"
            >
              <button className="mt-2 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent dark:border-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Star on GitHub
              </button>
            </Link>
          </div>
        </section>

        {/* Newsletter disabled */}
      </div>
    </>
  );
}
