import React from 'react';
import { CheckCircle, Users, Target, Award } from 'lucide-react';

interface Stat {
  id: string;
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface AboutUsProps {
  className?: string;
}

const stats: Stat[] = [
  {
    id: 'projects',
    value: '50+',
    label: 'Proyectos Exitosos',
    icon: <CheckCircle className='w-8 h-8' />,
  },
  {
    id: 'clients',
    value: '30+',
    label: 'Clientes Satisfechos',
    icon: <Users className='w-8 h-8' />,
  },
  {
    id: 'experience',
    value: '5+',
    label: 'Años de Experiencia',
    icon: <Target className='w-8 h-8' />,
  },
  {
    id: 'satisfaction',
    value: '100%',
    label: 'Satisfacción',
    icon: <Award className='w-8 h-8' />,
  },
];

const AboutUs: React.FC<AboutUsProps> = ({ className = '' }) => {
  return (
    <section className={`relative py-20 bg-white overflow-hidden ${className}`}>
      {/* Background decorative elements */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 left-10 w-64 h-64 bg-blue rounded-full blur-3xl' />
        <div className='absolute bottom-20 right-10 w-48 h-48 bg-positivegreen rounded-full blur-3xl' />
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main content */}
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left column - Text content */}
          <div className='space-y-8'>
            {/* Section badge */}
            <div className='inline-flex items-center px-4 py-2 bg-skyblue/20 text-blue rounded-full text-sm font-medium'>
              Sobre Nosotros
            </div>

            {/* Main heading */}
            <div className='space-y-6'>
              <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight'>
                <span className='text-blue-300'>Más que código</span>
                <br />
                <span className='text-blue'>somos aliados</span>
                <br />
                <span className='bg-gradient-to-r from-blue to-positivegreen bg-clip-text text-transparent'>
                  en tu transformación digital
                </span>
              </h2>

              <p className='text-lg lg:text-xl text-gray-700 leading-relaxed'>
                Creamos plataformas digitales que resuelven necesidades reales.
                Desde academias virtuales hasta sistemas logísticos, te
                entregamos soluciones pensadas para tu negocio, no para el
                promedio.
              </p>
            </div>

            {/* Key points */}
            <div className='space-y-4'>
              {[
                'Desarrollo personalizado según tus necesidades específicas',
                'Tecnologías modernas y escalables para crecer contigo',
                'Soporte continuo y mantenimiento proactivo',
                'Seguridad integrada desde el primer día',
              ].map((point, index) => (
                <div key={index} className='flex items-start gap-3'>
                  <div className='flex-shrink-0 w-6 h-6 bg-positivegreen rounded-full flex items-center justify-center mt-0.5'>
                    <CheckCircle className='w-4 h-4 text-white' />
                  </div>
                  <p className='text-gray-700'>{point}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className='pt-4'>
              <button className='group bg-blue hover:bg-positivegreen text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue/25 flex items-center gap-2'>
                Conoce Nuestro Proceso
                <CheckCircle className='w-5 h-5 group-hover:rotate-12 transition-transform duration-300' />
              </button>
            </div>
          </div>

          {/* Right column - Stats and visual elements */}
          <div className='space-y-8'>
            {/* Stats grid */}
            <div className='grid grid-cols-2 gap-6'>
              {stats.map((stat, index) => (
                <div
                  key={stat.id}
                  className='group bg-gradient-to-br from-white to-skyblue/20 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100'
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className='flex flex-col items-center text-center space-y-3'>
                    <div className='text-blue group-hover:text-positivegreen transition-colors duration-300'>
                      {stat.icon}
                    </div>
                    <div className='text-3xl font-bold text-blue'>
                      {stat.value}
                    </div>
                    <div className='text-sm text-gray-600 font-medium'>
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature highlight box */}
            <div className='bg-gradient-to-r from-blue to-blue-700 p-8 rounded-2xl text-white'>
              <h3 className='text-xl font-bold mb-4'>
                Nuestro Compromiso Contigo
              </h3>
              <p className='text-skyblue leading-relaxed mb-6'>
                No solo desarrollamos software, construimos relaciones
                duraderas. Cada proyecto es una oportunidad de crear algo
                extraordinario juntos.
              </p>
              <div className='flex items-center gap-3'>
                <div className='flex -space-x-2'>
                  {[1, 2, 3].map(i => (
                    <div
                      key={i}
                      className='w-8 h-8 bg-skyblue rounded-full border-2 border-white flex items-center justify-center text-blue text-xs font-bold'
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span className='text-sm text-skyblue'>
                  Equipo dedicado a tu éxito
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section - Company values */}
        <div className='mt-20 pt-16 border-t border-gray-200'>
          <div className='text-center space-y-12'>
            <h3 className='text-2xl lg:text-3xl font-bold text-blue'>
              Nuestros Valores Fundamentales
            </h3>

            <div className='grid md:grid-cols-3 gap-8'>
              {[
                {
                  title: 'Innovación Constante',
                  description:
                    'Aplicamos las últimas tecnologías para crear soluciones vanguardistas.',
                  icon: '🚀',
                },
                {
                  title: 'Calidad Sin Compromiso',
                  description:
                    'Cada línea de código es revisada y optimizada para máximo rendimiento.',
                  icon: '⭐',
                },
                {
                  title: 'Transparencia Total',
                  description:
                    'Comunicación clara y honesta en cada etapa del proyecto.',
                  icon: '🤝',
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className='group p-6 rounded-xl hover:bg-skyblue/10 transition-colors duration-300'
                >
                  <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                    {value.icon}
                  </div>
                  <h4 className='text-lg font-semibold text-blue mb-2'>
                    {value.title}
                  </h4>
                  <p className='text-gray-600 leading-relaxed'>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
