import React from "react";
import {
  ArrowRight,
  Play,
  Rocket,
  Shield,
  MonitorSmartphone,
} from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderProps {
  onVideoClick?: () => void;
}

interface FeatureHighlight {
  id: string;
  label: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  fullRowOnMobile?: boolean;
}

const FEATURE_HIGHLIGHTS: readonly FeatureHighlight[] = [
  { id: "agile-dev", label: "Desarrollo ágil", Icon: Rocket },
  { id: "security", label: "Seguridad integrada", Icon: Shield },
  {
    id: "responsive",
    label: "Responsive design",
    Icon: MonitorSmartphone,
    fullRowOnMobile: true,
  },
];

const Header: React.FC<HeaderProps> = ({
  onVideoClick: _onVideoClick = () => {},
}) => {
  return (
    <header className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950' />

      {/* Darker diagonal segmented overlay (top-right to bottom-left) */}
      <div
        aria-hidden='true'
        className='absolute inset-0 pointer-events-none select-none'
      >
        <svg
          className='w-full h-full'
          viewBox='0 0 1440 900'
          preserveAspectRatio='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M1440 0
               C1200 140 1100 250 900 400
               C700 550 500 700 0 900
               L1440 900 Z'
            fill='rgba(0,49,130,0.95)'
          />
        </svg>
      </div>

      {/* Animated background elements */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 left-10 w-32 h-32 bg-skyblue rounded-full md:animate-pulse md:[animation-duration:7s]' />
        <div className='absolute bottom-32 right-16 w-24 h-24 bg-positivegreen rounded-full md:animate-bounce md:[animation-delay:1.5s] md:[animation-duration:6s]' />
        <div className='absolute top-1/2 left-1/4 w-16 h-16 bg-skyblue rounded-full md:animate-ping md:[animation-delay:3s] md:[animation-duration:8s]' />
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='text-center space-y-8'>
          {/* Main heading */}
          <div className='space-y-6'>
            <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight'>
              Plataformas que hacen
              <br />
              <span className='bg-gradient-to-r from-skyblue to-positivegreen bg-clip-text text-transparent'>
                crecer tu negocio
              </span>
            </h1>

            <h2 className='text-xl sm:text-2xl lg:text-3xl font-light text-skyblue max-w-4xl mx-auto leading-relaxed'>
              Diseñamos, desarrollamos y protegemos
              <br />
              soluciones digitales a tu medida
            </h2>
          </div>

          <ul className='grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto'>
            {FEATURE_HIGHLIGHTS.map(({ id, label, Icon, fullRowOnMobile }) => {
              const spanClass = fullRowOnMobile
                ? "col-span-2 md:col-span-1"
                : "";
              return (
                <li
                  key={id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 md:hover:bg-white/20 transition-all duration-300 transform md:hover:scale-105 flex flex-col items-center text-center ${spanClass}`}
                >
                  <Icon
                    className='w-7 h-7 text-skyblue mb-3'
                    aria-hidden='true'
                  />
                  <p className='text-white text-sm sm:text-base font-medium tracking-wide'>
                    {label}
                  </p>
                </li>
              );
            })}
          </ul>

          {/* Call to action buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-12'>
            <Link
              to='/contact'
              className='group bg-skyblue hover:bg-positivegreen text-blue hover:text-white
                       font-semibold text-lg px-8 py-4 rounded-xl border-2 border-skyblue
                       hover:border-positivegreen transition-all duration-300 transform
                       hover:scale-105 hover:shadow-lg hover:shadow-positivegreen/25
                       flex items-center gap-2 min-w-[280px] justify-center'
            >
              Conversemos tu proyecto
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
            </Link>

            <button
              aria-disabled='true'
              className='bg-gray-200 text-gray-500 font-medium text-lg px-8 py-4 rounded-xl border-2 border-red-500 cursor-not-allowed flex items-center gap-3'
            >
              <div className='w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center'>
                <Play className='w-4 h-4' />
              </div>
              Ver demo (inactivo)
            </button>
          </div>

          {/* Trust indicators */}
          <div className='mt-16 pt-8 border-t border-white/20'>
            <p className='text-skyblue text-sm mb-4'>
              Empresas que confían en nosotros
            </p>
            <div className='flex justify-center items-center gap-8 opacity-60'>
              <div className='text-white text-sm'>+50 proyectos</div>
              <div className='w-px h-4 bg-white/30' />
              <div className='text-white text-sm'>100% satisfacción</div>
              <div className='w-px h-4 bg-white/30' />
              <div className='text-white text-sm'>Soporte 24/7</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <div className='w-6 h-10 border-2 border-white/30 rounded-full flex justify-center'>
          <div className='w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse' />
        </div>
      </div>
    </header>
  );
};

export default Header;
