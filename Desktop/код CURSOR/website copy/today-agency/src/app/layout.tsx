import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "today — data-driven подход в продажах и маркетинге",
  description:
    "Решаем комплексные задачи по росту выручки вашей компании: сквозная аналитика, performance-маркетинг, аудит и консультации отделов продаж.",
  openGraph: {
    title: "today — data-driven подход в продажах и маркетинге",
    description:
      "Решаем комплексные задачи по росту выручки вашей компании.",
    type: "website",
    url: "https://today-agency.ru",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="antialiased">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
