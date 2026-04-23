import Link from "next/link";
import {
  Zap,
  Link2,
  Database,
  Server,
  Brain,
  Rocket,
  Package,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  automation: Zap,
  integration: Link2,
  data: Database,
  devops: Server,
  ai: Brain,
  productivity: Rocket,
};

function getCategoryIcon(category: string): LucideIcon {
  const lower = category.toLowerCase();
  for (const [key, Icon] of Object.entries(iconMap)) {
    if (lower.includes(key)) return Icon;
  }
  return Package;
}

export function CategoryNav({ categories }: { categories: string[] }) {
  return (
    <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => {
          const Icon = getCategoryIcon(category);
          return (
            <Link
              key={category}
              href={`/skills?category=${encodeURIComponent(category)}`}
              className="group flex flex-shrink-0 flex-col items-center gap-2 rounded-2xl border border-slate-200/80 bg-white/80 px-5 py-4 backdrop-blur transition hover:border-cyan-400/40 hover:shadow-[0_8px_30px_-12px_rgba(34,211,238,0.3)] dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-400/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-600 transition group-hover:bg-cyan-400/20 group-hover:text-cyan-500 dark:text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>
              <span className="whitespace-nowrap text-sm font-medium text-slate-700 dark:text-slate-300">
                {category}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
