import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const nav = [
  { href: "/skills", label: "Skill 下载" },
  { href: "/tutorials", label: "部署教程" },
  { href: "/news", label: "动态资讯" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-sm font-bold text-slate-950">AS</div>
          <div>
            <div className="text-sm font-semibold text-slate-900 dark:text-white">Agent Skill Hub</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">面向 AI 开发者的技能资源站</div>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-5 text-sm text-slate-600 dark:text-slate-300 md:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-cyan-500">
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
