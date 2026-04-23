"use client";

import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Skill } from "@/types";

export function SkillCompare({
  skills,
  onClose,
}: {
  skills: Skill[];
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative mx-4 max-h-[80vh] w-full max-w-3xl overflow-auto rounded-3xl border border-slate-200/80 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-slate-950 sm:p-8">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-white/10"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="mb-6 text-xl font-semibold text-slate-950 dark:text-white">
          Skill 对比
        </h2>

        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200/80 dark:border-white/10">
              <th className="pb-3 pr-4 font-medium text-slate-500 dark:text-slate-400">
                属性
              </th>
              {skills.map((s) => (
                <th
                  key={s.slug}
                  className="pb-3 pr-4 font-semibold text-slate-950 dark:text-white"
                >
                  {s.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-white/5">
            <tr>
              <td className="py-3 pr-4 text-slate-500 dark:text-slate-400">
                分类
              </td>
              {skills.map((s) => (
                <td key={s.slug} className="py-3 pr-4">
                  <Badge>{s.category}</Badge>
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-3 pr-4 text-slate-500 dark:text-slate-400">
                版本
              </td>
              {skills.map((s) => (
                <td
                  key={s.slug}
                  className="py-3 pr-4 text-slate-950 dark:text-white"
                >
                  v{s.version}
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-3 pr-4 text-slate-500 dark:text-slate-400">
                平台
              </td>
              {skills.map((s) => (
                <td key={s.slug} className="py-3 pr-4">
                  <div className="flex flex-wrap gap-1">
                    {s.platform.map((p) => (
                      <span
                        key={p}
                        className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-white/5 dark:text-slate-300"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-3 pr-4 text-slate-500 dark:text-slate-400">
                作者
              </td>
              {skills.map((s) => (
                <td
                  key={s.slug}
                  className="py-3 pr-4 text-slate-950 dark:text-white"
                >
                  {s.author}
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-3 pr-4 text-slate-500 dark:text-slate-400">
                标签
              </td>
              {skills.map((s) => (
                <td key={s.slug} className="py-3 pr-4">
                  <div className="flex flex-wrap gap-1">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-cyan-400/10 px-2 py-0.5 text-xs text-cyan-700 dark:text-cyan-200"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
