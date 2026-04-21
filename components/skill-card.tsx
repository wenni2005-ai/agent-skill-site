import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Skill } from "@/types";

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Card className="flex h-full flex-col justify-between gap-5">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <Badge>{skill.category}</Badge>
          <span className="text-xs text-slate-500 dark:text-slate-400">v{skill.version}</span>
        </div>
        <div>
          <Link href={`/skills/${skill.slug}`} className="text-xl font-semibold text-slate-950 transition hover:text-cyan-500 dark:text-white">
            {skill.title}
          </Link>
          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">{skill.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {skill.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-white/5 dark:text-slate-300">
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between text-sm">
        <Link href={`/skills/${skill.slug}`} className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400">
          查看详情 <ArrowUpRight className="h-4 w-4" />
        </Link>
        <a href={skill.downloadUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">
          下载 <Download className="h-4 w-4" />
        </a>
      </div>
    </Card>
  );
}
