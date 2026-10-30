"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";
import { content, useLang } from "@/lib/i18n";

function EditableField({
  className = "",
  placeholder,
  defaultValue = "",
}: {
  className?: string;
  placeholder: string;
  defaultValue?: string;
}) {
  return (
    <span
      contentEditable
      suppressContentEditableWarning
      role="textbox"
      aria-label={placeholder}
      data-placeholder={placeholder}
      className={`inline-block min-w-[7rem] rounded-md border border-dashed border-line bg-navy/5 px-2 py-0.5 outline-none empty:before:text-mute-2 empty:before:content-[attr(data-placeholder)] focus:border-navy/40 ${className}`}
    >
      {defaultValue}
    </span>
  );
}

export default function HomePage() {
  const { lang, t, dir } = useLang();
  const modules = content.modules[lang];
  const workflow = content.workflow[lang];

  const points = [
    [t("point1Title"), t("point1Text")],
    [t("point2Title"), t("point2Text")],
    [t("point3Title"), t("point3Text")],
    [t("point4Title"), t("point4Text")],
  ];

  return (
    <div id="top" className="min-h-dvh bg-[#0a1220]" dir={dir}>
      <div className="mx-auto min-h-dvh max-w-[1100px] overflow-hidden bg-paper text-ink shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:my-0 lg:my-6 lg:rounded-[28px]">
        <SiteNav />

        <section className="relative overflow-hidden px-4 pb-10 pt-6 sm:px-8 sm:pb-14 sm:pt-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_100%_0%,rgba(13,42,110,0.14),transparent_55%),radial-gradient(ellipse_60%_40%_at_0%_100%,rgba(13,42,110,0.08),transparent_50%)]" />
          <div className="relative">
            <motion.div
              key={`hero-top-${lang}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-6 flex flex-wrap items-center justify-between gap-3"
            >
              <div className="surface flex items-center gap-3 rounded-2xl px-3 py-2.5">
                <Image src="/rootk-logo.png" alt="ROOTK" width={120} height={40} className="h-8 w-auto" />
                <div>
                  <div className="font-en text-xs font-extrabold tracking-[0.14em] text-navy">ROOTK SYSTEMS</div>
                  <div className="text-xs font-semibold text-mute">{t("brandSub")}</div>
                </div>
              </div>
              <span className="font-en rounded-full border border-line bg-white px-3 py-1.5 text-[11px] font-extrabold tracking-[0.12em] text-navy uppercase">
                {t("commercialQuotation")}
              </span>
            </motion.div>

            <motion.div
              key={`hero-${lang}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="max-w-3xl"
            >
              <div className="mb-4 flex flex-wrap items-center gap-2 rounded-2xl border border-line bg-white px-3 py-2.5 text-sm font-bold text-navy-deep shadow-sm">
                <span className="font-en text-[10px] tracking-[0.1em] text-mute-2 uppercase">{t("presentedTo")}</span>
                <span className="h-3 w-px bg-line" />
                <EditableField placeholder={t("clientPlaceholder")} />
                <span className="hidden h-3 w-px bg-line sm:block" />
                <span className="text-[10px] font-bold tracking-[0.08em] text-mute-2 uppercase">{t("quoteNo")}</span>
                <EditableField placeholder={t("quoteNoPlaceholder")} className="font-en text-xs" />
                <span className="text-[10px] font-bold tracking-[0.08em] text-mute-2 uppercase">{t("dateLabel")}</span>
                <EditableField placeholder={t("datePlaceholder")} className="font-en text-xs" />
              </div>
              <p className="mb-3 text-[11px] font-bold tracking-[0.08em] text-navy uppercase sm:tracking-[0.12em]">
                {t("heroEyebrow")}
              </p>
              <h1 className="font-display mb-3 text-[1.75rem] font-extrabold leading-[1.3] text-navy-deep sm:text-4xl lg:text-[2.45rem]">
                {t("heroTitle")}
              </h1>
              <p className="font-en mb-5 text-base font-bold text-navy-soft sm:text-lg">{t("heroSubtitle")}</p>
              <p className="mb-8 max-w-2xl text-[15px] leading-7 text-mute sm:text-base">{t("heroLede")}</p>
            </motion.div>

            <motion.a
              href="#price"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="navy-grad block rounded-2xl p-5 text-white shadow-xl shadow-navy/25 transition hover:-translate-y-1 sm:p-6"
            >
              <div className="mb-2 font-en text-[10px] font-extrabold tracking-[0.12em] text-white/70 uppercase">
                {t("priceShort")}
              </div>
              <div className="font-en text-3xl font-extrabold tracking-tight sm:text-4xl">
                {t("priceAmount")} <span className="text-base">EGP</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-white/85 sm:text-[15px]">{t("priceWords")}</p>
            </motion.a>

            <div className="navy-grad mt-6 grid grid-cols-2 gap-3 rounded-2xl p-4 text-white sm:grid-cols-4">
              {[
                [t("preparedBy"), "ROOTK Systems"],
                [t("client"), t("clientPlaceholder")],
                [t("currency"), "EGP"],
                [t("projectType"), t("projectTypeValue")],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="mb-1 text-[10px] font-bold tracking-[0.08em] text-white/55 uppercase">{label}</div>
                  <div className="text-sm font-semibold">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6 px-4 py-10 sm:px-8">
          <Reveal>
            <div className="surface rounded-2xl p-5 sm:p-6">
              <p className="mb-2 text-[11px] font-bold tracking-[0.1em] text-navy uppercase">{t("introEyebrow")}</p>
              <h2 className="font-display mb-3 text-2xl font-extrabold text-navy-deep sm:text-[1.75rem]">{t("introTitle")}</h2>
              <div className="mb-4 h-1 w-8 rounded-full bg-navy" />
              <p className="text-[15px] leading-7 text-mute">{t("introLede")}</p>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {points.map(([title, text], i) => (
              <Reveal key={title} delay={i * 0.04}>
                <div className="surface relative overflow-hidden rounded-2xl p-4">
                  <span className="absolute inset-y-0 start-0 w-1 bg-navy" />
                  <h3 className="font-display mb-1 text-[15px] font-bold text-navy-deep">{title}</h3>
                  <p className="text-sm leading-6 text-mute">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="modules" className="space-y-5 border-t border-line/70 bg-white/40 px-4 py-10 sm:px-8">
          <Reveal>
            <div className="surface rounded-2xl p-5">
              <p className="mb-1 text-[11px] font-bold tracking-[0.14em] text-navy uppercase">{t("modulesEyebrow")}</p>
              <h2 className="font-display text-xl font-extrabold text-navy-deep sm:text-2xl">{t("modulesTitle")}</h2>
              <div className="my-3 h-1 w-8 rounded-full bg-navy" />
              <p className="text-sm leading-6 text-mute">{t("modulesLede")}</p>
              <p className="mt-3 text-sm font-semibold text-navy-deep">{t("modulesHeading")}</p>
            </div>
          </Reveal>

          <div className="grid gap-3 md:grid-cols-2">
            {modules.map((mod, i) => (
              <Reveal key={mod.code} delay={(i % 4) * 0.03}>
                <article className="surface h-full rounded-2xl p-4">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="font-en rounded-md bg-navy/8 px-2 py-0.5 text-[11px] font-extrabold text-navy">
                      {mod.code}
                    </span>
                    <h3 className="font-display text-[15px] font-bold text-navy-deep">{mod.title}</h3>
                  </div>
                  <p className="font-en mb-3 text-[11px] font-semibold text-mute-2">{mod.en}</p>
                  <ul className="dot-list">
                    {mod.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="workflow" className="space-y-5 px-4 py-10 sm:px-8">
          <Reveal>
            <div className="surface rounded-2xl p-5">
              <p className="mb-1 text-[11px] font-bold tracking-[0.14em] text-navy uppercase">{t("workflowEyebrow")}</p>
              <h2 className="font-display text-xl font-extrabold text-navy-deep sm:text-2xl">{t("workflowTitle")}</h2>
              <div className="my-3 h-1 w-8 rounded-full bg-navy" />
              <p className="text-sm leading-6 text-mute">{t("workflowLede")}</p>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {workflow.map((step, i) => (
              <Reveal key={step} delay={(i % 4) * 0.03}>
                <div className="surface flex gap-3 rounded-2xl p-4">
                  <span className="font-en flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-navy/10 text-sm font-extrabold text-navy">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1.5 text-sm font-semibold leading-6 text-navy-deep">{step}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="price" className="space-y-5 border-t border-line/70 bg-white/40 px-4 py-10 sm:px-8">
          <Reveal>
            <div className="surface grid gap-4 rounded-2xl p-5 md:grid-cols-[1.4fr_auto] md:items-center">
              <div>
                <p className="mb-1 text-[11px] font-bold tracking-[0.12em] text-navy uppercase">{t("priceEyebrow")}</p>
                <h2 className="font-display mb-2 text-xl font-bold text-navy-deep sm:text-2xl">{t("priceTitle")}</h2>
                <p className="text-sm leading-7 text-mute">{t("priceNote")}</p>
                <p className="mt-3 text-sm font-semibold text-navy-deep">{t("priceWords")}</p>
              </div>
              <div className="navy-grad min-w-[170px] rounded-2xl px-5 py-4 text-center text-white shadow-lg shadow-navy/20">
                <div className="font-en mb-1 text-[10px] font-extrabold tracking-[0.12em] text-white/70 uppercase">
                  {t("priceShort")}
                </div>
                <div className="font-en text-3xl font-extrabold">{t("priceAmount")}</div>
                <div className="mt-1 text-sm text-white/80">{t("egp")}</div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="terms" className="space-y-5 px-4 py-10 sm:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold text-navy-deep">{t("termsTitle")}</h2>
          </Reveal>

          <Reveal>
            <div className="surface rounded-2xl p-5">
              <ol className="grid list-decimal gap-3 ps-5 text-sm leading-7 text-mute sm:grid-cols-2">
                <li>{t("term1")}</li>
                <li>{t("term2")}</li>
                <li>{t("term3")}</li>
                <li>{t("term4")}</li>
                <li className="sm:col-span-2">{t("term5")}</li>
              </ol>
            </div>
          </Reveal>

          <Reveal>
            <div className="surface rounded-2xl p-5">
              <h3 className="font-display mb-4 text-lg font-bold text-navy-deep">{t("signatureTitle")}</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  [t("signatureName"), ""],
                  [t("signatureTitleRole"), ""],
                  [t("signatureDate"), ""],
                  [t("signatureSign"), ""],
                ].map(([label]) => (
                  <div key={label} className="rounded-xl border border-dashed border-line bg-white/70 p-3">
                    <div className="mb-6 text-xs font-bold tracking-[0.08em] text-mute-2 uppercase">{label}</div>
                    <div className="h-8 border-b border-line" />
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl border border-dashed border-line bg-white/70 p-3">
                <div className="mb-10 text-xs font-bold tracking-[0.08em] text-mute-2 uppercase">{t("signatureStamp")}</div>
                <div className="h-8 border-b border-line" />
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="navy-grad flex flex-col items-start justify-between gap-5 rounded-2xl p-5 text-white sm:flex-row sm:items-center">
              <div>
                <h3 className="font-display mb-2 text-xl font-bold">{t("closingTitle")}</h3>
                <p className="max-w-xl text-sm leading-7 text-white/80">{t("closingText")}</p>
              </div>
              <div className="rounded-2xl bg-white px-5 py-4 text-center">
                <Image src="/rootk-logo.png" alt="ROOTK Systems" width={120} height={40} className="mx-auto h-8 w-auto" />
                <div className="font-en mt-2 text-[11px] font-extrabold tracking-[0.12em] text-navy-deep">ROOTK SYSTEMS</div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line pt-4 text-xs font-semibold text-mute-2">
            <span>{t("footerBrand")}</span>
            <span className="font-en tracking-wide">RTK-MNT-2026-CQ</span>
          </div>
        </section>
      </div>
    </div>
  );
}
