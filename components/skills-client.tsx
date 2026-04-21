"use client";

import { useMemo, useState } from "react";
import { SearchBar } from "@/components/search-bar";
import { SkillCard } from "@/components/skill-card";
import { Button } from "@/components/ui/button";
import type { Skill } from "@/types";

export function SkillsClient({ skills, categories }: { skills: Skill[]; categories: string[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(() => {
    return skills.filter((skill) => {
      const matchesCategory = activeCategory === "all" || skill.category === activeCategory;
      const haystack = `${skill.title} ${skill.description} ${skill.tags.join(" ")} ${skill.platform.join(" ")}`.toLowerCase();
      const matchesQuery = haystack.includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query, skills]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <SearchBar value={query} onChange={setQuery} placeholder="搜索 Skill、标签或平台..." />
        <div className="flex flex-wrap gap-2">
          <Button variant={activeCategory === "all" ? "default" : "outline"} onClick={() => setActiveCategory("all")}>全部</Button>
          {categories.map((category) => (
            <Button key={category} variant={activeCategory === category ? "default" : "outline"} onClick={() => setActiveCategory(category)}>
              {category}
            </Button>
          ))}
        </div>
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-400">共 {filtered.length} 个结果</p>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((skill) => <SkillCard key={skill.slug} skill={skill} />)}
      </div>
    </div>
  );
}
