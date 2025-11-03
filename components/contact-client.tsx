"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageCircle, Mail, Github, Linkedin } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export function ContactClient() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (client-side only for now)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container mx-auto py-12 md:py-24">
      <div className="space-y-12 animate-fade-in">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {t.contact.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Envíame un mensaje</CardTitle>
              <CardDescription>
                Completa el formulario y te responderé lo antes posible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none"
                  />
                </div>
                {submitted && (
                  <div className="p-3 rounded-md bg-green-500/10 text-green-600 dark:text-green-400 text-sm">
                    {t.contact.form.success}
                  </div>
                )}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full">
                  {isSubmitting ? t.contact.form.sending : t.contact.form.send}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Otras formas de contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start hover:bg-secondary/80 p-6">
                  <a
                    href="https://wa.me/5491156565405"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {t.contact.whatsapp}
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Redes Sociales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Ezeko95"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border hover:bg-accent transition-colors"
                    aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gianluca-cianchi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border hover:bg-accent transition-colors"
                    aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:ciangianluca@hotmail.com"
                    className="p-3 rounded-lg border hover:bg-accent transition-colors"
                    aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
