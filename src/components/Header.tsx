import React from "react";
import { ArrowRight, Play, Leaf, Recycle, Globe } from "lucide-react";
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
  { id: "eco", label: "Lorem ipsum dolor", Icon: Leaf },
  { id: "recycle", label: "Sit amet", Icon: Recycle },
  {
    id: "global",
    label: "Consectetur adipiscing",
    Icon: Globe,
    fullRowOnMobile: true,
  },
];

const Header: React.FC<HeaderProps> = ({
  onVideoClick: _onVideoClick = () => { },
}) => {
  return (
    <header className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-sand' />

      {/* Curved hill background with tree silhouette (keeps brand palette) */}
      <div aria-hidden='true' className='absolute inset-0 pointer-events-none select-none'>
        <svg
          className='w-full h-full'
          viewBox='0 0 1440 900'
          preserveAspectRatio='xMidYMax slice'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient id='hillShade' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='0' stopColor='rgba(85,65,54,0.98)' />
              <stop offset='1' stopColor='rgba(85,65,54,0.92)' />
            </linearGradient>
          </defs>

          {/* Terrain: valley on the left, hill on the right */}
          <path
            d='M0 780
               C 140 860, 300 860, 480 800
               C 720 720, 1020 640, 1260 620
               C 1350 630, 1410 660, 1440 700
               L1440 900 L0 900 Z'
            fill='url(#hillShade)'
          />

          {/* Single leaf on the right crest (solid dark brown, moved up a bit and longer stem) */}
          <g transform='translate(1260 600) scale(1)'>
            <path
              d='M0 0
                 C -36 -12, -60 -56, -18 -108
                 C 22 -56, 16 -18, 0 0 Z'
              fill='#584539'
              stroke='none'
            />
            {/* longer, slightly curved stem moved up */}
            <path d='M-2 -10 C -6 10, 25 30, -1 68' stroke='#584539' strokeWidth='3' strokeLinecap='round' fill='none' />
          </g>
        </svg>
      </div>


      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='text-center space-y-8'>
          {/* Main heading */}
          <div className='space-y-6'>
            <h1 className='text-4xl sm:text-5xl lg:text-7xl font-bold text-brand leading-tight'>
              Lorem ipsum dolor sit amet
              <br />
              <span className='bg-gradient-to-r from-brand to-positivegreen bg-clip-text text-transparent'>
                consectetur adipiscing elit
              </span>
            </h1>

            <h2 className='text-xl sm:text-2xl lg:text-3xl font-light text-brand/80 max-w-4xl mx-auto leading-relaxed'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                  className={`bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-brand/20 md:hover:bg-white/90 transition-all duration-300 transform md:hover:scale-105 flex flex-col items-center text-center ${spanClass}`}
                >
                  <Icon
                    className='w-7 h-7 text-positivegreen mb-3'
                    aria-hidden='true'
                  />
                  <p className='text-brand text-sm sm:text-base font-medium tracking-wide'>
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
              className='group bg-green-800 hover:bg-positivegreen text-sand hover:text-white
                       font-semibold text-lg px-8 py-4 rounded-xl border-2 border-green-800
                       hover:border-positivegreen transition-all duration-300 transform
                       hover:scale-105 hover:shadow-lg hover:shadow-positivegreen/25
                       flex items-center gap-2 min-w-[280px] justify-center'
            >
              Lorem ipsum
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <div className='w-6 h-10 border-2 border-brand/30 rounded-full flex justify-center'>
          <div className='w-1 h-3 bg-brand/60 rounded-full mt-2 animate-pulse' />
        </div>
      </div>
    </header>
  );
};

export default Header;
