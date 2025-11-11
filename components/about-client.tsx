"use client";

import { useI18n } from "@/lib/i18n-context";
import Image from "next/image";
import {
  Code2,
  Target,
  Zap,
  Award,
  ExternalLink,
  Briefcase,
  Code,
} from "lucide-react";
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

        <div className="border-t border-gray-500" />

        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.about.values.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.about.values.description}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 ">
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
        </div>

        <div className="border-t border-gray-500" />

        <div className="space-y-8 mt-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {t.about.experience.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.about.experience.description}
            </p>
          </div>
          <Card className="animate-slide-up">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">
                    {t.about.experience.fullStack.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {t.about.experience.fullStack.period}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {t.about.experience.fullStack.description}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.experience.fullStack.focus}
              </p>
              <div className="space-y-3">
                <p className="font-semibold">
                  {t.about.experience.fullStack.projects}
                </p>
                <ul className="space-y-4">
                  {t.about.experience.fullStack.projectsList.map(
                    (project, index) => (
                      <li key={index} className="space-y-1">
                        <p className="font-medium">{project.name}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed pt-2">
                {t.about.experience.fullStack.approach}
              </p>
            </CardContent>
          </Card>

          <Card className="animate-slide-up">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">
                    {t.about.experience.technician.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {t.about.experience.technician.period}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {t.about.experience.technician.description}
              </p>
              <div className="space-y-3">
                <p className="font-semibold">
                  {t.about.experience.technician.impact}
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  {t.about.experience.technician.skills.map((skill, index) => (
                    <li key={index} className="text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed pt-2">
                {t.about.experience.technician.conclusion}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="border-t border-gray-500" />

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
