export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Full-Stack Developer",
    jobTitle: "Desarrollador Full-Stack",
    description:
      "Desarrollador Full-Stack especializado en JavaScript, TypeScript, Next.js y Python/Django.",
    url: "https://gianluca-cianchi.com.ar/",
    sameAs: [
      "https://github.com/Ezeko95",
      "https://www.linkedin.com/in/gianluca-cianchi/",
      "mailto:ciangianluca@hotmail.com",
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Python",
      "Django",
      "PostgreSQL",
      "Web Development",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
