export default function Loading() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-7xl items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/80 px-5 py-3 text-sm text-slate-600 shadow-lg dark:bg-white/5 dark:text-slate-300">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400" />
        页面加载中...
      </div>
    </div>
  );
}
