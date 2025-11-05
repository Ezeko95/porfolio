"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { projects } from "@/lib/projects";

export function ProjectsCarousel() {
  const { t } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get first 3 projects as highlighted projects
  const highlightedProjects = projects.slice(0, 3);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % highlightedProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + highlightedProjects.length) % highlightedProjects.length
    );
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="mt-24 py-12 animate-slide-up">
      <div className="container mx-auto">
        <div className="flex sm:items-center justify-center gap-4 mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t.home.highlightedProjects.title}
          </h2>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {highlightedProjects.map((project) => (
                <div key={project.id} className="min-w-full shrink-0 px-2">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative w-full h-64 md:h-80">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">
                          {t.projects.tech}:
                        </p>
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
                    <CardFooter>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full hover:bg-secondary/80">
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2">
                          <ExternalLink className="h-4 w-4" />
                          {t.projects.viewProject}
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border shadow-lg hover:bg-background transition-colors"
            aria-label="Previous project">
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border shadow-lg hover:bg-background transition-colors"
            aria-label="Next project">
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {highlightedProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
