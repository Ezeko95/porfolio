"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export function Footer() {
  const { t } = useI18n();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Portfolio</h3>
            <p className="text-sm text-muted-foreground">{t.footer.built}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.quickLinks}</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t.nav.home}
              </Link>
              <Link
                href="/projects"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t.nav.projects}
              </Link>
              <Link
                href="/skills"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t.nav.skills}
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t.nav.about}
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t.nav.contact}
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{t.footer.social}</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Ezeko95"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/gianluca-cianchi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:ciangianluca@hotmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Portfolio. {t.footer.copyright}.
          </p>
        </div>
      </div>
    </footer>
  );
}
