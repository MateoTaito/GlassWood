export interface JobRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "internship";
  experience: "junior" | "mid" | "senior" | "lead";
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  benefits: string[];
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  postedDate: string;
  applicationDeadline?: string;
  isActive: boolean;
}

export const jobRoles: JobRole[] = [
  {
    id: "frontend-developer-react",
    title: "Desarrollador Frontend React",
    department: "Desarrollo",
    location: "San Felipe / Remoto",
    type: "full-time",
    experience: "mid",
    description:
      "Buscamos un desarrollador frontend con experiencia en React para unirse a nuestro equipo y crear experiencias digitales excepcionales para nuestros clientes.",
    responsibilities: [
      "Desarrollar interfaces de usuario modernas y responsivas usando React y TypeScript",
      "Colaborar con el equipo de diseño para implementar mockups y prototipos",
      "Optimizar aplicaciones para máximo rendimiento y escalabilidad",
      "Mantener y mejorar el código existente siguiendo mejores prácticas",
      "Participar en revisiones de código y mentorizar desarrolladores junior",
      "Trabajar en estrecha colaboración con el equipo backend para integrar APIs",
    ],
    requirements: [
      "3+ años de experiencia en desarrollo frontend",
      "Dominio de React, TypeScript y JavaScript moderno (ES6+)",
      "Experiencia con Tailwind CSS o CSS-in-JS",
      "Conocimiento de herramientas de build (Vite, Webpack)",
      "Familiaridad con Git y metodologías ágiles",
      "Experiencia con testing (Jest, React Testing Library)",
    ],
    niceToHave: [
      "Experiencia con Next.js o frameworks SSR",
      "Conocimiento de GraphQL y Apollo Client",
      "Experiencia con animaciones (Framer Motion, Lottie)",
      "Conocimiento básico de UX/UI design",
      "Experiencia con PWAs y optimización web",
    ],
    benefits: [
      "Salario competitivo acorde a experiencia",
      "Modalidad híbrida o 100% remoto",
      "Horarios flexibles",
      "Capacitación y certificaciones pagas",
      "Ambiente de trabajo colaborativo",
      "Proyectos desafiantes con tecnologías modernas",
    ],
    salary: {
      min: 1200000,
      max: 1800000,
      currency: "CLP",
    },
    postedDate: "2024-01-15",
    applicationDeadline: "2024-02-28",
    isActive: true,
  },
  {
    id: "fullstack-developer-nodejs",
    title: "Desarrollador Full Stack Node.js",
    department: "Desarrollo",
    location: "San Felipe / Remoto",
    type: "full-time",
    experience: "senior",
    description:
      "Estamos buscando un desarrollador full stack senior con sólida experiencia en Node.js y React para liderar el desarrollo de aplicaciones web complejas.",
    responsibilities: [
      "Diseñar y desarrollar aplicaciones web completas usando Node.js y React",
      "Crear y mantener APIs RESTful y GraphQL",
      "Trabajar con bases de datos SQL y NoSQL",
      "Implementar arquitecturas escalables y seguras",
      "Liderar el diseño técnico de nuevos proyectos",
      "Mentorizar desarrolladores junior y mid-level",
    ],
    requirements: [
      "5+ años de experiencia en desarrollo full stack",
      "Dominio de Node.js, Express.js y React",
      "Experiencia sólida con bases de datos (PostgreSQL, MongoDB)",
      "Conocimiento de AWS o servicios cloud similares",
      "Experiencia con Docker y CI/CD",
      "Conocimientos de seguridad web y mejores prácticas",
    ],
    niceToHave: [
      "Experiencia con microservicios",
      "Conocimiento de Kubernetes",
      "Experiencia con Redis y sistemas de cache",
      "Familiaridad con blockchain o Web3",
      "Certificaciones AWS o similares",
    ],
    benefits: [
      "Salario competitivo acorde a experiencia",
      "Modalidad híbrida o 100% remoto",
      "Horarios flexibles",
      "Capacitación y certificaciones pagas",
      "Participación en proyectos internacionales",
      "Stock options en la empresa",
    ],
    salary: {
      min: 2000000,
      max: 2800000,
      currency: "CLP",
    },
    postedDate: "2024-01-10",
    applicationDeadline: "2024-03-15",
    isActive: true,
  },
];

export const getActiveRoles = (): JobRole[] => {
  return jobRoles.filter(role => role.isActive);
};

export const getRoleById = (id: string): JobRole | undefined => {
  return jobRoles.find(role => role.id === id);
};

export const getRolesByDepartment = (department: string): JobRole[] => {
  return jobRoles.filter(
    role => role.department === department && role.isActive
  );
};

export const getDepartments = (): string[] => {
  const departments = new Set(jobRoles.map(role => role.department));
  return Array.from(departments);
};

export const toggleAllRolesActive = (active: boolean): void => {
  jobRoles.forEach(role => {
    role.isActive = active;
  });
};

export const toggleRoleActive = (roleId: string): boolean => {
  const role = getRoleById(roleId);
  if (role) {
    role.isActive = !role.isActive;
    return role.isActive;
  }
  return false;
};
