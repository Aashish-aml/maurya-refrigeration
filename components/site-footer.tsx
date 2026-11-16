import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-6 text-sm text-slate-500">
        <span>© 2026 Maurya Refrigeration · Owner: Ram Raj Maurya</span>
        <span className="flex flex-wrap gap-x-4 gap-y-1">
          <Link href="/parts" className="hover:text-ink">
            Spare Parts
          </Link>
          <span>Washing Machine, Microwave, Refrigerator &amp; AC</span>
        </span>
      </div>
    </footer>
  );
}
