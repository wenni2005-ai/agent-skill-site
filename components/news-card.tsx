import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import type { News } from "@/types";

export function NewsCard({ item }: { item: News }) {
  return (
    <Card className="h-full space-y-4">
      <div className="flex items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
        <span>{item.source}</span>
        <span>{formatDate(item.createdAt)}</span>
      </div>
      <div>
        <Link href={`/news/${item.slug}`} className="text-xl font-semibold text-slate-950 transition hover:text-cyan-500 dark:text-white">
          {item.title}
        </Link>
        <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">{item.description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-white/5 dark:text-slate-300">#{tag}</span>
        ))}
      </div>
      <Link href={`/news/${item.slug}`} className="inline-flex items-center gap-2 text-sm text-cyan-500 hover:text-cyan-400">
        阅读全文 <ArrowUpRight className="h-4 w-4" />
      </Link>
    </Card>
  );
}
