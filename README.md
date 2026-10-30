# ROOTK — نظام إدارة مركز الصيانة (عرض تجاري)

مشروع Next.js مستقل لعرض فني وتجاري من ROOTK Systems لمشروع **نظام إدارة مركز الصيانة**.

هذا المشروع منفصل تمامًا عن كوتيشن صفقة (`safqa-rootk-quotation`) ولا يشاركه الدومين أو إعدادات النشر.

## التشغيل المحلي

```bash
cd rootk-maintenance-quotation
npm install
npm run dev
```

- Local: http://localhost:3056/
- Build: `npm run build` ثم `npm start`
- Print / PDF: من المتصفح (زر طباعة / PDF أو Cmd/Ctrl+P)

## ربط دومين مستقل لاحقًا

1. انشر هذا المشروع على استضافة مستقلة (مثل Vercel / Netlify / GitHub Pages) كمشروع منفصل.
2. اربط الدومين الجديد من لوحة الاستضافة فقط لهذا المشروع.
3. لا تعدّل DNS أو إعدادات كوتيشن صفقة.
4. يمكن استخدام `NEXT_PUBLIC_SITE_URL` من `.env.example` عند الحاجة.

للنشر الثابت على GitHub Pages لمستودع مستقل:

```bash
GITHUB_PAGES=true npm run build
```

ثم ارفع مجلد `out/` أو فعّل Pages على المستودع الجديد فقط.
