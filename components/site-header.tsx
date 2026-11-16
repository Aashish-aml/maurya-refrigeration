"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { shop } from "@/lib/shop";

const links = [
  { href: "/parts", label: "Spare Parts" },
  { href: "/#about", label: "About" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

function isCurrent(pathname: string, href: string) {
  if (href === "/parts") {
    return pathname === "/parts" || pathname.startsWith("/parts/");
  }

  return pathname === href;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Maurya Refrigeration home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-ice text-white">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M12 2v20M4.9 6.5l14.2 11M19.1 6.5 4.9 17.5" />
            </svg>
          </span>
          <span className="font-display text-lg font-bold leading-none">
            Maurya
            <br className="sm:hidden" />
            <span className="text-ice"> Refrigeration</span>
          </span>
        </Link>
        <nav
          className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
              className={
                isCurrent(pathname, link.href)
                  ? "text-ink"
                  : "hover:text-ink"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${shop.phoneTel}`}
            className="rounded-lg bg-amber px-4 py-2 text-sm font-semibold text-ink hover:brightness-95"
          >
            Call Now
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-slate-200 px-4 py-3 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="grid gap-1 text-sm font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-frost hover:text-ink"
                  aria-current={
                    isCurrent(pathname, link.href) ? "page" : undefined
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
