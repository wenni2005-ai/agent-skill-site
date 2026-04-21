import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero({ tags }: { tags: string[] }) {
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
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => <Badge key={tag}>#{tag}</Badge>)}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 p-5">
              <p className="text-sm text-slate-600 dark:text-slate-300">已收录 Skills</p>
              <p className="mt-2 text-4xl font-semibold text-slate-950 dark:text-white">12+</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950 p-5 text-white dark:bg-slate-900">
              <p className="text-sm text-slate-300">内容形态</p>
              <p className="mt-2 text-lg font-semibold">下载 + 教程 + 资讯</p>
              <p className="mt-2 text-sm text-slate-400">MVP 阶段用本地 JSON 驱动，部署到 Vercel 几乎零成本。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
