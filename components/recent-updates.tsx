import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/utils";

type RecentUpdate = {
  slug: string;
  title: string;
  type: "skill" | "tutorial" | "news";
  date: string;
  href: string;
};

const typeConfig = {
  skill: { label: "Skill", color: "border-cyan-400/30 bg-cyan-400/10 text-cyan-700 dark:text-cyan-200" },
  tutorial: { label: "教程", color: "border-violet-400/30 bg-violet-400/10 text-violet-700 dark:text-violet-200" },
  news: { label: "资讯", color: "border-amber-400/30 bg-amber-400/10 text-amber-700 dark:text-amber-200" },
};

export function RecentUpdates({ updates }: { updates: RecentUpdate[] }) {
  const now = new Date();
  const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);

  return (
    <div className="relative space-y-0 pl-8">
      {/* 左侧竖线 */}
      <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/60 via-slate-200/60 to-transparent dark:via-white/10" />

      {updates.map((item) => {
        const config = typeConfig[item.type];
        const isNew = new Date(item.date) >= threeDaysAgo;

        return (
          <div key={`${item.type}-${item.slug}`} className="relative pb-6 last:pb-0">
            {/* 时间线圆点 */}
            <div className={cn(
              "absolute -left-5 top-1.5 h-3 w-3 rounded-full border-2 border-white dark:border-slate-950",
              isNew ? "bg-cyan-400" : "bg-slate-300 dark:bg-slate-600"
            )} />

            <div className="flex items-start gap-3">
              <span className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
                config.color
              )}>
                {config.label}
              </span>
              {isNew && (
                <span className="inline-flex items-center rounded-full bg-red-500/10 px-2 py-0.5 text-xs font-bold text-red-500 dark:text-red-400">
                  NEW
                </span>
              )}
            </div>

            <Link
              href={item.href}
              className="mt-1.5 block text-base font-medium text-slate-900 transition hover:text-cyan-500 dark:text-white dark:hover:text-cyan-400"
            >
              {item.title}
            </Link>

            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              {formatDate(item.date)}
            </p>
          </div>
        );
      })}
    </div>
  );
}
