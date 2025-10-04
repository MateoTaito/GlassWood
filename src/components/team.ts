export interface SocialLink {
  platform: "linkedin" | "github" | "twitter" | "bluesky";
  url: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  email: string;
  socials: SocialLink[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "Cristóbal Quijanes ",
    role: "CEO & Fundador",
    bio: "Ingenierio Civil Industrial con mención en Informática y magister en ciberseguridad. Apasionado por la tecnología y la innovación.",
    image: "https://github.com/Cristobal-Quijanes.png",
    email: "cristobal.quijanes@cloudanddigital.cl",
    socials: [
      { platform: "linkedin", url: "https://linkedin.com/in/usuario" },
      { platform: "github", url: "https://github.com/Cristobal-Quijanes" },
    ],
  },
  {
    id: "member-2",
    name: "Hans Barnert",
    role: "CFO & Co-Fundador",
    bio: "Ingeniero Civil Industrial e ingeniero civil informático. Experto en desarrollo de software y arquitecturas escalables.",
    image: "https://github.com/hansbarnert.png",
    email: "hans.barnert@cloudanddigital.cl",
    socials: [
      { platform: "linkedin", url: "https://linkedin.com/in/usuario" },
      { platform: "github", url: "https://github.com/hansbarnert" },
    ],
  },
  {
    id: "member-3",
    name: "Alvaro Parker",
    role: "CTO",
    bio: "Ingeniero Civil Informático con magister en ciencias de la Ingeniería. Apasionado por la tecnología, innovación y los proyectos open source.",
    image: "https://github.com/AlvaroParker.png",
    email: "alvaro.parker@cloudanddigital.cl",
    socials: [
      { platform: "linkedin", url: "https://linkedin.com/in/aparkerdf" },
      { platform: "github", url: "https://github.com/alvaroparker" },
      { platform: "bluesky", url: "https://bsky.app/profile/alvarop.dev" },
    ],
  },
  {
    id: "member-4",
    name: "Mateo Taito",
    role: "Desarrollador",
    bio: "Ingeniero civil Informático e Ingeniero Civil Industrial. Apasionado por la tecnología y el desarrollo de software.",
    image: "https://github.com/MateoTaito.png",
    email: "mateo.taito@cloudanddigital.cl",
    socials: [
      { platform: "linkedin", url: "https://linkedin.com/in/usuario" },
      { platform: "github", url: "https://github.com/MateoTaito" },
    ],
  },
];
