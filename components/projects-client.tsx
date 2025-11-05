"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import Image from "next/image";
import { projects } from "@/lib/projects";

export function ProjectsClient() {
  const { t } = useI18n();

  return (
    <div className="container mx-auto py-12 md:py-24">
      <div className="space-y-8 animate-fade-in">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {t.projects.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.projects.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-2">
                  <p className="text-sm font-medium">{t.projects.tech}:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 hover:bg-secondary/80 p-6 hover:shadow-lg cursor-pointer">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer "
                    className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    {t.projects.viewProject}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
