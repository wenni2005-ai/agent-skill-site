import Link from "next/link";

/**
 * 联盟营销横幅组件
 * 
 * 使用方式：
 * 1. 在 Skill 详情页侧栏或教程页底部嵌入
 * 2. 通过 props 控制展示哪个联盟产品
 * 3. 联盟 ID 从环境变量或配置读取，东哥提供后填入
 */

interface AffiliateConfig {
  id: string;
  name: string;
  description: string;
  url: string;
  badge?: string;
  color?: string;
}

// 联盟营销配置 — 联盟 ID 待东哥填入后替换
const AFFILIATE_PRODUCTS: Record<string, AffiliateConfig> = {
  // 国内 API 代理
  api2d: {
    id: "api2d",
    name: "API2D",
    description: "国内直连 OpenAI/Claude API，无需科学上网，按量计费",
    url: "https://api2d.com/r/240125",
    badge: "🇨🇳 国内推荐",
    color: "from-blue-500 to-cyan-500",
  },
  siliconflow: {
    id: "siliconflow",
    name: "硅基流动",
    description: "国内 AI 推理平台，支持 DeepSeek/Qwen/GLM 等国产模型",
    url: "https://cloud.siliconflow.cn/i/Jba2sYnm",
    badge: "🔥 高性价比",
    color: "from-purple-500 to-pink-500",
  },
  // 海外开发者工具
  vercel: {
    id: "vercel",
    name: "Vercel",
    description: "Agent 站点首选部署平台，零配置部署 Next.js，全球 CDN",
    url: "https://vercel.com",
    badge: "🚀 部署首选",
    color: "from-slate-800 to-slate-900",
  },
  supabase: {
    id: "supabase",
    name: "Supabase",
    description: "开源 Firebase 替代，Postgres + Auth + Storage + Edge Functions",
    url: "https://supabase.com",
    badge: "⚡ 后端即服务",
    color: "from-emerald-500 to-teal-500",
  },
  digitalocean: {
    id: "digitalocean",
    name: "DigitalOcean",
    description: "简单易用的云服务器，$200 新用户额度，适合自托管 Agent",
    url: "https://digitalocean.com",
    badge: "☁️ 自托管推荐",
    color: "from-blue-600 to-indigo-600",
  },
};

type AffiliateProductKey = keyof typeof AFFILIATE_PRODUCTS;

interface AffiliateBannerProps {
  /** 展示哪个联盟产品 */
  product: AffiliateProductKey;
  /** 展示变体：card（侧栏卡片）或 banner（底部横幅） */
  variant?: "card" | "banner";
  /** 额外 CSS 类名 */
  className?: string;
}

export function AffiliateBanner({
  product,
  variant = "card",
  className = "",
}: AffiliateBannerProps) {
  const config = AFFILIATE_PRODUCTS[product];
  if (!config) return null;

  // 检查是否已配置真实联盟 ID
  const hasReferral = new URL(config.url).searchParams.has('ref') || new URL(config.url).searchParams.has('refcode') || config.url.includes('/r/') || config.url.includes('/i/');

  if (variant === "banner") {
    return (
      <div
        className={`relative overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-r ${config.color} p-4 text-white dark:border-white/10 ${className}`}
      >
        <div className="relative z-10 flex items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">{config.name}</span>
              {config.badge && (
                <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">
                  {config.badge}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-white/80">{config.description}</p>
          </div>
          <a
            href={config.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-white/90"
          >
            立即体验
          </a>
        </div>
        {hasReferral && (
          <span className="absolute right-2 top-2 text-[10px] text-white/40">
            AD
          </span>
        )}
      </div>
    );
  }

  // card 变体（侧栏用）
  return (
    <div
      className={`overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 ${className}`}
    >
      <div className={`bg-gradient-to-r ${config.color} px-4 py-3 text-white`}>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold">{config.name}</span>
          {config.badge && (
            <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px]">
              {config.badge}
            </span>
          )}
        </div>
      </div>
      <div className="space-y-3 bg-white p-4 dark:bg-slate-950">
        <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
          {config.description}
        </p>
        <a
          href={config.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className={`inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r ${config.color} px-4 py-2 text-sm font-medium text-white transition hover:opacity-90`}
        >
          立即体验 →
        </a>
        {hasReferral && (
          <p className="text-center text-[10px] text-slate-400">推广链接</p>
        )}
      </div>
    </div>
  );
}

/**
 * 智能推荐横幅 — 根据页面上下文自动推荐相关产品
 */
export function SmartAffiliateBanner({
  context,
  className = "",
}: {
  context: "skill" | "tutorial" | "news";
  className?: string;
}) {
  // 根据上下文选择推荐产品
  const recommendations: Record<string, AffiliateProductKey[]> = {
    skill: ["api2d", "siliconflow"],
    tutorial: ["vercel", "supabase"],
    news: ["api2d", "digitalocean"],
  };

  const products = recommendations[context] || ["api2d"];
  const primary = products[0];

  return <AffiliateBanner product={primary} variant="card" className={className} />;
}
