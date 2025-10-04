import React from "react";
import {
  Target,
  Eye,
  Heart,
  Users,
  Lightbulb,
  Shield,
  Award,
  Globe,
} from "lucide-react";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface AboutUsContentData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  mission: {
    title: string;
    content: string;
    icon: React.ReactNode;
  };
  vision: {
    title: string;
    content: string;
    icon: React.ReactNode;
  };
  values: Value[];
  story: {
    title: string;
    content: string;
    milestones: Milestone[];
  };
  team: {
    title: string;
    description: string;
    members: TeamMember[];
  };
  stats: {
    projects: string;
    clients: string;
    experience: string;
    satisfaction: string;
  };
}

export const aboutUsContent: AboutUsContentData = {
  hero: {
    title: "Construimos el futuro digital",
    subtitle: "Una empresa, una visión",
    description:
      "Cloud and Digital nació de la pasión por crear soluciones tecnológicas que transformen la manera en que las empresas operan y crecen en el mundo digital.",
  },
  mission: {
    title: "Nuestra Misión",
    content:
      "Democratizar el acceso a tecnología de vanguardia, ayudando a empresas de todos los tamaños a alcanzar su máximo potencial a través de soluciones digitales innovadoras, escalables y centradas en el usuario.",
    icon: <Target className='w-8 h-8' />,
  },
  vision: {
    title: "Nuestra Visión",
    content:
      "Ser reconocidos como líderes en transformación digital en América Latina, siendo el socio tecnológico de confianza que impulsa el crecimiento sostenible y la innovación en cada proyecto que emprendemos.",
    icon: <Eye className='w-8 h-8' />,
  },
  values: [
    {
      id: "innovation",
      title: "Innovación Continua",
      description:
        "Nos mantenemos a la vanguardia de las tecnologías emergentes, aplicando soluciones creativas a desafíos complejos.",
      icon: <Lightbulb className='w-6 h-6' />,
    },
    {
      id: "excellence",
      title: "Excelencia Técnica",
      description:
        "Cada línea de código, cada diseño y cada solución reflejan nuestro compromiso con la calidad y la perfección.",
      icon: <Award className='w-6 h-6' />,
    },
    {
      id: "collaboration",
      title: "Colaboración",
      description:
        "Trabajamos como extensión de tu equipo, construyendo relaciones duraderas basadas en confianza y transparencia.",
      icon: <Users className='w-6 h-6' />,
    },
    {
      id: "security",
      title: "Seguridad Primero",
      description:
        "La protección de datos y la seguridad son fundamentales en cada solución que desarrollamos.",
      icon: <Shield className='w-6 h-6' />,
    },
    {
      id: "impact",
      title: "Impacto Social",
      description:
        "Creemos en el poder de la tecnología para generar un impacto positivo en la sociedad y el medio ambiente.",
      icon: <Heart className='w-6 h-6' />,
    },
    {
      id: "global",
      title: "Visión Global",
      description:
        "Desarrollamos soluciones pensando en escala global, pero con comprensión profunda del contexto local.",
      icon: <Globe className='w-6 h-6' />,
    },
  ],
  story: {
    title: "Nuestra Historia",
    content:
      "Cloud and Digital comenzó como un sueño compartido entre profesionales apasionados por la tecnología y la innovación. Desde nuestros humildes inicios, hemos crecido para convertirnos en un equipo multidisciplinario que combina experiencia técnica con visión empresarial.",
    milestones: [
      {
        id: "foundation",
        year: "2019",
        title: "Fundación",
        description:
          "Nace Cloud and Digital con la visión de democratizar el acceso a tecnología de calidad empresarial.",
      },
      {
        id: "first-clients",
        year: "2020",
        title: "Primeros Clientes",
        description:
          "Desarrollamos nuestras primeras plataformas educativas y sistemas de gestión empresarial.",
      },
      {
        id: "team-growth",
        year: "2021",
        title: "Crecimiento del Equipo",
        description:
          "Expandimos nuestro equipo incorporando especialistas en diferentes áreas tecnológicas.",
      },
      {
        id: "innovation",
        year: "2022",
        title: "Innovación en IA",
        description:
          "Integramos inteligencia artificial y machine learning en nuestras soluciones.",
      },
      {
        id: "expansion",
        year: "2023",
        title: "Expansión Regional",
        description:
          "Ampliamos nuestros servicios a nivel regional con clientes en múltiples países.",
      },
      {
        id: "present",
        year: "2024",
        title: "Presente",
        description:
          "Continuamos innovando y creciendo, siempre enfocados en la excelencia y satisfacción del cliente.",
      },
    ],
  },
  team: {
    title: "Nuestro Equipo",
    description:
      "Un grupo diverso de profesionales unidos por la pasión por la tecnología y el compromiso con la excelencia.",
    members: [
      {
        id: "cristobal",
        name: "Cristóbal Quijanes",
        role: "CEO & Fundador",
        description:
          "Ingeniero Civil Industrial con mención en Informática y magister en ciberseguridad. Lidera la visión estratégica y la innovación en seguridad.",
        image: "https://github.com/Cristobal-Quijanes.png",
      },
      {
        id: "hans",
        name: "Hans Barnert",
        role: "CFO & Co-Fundador",
        description:
          "Ingeniero Civil Industrial e Ingeniero Civil Informático. Experto en desarrollo de software y arquitecturas escalables.",
        image: "https://github.com/hansbarnert.png",
      },
      {
        id: "alvaro",
        name: "Alvaro Parker",
        role: "CTO",
        description:
          "Ingeniero Civil Informático con magister en ciencias de la Ingeniería. Especialista en tecnología, innovación y proyectos open source.",
        image: "https://github.com/AlvaroParker.png",
      },
      {
        id: "mateo",
        name: "Mateo Taito",
        role: "Desarrollador",
        description:
          "Ingeniero Civil Informático e Ingeniero Civil Industrial. Experto en desarrollo de software y soluciones tecnológicas innovadoras.",
        image: "https://github.com/MateoTaito.png",
      },
    ],
  },
  stats: {
    projects: "50+",
    clients: "30+",
    experience: "5+",
    satisfaction: "100%",
  },
};
