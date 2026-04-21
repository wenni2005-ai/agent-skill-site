import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-500">404</p>
      <h1 className="text-4xl font-semibold text-slate-950 dark:text-white">页面不存在</h1>
      <p className="text-slate-600 dark:text-slate-400">你访问的内容可能已经移动，或者这个 slug 还没录入。</p>
      <Link href="/" className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950">返回首页</Link>
    </div>
  );
}
