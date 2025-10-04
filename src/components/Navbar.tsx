import React, { useEffect, useState, useCallback } from "react";
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
  { id: "about", label: "Nosotros", href: "/#about" },
  {
    id: "services",
    label: "Servicios",
    href: "#services",
    subItems: [
      { id: "web-dev", label: "Desarrollo Web", href: "#web-development" },
      {
        id: "courses",
        label: "Plataformas de Cursos",
        href: "#course-platforms",
      },
      { id: "consulting", label: "Consultoría Digital", href: "#consulting" },
    ],
  },
  { id: "about-us", label: "Quiénes Somos", href: "/about-us" },
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

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

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
        <div className='flex justify-between items-center py-4'>
          {/* Logo */}
          <div className='flex items-center space-x-2 z-50'>
            <Link
              to='/'
              className='flex items-center space-x-2 group'
              onClick={closeMenu}
            >
              <img
                src={
                  isScrolled || location.pathname !== "/"
                    ? "nube_negra.webp"
                    : "nube_blanca.webp"
                }
                className='h-12 sm:h-16 w-auto transition-transform duration-300 group-hover:scale-105'
                alt='Cloud and Digital Logo'
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center space-x-1'>
            {defaultNavItems.map(item => (
              <div key={item.id} className='relative group'>
                {item.href &&
                !item.subItems &&
                item.href.startsWith("/") &&
                !item.href.includes("#") ? (
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
                      <button
                        key={subItem.id}
                        onClick={() => handleNavClick(subItem)}
                        className='w-full text-left px-4 py-3 text-gray-700 hover:text-blue
                                 hover:bg-skyblue/20 transition-colors duration-200'
                      >
                        {subItem.label}
                      </button>
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200
              ${isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
            aria-expanded={isOpen}
            aria-controls='mobile-menu'
            aria-label='Toggle mobile menu'
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            id='mobile-menu'
            className='lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md
                     shadow-xl border-t border-gray-100 animate-in slide-in-from-top-4 duration-300'
          >
            <div className='px-4 py-6 space-y-2'>
              {defaultNavItems.map(item => (
                <div key={item.id}>
                  {item.href &&
                  !item.subItems &&
                  item.href.startsWith("/") &&
                  !item.href.includes("#") ? (
                    <Link
                      to={item.href}
                      onClick={closeMenu}
                      className='w-full flex items-center justify-between px-4 py-3 text-left
                               text-gray-700 hover:text-blue hover:bg-skyblue/20 rounded-lg
                               transition-colors duration-200 font-medium'
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
                      className='w-full flex items-center justify-between px-4 py-3 text-left
                               text-gray-700 hover:text-blue hover:bg-skyblue/20 rounded-lg
                               transition-colors duration-200 font-medium'
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

                  {/* Mobile Dropdown */}
                  {item.subItems && activeDropdown === item.id && (
                    <div className='pl-4 space-y-1 animate-in slide-in-from-top-2 duration-200'>
                      {item.subItems.map(subItem => (
                        <button
                          key={subItem.id}
                          onClick={() => handleNavClick(subItem)}
                          className='w-full text-left px-4 py-2 text-gray-600 hover:text-blue
                                   hover:bg-skyblue/10 rounded-lg transition-colors duration-200'
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA */}
              <div className='pt-4 border-t border-gray-200'>
                <Link
                  to='/contact'
                  onClick={closeMenu}
                  className='w-full bg-blue hover:bg-positivegreen text-white font-semibold
                           py-3 px-4 rounded-lg transition-colors duration-300 block text-center'
                >
                  Comenzar Proyecto
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Click outside to close */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black/20 lg:hidden -z-10'
          onClick={closeMenu}
          aria-hidden='true'
        />
      )}
    </nav>
  );
};

export default Navbar;
