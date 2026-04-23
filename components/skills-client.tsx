"use client";

import { useMemo, useState } from "react";
import { SearchBar } from "@/components/search-bar";
import { SkillCard } from "@/components/skill-card";
import { SkillCompare } from "@/components/skill-compare";
import { Button } from "@/components/ui/button";
import { GitCompare, X } from "lucide-react";
import type { Skill } from "@/types";

export function SkillsClient({ skills, categories }: { skills: Skill[]; categories: string[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [compareList, setCompareList] = useState<Skill[]>([]);
  const [showCompare, setShowCompare] = useState(false);

  const filtered = useMemo(() => {
    return skills.filter((skill) => {
      const matchesCategory = activeCategory === "all" || skill.category === activeCategory;
      const haystack = `${skill.title} ${skill.description} ${skill.tags.join(" ")} ${skill.platform.join(" ")}`.toLowerCase();
      const matchesQuery = haystack.includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query, skills]);

  const toggleCompare = (skill: Skill) => {
    setCompareList((prev) => {
      const exists = prev.find((s) => s.slug === skill.slug);
      if (exists) return prev.filter((s) => s.slug !== skill.slug);
      if (prev.length >= 3) return prev; // 最多3个
      return [...prev, skill];
    });
  };

  const isInCompare = (slug: string) => compareList.some((s) => s.slug === slug);

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
        {filtered.map((skill) => (
          <SkillCard
            key={skill.slug}
            skill={skill}
            isCompareSelected={isInCompare(skill.slug)}
            onToggleCompare={() => toggleCompare(skill)}
          />
        ))}
      </div>

      {/* 底部对比栏 */}
      {compareList.length >= 2 && !showCompare && (
        <div className="fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 rounded-full border border-cyan-400/30 bg-white/90 px-6 py-3 shadow-lg backdrop-blur dark:border-cyan-400/20 dark:bg-slate-950/90">
          <GitCompare className="h-5 w-5 text-cyan-500" />
          <span className="text-sm font-medium text-slate-900 dark:text-white">
            已选 {compareList.length} 个 Skill
          </span>
          <Button onClick={() => setShowCompare(true)} className="gap-1.5">
            开始对比
          </Button>
          <button
            onClick={() => setCompareList([])}
            className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-white/10"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* 对比弹窗 */}
      {showCompare && (
        <SkillCompare
          skills={compareList}
          onClose={() => {
            setShowCompare(false);
            setCompareList([]);
          }}
        />
      )}
    </div>
  );
}
