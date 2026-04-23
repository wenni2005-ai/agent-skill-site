"use client";

import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, type KeyboardEvent } from "react";

export function HeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      router.push(`/skills?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="relative mt-4">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="搜索 Skill、教程、资讯..."
        className="h-12 pl-12 text-base"
      />
    </div>
  );
}
