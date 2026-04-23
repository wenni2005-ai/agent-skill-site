import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HeroSearch } from "@/components/hero-search";

export type HeroStats = {
  skillCount: number;
  tutorialCount: number;
  newsCount: number;
  todayCount: number;
};

export function Hero({ tags, stats }: { tags: string[]; stats: HeroStats }) {
  return (
    <section className="relative overflow-hidden px-4 pt-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200/80 bg-white/80 px-6 py-12 shadow-[0_30px_120px_-40px_rgba(34,211,238,0.45)] backdrop-blur dark:border-white/10 dark:bg-white/5 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div className="space-y-6">
            <Badge className="gap-2"><Sparkles className="h-3.5 w-3.5" /> Agent Skill Ecosystem</Badge>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                一个给 AI 开发者用的 Agent Skill 资源站
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
                集中收录可下载 Skill、部署教程和行业动态，帮你更快搭出可复用、可部署、可扩展的 Agent 能力库。
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/skills"><Button>开始找 Skill <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <Link href="/tutorials"><Button variant="outline">查看部署教程</Button></Link>
            </div>
            <HeroSearch />
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => <Badge key={tag}>#{tag}</Badge>)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 p-5">
              <p className="text-sm text-slate-600 dark:text-slate-300">Skills</p>
              <p className="mt-2 text-4xl font-semibold text-slate-950 dark:text-white">{stats.skillCount}</p>
            </div>
            <div className="rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-400/20 to-purple-500/10 p-5">
              <p className="text-sm text-slate-600 dark:text-slate-300">教程</p>
              <p className="mt-2 text-4xl font-semibold text-slate-950 dark:text-white">{stats.tutorialCount}</p>
            </div>
            <div className="rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-400/20 to-orange-500/10 p-5">
              <p className="text-sm text-slate-600 dark:text-slate-300">资讯</p>
              <p className="mt-2 text-4xl font-semibold text-slate-950 dark:text-white">{stats.newsCount}</p>
            </div>
            <div className="rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/20 to-green-500/10 p-5">
              <p className="text-sm text-slate-600 dark:text-slate-300">今日更新</p>
              <p className="mt-2 text-4xl font-semibold text-slate-950 dark:text-white">{stats.todayCount}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
