import { SkillsClient } from "@/components/skills-client";

export const metadata = {
  title: "Habilidades",
  description:
    "Tecnologías y herramientas que uso para construir productos digitales.",
  url: "https://gianluca-cianchi.com.ar/skills",
  openGraph: {
    title: "Habilidades | Gianluca Cianchi Portfolio",
    description:
      "Tecnologías y herramientas que uso para construir productos digitales.",
  },
};

export default function SkillsPage() {
  return <SkillsClient />;
}
