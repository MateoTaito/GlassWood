export interface ServiceFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceConfig {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  features: ServiceFeature[];
  benefits: ServiceBenefit[];
  ctaText: string;
  ctaSubtext?: string;
}

export const servicesData: Record<string, ServiceConfig> = {
  "desarrollo-web": {
    id: "desarrollo-web",
    title: "Desarrollo Web",
    subtitle: "Soluciones digitales a medida",
    description:
      "Creamos sitios web y aplicaciones web modernas, escalables y optimizadas para convertir visitantes en clientes.",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80",
    features: [
      {
        title: "Diseño Responsivo",
        description:
          "Sitios web que se adaptan perfectamente a cualquier dispositivo y pantalla.",
        icon: "📱",
      },
      {
        title: "Optimización SEO",
        description:
          "Desarrollo optimizado para motores de búsqueda desde el primer día.",
        icon: "🚀",
      },
      {
        title: "Performance",
        description:
          "Carga rápida y experiencia de usuario fluida garantizada.",
        icon: "⚡",
      },
      {
        title: "Seguridad",
        description: "Implementamos las mejores prácticas de seguridad web.",
        icon: "🔒",
      },
    ],
    benefits: [
      {
        title: "Mayor Visibilidad Online",
        description:
          "Alcanza más clientes potenciales con una presencia web profesional.",
      },
      {
        title: "Credibilidad Profesional",
        description: "Transmite confianza y profesionalismo a tus visitantes.",
      },
      {
        title: "Generación de Leads",
        description:
          "Convierte visitantes en clientes con un diseño orientado a conversión.",
      },
    ],
    ctaText: "Solicitar Cotización",
    ctaSubtext: "Obtén una propuesta personalizada sin compromiso",
  },
  "plataformas-cursos": {
    id: "plataformas-cursos",
    title: "Plataformas de Cursos",
    subtitle: "Educación digital sin límites",
    description:
      "Desarrollamos plataformas de e-learning personalizadas para instituciones educativas y empresas que buscan digitalizar su enseñanza.",
    heroImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80",
    features: [
      {
        title: "Sistema LMS Completo",
        description:
          "Gestión integral de cursos, estudiantes y contenido educativo.",
        icon: "🎓",
      },
      {
        title: "Contenido Multimedia",
        description:
          "Soporte para videos, documentos, quizzes y actividades interactivas.",
        icon: "🎬",
      },
      {
        title: "Seguimiento de Progreso",
        description:
          "Analytics detallados del progreso y rendimiento estudiantil.",
        icon: "📊",
      },
      {
        title: "Certificaciones",
        description: "Sistema automatizado de generación de certificados.",
        icon: "🏆",
      },
    ],
    benefits: [
      {
        title: "Escalabilidad",
        description:
          "Atiende desde decenas hasta miles de estudiantes simultáneamente.",
      },
      {
        title: "Flexibilidad Horaria",
        description:
          "Aprendizaje asíncrono que se adapta a los horarios de cada estudiante.",
      },
      {
        title: "Reducción de Costos",
        description:
          "Minimiza costos operativos comparado con la educación presencial.",
      },
    ],
    ctaText: "Conocer Más",
    ctaSubtext: "Descubre cómo digitalizar tu enseñanza",
  },
  "consultoria-digital": {
    id: "consultoria-digital",
    title: "Consultoría Digital",
    subtitle: "Estrategia digital que funciona",
    description:
      "Te ayudamos a definir y ejecutar una estrategia digital efectiva para hacer crecer tu negocio en el entorno digital.",
    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80",
    features: [
      {
        title: "Auditoría Digital",
        description:
          "Análisis completo de tu presencia digital actual y oportunidades.",
        icon: "🔍",
      },
      {
        title: "Estrategia Personalizada",
        description:
          "Plan de acción diseñado específicamente para tus objetivos.",
        icon: "🎯",
      },
      {
        title: "Implementación Guiada",
        description:
          "Te acompañamos en cada paso de la ejecución de la estrategia.",
        icon: "🛠️",
      },
      {
        title: "Métricas y Seguimiento",
        description:
          "Monitoreo constante y optimización basada en datos reales.",
        icon: "📈",
      },
    ],
    benefits: [
      {
        title: "ROI Medible",
        description:
          "Inversión digital con retorno cuantificable y transparente.",
      },
      {
        title: "Ventaja Competitiva",
        description: "Posicionamiento estratégico frente a tu competencia.",
      },
      {
        title: "Crecimiento Sostenible",
        description:
          "Estrategias probadas para un crecimiento digital a largo plazo.",
      },
    ],
    ctaText: "Agendar Consulta",
    ctaSubtext: "Primera consulta gratuita de 30 minutos",
  },
  mantenimiento: {
    id: "mantenimiento",
    title: "Mantenimiento",
    subtitle: "Mantén tu sitio web siempre actualizado",
    description:
      "Ofrecemos servicios de mantenimiento integral para sitios web y aplicaciones, asegurando su funcionamiento óptimo, seguridad y actualización constante.",
    heroImage:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80",
    features: [
      {
        title: "Actualizaciones Regulares",
        description:
          "Mantenemos tu sitio web actualizado con las últimas versiones y parches de seguridad.",
        icon: "🔄",
      },
      {
        title: "Monitoreo 24/7",
        description:
          "Supervisión continua del rendimiento y disponibilidad de tu sitio web.",
        icon: "👁️",
      },
      {
        title: "Backups Automáticos",
        description:
          "Copias de seguridad programadas para proteger tu contenido y datos.",
        icon: "💾",
      },
      {
        title: "Soporte Técnico",
        description:
          "Asistencia técnica rápida para resolver cualquier inconveniente.",
        icon: "🛠️",
      },
    ],
    benefits: [
      {
        title: "Tranquilidad Total",
        description:
          "Concéntrate en tu negocio mientras nosotros cuidamos tu presencia digital.",
      },
      {
        title: "Prevención de Problemas",
        description:
          "Identificamos y solucionamos problemas antes de que afecten a tus usuarios.",
      },
      {
        title: "Mejor Rendimiento",
        description:
          "Optimización continua para mantener tu sitio rápido y eficiente.",
      },
    ],
    ctaText: "Contratar Mantenimiento",
    ctaSubtext:
      "Protege tu inversión digital con nuestro plan de mantenimiento",
  },
};
