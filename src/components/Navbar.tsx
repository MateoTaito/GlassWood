import React, { useEffect, useState, useCallback, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  id: string;
  label: string;
  href?: string;
  onClick?: () => void;
  subItems?: NavItem[];
}

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
  className?: string;
}

const defaultNavItems: NavItem[] = [
  { id: "home", label: "Inicio", href: "/" },
  {
    id: "services",
    label: "Servicios",
    href: "#services",
    subItems: [
      {
        id: "web-dev",
        label: "Desarrollo Web",
        href: "/servicios/desarrollo-web",
      },
      {
        id: "courses",
        label: "Plataformas de Cursos",
        href: "/servicios/plataformas-cursos",
      },
      {
        id: "consulting",
        label: "Consultoría Digital",
        href: "/servicios/consultoria-digital",
      },
    ],
  },
  { id: "about-us", label: "Nosotros", href: "/about-us" },
  { id: "team", label: "Equipo", href: "/team" },
  { id: "contact", label: "Contacto", href: "/contact" },
];

const Navbar: React.FC<NavbarProps> = ({
  onNavigate = () => {},
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        activeDropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleNavClick = useCallback(
    (item: NavItem) => {
      if (item.onClick) {
        item.onClick();
      } else if (item.href) {
        onNavigate(item.id);
      }
      setIsOpen(false);
      setActiveDropdown(null);
    },
    [onNavigate]
  );

  const toggleDropdown = useCallback(
    (itemId: string) => {
      setActiveDropdown(activeDropdown === itemId ? null : itemId);
    },
    [activeDropdown]
  );

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
          : "bg-transparent"
      } ${className}`}
      role='navigation'
      aria-label='Main navigation'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-3 sm:py-4'>
          {/* Logo */}
          <div className='flex items-center space-x-2 z-50 relative'>
            <Link
              to='/'
              className='flex items-center space-x-2 group'
              onClick={closeMenu}
            >
              <img
                src={
                  isScrolled || location.pathname !== "/"
                    ? "/nube_negra.webp"
                    : "/nube_blanca.webp"
                }
                className='h-10 sm:h-12 lg:h-16 w-auto transition-transform duration-300 group-hover:scale-105'
                alt='Cloud and Digital Logo'
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center space-x-1'>
            {defaultNavItems.map(item => (
              <div
                key={item.id}
                className='relative group'
                ref={item.subItems ? dropdownRef : undefined}
              >
                {item.href && !item.subItems && item.href.startsWith("/") ? (
                  <Link
                    to={item.href}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-lg font-medium
                      transition-all duration-200 hover:bg-white/10 hover:backdrop-blur-sm
                      ${
                        isScrolled || location.pathname !== "/"
                          ? "text-gray-700 hover:text-blue hover:bg-skyblue/20"
                          : "text-white hover:text-skyblue"
                      }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() =>
                      item.subItems
                        ? toggleDropdown(item.id)
                        : handleNavClick(item)
                    }
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-lg font-medium
                      transition-all duration-200 hover:bg-white/10 hover:backdrop-blur-sm
                      ${
                        isScrolled || location.pathname !== "/"
                          ? "text-gray-700 hover:text-blue hover:bg-skyblue/20"
                          : "text-white hover:text-skyblue"
                      }`}
                    aria-expanded={
                      item.subItems ? activeDropdown === item.id : undefined
                    }
                    aria-haspopup={item.subItems ? true : undefined}
                  >
                    {item.label}
                    {item.subItems && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.id ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                )}

                {/* Dropdown Menu */}
                {item.subItems && activeDropdown === item.id && (
                  <div
                    className='absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl
                                border border-gray-100 py-2 animate-in slide-in-from-top-2 duration-200'
                  >
                    {item.subItems.map(subItem => (
                      <Link
                        key={subItem.id}
                        to={subItem.href || "#"}
                        onClick={closeMenu}
                        className='block w-full text-left px-4 py-3 text-gray-700 hover:text-blue
                                 hover:bg-skyblue/20 transition-colors duration-200'
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className='hidden lg:block'>
            <Link
              to='/contact'
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300
                transform hover:scale-105 hover:shadow-lg inline-block
                ${
                  isScrolled
                    ? "bg-blue hover:bg-positivegreen text-white hover:shadow-blue/25"
                    : "bg-skyblue hover:bg-positivegreen text-blue hover:text-white"
                }`}
            >
              Comenzar Proyecto
            </Link>
          </div>

          {/* Mobile Menu Button - Improved */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden relative p-2 rounded-lg transition-all duration-200 z-50
              ${
                isScrolled || isOpen
                  ? "text-gray-900 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            aria-expanded={isOpen}
            aria-controls='mobile-menu'
            aria-label='Toggle mobile menu'
          >
            <div className='relative w-6 h-6'>
              <Menu
                size={24}
                className={`absolute inset-0 transform transition-all duration-300 ${
                  isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              />
              <X
                size={24}
                className={`absolute inset-0 transform transition-all duration-300 ${
                  isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu - Improved with better animations and layout */}
        <div
          id='mobile-menu'
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 left-0 right-0 bottom-0 z-40 transform transition-all duration-300 ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className='absolute inset-0 bg-black/20 backdrop-blur-sm'
            onClick={closeMenu}
            aria-hidden='true'
          />

          {/* Menu Content */}
          <div
            className={`relative bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100
                       transform transition-all duration-300 ${
                         isOpen ? "translate-y-0" : "-translate-y-4"
                       }`}
            style={{
              paddingTop: "calc(3rem + env(safe-area-inset-top))",
              minHeight: "100vh",
            }}
          >
            <div className='px-4 sm:px-6 py-6 space-y-1 max-h-screen overflow-y-auto'>
              {defaultNavItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`transform transition-all duration-300 ${
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {item.href && !item.subItems && item.href.startsWith("/") ? (
                    <Link
                      to={item.href}
                      onClick={closeMenu}
                      className='w-full flex items-center justify-between px-4 py-4 text-left
                               text-gray-700 hover:text-blue hover:bg-skyblue/20 rounded-lg
                               transition-all duration-200 font-medium text-lg
                               border border-transparent hover:border-blue/20'
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() =>
                        item.subItems
                          ? toggleDropdown(item.id)
                          : handleNavClick(item)
                      }
                      className='w-full flex items-center justify-between px-4 py-4 text-left
                               text-gray-700 hover:text-blue hover:bg-skyblue/20 rounded-lg
                               transition-all duration-200 font-medium text-lg
                               border border-transparent hover:border-blue/20'
                    >
                      {item.label}
                      {item.subItems && (
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            activeDropdown === item.id ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>
                  )}

                  {/* Mobile Dropdown - Improved */}
                  {item.subItems && (
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeDropdown === item.id
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className='pl-4 pr-2 space-y-1 mt-2'>
                        {item.subItems.map((subItem, subIndex) => (
                          <Link
                            key={subItem.id}
                            to={subItem.href || "#"}
                            onClick={closeMenu}
                            className={`block w-full text-left px-4 py-3 text-gray-600 hover:text-blue
                                     hover:bg-skyblue/10 rounded-lg transition-all duration-200
                                     border-l-2 border-transparent hover:border-blue/30
                                     transform ${
                                       activeDropdown === item.id
                                         ? "translate-x-0 opacity-100"
                                         : "translate-x-2 opacity-0"
                                     }`}
                            style={{
                              transitionDelay:
                                activeDropdown === item.id
                                  ? `${subIndex * 30}ms`
                                  : "0ms",
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA - Improved */}
              <div
                className={`pt-6 border-t border-gray-200 transform transition-all duration-300 ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen
                    ? `${defaultNavItems.length * 50}ms`
                    : "0ms",
                }}
              >
                <Link
                  to='/contact'
                  onClick={closeMenu}
                  className='w-full bg-blue hover:bg-positivegreen text-white font-semibold
                           py-4 px-6 rounded-lg transition-all duration-300 block text-center
                           text-lg shadow-lg hover:shadow-xl transform hover:scale-105
                           active:scale-95'
                >
                  Comenzar Proyecto
                </Link>
              </div>

              {/* Mobile menu footer */}
              <div
                className={`pt-6 text-center transform transition-all duration-300 ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen
                    ? `${(defaultNavItems.length + 1) * 50}ms`
                    : "0ms",
                }}
              >
                <p className='text-gray-500 text-sm'>
                  Cloud and Digital - Soluciones en la nube
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
