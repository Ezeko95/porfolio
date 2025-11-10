"use client";

import { useI18n } from "@/lib/i18n-context";
import Image from "next/image";
import { Code2, Target, Zap, Award, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { certifications } from "@/lib/certifications";

export function AboutClient() {
  const { t } = useI18n();

  return (
    <div className="container mx-auto py-12 md:py-24 ">
      <div className="space-y-12 animate-fade-in lg:space-y-36">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {t.about.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/gianluca-portrait.png"
              alt="Retrato de Gianluca Cianchi"
              className="object-center"
              width={600}
              height={600}
            />
          </div>

          <div className="space-y-6 sm:">
            <div>
              <h2 className="text-2xl font-semibold mb-4">{t.about.title}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.story}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                {t.about.philosophy.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.philosophy.text}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mt-12">
          <div className="p-6 rounded-lg border bg-card text-center space-y-3">
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-primary/10">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold text-lg">
              {t.about.values.focus.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t.about.values.focus.description}
            </p>
          </div>

          <div className="p-6 rounded-lg border bg-card text-center space-y-3">
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-primary/10">
                <Target className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold text-lg">
              {t.about.values.objective.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t.about.values.objective.description}
            </p>
          </div>

          <div className="p-6 rounded-lg border bg-card text-center space-y-3">
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-primary/10">
                <Zap className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold text-lg">
              {t.about.values.motivation.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t.about.values.motivation.description}
            </p>
          </div>
        </div>

        <div className="mt-16 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.about.certifications.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.about.certifications.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certification) => (
              <Card
                key={certification.id}
                className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">
                    {certification.title}
                  </CardTitle>
                  <CardDescription>{certification.issuer}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground mb-4">
                    {certification.description}
                  </p>
                  <div className="text-xs text-muted-foreground">
                    {t.about.certifications.issuedOn}: {certification.issueDate}
                  </div>
                </CardContent>
                {certification.credentialUrl && (
                  <CardFooter>
                    <a
                      href={certification.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center gap-1">
                      {t.about.certifications.viewCredential}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
