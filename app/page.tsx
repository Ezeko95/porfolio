import { HomeClient } from "@/components/home-client";

export const metadata = {
  title: "Inicio",
  description:
    "Desarrollador Full-Stack especializado en JavaScript, TypeScript, Next.js y Python/Django.",
  openGraph: {
    title: "Portfolio - Desarrollador Full-Stack",
    description:
      "Desarrollador Full-Stack especializado en JavaScript, TypeScript, Next.js y Python/Django.",
  },
};

export default function HomePage() {
  return <HomeClient />;
}
