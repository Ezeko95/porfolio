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
      downloadCV: "Descargar CV",
    },
    home: {
      hero: {
        title: "Desarrollador Full-Stack",
        subtitle: "Construyo aplicaciones web rápidas, seguras y optimizadas",
        description:
          "Especializado en JavaScript, TypeScript, Next.js y Python/Django. Enfocado en crear experiencias de usuario excepcionales y código mantenible.",
        ctaProjects: "Ver Proyectos",
        ctaContact: "Contactame!",
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
        "Soy un desarrollador full-stack y estudiante en la Tecnicatura en Desarrollo de Software, apasionado por crear soluciones web que combinen funcionalidad, rendimiento y una experiencia de usuario excepcional. Mi enfoque se centra en escribir código limpio, mantenible y escalable.",
      philosophy: {
        title: "Mi Filosofía",
        text: "Creo que el mejor software es aquel que resuelve problemas reales de manera eficiente. Priorizo la claridad en el código, la optimización del rendimiento y la accesibilidad, siempre con el usuario final en mente.",
      },
      experience: {
        title: "Experiencia",
        description: "Experiencia y habilidades que aprendí en mi trayectoria	",
        fullStack: {
          title: "Desarrollador Web Full Stack",
          period: "Freelance | 2023 – Presente",
          description:
            "Desde 2023 trabajo de forma independiente desarrollando sitios y aplicaciones web modernas para empresas y emprendedores que buscan fortalecer su presencia digital.",
          focus:
            "Me enfoco en crear soluciones escalables, rápidas y optimizadas para SEO, aplicando buenas prácticas de desarrollo y diseño centrado en la experiencia del usuario.",
          projects: "He trabajado en proyectos como:",
          projectsList: [
            {
              name: "House & Garden",
              description:
                "Desarrollo de una tienda online completa con Next.js, PostgreSQL y Zustand. Integré pasarelas de pago con MercadoPago, notificaciones automáticas con Resend, y una arquitectura modular enfocada en rendimiento.",
            },
            {
              name: "Modelty Dashboard",
              description:
                "Creación de un panel administrativo con Next.js, estructuración de base de datos optimizada y diseño de interfaz intuitiva.",
            },
            {
              name: "Hermes Security Solutions (España)",
              description:
                "Desarrollo backend para una plataforma de IA aplicada a ciberseguridad, colaborando en la arquitectura de datos y la integración con modelos de machine learning.",
            },
          ],
          approach:
            "Mi enfoque combina lógica, diseño y rendimiento, priorizando la escalabilidad y la claridad del código en cada proyecto.",
        },
        technician: {
          title: "⚙️ Técnico Industrial Especializado en Impresoras HP",
          period: "Digital Market | 2018 – 2022 | Andalucía, España",
          description:
            "Durante más de cuatro años trabajé como técnico industrial especializado en impresoras de gran formato HP DesignJet y Latex, brindando soporte técnico, mantenimiento preventivo y resolución de problemas complejos a clientes empresariales.",
          impact:
            "Esa experiencia fortaleció mi perfil como desarrollador, dándome una base sólida en:",
          skills: [
            "Diagnóstico y resolución de problemas técnicos complejos.",
            "Pensamiento sistemático y enfoque en la eficiencia.",
            "Comunicación técnica con clientes y trabajo en entornos exigentes.",
          ],
          conclusion:
            "Estas habilidades se trasladaron naturalmente al desarrollo web: hoy aplico la misma mentalidad analítica y precisión técnica al escribir código, diseñar arquitecturas y optimizar sistemas digitales.",
        },
      },
      certifications: {
        title: "Certificaciones",
        description:
          "Certificaciones y credenciales que validan mi experiencia y conocimientos",
        issuedOn: "Emitida en",
        viewCredential: "Ver credencial",
      },
      values: {
        title: "Mis valores",
        description: "Valores que me guían en mi trabajo y en mi vida personal",
        focus: {
          title: "Mi enfoque",
          description:
            "Constantemente en crecimiento, aprendiendo y mejorando mis habilidades.",
        },
        objective: {
          title: "Mi objetivo",
          description:
            "Disfruto creando, resolviendo problemas y ayudando a las personas. Siempre dispuesto a ayudar y aprender de los demás.",
        },
        motivation: {
          title: "Mi motivación",
          description:
            "Me motiva la posibilidad de crear soluciones que impacten positivamente a la vida de las personas.",
        },
      },
    },
    contact: {
      title: "Contacto",
      description: "¿Tienes un proyecto en mente? Me encantaría escucharlo.",
      form: {
        title: "Envíame un mensaje",
        description: "Completa el formulario y te responderé lo antes posible.",
        name: "Nombre",
        email: "Email",
        message: "Mensaje",
        send: "Enviar",
        sending: "Enviando...",
        success: "¡Mensaje enviado! Te responderé pronto.",
      },
      otherWays: "Otras formas de contacto",
      socialMedia: "Redes Sociales",
      whatsapp: "Contactar por WhatsApp",
    },
    footer: {
      copyright: "Todos los derechos reservados",
      built: "Construido con Next.js y TailwindCSS",
      quickLinks: "Enlaces Rápidos",
      social: "Redes Sociales",
    },
    faq: {
      title: "Preguntas Frecuentes",
      description: "Respuestas a las preguntas más comunes sobre mis servicios",
      items: [
        {
          question: "¿Qué es un desarrollador full-stack?",
          answer:
            "Un desarrollador full-stack es un profesional que puede trabajar en ambos lados de la pila de desarrollo: frontend y backend. Puede crear interfaces de usuario, manejar bases de datos y desarrollar la lógica del servidor.",
        },
        {
          question: "¿En qué consiste tu trabajo?",
          answer:
            "Mi trabajo es hacer que los sitios web y las aplicaciones funcionen. El diseñador se ocupa de cómo se ven, y yo me ocupo de que todo eso cobre vida: que los botones hagan lo que deben, que los datos se guarden correctamente, que las páginas carguen rápido y que el sistema entero esté conectado entre sí.",
        },
        {
          question: "¿Podés diseñar un sitio web?",
          answer:
            "Si! Además de desarrollar sitios y aplicaciones web, también puedo encargarme del diseño. No soy diseñador profesional, pero aplico los principios básicos del diseño —como el equilibrio, la jerarquía visual y la elección de colores y tipografías— para crear sitios que se vean modernos, limpios y que transmitan lo que mis clientes buscan.",
        },
        {
          question: "¿Qué tecnologías usás?",
          answer:
            "Trabajo principalmente con JavaScript, TypeScript, Next.js para el frontend y Python/Django para el backend. También tengo experiencia con React, Node.js, PostgreSQL y diversas herramientas de desarrollo modernas.",
        },
        {
          question: "¿Cuánto tiempo tomás para desarrollar un proyecto?",
          answer:
            "El tiempo de desarrollo depende del alcance y complejidad del proyecto. Proyectos simples pueden tomar días o semanas, mientras que aplicaciones más complejas pueden requerir varios meses. Siempre proporciono estimaciones detalladas después de analizar los requisitos.",
        },
        {
          question: "¿Ofrecés mantenimiento después del lanzamiento?",
          answer:
            "Sí, ofrezco servicios de mantenimiento y soporte continuo. Esto incluye actualizaciones de seguridad, corrección de errores, mejoras de rendimiento y nuevas funcionalidades según las necesidades del proyecto.",
        },
        {
          question: "¿Cómo podés contactarme para un proyecto?",
          answer:
            "Puedes contactarme a través del formulario de contacto en esta página, o mediante mis redes sociales. Respondo a todas las consultas en un plazo de 24-48 horas.",
        },
      ],
    },
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      about: "About",
      contact: "Contact",
      downloadCV: "Download CV",
    },
    home: {
      hero: {
        title: "Full-Stack Developer",
        subtitle: "Building fast, secure, and optimized web applications",
        description:
          "Specialized in JavaScript, TypeScript, Next.js, and Python/Django. Focused on creating exceptional user experiences and maintainable code.",
        ctaProjects: "View Projects",
        ctaContact: "Contact Me!",
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
        "I'm a full-stack developer and Software Development student, passionate about creating web solutions that combine functionality, performance, and exceptional user experience. My focus is on writing clean, maintainable, and scalable code.",
      philosophy: {
        title: "My Philosophy",
        text: "I believe the best software is one that solves real problems efficiently. I prioritize code clarity, performance optimization, and accessibility, always with the end user in mind.",
      },
      experience: {
        title: "Experience",
        description: "Experience and abilities that I learned in my journey",
        fullStack: {
          title: "Full Stack Web Developer",
          period: "Freelance | 2023 – Present",
          description:
            "Since 2023, I've been working independently developing modern websites and web applications for companies and entrepreneurs looking to strengthen their digital presence.",
          focus:
            "I focus on creating scalable, fast, and SEO-optimized solutions, applying development best practices and user experience-centered design.",
          projects: "I've worked on projects such as:",
          projectsList: [
            {
              name: "House & Garden",
              description:
                "Development of a complete online store with Next.js, PostgreSQL, and Zustand. Integrated payment gateways with MercadoPago, automatic notifications with Resend, and a modular architecture focused on performance.",
            },
            {
              name: "Modelty Dashboard",
              description:
                "Creation of an administrative panel with Next.js, optimized database structure, and intuitive interface design.",
            },
            {
              name: "Hermes Security Solutions (Spain)",
              description:
                "Backend development for an AI platform applied to cybersecurity, collaborating on data architecture and integration with machine learning models.",
            },
          ],
          approach:
            "My approach combines logic, design, and performance, prioritizing scalability and code clarity in every project.",
        },
        technician: {
          title: "⚙️ Industrial Technician Specialized in HP Printers",
          period: "Digital Market | 2018 – 2022 | Andalusia, Spain",
          description:
            "For over four years, I worked as an industrial technician specialized in large-format HP DesignJet and Latex printers, providing technical support, preventive maintenance, and complex problem resolution to corporate clients.",
          impact:
            "That experience strengthened my profile as a developer, giving me a solid foundation in:",
          skills: [
            "Diagnosis and resolution of complex technical problems.",
            "Systematic thinking and focus on efficiency.",
            "Technical communication with clients and work in demanding environments.",
          ],
          conclusion:
            "These skills naturally transferred to web development: today I apply the same analytical mindset and technical precision to writing code, designing architectures, and optimizing digital systems.",
        },
      },
      certifications: {
        title: "Certifications",
        description:
          "Certifications and credentials that validate my experience and knowledge",
        issuedOn: "Issued on",
        viewCredential: "View credential",
      },
      values: {
        title: "My values",
        description: "Values that guide my work and my personal life",
        focus: {
          title: "My focus",
          description: "Constantly growing, learning, and improving my skills.",
        },
        objective: {
          title: "My objective",
          description:
            "I enjoy creating, solving problems, and helping people. Always willing to help and learn from others.",
        },
        motivation: {
          title: "My motivation",
          description:
            "I am motivated by the possibility of creating solutions that positively impact the lives of people.",
        },
      },
    },
    contact: {
      title: "Contact",
      description: "Have a project in mind? I'd love to hear about it.",
      form: {
        title: "Send me a message",
        description:
          "Fill out the form and I'll get back to you as soon as possible.",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send",
        sending: "Sending...",
        success: "Message sent! I'll get back to you soon.",
      },
      otherWays: "Other ways to contact",
      socialMedia: "Social Media",
      whatsapp: "Contact via WhatsApp",
    },
    footer: {
      copyright: "All rights reserved",
      built: "Built with Next.js and TailwindCSS",
      quickLinks: "Quick Links",
      social: "Social Media",
    },
    faq: {
      title: "Frequently Asked Questions",
      description: "Answers to the most common questions about my services",
      items: [
        {
          question: "What is a full-stack developer?",
          answer:
            "A full-stack developer is a professional who can work on both sides of the development stack: frontend and backend. They can create user interfaces, manage databases, and develop server-side logic.",
        },
        {
          question: "What does your job involve?",
          answer:
            "My job is to make websites and applications work. Designers focus on how things look, and I focus on bringing them to life — making sure buttons do what they should, data is saved correctly, pages load fast, and everything works seamlessly together.",
        },
        {
          question: "Can you design a website?",
          answer:
            "Yes! In addition to developing websites and web applications, I can also handle the design. I’m not a professional designer, but I apply basic design principles — such as balance, visual hierarchy, and thoughtful use of colors and typography — to create modern, clean sites that reflect what my clients are looking for.",
        },
        {
          question: "What technologies do you use?",
          answer:
            "I mainly work with JavaScript, TypeScript, and Next.js for the frontend, and Python/Django for the backend. I also have experience with React, Node.js, PostgreSQL, and various modern development tools.",
        },
        {
          question: "How long does it take to develop a project?",
          answer:
            "The development time depends on the scope and complexity of the project. Simple projects can take days or weeks, while more complex applications may require several months. I always provide detailed estimates after analyzing the requirements.",
        },
        {
          question: "Do you offer maintenance after launch?",
          answer:
            "Yes, I offer ongoing maintenance and support services. This includes security updates, bug fixes, performance improvements, and new features according to the project’s needs.",
        },
        {
          question: "How can I contact you for a project?",
          answer:
            "You can contact me through the contact form on this page or via my social media. I respond to all inquiries within 24–48 hours.",
        },
      ],
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
