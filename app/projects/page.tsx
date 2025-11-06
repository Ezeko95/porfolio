import { ProjectsClient } from "@/components/projects-client";

export const metadata = {
  title: "Proyectos",
  description:
    "Algunos de los proyectos en los que he trabajado como desarrollador full-stack.",
  url: "https://gianluca-cianchi.com.ar/projects",
  openGraph: {
    title: "Proyectos | Gianluca Cianchi Portfolio",
    description:
      "Algunos de los proyectos en los que he trabajado como desarrollador full-stack.",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
