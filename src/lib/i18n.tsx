"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ar" | "en";

type Dict = Record<string, string>;

const ar: Dict = {
  navModules: "الموديولات",
  navWorkflow: "دورة العمل",
  navPrice: "السعر",
  navTerms: "الشروط",
  navCta: "عرض السعر",
  brandSub: "رووتك سيستمز",
  commercialQuotation: "عرض تجاري",
  presentedTo: "مقدَّم إلى",
  clientPlaceholder: "اسم العميل",
  quoteNo: "رقم العرض",
  quoteNoPlaceholder: "RTK-MNT-2026-001",
  dateLabel: "التاريخ",
  datePlaceholder: "__/__/____",
  heroEyebrow: "عرض فني وتجاري · ROOTK Systems",
  heroTitle: "نظام إدارة مركز الصيانة",
  heroSubtitle: "Maintenance Center Management System",
  heroLede:
    "تقدم ROOTK Systems نظام ERP متخصصًا في إدارة مراكز صيانة الأجهزة، يغطي دورة العمل من استلام الجهاز حتى التسليم، مع إدارة المخزون والعهد والتكتات والفواتير والإشعارات وتتبع المهندسين — ضمن نطاق واحد بسعر إجمالي ثابت.",
  priceShort: "إجمالي قيمة المشروع",
  priceAmount: "100,000",
  priceWords: "مائة ألف جنيه مصري فقط لا غير",
  egp: "جنيه مصري",
  preparedBy: "مقدَّم من",
  client: "العميل",
  currency: "العملة",
  projectType: "نوع المشروع",
  projectTypeValue: "ERP لمراكز الصيانة",
  introEyebrow: "مقدمة · نظام متخصص",
  introTitle: "مصمم خصيصًا لتشغيل مركز الصيانة",
  introLede:
    "يوحّد النظام عمليات المخزون والتكتات والمهندسين والعملاء والفواتير في منصة واحدة، ليوفر رؤية تشغيلية واضحة ويقلل التكرار بين الورق والأنظمة المنفصلة — ضمن النطاق المعتمد في هذا العرض.",
  point1Title: "مخزون وعهدة مترابطة",
  point1Text: "ربط قطع الغيار بالتكتات وعهدة المهندسين والمخازن الفرعية.",
  point2Title: "تكتات من الاستلام للتسليم",
  point2Text: "متابعة كاملة لحالة الجهاز والإجراءات والمرفقات.",
  point3Title: "بوابة عملاء مؤمّنة",
  point3Text: "كل عميل يرى أجهزته وتكتاته فقط دون بيانات الآخرين.",
  point4Title: "تقارير ولوحة أداء",
  point4Text: "مؤشرات ديناميكية وفلاتر حسب الفترة والمهندس والفرع.",
  modulesHeading: "نطاق النظام — ثمانية موديولات متكاملة",
  modulesEyebrow: "الموديولات",
  modulesTitle: "تفاصيل الوحدات المعتمدة",
  modulesLede: "يشمل العرض الموديولات التالية بجميع الوظائف المذكورة أدناه ضمن السعر الإجمالي.",
  workflowEyebrow: "دورة العمل",
  workflowTitle: "مسار تشغيل مركز الصيانة",
  workflowLede: "دورة مترابطة من استلام الجهاز حتى إغلاق التكت.",
  priceEyebrow: "العرض التجاري",
  priceTitle: "إجمالي قيمة المشروع",
  priceNote: "سعر إجمالي ثابت لكامل نطاق الموديولات المذكورة في هذا العرض — دون أسعار منفصلة للموديولات.",
  termsTitle: "الحدود التجارية ونطاق العرض",
  term1: "الأسعار بالجنيه المصري (EGP). إجمالي قيمة المشروع: 100,000 جنيه مصري (مائة ألف جنيه مصري فقط لا غير).",
  term2: "الأسعار المذكورة لا تشمل ضريبة القيمة المضافة (VAT)، وتُحسب إن وُجدت وفق الأنظمة المعمول بها.",
  term3: "يشمل العرض الموديولات والوظائف المذكورة في هذا المستند ضمن النطاق المعتمد.",
  term4: "أي ميزات خارج النطاق المعتمد تُسعَّر منفصلاً بعد الاتفاق.",
  term5: "بيانات العميل والتاريخ ورقم العرض قابلة للتعديل في هذا المستند.",
  closingTitle: "جاهزون لبناء نظام يدير مركز الصيانة بكفاءة",
  closingText:
    "ROOTK Systems — شريك تقني لتطوير حلول مخصّصة حول دورة عمل مراكز الصيانة، مع وضوح في النطاق والسعر وحدود التسليم.",
  footerBrand: "ROOTK Systems · نظام إدارة مركز الصيانة · عرض فني وتجاري",
  langAria: "تبديل اللغة",
  printPdf: "طباعة / PDF",
  signatureTitle: "اعتماد العميل",
  signatureName: "الاسم",
  signatureTitleRole: "الصفة",
  signatureDate: "التاريخ",
  signatureSign: "التوقيع",
  signatureStamp: "الختم",
};

const en: Dict = {
  navModules: "Modules",
  navWorkflow: "Workflow",
  navPrice: "Pricing",
  navTerms: "Terms",
  navCta: "View pricing",
  brandSub: "ROOTK Systems",
  commercialQuotation: "Commercial Quotation",
  presentedTo: "Presented to",
  clientPlaceholder: "Client name",
  quoteNo: "Quote no.",
  quoteNoPlaceholder: "RTK-MNT-2026-001",
  dateLabel: "Date",
  datePlaceholder: "__/__/____",
  heroEyebrow: "Technical & Commercial Offer · ROOTK Systems",
  heroTitle: "Maintenance Center Management System",
  heroSubtitle: "نظام إدارة مركز الصيانة",
  heroLede:
    "ROOTK Systems delivers a specialized ERP for device maintenance centers — covering the full cycle from intake to delivery, with inventory, custody, tickets, invoicing, notifications, and engineer tracking — in one fixed total package.",
  priceShort: "Total project value",
  priceAmount: "100,000",
  priceWords: "One hundred thousand Egyptian pounds only",
  egp: "EGP",
  preparedBy: "Prepared by",
  client: "Client",
  currency: "Currency",
  projectType: "Project type",
  projectTypeValue: "ERP for maintenance centers",
  introEyebrow: "Introduction · Specialized System",
  introTitle: "Built around how a maintenance center runs",
  introLede:
    "The system unifies inventory, tickets, engineers, customers, and invoicing in one platform — clearer operations and less duplication between paper and disconnected tools — within the approved scope of this quotation.",
  point1Title: "Linked inventory & custody",
  point1Text: "Parts tied to tickets, engineer custody, and branch warehouses.",
  point2Title: "Tickets from intake to delivery",
  point2Text: "Full tracking of device status, actions, and attachments.",
  point3Title: "Secured customer portal",
  point3Text: "Each customer sees only their devices and tickets.",
  point4Title: "Reports & performance dashboard",
  point4Text: "Dynamic KPIs with filters by period, engineer, and branch.",
  modulesHeading: "System scope — eight integrated modules",
  modulesEyebrow: "Modules",
  modulesTitle: "Approved module details",
  modulesLede: "This quotation includes the modules below with all listed capabilities under the fixed total price.",
  workflowEyebrow: "Workflow",
  workflowTitle: "Maintenance center operating cycle",
  workflowLede: "An end-to-end path from device intake to ticket closure.",
  priceEyebrow: "Commercial offer",
  priceTitle: "Total project value",
  priceNote: "A single fixed total for the full module scope in this quotation — no separate module prices.",
  termsTitle: "Commercial boundaries and scope",
  term1: "Prices are in Egyptian pounds (EGP). Total project value: 100,000 EGP (one hundred thousand Egyptian pounds only).",
  term2: "Stated prices do not include Value Added Tax (VAT); VAT, if applicable, will follow prevailing regulations.",
  term3: "The quotation covers the modules and capabilities described in this document within the approved scope.",
  term4: "Any features outside the approved scope are quoted separately after agreement.",
  term5: "Client name, date, and quote number are editable in this document.",
  closingTitle: "Ready to build a system that runs your maintenance center",
  closingText:
    "ROOTK Systems — a technical partner for tailored solutions around maintenance-center operations, with clear scope, pricing, and delivery boundaries.",
  footerBrand: "ROOTK Systems · Maintenance Center Management · Technical & Commercial Quotation",
  langAria: "Switch language",
  printPdf: "Print / PDF",
  signatureTitle: "Client approval",
  signatureName: "Name",
  signatureTitleRole: "Title",
  signatureDate: "Date",
  signatureSign: "Signature",
  signatureStamp: "Stamp",
};

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (key: string) => string;
  dir: "rtl" | "ltr";
};

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    const saved = window.localStorage.getItem("rootk-mnt-quot-lang");
    if (saved === "ar" || saved === "en") setLangState(saved);
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("rootk-mnt-quot-lang", next);
    document.documentElement.lang = next;
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "ar" ? "en" : "ar");
  }, [lang, setLang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const dict = lang === "ar" ? ar : en;
  const t = useCallback((key: string) => dict[key] ?? key, [dict]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang,
      t,
      dir: (lang === "ar" ? "rtl" : "ltr") as "rtl" | "ltr",
    }),
    [lang, setLang, toggleLang, t],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

export type ModuleItem = {
  code: string;
  title: string;
  en: string;
  items: string[];
};

export const content = {
  modules: {
    ar: [
      {
        code: "01",
        title: "إدارة المخازن وقطع الغيار",
        en: "Inventory & Spare Parts",
        items: [
          "استيراد ملفات Excel لحركات الوارد والمنصرف أو التسجيل اليدوي",
          "تسجيل بيانات الأجهزة والأرقام التسلسلية وربطها بالضمان",
          "صرف قطع الغيار للمهندسين كعهدة خارج التكت أو صرف مباشر على التكت",
          "إنشاء مخازن داخلية متعددة لفروع مركز الصيانة وربطها بالمخزن الرئيسي",
          "إدارة التحويلات بين المخازن",
          "متابعة أرصدة المخزون وحركات الصرف والاستهلاك والاسترجاع",
          "متابعة قطع الغيار بعهدة كل مهندس والمستخدمة والمتبقية",
        ],
      },
      {
        code: "02",
        title: "إدارة تكتات الصيانة",
        en: "Maintenance Tickets",
        items: [
          "تسجيل بيانات العملاء والأجهزة والأرقام التسلسلية",
          "إنشاء تكتات الصيانة ومتابعتها من الاستلام حتى التسليم",
          "إسناد التكتات للمهندسين المسؤولين",
          "تسجيل تشخيص العطل والإجراءات التي تمت",
          "تسجيل قطع الغيار المستخدمة وربطها بالتكت",
          "متابعة عهدة المهندس وقطع الغيار الموجودة معه",
          "رفع الصور والمرفقات والمستندات الخاصة بالتكت",
          "إصدار فاتورة مرتبطة بتكت الصيانة",
          "متابعة تحديثات وحالات التكت",
        ],
      },
      {
        code: "03",
        title: "بوابة العملاء الخارجية",
        en: "Customer Portal",
        items: [
          "بوابة خارجية مستقلة للعملاء",
          "كل عميل يشاهد الأجهزة المسجلة باسمه فقط",
          "متابعة تكتات الصيانة الخاصة به",
          "عرض مراحل الصيانة والتحديثات",
          "تأمين بيانات العملاء ومنع الوصول إلى بيانات الآخرين",
        ],
      },
      {
        code: "04",
        title: "التقارير ولوحة التحكم",
        en: "Reports & Dashboard",
        items: [
          "تقارير مراحل تكتات الصيانة",
          "تقارير التكتات المسندة للمهندسين والمتأخرة والمنتهية",
          "تقارير حركة المخزون وقطع الغيار",
          "تقارير عهدة المهندسين",
          "تقارير المخازن الرئيسية والفرعية",
          "تقارير الأجهزة وفترات الضمان",
          "Dashboard ديناميكية لمؤشرات الأداء",
          "فلاتر حسب الفترة والمهندس والفرع وحالة التكت",
        ],
      },
      {
        code: "05",
        title: "الفواتير والتحصيل",
        en: "Invoicing & Collections",
        items: [
          "إصدار فواتير مرتبطة بتكتات الصيانة",
          "تسجيل قيمة الخدمات وقطع الغيار",
          "تسجيل المبالغ المحصلة والمتبقية",
          "ربط الفواتير بعمليات الصيانة",
        ],
      },
      {
        code: "06",
        title: "الإشعارات والرسائل النصية",
        en: "Notifications & SMS",
        items: [
          "إرسال SMS عند استلام الجهاز",
          "إرسال SMS عند الانتهاء من الصيانة وجاهزية الجهاز",
          "إرسال SMS عند تسليم الجهاز",
          "ربط الرسائل بأحداث النظام وفق الإعدادات المتفق عليها",
        ],
      },
      {
        code: "07",
        title: "مصروفات المهندسين",
        en: "Engineer Expenses",
        items: [
          "تسجيل مصروفات الانتقالات",
          "تسجيل مصروفات الإقامة",
          "تسجيل تكلفة قطع الغيار التي يشتريها المهندس لأعمال مشروع معين",
          "ربط المصروفات بالمهندس واسم المشروع",
          "تسجيل التاريخ والقيمة والتفاصيل والمرفقات المؤيدة للمصروف",
          "مراجعة مصروفات كل مهندس وكل مشروع من خلال التقارير",
        ],
      },
      {
        code: "08",
        title: "تتبع مواقع المهندسين",
        en: "Engineer Location Tracking",
        items: [
          "متابعة مواقع المهندسين ميدانيًا",
          "عرض مواقعهم على الخريطة وفق بيانات الموقع المتاحة",
          "ربط مواقع المهندسين بأعمال الصيانة والتكتات المسندة إليهم",
          "تحديد صلاحيات الاطلاع وآلية تحديث الموقع",
        ],
      },
    ] as ModuleItem[],
    en: [
      {
        code: "01",
        title: "Inventory & Spare Parts",
        en: "Inventory & Spare Parts",
        items: [
          "Import Excel files for inbound/outbound movements or enter manually",
          "Register devices and serial numbers linked to warranty",
          "Issue spare parts to engineers as custody outside a ticket or directly on a ticket",
          "Create multiple internal warehouses for maintenance-center branches linked to the main warehouse",
          "Manage transfers between warehouses",
          "Track stock balances and issue, consumption, and return movements",
          "Track spare parts in each engineer’s custody — used and remaining",
        ],
      },
      {
        code: "02",
        title: "Maintenance Tickets",
        en: "Maintenance Tickets",
        items: [
          "Register customers, devices, and serial numbers",
          "Create and track maintenance tickets from intake to delivery",
          "Assign tickets to responsible engineers",
          "Log fault diagnosis and actions taken",
          "Record spare parts used and link them to the ticket",
          "Track engineer custody and parts held",
          "Upload photos, attachments, and ticket documents",
          "Issue an invoice linked to the maintenance ticket",
          "Track ticket updates and statuses",
        ],
      },
      {
        code: "03",
        title: "External Customer Portal",
        en: "Customer Portal",
        items: [
          "Independent external portal for customers",
          "Each customer sees only devices registered under their name",
          "Follow up on their maintenance tickets",
          "View maintenance stages and updates",
          "Secure customer data and block access to others’ records",
        ],
      },
      {
        code: "04",
        title: "Reports & Dashboard",
        en: "Reports & Dashboard",
        items: [
          "Reports on maintenance ticket stages",
          "Reports on assigned, overdue, and completed tickets by engineer",
          "Inventory and spare-parts movement reports",
          "Engineer custody reports",
          "Main and branch warehouse reports",
          "Device and warranty-period reports",
          "Dynamic dashboard for performance indicators",
          "Filters by period, engineer, branch, and ticket status",
        ],
      },
      {
        code: "05",
        title: "Invoicing & Collections",
        en: "Invoicing & Collections",
        items: [
          "Issue invoices linked to maintenance tickets",
          "Record service and spare-parts values",
          "Record collected and outstanding amounts",
          "Link invoices to maintenance operations",
        ],
      },
      {
        code: "06",
        title: "Notifications & SMS",
        en: "Notifications & SMS",
        items: [
          "SMS on device intake",
          "SMS when maintenance is complete and the device is ready",
          "SMS on device delivery",
          "Link messages to system events per agreed settings",
        ],
      },
      {
        code: "07",
        title: "Engineer Expenses",
        en: "Engineer Expenses",
        items: [
          "Record travel expenses",
          "Record accommodation expenses",
          "Record cost of spare parts purchased by the engineer for a specific project",
          "Link expenses to the engineer and project name",
          "Record date, amount, details, and supporting attachments",
          "Review expenses per engineer and per project via reports",
        ],
      },
      {
        code: "08",
        title: "Engineer Location Tracking",
        en: "Engineer Location Tracking",
        items: [
          "Track engineers’ field locations",
          "Show locations on the map from available location data",
          "Link engineer locations to maintenance work and assigned tickets",
          "Define view permissions and location update mechanism",
        ],
      },
    ] as ModuleItem[],
  },
  workflow: {
    ar: [
      "استلام الجهاز وتسجيل بيانات العميل والسيريال والضمان",
      "إنشاء التكت وإسناد المهندس",
      "تشخيص العطل وتحديد قطع الغيار",
      "صرف القطع من المخزن أو عهدة المهندس",
      "تنفيذ الصيانة وتسجيل المصروفات",
      "إصدار الفاتورة وتسجيل التحصيل",
      "إخطار العميل",
      "تسليم الجهاز وإغلاق التكت",
    ],
    en: [
      "Receive the device and register customer, serial, and warranty data",
      "Create the ticket and assign the engineer",
      "Diagnose the fault and identify spare parts",
      "Issue parts from warehouse or engineer custody",
      "Perform maintenance and record expenses",
      "Issue the invoice and record collection",
      "Notify the customer",
      "Deliver the device and close the ticket",
    ],
  },
};
