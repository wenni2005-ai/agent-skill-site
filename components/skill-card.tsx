"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Download, GitCompare, Check, Copy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Skill } from "@/types";

export function SkillCard({
  skill,
  isCompareSelected = false,
  onToggleCompare,
}: {
  skill: Skill;
  isCompareSelected?: boolean;
  onToggleCompare?: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const installCmd = `clawhub install ${skill.slug}`;

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(installCmd).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Card className="flex h-full flex-col justify-between gap-5">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <Badge>{skill.category}</Badge>
          <div className="flex items-center gap-2">
            {onToggleCompare && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onToggleCompare();
                }}
                className={cn(
                  "rounded-full p-1.5 transition",
                  isCompareSelected
                    ? "bg-cyan-400/20 text-cyan-600 dark:text-cyan-300"
                    : "text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-white/10 dark:hover:text-slate-300"
                )}
                title={isCompareSelected ? "移出对比" : "加入对比"}
              >
                <GitCompare className="h-4 w-4" />
              </button>
            )}
            <span className="text-xs text-slate-500 dark:text-slate-400">v{skill.version}</span>
          </div>
        </div>

        <div>
          <Link
            href={`/skills/${skill.slug}`}
            className="text-xl font-semibold text-slate-950 transition hover:text-cyan-500 dark:text-white"
          >
            {skill.title}
          </Link>
          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">{skill.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {skill.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-white/5 dark:text-slate-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Install command with copy */}
        <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 dark:bg-white/5">
          <code className="flex-1 truncate text-xs text-slate-700 dark:text-slate-300">{installCmd}</code>
          <button
            onClick={handleCopy}
            className="shrink-0 rounded-md p-1 text-slate-400 transition hover:bg-slate-200 hover:text-slate-600 dark:hover:bg-white/10 dark:hover:text-slate-300"
            title="复制安装命令"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <Link
          href={`/skills/${skill.slug}`}
          className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400"
        >
          查看详情
          <ArrowUpRight className="h-4 w-4" />
        </Link>
        <a
          href={skill.downloadUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
        >
          下载
          <Download className="h-4 w-4" />
        </a>
      </div>
    </Card>
  );
}
