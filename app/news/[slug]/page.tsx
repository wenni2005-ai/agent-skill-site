import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { Card } from "@/components/ui/card";
import { allNews, getNewsBySlug } from "@/lib/content";
import { absoluteUrl, formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return allNews.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const item = getNewsBySlug(slug);
    if (!item) return { title: "News Not Found" };
    return {
      title: item.title,
      description: item.description,
      alternates: { canonical: `/news/${item.slug}` },
      openGraph: { title: item.title, description: item.description, url: absoluteUrl(`/news/${item.slug}`) },
    };
  });
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();

  return (
    <section className="mx-auto max-w-4xl space-y-8 px-4 py-14 sm:px-6 lg:px-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">{item.title}</h1>
        <p className="text-base leading-8 text-slate-600 dark:text-slate-300">{item.description}</p>
        <div className="flex flex-wrap gap-2 text-sm text-slate-500 dark:text-slate-400">
          <span>{item.source}</span>
          <span>·</span>
          <span>{formatDate(item.createdAt)}</span>
        </div>
      </div>
      <Card>
        <MarkdownRenderer content={item.content} />
      </Card>
      <div className="flex flex-wrap gap-4 text-sm">
        <a href={item.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-cyan-400 px-4 py-2 font-medium text-slate-950 hover:bg-cyan-300">查看原文</a>
        <Link href="/news" className="inline-flex rounded-full border border-slate-300 px-4 py-2 hover:bg-slate-100 dark:border-white/10 dark:hover:bg-white/10">返回资讯列表</Link>
      </div>
    </section>
  );
}
