import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type TagItem = { name: string; count: number };

const sizeByCount = (count: number, max: number): string => {
  const ratio = count / max;
  if (ratio > 0.7) return "text-base font-semibold";
  if (ratio > 0.4) return "text-sm font-medium";
  return "text-xs";
};

export function TagCloud({ tags }: { tags: TagItem[] }) {
  const maxCount = Math.max(...tags.map((t) => t.count), 1);

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {tags.map((tag) => (
        <Link
          key={tag.name}
          href={`/skills?q=${encodeURIComponent(tag.name)}`}
          className="transition hover:scale-105"
        >
          <Badge
            className={cn(
              "gap-1.5 transition hover:border-cyan-400/40 hover:bg-cyan-400/15",
              sizeByCount(tag.count, maxCount)
            )}
          >
            #{tag.name}
            <span className="text-[10px] opacity-50">{tag.count}</span>
          </Badge>
        </Link>
      ))}
    </div>
  );
}
