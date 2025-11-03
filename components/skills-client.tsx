"use client";

import { useI18n } from "@/lib/i18n-context";
import {
  Code,
  Database,
  Globe,
  GitBranch,
  Terminal,
  Layout,
  Server,
  Cpu,
} from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    icon: Layout,
    skills: [
      { name: "JavaScript", level: "Avanzado" },
      { name: "TypeScript", level: "Avanzado" },
      { name: "React", level: "Avanzado" },
      { name: "Next.js", level: "Avanzado" },
      { name: "HTML5/CSS3", level: "Avanzado" },
      { name: "TailwindCSS", level: "Avanzado" },
    ],
  },
  {
    id: "backend",
    icon: Server,
    skills: [
      { name: "Python", level: "Avanzado" },
      { name: "Django", level: "Avanzado" },
      { name: "Django REST Framework", level: "Avanzado" },
      { name: "Node.js", level: "Intermedio" },
      { name: "API REST", level: "Avanzado" },
      { name: "GraphQL", level: "Intermedio" },
    ],
  },
  {
    id: "database",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: "Avanzado" },
      { name: "MySQL", level: "Intermedio" },
      { name: "SQLite", level: "Avanzado" },
      { name: "MongoDB", level: "Intermedio" },
    ],
  },
  {
    id: "tools",
    icon: Terminal,
    skills: [
      { name: "Git", level: "Avanzado" },
      { name: "Docker", level: "Intermedio" },
      { name: "Linux", level: "Intermedio" },
      { name: "CI/CD", level: "Intermedio" },
      { name: "Testing", level: "Intermedio" },
    ],
  },
];

export function SkillsClient() {
  const { t } = useI18n();

  return (
    <div className="container mx-auto py-12 md:py-24">
      <div className="space-y-12 animate-fade-in">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {t.skills.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.skills.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="p-6 rounded-lg border bg-card space-y-4 animate-slide-up">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-semibold">
                    {category.id === "frontend" && t.skills.frontend}
                    {category.id === "backend" && t.skills.backend}
                    {category.id === "database" && "Base de Datos"}
                    {category.id === "tools" && t.skills.tools}
                  </h2>
                </div>
                <div className="grid gap-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-primary ${
                            skill.level === "Avanzado"
                              ? "w-full"
                              : skill.level === "Intermedio"
                              ? "w-3/4"
                              : "w-1/2"
                          } transition-all`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
