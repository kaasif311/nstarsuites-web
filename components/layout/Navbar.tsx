"use client";

import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex flex-col">
          <span className="font-[family-name:var(--font-poppins)] text-xl font-bold text-[#0B5D4D]">
            North Star
          </span>

          <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Business Suites
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/">Home</Link>
          <Link href="/available-suites">Suites</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/videos">Videos</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${SITE.rawPhone}`}
            className="hidden rounded-lg border px-4 py-2 text-sm font-medium lg:block"
          >
            {SITE.phone}
          </a>

          <a
            href="#contact"
            className="rounded-lg bg-[#0B5D4D] px-5 py-3 font-semibold text-white transition hover:bg-[#094b3f]"
          >
            Schedule Tour
          </a>
        </div>
      </div>
    </header>
  );
}