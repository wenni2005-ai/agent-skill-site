"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

type FooterLink = { label: string; href: string; external?: boolean };

const footerLinks: { title: string; links: FooterLink[] }[] = [
  {
    title: "资源",
    links: [
      { label: "Skill 下载", href: "/skills" },
      { label: "部署教程", href: "/tutorials" },
      { label: "动态资讯", href: "/news" },
    ],
  },
  {
    title: "社区",
    links: [
      { label: "GitHub", href: "https://github.com/wenni2005-ai/agent-skill-site", external: true },
      { label: "ClawHub", href: "https://clawhub.ai", external: true },
      { label: "OpenClaw Discord", href: "https://discord.com/invite/clawd", external: true },
    ],
  },
  {
    title: "工具",
    links: [
      { label: "ClawHub CLI", href: "https://clawhub.ai/docs/cli", external: true },
      { label: "OpenClaw 文档", href: "https://docs.openclaw.ai", external: true },
      { label: "Vercel 部署", href: "https://vercel.com", external: true },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-xs font-bold text-white">
                AS
              </div>
              <span className="text-sm font-semibold text-slate-900 dark:text-white">
                Agent Skill Hub
              </span>
            </Link>
            <p className="text-sm leading-6 text-muted-foreground">
              面向 AI 开发者的技能资源站。
              <br />
              开源、免费、持续更新。
            </p>
            <ThemeToggle />
          </div>

          {/* Link groups */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{group.title}</h3>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-6 dark:border-white/10 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 Agent Skill Hub. Built for AI builders.
          </p>
          <p className="text-xs text-muted-foreground">
            Next.js 16 + Tailwind CSS + Shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}
