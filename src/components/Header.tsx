import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface HeaderProps {
  onContactClick?: () => void;
  onVideoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onContactClick = () => {},
  onVideoClick = () => {},
}) => {
  return (
    <header className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-blue via-blue-700 to-blue-900' />

      {/* Animated background elements */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 left-10 w-32 h-32 bg-skyblue rounded-full animate-pulse' />
        <div
          className='absolute bottom-32 right-16 w-24 h-24 bg-positivegreen rounded-full animate-bounce'
          style={{ animationDelay: '1s' }}
        />
        <div
          className='absolute top-1/2 left-1/4 w-16 h-16 bg-skyblue rounded-full animate-ping'
          style={{ animationDelay: '2s' }}
        />
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

          {/* Features highlights */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto'>
            {[
              { icon: '🚀', text: 'Desarrollo ágil' },
              { icon: '🔒', text: 'Seguridad integrada' },
              { icon: '📱', text: 'Responsive design' },
            ].map((feature, index) => (
              <div
                key={index}
                className='bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20
                         hover:bg-white/20 transition-all duration-300 transform hover:scale-105'
              >
                <div className='text-2xl mb-2'>{feature.icon}</div>
                <p className='text-white text-sm font-medium'>{feature.text}</p>
              </div>
            ))}
          </div>

          {/* Call to action buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-12'>
            <button
              onClick={onContactClick}
              className='group bg-skyblue hover:bg-positivegreen text-blue hover:text-white
                       font-semibold text-lg px-8 py-4 rounded-xl border-2 border-skyblue
                       hover:border-positivegreen transition-all duration-300 transform
                       hover:scale-105 hover:shadow-lg hover:shadow-positivegreen/25
                       flex items-center gap-2 min-w-[280px] justify-center'
            >
              Conversemos tu proyecto
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
            </button>

            <button
              onClick={onVideoClick}
              className='group bg-transparent hover:bg-white/10 text-white font-medium
                       text-lg px-8 py-4 rounded-xl border-2 border-white/30 hover:border-white/60
                       transition-all duration-300 flex items-center gap-3'
            >
              <div
                className='w-10 h-10 bg-white/20 rounded-full flex items-center justify-center
                            group-hover:bg-white/30 transition-colors duration-300'
              >
                <Play className='w-4 h-4 fill-current' />
              </div>
              Ver demo
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
