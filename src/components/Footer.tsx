import React from "react";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "./Icons";

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
    title: "Lorem",
    links: [
      { id: "about", label: "Lorem ipsum", href: "/about-us" },
      { id: "team", label: "Dolor sit", href: "/team" },
      { id: "careers", label: "Amet", href: "/work-with-us" },
      { id: "blog", label: "Consectetur", href: "#blog" },
    ],
  },
  {
    id: "services",
    title: "Ipsum",
    links: [
      {
        id: "web-dev",
        label: "Adipiscing",
        href: "/servicios/desarrollo-web",
      },
      {
        id: "courses",
        label: "Elit sed",
        href: "/servicios/plataformas-cursos",
      },
      {
        id: "consulting",
        label: "Do eiusmod",
        href: "/servicios/consultoria-digital",
      },
      {
        id: "maintenance",
        label: "Tempor",
        href: "/servicios/mantenimiento",
      },
    ],
  },
  {
    id: "legal",
    title: "Dolor",
    links: [
      { id: "privacy", label: "Incididunt", href: "/privacy" },
      { id: "terms", label: "Ut labore", href: "/terms" },
      { id: "cookies", label: "Et dolore", href: "/cookies" },
    ],
  },
];

const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    platform: "LinkedIn",
    href: "#",
    icon: <Linkedin className='w-5 h-5' />,
    color: "hover:text-blue-600",
  },
  {
    id: "instagram",
    platform: "Instagram",
    href: "#",
    icon: <Instagram className='w-5 h-5' />,
    color: "hover:text-pink-600",
  },
  {
    id: "facebook",
    platform: "Facebook",
    href: "#",
    icon: <Facebook className='w-5 h-5' />,
    color: "hover:text-blue-700",
  },
  {
    id: "twitter",
    platform: "Twitter",
    href: "#",
    icon: <Twitter className='w-5 h-5' />,
    color: "hover:text-blue-400",
  },
];

const contactInfo = [
  {
    id: "phone",
    icon: <Phone className='w-4 h-4 sm:w-5 sm:h-5' />,
    label: "Lorem ipsum",
    value: "+00 0000 0000",
    href: "#",
  },
  {
    id: "email",
    icon: <Mail className='w-4 h-4 sm:w-5 sm:h-5' />,
    label: "Lorem ipsum",
    value: "lorem.ipsum@example.com",
    href: "mailto:lorem.ipsum@example.com",
  },
  {
    id: "address",
    icon: <MapPin className='w-4 h-4 sm:w-5 sm:h-5' />,
    label: "Lorem ipsum",
    value: "Lorem ipsum dolor sit amet",
    href: "#",
  },
];

const Footer: React.FC<FooterProps> = ({
  onLinkClick = () => { },
  className = "",
}) => {
  const handleLinkClick = (linkId: string, href: string) => {
    onLinkClick(linkId);
    if (href.startsWith("http")) {
      window.open(href, "_blank");
    }
  };

  return (
    <footer className={`bg-sand border-t border-brand/10 ${className}`}>
      {/* Main footer content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-12 lg:py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12'>
          {/* Company info - Mobile first, then desktop layout */}
          <div className='lg:col-span-2 space-y-6 lg:space-y-8'>
            {/* Logo and description */}
            <div className='space-y-4 lg:space-y-6 text-center sm:text-left'>
              <Link
                to='/'
                className='inline-block group'
                onClick={() => handleLinkClick("home", "/")}
              >
                <img
                  src='/GlassWood_logo.jpeg'
                  alt='GlassWood Logo'
                  className='h-12 sm:h-14 lg:h-16 w-auto group-hover:scale-105 transition-transform duration-300 mx-auto sm:mx-0'
                />
              </Link>

              <p className='text-gray-700 leading-relaxed text-sm sm:text-base max-w-md mx-auto sm:mx-0'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                Nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Contact info - Better mobile layout */}
            <div className='mt-4 space-y-4 sm:space-y-4'>
              {contactInfo.map(info => (
                <a
                  key={info.id}
                  href={info.href}
                  className='flex items-center gap-3 text-gray-700 hover:text-brand transition-colors duration-300 group p-3 rounded-md hover:bg-white/60'
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <div
                    className='w-10 h-10 sm:w-12 sm:h-12 bg-brand/6 rounded-md flex items-center justify-center
                                text-brand transition-colors duration-300 flex-shrink-0 shadow-sm'
                  >
                    {info.icon}
                  </div>
                  <div className='min-w-0 flex-1'>
                    <div className='text-xs sm:text-sm text-gray-500'>
                      {info.label}
                    </div>
                    <div className='font-medium text-sm sm:text-base break-words text-gray-700'>
                      {info.value}
                    </div>
                  </div>
                  {info.href.startsWith("http") && (
                    <ExternalLink className='w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0' />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links - Improved mobile grid */}
          <div className='lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
            {footerSections.map(section => (
              <div
                key={section.id}
                className='space-y-3 lg:space-y-4 md:p-0 p-4'
              >
                <h3 className='font-bold text-brand text-base sm:text-lg'>
                  {section.title}
                </h3>
                <ul className='space-y-2 lg:space-y-3'>
                  {section.links.map(link => (
                    <li key={link.id}>
                      {link.href.startsWith("/") && !link.external ? (
                        <Link
                          to={link.href}
                          onClick={() => handleLinkClick(link.id, link.href)}
                          className='text-gray-600 hover:text-brand transition-colors duration-300
                                   flex items-center gap-1 group text-sm sm:text-base
                                   py-1 transform'
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          onClick={() => handleLinkClick(link.id, link.href)}
                          className='text-gray-600 hover:text-brand transition-colors duration-300
                                   flex items-center gap-1 group text-sm sm:text-base
                                   py-1 transform'
                          target={link.external ? "_blank" : undefined}
                          rel={
                            link.external ? "noopener noreferrer" : undefined
                          }
                        >
                          {link.label}
                          {link.external && (
                            <ExternalLink className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                          )}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar - Improved mobile layout */}
      <div className='border-t border-brand/20 bg-sand'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-6'>
          <div className='flex flex-col space-y-6 md:flex-row md:justify-between md:items-center md:space-y-0'>
            {/* Copyright - Better mobile text */}
            <div className='text-gray-600 text-center md:text-left order-2 md:order-1 mt-4 md:mt-0'>
              <p className='text-xs sm:text-sm'>
                © {new Date().getFullYear()} GlassWood. Todos los derechos
                reservados.
              </p>
              <p className='text-xs mt-1 opacity-75'>
                Lorem ipsum dolor sit amet
              </p>
            </div>

            {/* Social links - Better mobile layout */}
            <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-4 order-1 md:order-2'>
              <span className='text-gray-500 text-xs sm:text-sm'>Lorem:</span>
              <div className='flex gap-2 sm:gap-3'>
                {socialLinks.map(social => (
                  <a
                    key={social.id}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`w-8 h-8 sm:w-10 sm:h-10 bg-white/80 hover:bg-white rounded-lg flex items-center
                              justify-center text-gray-600 ${social.color} transition-all duration-300
                              hover:scale-110 hover:shadow-md active:scale-95`}
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

      {/* Trust indicators - Better mobile layout */}
      <div className='bg-sand border-t border-brand/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-4'>
          <div className='grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center items-center gap-3 sm:gap-6 lg:gap-8 text-xs text-gray-500'>
            <div className='flex items-center gap-2 justify-center'>
              <div className='w-2 h-2 bg-positivegreen rounded-full flex-shrink-0'></div>
              <span className='whitespace-nowrap'>Lorem</span>
            </div>
            <div className='flex items-center gap-2 justify-center'>
              <div className='w-2 h-2 bg-positivegreen rounded-full flex-shrink-0'></div>
              <span className='whitespace-nowrap'>Ipsum</span>
            </div>
            <div className='flex items-center gap-2 justify-center'>
              <div className='w-2 h-2 bg-positivegreen rounded-full flex-shrink-0'></div>
              <span className='whitespace-nowrap'>Dolor</span>
            </div>
            <div className='flex items-center gap-2 justify-center'>
              <div className='w-2 h-2 bg-positivegreen rounded-full flex-shrink-0'></div>
              <span className='whitespace-nowrap'>Sit amet</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
