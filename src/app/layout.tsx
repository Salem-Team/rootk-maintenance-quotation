import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "عرض فني وتجاري — نظام إدارة مركز الصيانة | ROOTK Systems",
  description:
    "عرض فني وتجاري لنظام ERP متخصص في إدارة مراكز صيانة الأجهزة — مقدّم من ROOTK Systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className="min-h-dvh antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
