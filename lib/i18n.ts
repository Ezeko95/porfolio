export type Locale = "es" | "en";

export const defaultLocale: Locale = "es";

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      skills: "Habilidades",
      about: "Sobre Mí",
      contact: "Contacto",
    },
    home: {
      hero: {
        title: "Desarrollador Full-Stack",
        subtitle: "Construyo aplicaciones web rápidas, seguras y optimizadas",
        description:
          "Especializado en JavaScript, TypeScript, Next.js y Python/Django. Enfocado en crear experiencias de usuario excepcionales y código mantenible.",
        ctaProjects: "Ver Proyectos",
        ctaContact: "Contactarme",
      },
      highlightedProjects: {
        title: "Mis proyectos",
        viewAll: "Ver todos los proyectos",
      },
      values: {
        cleanCode: {
          title: "Código Limpio",
          description:
            "Escribo código mantenible y escalable siguiendo las mejores prácticas de la industria.",
        },
        performance: {
          title: "Alto Rendimiento",
          description:
            "Optimizo cada aplicación para cargar rápido y proporcionar una experiencia fluida.",
        },
        ux: {
          title: "Enfocado en UX",
          description:
            "Priorizo la experiencia del usuario en cada decisión de diseño y desarrollo.",
        },
      },
    },
    projects: {
      title: "Proyectos",
      description: "Algunos de los proyectos en los que he trabajado",
      viewProject: "Ver Proyecto",
      viewCode: "Ver Código",
      tech: "Tecnologías",
    },
    skills: {
      title: "Habilidades",
      description:
        "Tecnologías y herramientas que uso para construir productos digitales",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Herramientas",
    },
    about: {
      title: "Sobre Mí",
      subtitle: "Construyendo productos digitales con propósito",
      story:
        "Soy un desarrollador full-stack apasionado por crear soluciones web que combinen funcionalidad, rendimiento y una experiencia de usuario excepcional. Mi enfoque se centra en escribir código limpio, mantenible y escalable.",
      philosophy: {
        title: "Mi Filosofía",
        text: "Creo que el mejor software es aquel que resuelve problemas reales de manera eficiente. Priorizo la claridad en el código, la optimización del rendimiento y la accesibilidad, siempre con el usuario final en mente.",
      },
    },
    contact: {
      title: "Contacto",
      description: "¿Tienes un proyecto en mente? Me encantaría escucharlo.",
      form: {
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        send: "Enviar",
        sending: "Enviando...",
        success: "¡Mensaje enviado! Te responderé pronto.",
      },
      whatsapp: "Contactar por WhatsApp",
    },
    footer: {
      copyright: "Todos los derechos reservados",
      built: "Construido con Next.js y TailwindCSS",
      quickLinks: "Enlaces Rápidos",
      social: "Redes Sociales",
    },
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      about: "About",
      contact: "Contact",
    },
    home: {
      hero: {
        title: "Full-Stack Developer",
        subtitle: "Building fast, secure, and optimized web applications",
        description:
          "Specialized in JavaScript, TypeScript, Next.js, and Python/Django. Focused on creating exceptional user experiences and maintainable code.",
        ctaProjects: "View Projects",
        ctaContact: "Contact Me",
      },
      highlightedProjects: {
        title: "My Projects",
        viewAll: "View all projects",
      },
      values: {
        cleanCode: {
          title: "Clean Code",
          description:
            "I write maintainable and scalable code following industry best practices.",
        },
        performance: {
          title: "High Performance",
          description:
            "I optimize every application to load fast and provide a smooth experience.",
        },
        ux: {
          title: "UX Focused",
          description:
            "I prioritize user experience in every design and development decision.",
        },
      },
    },
    projects: {
      title: "Projects",
      description: "Some of the projects I've worked on",
      viewProject: "View Project",
      viewCode: "View Code",
      tech: "Technologies",
    },
    skills: {
      title: "Skills",
      description: "Technologies and tools I use to build digital products",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools",
    },
    about: {
      title: "About Me",
      subtitle: "Building digital products with purpose",
      story:
        "I'm a full-stack developer passionate about creating web solutions that combine functionality, performance, and exceptional user experience. My focus is on writing clean, maintainable, and scalable code.",
      philosophy: {
        title: "My Philosophy",
        text: "I believe the best software is one that solves real problems efficiently. I prioritize code clarity, performance optimization, and accessibility, always with the end user in mind.",
      },
    },
    contact: {
      title: "Contact",
      description: "Have a project in mind? I'd love to hear about it.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        sending: "Sending...",
        success: "Message sent! I'll get back to you soon.",
      },
      whatsapp: "Contact via WhatsApp",
    },
    footer: {
      copyright: "All rights reserved",
      built: "Built with Next.js and TailwindCSS",
      quickLinks: "Quick Links",
      social: "Social Media",
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
