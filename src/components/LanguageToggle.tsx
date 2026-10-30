"use client";

import { useLang } from "@/lib/i18n";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, toggleLang, t } = useLang();

  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={t("langAria")}
      title={t("langAria")}
      className={`inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-2.5 py-1.5 text-navy shadow-sm transition hover:bg-navy/5 ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.5 2.8 3.8 5.8 3.8 9s-1.3 6.2-3.8 9c-2.5-2.8-3.8-5.8-3.8-9S9.5 5.8 12 3Z" />
      </svg>
      <span className="font-en text-[11px] font-extrabold tracking-[0.08em]">
        {lang === "ar" ? "EN" : "AR"}
      </span>
    </button>
  );
}
