'use client';

import { useI18n } from '@/lib/i18n-context';
import Image from 'next/image';
import { Code2, Target, Zap } from 'lucide-react';

export function AboutClient() {
  const { t } = useI18n();

  return (
    <div className="container mx-auto py-12 md:py-24">
      <div className="space-y-12 animate-fade-in">
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
              src="https://picsum.photos/600/600?random=profile"
              alt="Foto de perfil"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Mi Historia</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.story}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">{t.about.philosophy.title}</h3>
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
            <h3 className="font-semibold text-lg">Código Limpio</h3>
            <p className="text-sm text-muted-foreground">
              Priorizo la legibilidad, mantenibilidad y escalabilidad en cada línea de código.
            </p>
          </div>

          <div className="p-6 rounded-lg border bg-card text-center space-y-3">
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-primary/10">
                <Target className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold text-lg">Enfocado en Resultados</h3>
            <p className="text-sm text-muted-foreground">
              Cada proyecto debe resolver problemas reales y agregar valor tangible.
            </p>
          </div>

          <div className="p-6 rounded-lg border bg-card text-center space-y-3">
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-primary/10">
                <Zap className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold text-lg">Optimización</h3>
            <p className="text-sm text-muted-foreground">
              Rendimiento y velocidad son esenciales para una excelente experiencia de usuario.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
