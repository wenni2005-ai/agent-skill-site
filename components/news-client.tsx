"use client";

import { useMemo, useState } from "react";
import { NewsCard } from "@/components/news-card";
import { SearchBar } from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import type { News } from "@/types";

export function NewsClient({ news }: { news: News[] }) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("all");
  const tags = [...new Set(news.flatMap((item) => item.tags))];

  const filtered = useMemo(() => news.filter((item) => {
    const matchesTag = tag === "all" || item.tags.includes(tag);
    const matchesQuery = `${item.title} ${item.description} ${item.source} ${item.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase());
    return matchesTag && matchesQuery;
  }), [news, query, tag]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <SearchBar value={query} onChange={setQuery} placeholder="搜索资讯、来源或标签..." />
        <div className="flex flex-wrap gap-2">
          <Button variant={tag === "all" ? "default" : "outline"} onClick={() => setTag("all")}>全部</Button>
          {tags.map((item) => <Button key={item} variant={tag === item ? "default" : "outline"} onClick={() => setTag(item)}>{item}</Button>)}
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => <NewsCard key={item.slug} item={item} />)}
      </div>
    </div>
  );
}
