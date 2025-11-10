"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n-context";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
  className?: string;
}

export function FAQ({ items, className }: FAQProps) {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Use provided items or fallback to translations, ensuring the array is mutable
  const faqItems: FAQItem[] = items 
    ? items 
    : Array.isArray(t.faq?.items) 
      ? [...t.faq.items] 
      : [];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  if (!faqItems || faqItems.length === 0) {
    return null;
  }

  return (
    <section className={cn("container mx-auto py-12 md:py-24", className)}>
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.faq?.title || "Preguntas Frecuentes"}
          </h2>
          {t.faq?.description && (
            <p className="text-muted-foreground text-lg">
              {t.faq.description}
            </p>
          )}
        </div>

        <div className="space-y-2">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={cn(
                  "rounded-lg border bg-card text-card-foreground shadow-sm",
                  "transition-all duration-200",
                  isOpen && "shadow-md"
                )}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className={cn(
                    "w-full px-6 py-4 text-left flex items-center justify-between cursor-pointer",
                    "hover:bg-accent/50 transition-colors",
                    "focus:outline-none rounded-lg"
                  )}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-base pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-200",
                      isOpen && "transform rotate-180"
                    )}
                  />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div className="px-6 pb-4 pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

