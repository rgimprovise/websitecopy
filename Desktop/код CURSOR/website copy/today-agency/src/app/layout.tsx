import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LeadModalProvider } from "@/context/LeadModalContext";
import { LeadModal } from "@/components/ui/LeadModal";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALARCEV — data-driven подход в продажах и маркетинге",
  description:
    "Лаборатория влияния ALARCEV. Решаем комплексные задачи по росту выручки: сквозная аналитика, performance-маркетинг, аудит продаж, корпоративные базы знаний.",
  openGraph: {
    title: "ALARCEV — data-driven подход в продажах и маркетинге",
    description:
      "Лаборатория влияния ALARCEV. Решаем комплексные задачи по росту выручки вашей компании.",
    type: "website",
    url: "https://alarcev.n8nrgimprovise.space",
    siteName: "ALARCEV",
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
        <Script id="yandex-metrika" strategy="beforeInteractive">
          {`(function(m,e,t,r,i,k,a){
  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  m[i].l=1*new Date();
  for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
})(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=108224471','ym');
ym(108224471,'init',{ssr:true,webvisor:true,clickmap:true,ecommerce:"dataLayer",referrer:document.referrer,url:location.href,accurateTrackBounce:true,trackLinks:true});`}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/108224471"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        <LeadModalProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <LeadModal />
        </LeadModalProvider>
      </body>
    </html>
  );
}
