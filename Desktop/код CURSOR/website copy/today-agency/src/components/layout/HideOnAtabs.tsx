"use client";

import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

/**
 * Скрывает дочерние элементы на всех путях /a-tabs/* — нужно, чтобы
 * глобальный header Alarcev и footer (где упомянута ИП Лушанина и
 * коммерческий нав) не появлялись на страницах расширения A-TABS.
 * Это требование A-TABS брифа: страницы должны выглядеть как
 * информационная документация расширения, без коммерческого окружения.
 */
export function HideOnAtabs({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/a-tabs")) return null;
  return <>{children}</>;
}
