"use client";

import { useMemo, useState } from "react";
import { SearchBar } from "@/components/search-bar";
import { TutorialCard } from "@/components/tutorial-card";
import { Button } from "@/components/ui/button";
import type { Tutorial } from "@/types";

export function TutorialsClient({ tutorials }: { tutorials: Tutorial[] }) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("all");
  const tags = [...new Set(tutorials.flatMap((item) => item.tags))];

  const filtered = useMemo(() => tutorials.filter((item) => {
    const matchesTag = tag === "all" || item.tags.includes(tag);
    const matchesQuery = `${item.title} ${item.description} ${item.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase());
    return matchesTag && matchesQuery;
  }), [query, tag, tutorials]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <SearchBar value={query} onChange={setQuery} placeholder="搜索教程、标签或关键字..." />
        <div className="flex flex-wrap gap-2">
          <Button variant={tag === "all" ? "default" : "outline"} onClick={() => setTag("all")}>全部标签</Button>
          {tags.map((item) => <Button key={item} variant={tag === item ? "default" : "outline"} onClick={() => setTag(item)}>{item}</Button>)}
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filtered.map((tutorial) => <TutorialCard key={tutorial.slug} tutorial={tutorial} />)}
      </div>
    </div>
  );
}
