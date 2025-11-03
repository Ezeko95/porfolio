"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export function HomeClient() {
  const { t } = useI18n();

  return (
    <div className="container mx-auto py-12 md:py-24 lg:py-32">
      <section className="flex flex-col items-center text-center space-y-8 animate-fade-in">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {t.home.hero.title}
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl">
            {t.home.hero.subtitle}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.home.hero.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="group ">
            <Link href="/projects" className="flex items-center justify-center">
              {t.home.hero.ctaProjects}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button variant="outline" size="lg">
            <Link href="/contact">{t.home.hero.ctaContact}</Link>
          </Button>
        </div>
      </section>

      <section className="mt-24 grid gap-8 md:grid-cols-3 animate-slide-up">
        <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-lg border bg-card">
          <div className="p-3 rounded-full bg-primary/10 mb-4">
            <Code className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">
            {t.home.values.cleanCode.title}
          </h3>
          <p className="text-muted-foreground">
            {t.home.values.cleanCode.description}
          </p>
        </div>

        <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-lg border bg-card">
          <div className="p-3 rounded-full bg-primary/10 mb-4">
            <Zap className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">
            {t.home.values.performance.title}
          </h3>
          <p className="text-muted-foreground">
            {t.home.values.performance.description}
          </p>
        </div>

        <div className="flex flex-col items-center text-center space-y-2 p-6 rounded-lg border bg-card">
          <div className="p-3 rounded-full bg-primary/10 mb-4">
            <ArrowRight className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold">{t.home.values.ux.title}</h3>
          <p className="text-muted-foreground">
            {t.home.values.ux.description}
          </p>
        </div>
      </section>
    </div>
  );
}
