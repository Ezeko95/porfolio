import { SkillsClient } from "@/components/skills-client";

export const metadata = {
  title: "Habilidades",
  description:
    "Tecnologías y herramientas que uso para construir productos digitales.",
  openGraph: {
    title: "Habilidades | Portfolio",
    description:
      "Tecnologías y herramientas que uso para construir productos digitales.",
  },
};

export default function SkillsPage() {
  return <SkillsClient />;
}
