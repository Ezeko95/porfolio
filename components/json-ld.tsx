export function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Full-Stack Developer',
    jobTitle: 'Desarrollador Full-Stack',
    description: 'Desarrollador Full-Stack especializado en JavaScript, TypeScript, Next.js y Python/Django.',
    url: 'https://yourdomain.com',
    sameAs: [
      'https://github.com',
      'https://linkedin.com',
    ],
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Python',
      'Django',
      'PostgreSQL',
      'Web Development',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
