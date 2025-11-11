"use client";

import Link from "next/link";
import { Moon, Sun, Languages, Download } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState, startTransition } from "react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/nav";
import { useI18n } from "@/lib/i18n-context";

export function Header() {
  const { theme, setTheme } = useTheme();
  const { locale, setLocale, t } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  const toggleLanguage = () => {
    setLocale(locale === "es" ? "en" : "es");
  };

  const downloadCV = () => {
    const cvFileName =
      locale === "es"
        ? "Gianluca-Cianchi-CV-es.pdf"
        : "Gianluca-Cianchi-CV-en.pdf";
    const link = document.createElement("a");
    link.href = `/${cvFileName}`;
    link.download = cvFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Portfolio - Gianluca Cianchi
        </Link>

        <div className="flex items-center gap-4">
          <Nav />

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="cursor-pointer"
              aria-label="Toggle language">
              <Languages className="h-5 w-5" />
            </Button>

            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="relative cursor-pointer">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            )}

            <Button
              variant="outline"
              size="sm"
              onClick={downloadCV}
              className="cursor-pointer"
              aria-label={t.nav.downloadCV}>
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">{t.nav.downloadCV}</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
