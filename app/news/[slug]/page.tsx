import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { SmartAffiliateBanner } from "@/components/affiliate-banner";
import { AdSlot } from "@/components/ad-slot";
import { Card } from "@/components/ui/card";
import { allNews, getNewsBySlug } from "@/lib/content";
import { buildMetadata, jsonLdScript, siteConfig } from "@/lib/seo";
import { absoluteUrl, formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return allNews.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsBySlug(slug);

  if (!item) return { title: "News Not Found" };

  return buildMetadata({
    title: item.title,
    description: item.summary,
    path: `/news/${item.slug}`,
    keywords: [...item.tags, item.source],
    type: "article",
  });
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();

  const newsJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title,
    description: item.summary,
    datePublished: item.publishedAt,
    dateModified: item.publishedAt,
    author: {
      "@type": "Organization",
      name: item.source,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.organizationName,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.organizationLogo,
      },
    },
    mainEntityOfPage: absoluteUrl(`/news/${item.slug}`),
    image: siteConfig.ogImage,
    keywords: item.tags.join(", "),
    isBasedOn: item.sourceUrl,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(newsJsonLd) }} />
      <section className="mx-auto max-w-4xl space-y-8 px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">{item.title}</h1>
          <p className="text-base leading-8 text-slate-600 dark:text-slate-300">{item.summary}</p>
          <div className="flex flex-wrap gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span>{item.source}</span>
            <span>·</span>
            <span>{formatDate(item.publishedAt)}</span>
          </div>
        </div>
        <Card>
          <MarkdownRenderer content={item.content} />
        </Card>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href={item.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-cyan-400 px-4 py-2 font-medium text-slate-950 hover:bg-cyan-300">查看原文</a>
          <Link href="/news" className="inline-flex rounded-full border border-slate-300 px-4 py-2 hover:bg-slate-100 dark:border-white/10 dark:hover:bg-white/10">返回资讯列表</Link>
      <SmartAffiliateBanner context="news" className="mt-6" />
        </div>
      </section>
    </>
  );
}
