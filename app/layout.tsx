import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/lib/i18n-context";
import { ToastProvider } from "@/components/toast-provider";
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
  authors: [{ name: "Gianluca Cianchi" }],
  creator: "Gianluca Cianchi",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://gianluca-cianchi.com.ar",
    title: "Gianluca Cianchi Portfolio - Desarrollador Full-Stack",
    description:
      "Desarrollador Full-Stack especializado en JavaScript, TypeScript, Next.js y Python/Django.",
    siteName: "Gianluca Cianchi Portfolio",
    images: [
      {
        url: "/gianluca-avatar.png",
        width: 512,
        height: 512,
        alt: "Gianluca Cianchi avatar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gianluca Cianchi Portfolio - Desarrollador Full-Stack",
    images: [
      {
        url: "/gianluca-avatar.png",
        width: 512,
        height: 512,
        alt: "Gianluca Cianchi avatar",
      },
    ],
    description:
      "Desarrollador Full-Stack especializado en JavaScript, TypeScript, Next.js y Python/Django.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://porfolio-lovat-psi.vercel.app/" />
      </head>
      <body className={inter.variable}>
        <JsonLd />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <I18nProvider>
            <ToastProvider>
              <div className="flex min-h-screen flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </ToastProvider>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
