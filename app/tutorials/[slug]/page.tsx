import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { allTutorials, getTutorialBySlug } from "@/lib/content";
import { absoluteUrl, formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return allTutorials.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const tutorial = getTutorialBySlug(slug);
    if (!tutorial) return { title: "Tutorial Not Found" };
    return {
      title: tutorial.title,
      description: tutorial.description,
      alternates: { canonical: `/tutorials/${tutorial.slug}` },
      openGraph: { title: tutorial.title, description: tutorial.description, url: absoluteUrl(`/tutorials/${tutorial.slug}`) },
    };
  });
}

export default async function TutorialDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tutorial = getTutorialBySlug(slug);
  if (!tutorial) notFound();

  return (
    <section className="mx-auto max-w-4xl space-y-8 px-4 py-14 sm:px-6 lg:px-8">
      <div className="space-y-4">
        <Badge>{tutorial.level}</Badge>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">{tutorial.title}</h1>
        <p className="text-base leading-8 text-slate-600 dark:text-slate-300">{tutorial.description}</p>
        <div className="flex flex-wrap gap-2 text-sm text-slate-500 dark:text-slate-400">
          <span>{formatDate(tutorial.createdAt)}</span>
          <span>·</span>
          <span>{tutorial.readingTime}</span>
        </div>
      </div>
      <Card>
        <MarkdownRenderer content={tutorial.content} />
      </Card>
      <Link href="/tutorials" className="inline-flex text-sm text-cyan-500 hover:text-cyan-400">← 返回教程列表</Link>
    </section>
  );
}
