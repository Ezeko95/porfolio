import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n-context";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio - Desarrollador Full-Stack",
    template: "%s | Portfolio",
  },
  description:
    "Desarrollador Full-Stack especializado en JavaScript, TypeScript, Next.js y Python/Django. Construyo aplicaciones web rápidas, seguras y optimizadas.",
  keywords: [
    "desarrollador full-stack",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Python",
    "Django",
    "React",
    "web development",
  ],
  authors: [{ name: "Portfolio" }],
  creator: "Portfolio",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://porfolio-lovat-psi.vercel.app/",
    title: "Portfolio - Desarrollador Full-Stack",
    description:
      "Desarrollador Full-Stack especializado en JavaScript, TypeScript, Next.js y Python/Django.",
    siteName: "Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Desarrollador Full-Stack",
    description:
      "Desarrollador Full-Stack especializado en JavaScript, TypeScript, Next.js y Python/Django.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://porfolio-lovat-psi.vercel.app/" />
      </head>
      <body className={inter.variable}>
        <JsonLd />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <I18nProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
