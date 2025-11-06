import { AboutClient } from "@/components/about-client";

export const metadata = {
  title: "Sobre Mí",
  description:
    "Conoce más sobre mi experiencia, filosofía y enfoque en el desarrollo de software.",
  url: "https://gianluca-cianchi.com.ar/about",
  openGraph: {
    title: "Sobre Mí | Gianluca Cianchi Portfolio",
    description:
      "Conoce más sobre mi experiencia, filosofía y enfoque en el desarrollo de software.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
