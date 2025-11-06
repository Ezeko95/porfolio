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
import { useToast } from "@/components/toast-provider";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function ContactClient() {
  const { t } = useI18n();
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
    } else if (formData.name.trim().length > 100) {
      newErrors.name = "El nombre no puede exceder 100 caracteres";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Por favor ingresa un email válido";
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "El mensaje no puede exceder 1000 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      showToast("Por favor corrige los errores en el formulario", "error");
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      showToast(
        t.contact.form.success || "Mensaje enviado exitosamente",
        "success"
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Ocurrió un error. Por favor intenta nuevamente.";
      showToast(errorMessage, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
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
              <CardTitle>{t.contact.form.title}</CardTitle>
              <CardDescription>{t.contact.form.description}</CardDescription>
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
                    className={`w-full px-3 py-2 rounded-md border bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${
                      errors.name
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-input"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.name}
                    </p>
                  )}
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
                    className={`w-full px-3 py-2 rounded-md border bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${
                      errors.email
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-input"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.email}
                    </p>
                  )}
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
                    rows={5}
                    className={`w-full px-3 py-2 rounded-md border bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none ${
                      errors.message
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-input"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>
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
                <CardTitle>{t.contact.otherWays}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 ">
                <Button
                  variant="outline"
                  className="w-full justify-start hover:bg-secondary/80 p-6 hover:bg-green-500 hover:text-white hover:cursor-pointer">
                  <a
                    href="https://wa.me/5491156565405"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary ">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {t.contact.whatsapp}
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.contact.socialMedia}</CardTitle>
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
