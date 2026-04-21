import Link from "next/link";
import { Clock3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import type { Tutorial } from "@/types";

export function TutorialCard({ tutorial }: { tutorial: Tutorial }) {
  return (
    <Card className="h-full space-y-4">
      <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
        <Badge className="capitalize">{tutorial.level}</Badge>
        <span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" /> {tutorial.readingTime}</span>
      </div>
      <div>
        <Link href={`/tutorials/${tutorial.slug}`} className="text-xl font-semibold text-slate-950 transition hover:text-cyan-500 dark:text-white">
          {tutorial.title}
        </Link>
        <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">{tutorial.description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tutorial.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-white/5 dark:text-slate-300">#{tag}</span>
        ))}
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400">发布于 {formatDate(tutorial.createdAt)}</p>
    </Card>
  );
}
