import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";

export const siteConfig = {
  name: "Agent Skill Hub",
  shortName: "Agent Skill Hub",
  description: "面向 AI 开发者的 Agent Skill 资源站，收录技能包、部署教程和生态资讯。",
  domain: "agentskil.qzz.io",
  url: absoluteUrl(),
  ogImage: absoluteUrl("/opengraph-image"),
  organizationName: "Agent Skill Hub",
  organizationLogo: absoluteUrl("/favicon.ico"),
};

export function buildMetadata({
  title,
  description,
  path = "",
  keywords = [],
  type = "website",
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path || "/" },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "zh_CN",
      type,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${title} | ${siteConfig.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export function jsonLdScript(data: Record<string, unknown> | Array<Record<string, unknown>>) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
