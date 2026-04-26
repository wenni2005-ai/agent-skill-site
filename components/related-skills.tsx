import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Skill } from "@/types";

export function RelatedSkills({ skills }: { skills: Skill[] }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-slate-950 dark:text-white">相关 Skill</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <Card key={skill.slug} className="p-5">
            <Badge>{skill.category}</Badge>
            <Link
              href={`/skills/${skill.slug}`}
              className="mt-3 inline-flex items-center gap-1.5 text-base font-semibold text-slate-950 transition hover:text-cyan-500 dark:text-white"
            >
              {skill.title}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {skill.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
