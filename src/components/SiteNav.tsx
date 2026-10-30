"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLang } from "@/lib/i18n";

export function SiteNav() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#modules", label: t("navModules") },
    { href: "#workflow", label: t("navWorkflow") },
    { href: "#price", label: t("navPrice") },
    { href: "#terms", label: t("navTerms") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`no-print sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-white/90 shadow-[0_8px_30px_rgba(7,21,54,0.08)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/rootk-logo.png"
            alt="ROOTK Systems"
            width={120}
            height={40}
            className="h-7 w-auto sm:h-8"
            priority
          />
          <div className="hidden leading-tight sm:block">
            <div className="font-en text-[11px] font-extrabold tracking-[0.14em] text-navy">
              ROOTK
            </div>
            <div className="text-[11px] font-semibold text-mute-2">{t("brandSub")}</div>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm font-semibold text-mute transition hover:bg-navy/5 hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => window.print()}
            className="hidden rounded-full border border-line bg-white px-3 py-2 text-sm font-bold text-navy shadow-sm sm:inline-flex"
          >
            {t("printPdf")}
          </button>
          <a
            href="#price"
            className="hidden rounded-full navy-grad px-4 py-2 text-sm font-bold text-white shadow-lg shadow-navy/20 sm:inline-flex"
          >
            {t("navCta")}
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-navy md:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-4 flex-col gap-1">
              <span className={`h-0.5 rounded bg-navy transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`h-0.5 rounded bg-navy transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 rounded bg-navy transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-4 py-3 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-semibold text-ink hover:bg-paper"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                window.print();
              }}
              className="rounded-xl px-3 py-2.5 text-start text-sm font-semibold text-ink hover:bg-paper"
            >
              {t("printPdf")}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
