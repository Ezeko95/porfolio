"use client";

import { useState, useEffect, useCallback } from "react";
import { Send, Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n-context";
import { useToast } from "@/components/toast-provider";
import {
  fetchGuestbookMessages,
  createGuestbookMessage,
} from "@/lib/services/guestbook";
import { GuestbookMessage, PaginationMeta } from "@/lib/types/guestbook";

interface FormErrors {
  name?: string;
  message?: string;
}

const MESSAGES_PER_PAGE = 6;

export function GuestbookClient() {
  const { t } = useI18n();
  const { showToast } = useToast();

  const [messages, setMessages] = useState<GuestbookMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationMeta, setPaginationMeta] = useState<PaginationMeta>({
    total: 0,
    page: 1,
    limit: MESSAGES_PER_PAGE,
    totalPages: 1,
  });

  const loadMessages = useCallback(
    async (page: number = 1) => {
      try {
        setIsLoading(true);
        const response = await fetchGuestbookMessages({
          page,
          limit: MESSAGES_PER_PAGE,
        });
        setMessages(response.data);
        setPaginationMeta(response.meta);
        setCurrentPage(page);
      } catch (error) {
        console.error("Failed to load messages:", error);
        showToast(t.home.guestbook.form.errorLoad, "error");
      } finally {
        setIsLoading(false);
      }
    },
    [showToast, t]
  );

  useEffect(() => {
    loadMessages(1);
  }, [loadMessages]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const v = t.home.guestbook.validation;

    if (!formData.name.trim()) {
      newErrors.name = v.nameRequired;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = v.nameMin;
    } else if (formData.name.trim().length > 50) {
      newErrors.name = v.nameMax;
    }

    if (!formData.message.trim()) {
      newErrors.message = v.messageRequired;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = v.messageMin;
    } else if (formData.message.trim().length > 500) {
      newErrors.message = v.messageMax;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast(t.home.guestbook.form.errorFix, "error");
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      await createGuestbookMessage({
        name: formData.name.trim(),
        content: formData.message.trim(),
      });

      setFormData({ name: "", message: "" });
      showToast(t.home.guestbook.form.success, "success");

      // Reload first page to show new message at the top
      loadMessages(1);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : t.home.guestbook.form.errorSend;
      showToast(errorMessage, "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="container mx-auto py-12 md:py-24">
      <div className="space-y-12 animate-fade-in">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {t.home.guestbook.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.home.guestbook.subtitle}
          </p>
        </div>

        {/* Message Form */}
        <div className="max-w-2xl mx-auto p-6 rounded-lg border bg-card">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2">
                {t.home.guestbook.form.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t.home.guestbook.form.namePlaceholder}
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
                htmlFor="message"
                className="block text-sm font-medium mb-2">
                {t.home.guestbook.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.home.guestbook.form.messagePlaceholder}
                rows={4}
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
              className="w-full cursor-pointer">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t.home.guestbook.form.sending}
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  {t.home.guestbook.form.send}
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Messages Display */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : messages.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {t.home.guestbook.empty}
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="flex flex-col space-y-3 p-6 rounded-lg border bg-card hover:shadow-md transition-shadow">
                  <div>
                    <h4 className="font-semibold">{msg.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {msg.createdAt}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">{msg.content}</p>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {paginationMeta.totalPages > 1 && (
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => loadMessages(currentPage - 1)}
                    disabled={currentPage === 1 || isLoading}
                    className="cursor-pointer">
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    {t.home.guestbook.pagination.previous}
                  </Button>

                  <div className="flex items-center gap-1">
                    {Array.from(
                      { length: paginationMeta.totalPages },
                      (_, i) => i + 1
                    ).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => loadMessages(page)}
                        disabled={isLoading}
                        className="cursor-pointer min-w-10">
                        {page}
                      </Button>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => loadMessages(currentPage + 1)}
                    disabled={
                      currentPage === paginationMeta.totalPages || isLoading
                    }
                    className="cursor-pointer">
                    {t.home.guestbook.pagination.next}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground">
                  {t.home.guestbook.pagination.showing}{" "}
                  {(currentPage - 1) * paginationMeta.limit + 1}{" "}
                  {t.home.guestbook.pagination.to}{" "}
                  {Math.min(
                    currentPage * paginationMeta.limit,
                    paginationMeta.total
                  )}{" "}
                  {t.home.guestbook.pagination.of} {paginationMeta.total}{" "}
                  {t.home.guestbook.pagination.messages}
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
