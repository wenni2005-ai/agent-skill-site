"use client";

import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";

export function SkillInstallCopy({ slug }: { slug: string }) {
  const [copied, setCopied] = useState(false);
  const cmd = `clawhub install ${slug}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(cmd).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 dark:bg-slate-800">
      <Terminal className="h-4 w-4 shrink-0 text-slate-400" />
      <code className="flex-1 text-sm text-emerald-400">{cmd}</code>
      <button
        onClick={handleCopy}
        className="shrink-0 rounded-md p-1.5 text-slate-400 transition hover:bg-slate-700 hover:text-white"
        title="复制安装命令"
      >
        {copied ? (
          <Check className="h-4 w-4 text-emerald-400" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
