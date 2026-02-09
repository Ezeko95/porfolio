"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, MessageSquare } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import Image from "next/image";
import { FAQ } from "@/components/faq";

export function HomeClient() {
  const { t } = useI18n();

  return (
    <div className="container mx-auto py-12 md:py-24 lg:pb-32">
      <section className="flex flex-col items-center text-center space-y-8 animate-fade-in">
        <div>
          <Image
            src="/gianluca-avatar.png"
            alt="Gianluca Cianchi avatar"
            width={300}
            height={300}
          />
        </div>
        <div className="space-y-4 max-w-4xl">
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
          <Button size="lg" className="group cursor-pointer">
            <Link href="/projects" className="flex items-center justify-center">
              {t.home.hero.ctaProjects}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="cursor-pointer">
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

      <div className="border-t border-gray-500 mt-32" />

      <FAQ />

      <section className="mt-24 space-y-8 animate-slide-up">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <MessageSquare className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              {t.home.guestbook.title}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.home.guestbook.subtitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Dummy Message 1 */}
          <div className="flex flex-col space-y-3 p-6 rounded-lg border bg-card">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold">Sarah Johnson</h4>
                <p className="text-xs text-muted-foreground">2 days ago</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Amazing portfolio! Your projects are really impressive. Keep up the great work! 🚀
            </p>
          </div>

          {/* Dummy Message 2 */}
          <div className="flex flex-col space-y-3 p-6 rounded-lg border bg-card">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold">Michael Chen</h4>
                <p className="text-xs text-muted-foreground">5 days ago</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Love the clean design and smooth animations. Very professional!
            </p>
          </div>

          {/* Dummy Message 3 */}
          <div className="flex flex-col space-y-3 p-6 rounded-lg border bg-card">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold">Emma Rodriguez</h4>
                <p className="text-xs text-muted-foreground">1 week ago</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Your skills section is so well organized. Inspired me to update my own portfolio!
            </p>
          </div>

          {/* Dummy Message 4 */}
          <div className="flex flex-col space-y-3 p-6 rounded-lg border bg-card">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold">David Kim</h4>
                <p className="text-xs text-muted-foreground">1 week ago</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Great work on the dark mode implementation. Transitions are buttery smooth!
            </p>
          </div>

          {/* Dummy Message 5 */}
          <div className="flex flex-col space-y-3 p-6 rounded-lg border bg-card">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold">Lisa Anderson</h4>
                <p className="text-xs text-muted-foreground">2 weeks ago</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Just wanted to say hi and wish you all the best with your projects! 👋
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Button variant="outline" size="lg" className="group">
            <Link href="/messages" className="flex items-center">
              {t.home.guestbook.viewAll}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      <div className="border-t border-gray-500 mt-32" />

      <div className="container mx-auto">
        <div className="flex justify-center">
          <Button variant="outline" size="lg">
            <Link href="/contact">{t.home.hero.ctaContact}</Link>
          </Button>
        </div>
      </div>
      <div className="border-t border-gray-500 mt-32" />
    </div>
  );
}
