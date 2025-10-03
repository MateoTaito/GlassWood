import React from "react";
import { MapPin, Phone, Mail, ArrowRight, ExternalLink } from "lucide-react";

// Custom social media icons to replace deprecated ones
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 24 24' fill='currentColor'>
    <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 24 24' fill='currentColor'>
    <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 24 24' fill='currentColor'>
    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 24 24' fill='currentColor'>
    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
  </svg>
);

interface FooterLink {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  id: string;
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  id: string;
  platform: string;
  href: string;
  icon: React.ReactNode;
  color: string;
}

interface FooterProps {
  onNewsletterSubmit?: (email: string) => void;
  onLinkClick?: (linkId: string) => void;
  className?: string;
}

const footerSections: FooterSection[] = [
  {
    id: "company",
    title: "Empresa",
    links: [
      { id: "about", label: "Sobre Nosotros", href: "#about" },
      { id: "team", label: "Nuestro Equipo", href: "#team" },
      { id: "careers", label: "Trabaja con Nosotros", href: "#careers" },
      { id: "blog", label: "Blog", href: "#blog" },
    ],
  },
  {
    id: "services",
    title: "Servicios",
    links: [
      { id: "web-dev", label: "Desarrollo Web", href: "#web-development" },
      { id: "courses", label: "Plataformas de Cursos", href: "#courses" },
      { id: "consulting", label: "Consultoría Digital", href: "#consulting" },
      { id: "maintenance", label: "Mantenimiento", href: "#maintenance" },
    ],
  },
  {
    id: "resources",
    title: "Recursos",
    links: [
      { id: "documentation", label: "Documentación", href: "#docs" },
      { id: "case-studies", label: "Casos de Éxito", href: "#case-studies" },
      { id: "support", label: "Centro de Ayuda", href: "#support" },
      { id: "faq", label: "Preguntas Frecuentes", href: "#faq" },
    ],
  },
  {
    id: "legal",
    title: "Legal",
    links: [
      { id: "privacy", label: "Política de Privacidad", href: "/privacy" },
      { id: "terms", label: "Términos de Servicio", href: "/terms" },
      { id: "cookies", label: "Política de Cookies", href: "/cookies" },
      { id: "security", label: "Seguridad", href: "/security" },
    ],
  },
];

const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    platform: "LinkedIn",
    href: "https://linkedin.com/company/cloudanddigital",
    icon: <LinkedinIcon className='w-5 h-5' />,
    color: "hover:text-blue-600",
  },
  {
    id: "instagram",
    platform: "Instagram",
    href: "https://instagram.com/cloudanddigital",
    icon: <InstagramIcon className='w-5 h-5' />,
    color: "hover:text-pink-600",
  },
  {
    id: "facebook",
    platform: "Facebook",
    href: "https://facebook.com/cloudanddigital",
    icon: <FacebookIcon className='w-5 h-5' />,
    color: "hover:text-blue-700",
  },
  {
    id: "twitter",
    platform: "Twitter",
    href: "https://twitter.com/cloudanddigital",
    icon: <TwitterIcon className='w-5 h-5' />,
    color: "hover:text-blue-400",
  },
];

const contactInfo = [
  {
    id: "phone",
    icon: <Phone className='w-5 h-5' />,
    label: "Teléfono",
    value: "+56 9 5690 3556",
    href: "tel:+56956903556",
  },
  {
    id: "email",
    icon: <Mail className='w-5 h-5' />,
    label: "Email",
    value: "info@cloudanddigital.cl",
    href: "mailto:info@cloudanddigital.cl",
  },
  {
    id: "address",
    icon: <MapPin className='w-5 h-5' />,
    label: "Ubicación",
    value: "Toromazote 135, San Felipe",
    href: "https://maps.google.com/?q=Toromazote+135+San+Felipe",
  },
];

const Footer: React.FC<FooterProps> = ({
  onNewsletterSubmit = () => {},
  onLinkClick = () => {},
  className = "",
}) => {
  const [email, setEmail] = React.useState<string>("");
  const [isSubscribing, setIsSubscribing] = React.useState<boolean>(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubscribing(true);
    try {
      onNewsletterSubmit(email);
      setEmail("");
    } finally {
      setIsSubscribing(false);
    }
  };

  const handleLinkClick = (linkId: string, href: string) => {
    onLinkClick(linkId);
    if (href.startsWith("http")) {
      window.open(href, "_blank");
    }
  };

  return (
    <footer className={`bg-skyblue border-t border-blue/10 ${className}`}>
      {/* Main footer content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid lg:grid-cols-5 gap-12'>
          {/* Company info and newsletter */}
          <div className='lg:col-span-2 space-y-8'>
            {/* Logo and description */}
            <div className='space-y-6'>
              <a
                href='/'
                className='inline-block group'
                onClick={() => handleLinkClick("home", "/")}
              >
                <img
                  src='logo_negro.webp'
                  alt='Cloud and Digital Logo'
                  className='h-16 w-auto group-hover:scale-105 transition-transform duration-300'
                />
              </a>

              <p className='text-gray-700 leading-relaxed max-w-md'>
                Somos tu aliado en la nube, desarrollando soluciones
                personalizadas para que alcances tus objetivos con tecnología
                eficiente y segura. Nos enfocamos en entender tus necesidades y
                superar tus expectativas.
              </p>

              {/* Contact info */}
              <div className='space-y-4'>
                {contactInfo.map(info => (
                  <a
                    key={info.id}
                    href={info.href}
                    className='flex items-center gap-3 text-gray-700 hover:text-blue
                             transition-colors duration-300 group'
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <div
                      className='w-10 h-10 bg-blue/10 rounded-lg flex items-center justify-center
                                  text-blue group-hover:bg-blue group-hover:text-white
                                  transition-colors duration-300'
                    >
                      {info.icon}
                    </div>
                    <div>
                      <div className='text-sm text-gray-500'>{info.label}</div>
                      <div className='font-medium'>{info.value}</div>
                    </div>
                    {info.href.startsWith("http") && (
                      <ExternalLink className='w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter signup */}
            <div className='bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-white/80'>
              <h3 className='font-bold text-blue mb-3'>
                Mantente al día con nuestras novedades
              </h3>
              <p className='text-gray-600 text-sm mb-4'>
                Recibe tips, casos de éxito y las últimas tendencias en
                tecnología.
              </p>

              <form onSubmit={handleNewsletterSubmit} className='space-y-3'>
                <div className='flex gap-2'>
                  <input
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='tu@email.com'
                    required
                    className='flex-1 px-4 py-3 border border-gray-200 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue
                             transition-colors duration-300'
                  />
                  <button
                    type='submit'
                    disabled={isSubscribing}
                    className='bg-blue hover:bg-positivegreen text-white px-6 py-3 rounded-lg
                             font-medium transition-colors duration-300 flex items-center gap-2
                             disabled:opacity-50 disabled:cursor-not-allowed'
                  >
                    {isSubscribing ? (
                      <div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin' />
                    ) : (
                      <ArrowRight className='w-4 h-4' />
                    )}
                  </button>
                </div>
                <p className='text-xs text-gray-500'>
                  Al suscribirte, aceptas nuestra política de privacidad.
                </p>
              </form>
            </div>
          </div>

          {/* Navigation links */}
          <div className='lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {footerSections.map(section => (
              <div key={section.id} className='space-y-4'>
                <h3 className='font-bold text-blue text-lg'>{section.title}</h3>
                <ul className='space-y-3'>
                  {section.links.map(link => (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        onClick={() => handleLinkClick(link.id, link.href)}
                        className='text-gray-600 hover:text-blue transition-colors duration-300
                                 flex items-center gap-1 group'
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                      >
                        {link.label}
                        {link.external && (
                          <ExternalLink className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className='border-t border-blue/20 bg-blue/5'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            {/* Copyright */}
            <div className='text-gray-600 text-sm text-center md:text-left'>
              <p>
                © {new Date().getFullYear()} Cloud and Digital SpA. Todos los
                derechos reservados.
              </p>
              <p className='text-xs mt-1'>
                Desarrollado con ❤️ en San Felipe, Chile
              </p>
            </div>

            {/* Social links */}
            <div className='flex items-center gap-4'>
              <span className='text-gray-500 text-sm hidden sm:block'>
                Síguenos:
              </span>
              <div className='flex gap-3'>
                {socialLinks.map(social => (
                  <a
                    key={social.id}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`w-10 h-10 bg-white/80 hover:bg-white rounded-lg flex items-center
                              justify-center text-gray-600 ${social.color} transition-all duration-300
                              hover:scale-110 hover:shadow-md`}
                    aria-label={`Síguenos en ${social.platform}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust indicators */}
      <div className='bg-blue/5 border-t border-blue/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <div className='flex flex-wrap justify-center items-center gap-8 text-xs text-gray-500'>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-positivegreen rounded-full'></div>
              <span>SSL Seguro</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-positivegreen rounded-full'></div>
              <span>Datos Protegidos</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-positivegreen rounded-full'></div>
              <span>Soporte 24/7</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 bg-positivegreen rounded-full'></div>
              <span>Tecnología Chilena</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
