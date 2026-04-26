import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { SmartAffiliateBanner } from "@/components/affiliate-banner";
import { AdSlot } from "@/components/ad-slot";
import { SkillInstallCopy } from "@/components/skill-install-copy";
import { RelatedSkills } from "@/components/related-skills";
import { allSkills, getSkillBySlug } from "@/lib/content";
import { buildMetadata, jsonLdScript, siteConfig } from "@/lib/seo";
import { absoluteUrl, formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return allSkills.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);
  if (!skill) return { title: "Skill Not Found" };

  return buildMetadata({
    title: skill.title,
    description: skill.description,
    path: `/skills/${skill.slug}`,
    keywords: [...skill.tags, skill.category, ...skill.platform],
  });
}

export default async function SkillDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);
  if (!skill) notFound();

  // Find related skills (same category, excluding current)
  const relatedSkills = allSkills
    .filter((s) => s.slug !== skill.slug && s.category === skill.category)
    .slice(0, 3);

  const skillJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: skill.title,
    description: skill.description,
    applicationCategory: skill.category,
    operatingSystem: skill.platform.join(", "),
    softwareVersion: skill.version,
    author: {
      "@type": "Person",
      name: skill.author,
    },
    keywords: skill.tags.join(", "),
    datePublished: skill.createdAt,
    downloadUrl: skill.downloadUrl,
    codeRepository: skill.githubUrl,
    url: absoluteUrl(`/skills/${skill.slug}`),
    image: siteConfig.ogImage,
    installCommand: `clawhub install ${skill.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(skillJsonLd) }}
      />
      <section className="mx-auto max-w-5xl space-y-8 px-4 py-14 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-4">
          <Badge>{skill.category}</Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white">
            {skill.title}
          </h1>
          <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
            {skill.description}
          </p>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {skill.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-white/5 dark:text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Quick install bar */}
        <Card className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">快速安装</p>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              确保已安装 <code className="rounded bg-slate-100 px-1.5 py-0.5 dark:bg-white/10">clawhub</code> CLI
            </p>
          </div>
          <SkillInstallCopy slug={skill.slug} />
        </Card>

        {/* Main content + sidebar */}
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <Card>
            <MarkdownRenderer content={skill.content} />
          </Card>
          <Card className="space-y-4">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">版本</p>
              <p className="mt-1 font-medium">v{skill.version}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">作者</p>
              <p className="mt-1 font-medium">{skill.author}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">平台</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {skill.platform.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">发布时间</p>
              <p className="mt-1 font-medium">{formatDate(skill.createdAt)}</p>
            </div>
            <div className="flex flex-col gap-3 pt-2">
              <a
                href={skill.downloadUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-cyan-400 px-4 py-3 text-center text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
              >
                下载 Skill
              </a>
              <a
                href={skill.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 px-4 py-3 text-center text-sm font-medium transition hover:bg-slate-100 dark:border-white/10 dark:hover:bg-white/10"
              >
                GitHub 仓库
              </a>
              <SmartAffiliateBanner context="skill" className="mt-2" />
              <AdSlot position="sidebar" className="mt-2" />
              <Link
                href="/skills"
                className="text-center text-sm text-slate-500 hover:text-cyan-500 dark:text-slate-400"
              >
                ← 返回 Skill 列表
              </Link>
            </div>
          </Card>
        </div>

        {/* Related Skills */}
        {relatedSkills.length > 0 && (
          <RelatedSkills skills={relatedSkills} />
        )}
      </section>
    </>
  );
}
