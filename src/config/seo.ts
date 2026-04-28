export const SITE_NAME = "Roberto Romero - Portafolio";
export const SITE_DESCRIPTION = "Portafolio profesional de Roberto Romero, desarrollador frontend especializado en React, TypeScript y Astro. Descubre mis proyectos y experiencia en desarrollo web moderno.";
export const SITE_URL = "https://robertdev96.vercel.app";
export const AUTHOR_NAME = "Roberto Romero Díaz";
export const AUTHOR_EMAIL = "contact@example.com";
export const SOCIAL_MEDIA = {
  github: "https://github.com/RoberDev96",
  linkedin: "https://linkedin.com/in/robertdev96",
  twitter: "https://twitter.com/robertdev96",
};

export const PAGES_SEO = {
  home: {
    title: "Roberto Romero - Desarrollador Frontend | Portafolio",
    description: "Portafolio profesional de Roberto Romero. Explora mis proyectos de desarrollo web con React, TypeScript y Astro.",
    keywords: "desarrollador frontend, React, TypeScript, Astro, web development, portafolio",
    image: "/imagen/perfil.jpg",
  },
  proyectos: {
    title: "Mis Proyectos | Roberto Romero",
    description: "Explora los proyectos que he desarrollado: Pomodoro Timer, Weather App, Age Calculator y más. Cada proyecto muestra mi expertise en tecnologías modernas.",
    keywords: "proyectos web, React, TypeScript, aplicaciones web, portfolio projects, desarrollo frontend",
    image: "/imagen/pomodoroImg.webp",
  },
  sobreMi: {
    title: "Sobre Mí - Roberto Romero | Desarrollador Frontend",
    description: "Conoce mi trayectoria profesional, habilidades técnicas y experiencia como desarrollador frontend. Soy especialista en React, TypeScript y desarrollo de interfaces modernas.",
    keywords: "sobre mí, desarrollador, experiencia profesional, habilidades técnicas, frontend developer",
    image: "/imagen/perfil.jpg",
  },
  notFound: {
    title: "Página no encontrada - Roberto Romero",
    description: "La página que buscas no existe. Regresa al inicio para explorar mi portafolio.",
    keywords: "404, página no encontrada, error",
  },
};

export const BREADCRUMB_SCHEMA = (path: string) => {
  const segments = path.split('/').filter(Boolean);
  const items = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": SITE_URL
    }
  ];

  let currentPath = "";
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const names: { [key: string]: string } = {
      'proyectos': 'Proyectos',
      'sobreMi': 'Sobre Mí',
      '404': 'Error 404',
    };
    
    items.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": names[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
      "item": `${SITE_URL}${currentPath}/`
    });
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items
  };
};

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Roberto Romero",
  "url": SITE_URL,
  "logo": `${SITE_URL}/favicon.svg`,
  "description": SITE_DESCRIPTION,
  "sameAs": Object.values(SOCIAL_MEDIA),
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Professional",
    "email": AUTHOR_EMAIL,
  }
};
