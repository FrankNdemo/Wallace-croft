import type { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

export function SiteLayout({
  children,
  hideFooter = false,
  navVariant = "dark",
}: {
  children: ReactNode;
  hideFooter?: boolean;
  navVariant?: "dark" | "light";
}) {
  return (
    <div className="min-h-screen bg-white text-ink">
      <SmoothScroll />
      <Navbar variant={navVariant} />
      <main>{children}</main>
      {hideFooter ? null : <Footer />}
    </div>
  );
}
