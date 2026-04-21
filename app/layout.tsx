import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme-provider";
import { absoluteUrl } from "@/lib/utils";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),
  title: {
    default: "Agent Skill Hub | 面向 AI 开发者的技能资源站",
    template: "%s | Agent Skill Hub",
  },
  description: "收录 Agent Skill 下载、部署教程和动态资讯的 Next.js 内容站模板。",
  alternates: { canonical: "/" },
  keywords: ["Agent Skill", "Next.js", "OpenClaw", "AI Developer", "教程", "资源站"],
  openGraph: {
    title: "Agent Skill Hub",
    description: "收录 Agent Skill 下载、部署教程和动态资讯。",
    url: absoluteUrl(),
    siteName: "Agent Skill Hub",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent Skill Hub",
    description: "面向 AI 开发者的技能资源站",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_28%),linear-gradient(to_bottom,_#f8fbff,_#eef2ff)] text-slate-900 antialiased dark:bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_24%),linear-gradient(to_bottom,_#020617,_#020617)] dark:text-white">
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(circle_at_center,black,transparent_85%)] dark:bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)]" />
            <Header />
            <main className="relative flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
