import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSearch } from "@/components/hero-search";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type HeroStats = {
  skillCount: number;
  tutorialCount: number;
  newsCount: number;
  todayCount: number;
};

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 fill-current text-cyan-500">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Skill 下载",
    description: "68+ 可复用 Agent 技能包，一行命令安装，覆盖搜索、自动化、内容生产等场景。",
    href: "/skills",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 fill-current text-violet-500">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="none" stroke="currentColor" strokeWidth="2" /><polyline points="14 2 14 8 20 8" fill="none" stroke="currentColor" strokeWidth="2" /><line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" /><line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "部署教程",
    description: "从本地开发到 Vercel 上线，手把手教你搭起自己的 Agent Skill 站点。",
    href: "/tutorials",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 fill-current text-amber-500">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" /><line x1="12" y1="16" x2="12" y2="12" stroke="currentColor" strokeWidth="2" /><line x1="12" y1="8" x2="12.01" y2="8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "动态资讯",
    description: "追踪 Agent 生态、框架更新和社区趋势，不落人后。",
    href: "/news",
  },
];

const stats = [
  { label: "Skills", key: "skillCount" as const, color: "from-cyan-400 to-blue-500" },
  { label: "教程", key: "tutorialCount" as const, color: "from-violet-400 to-purple-500" },
  { label: "资讯", key: "newsCount" as const, color: "from-amber-400 to-orange-500" },
  { label: "今日更新", key: "todayCount" as const, color: "from-emerald-400 to-green-500" },
];

export function Hero({ tags, stats: heroStats }: { tags: string[]; stats: HeroStats }) {
  return (
    <>
      {/* Hero — Taxonomy style: centered, large heading, clean */}
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-24">
        <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8">
          <Badge className="gap-2 rounded-2xl px-4 py-1.5 text-sm font-medium bg-slate-100 border-slate-200/80 text-slate-700 dark:bg-white/5 dark:border-white/10 dark:text-slate-300">
            🧩 Agent Skill Ecosystem
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            AI 开发者的{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Skill 资源站
            </span>
          </h1>

          <p className="max-w-[42rem] text-base leading-8 text-muted-foreground sm:text-xl sm:leading-8">
            集中收录可下载 Skill、部署教程和行业动态。
            <br className="hidden sm:block" />
            帮你更快搭出可复用、可部署、可扩展的 Agent 能力库。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/skills">
              <Button className="gap-2 px-6 py-3 text-base">
                开始找 Skill <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/tutorials">
              <Button variant="outline" className="px-6 py-3 text-base">
                查看部署教程
              </Button>
            </Link>
          </div>

          <HeroSearch />

          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {tags.slice(0, 8).map((tag) => (
              <Badge key={tag} className="cursor-default border-slate-200 bg-transparent text-slate-600 dark:border-white/10 dark:text-slate-400">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div
            key={s.key}
            className={`rounded-2xl border bg-gradient-to-br p-6 ${s.color} border-white/10 bg-white/5 dark:border-white/10`}
          >
            <p className="text-sm text-slate-600 dark:text-slate-300">{s.label}</p>
            <p className="mt-2 text-4xl font-bold text-slate-950 dark:text-white">
              {heroStats[s.key]}
            </p>
          </div>
        ))}
      </section>

      {/* Features — Taxonomy style: bordered cards with icons */}
      <section className="container mx-auto mt-20 space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-3xl md:text-5xl">
            一站式 Agent 技能生态
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Skill 下载、部署教程、行业资讯，三合一。不用东找西找，来这里就够了。
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {features.map((f) => (
            <Link
              key={f.title}
              href={f.href}
              className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-shadow hover:shadow-md"
            >
              <div className="flex h-[220px] flex-col justify-between rounded-md p-6">
                <div>{f.icon}</div>
                <div className="space-y-2">
                  <h3 className="font-bold">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
