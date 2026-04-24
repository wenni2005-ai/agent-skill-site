/**
 * 广告位预留组件
 * 
 * 当前为占位状态，流量达标后接入 Google AdSense
 * 使用：在列表页侧栏或详情页底部插入 <AdSlot position="sidebar" />
 */

interface AdSlotProps {
  /** 广告位位置 */
  position: "sidebar" | "banner" | "in-feed" | "footer";
  /** 额外 CSS 类名 */
  className?: string;
}

export function AdSlot({ position, className = "" }: AdSlotProps) {
  // TODO: 流量达标后替换为 AdSense 代码
  // 当前显示为占位符（开发模式下可见，生产环境隐藏）

  if (process.env.NODE_ENV === "production") {
    // 生产环境不显示占位符
    return <div className={className} data-ad-slot={position} />;
  }

  // 开发环境显示占位符
  const sizeMap = {
    sidebar: "h-[250px] w-full",
    banner: "h-[90px] w-full",
    "in-feed": "h-[100px] w-full",
    footer: "h-[60px] w-full",
  };

  return (
    <div
      className={`flex items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 text-xs text-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-slate-500 ${sizeMap[position]} ${className}`}
      data-ad-slot={position}
    >
      Ad Slot: {position}
    </div>
  );
}
