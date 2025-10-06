import React from "react";
import { Linkedin, Github, Twitter, Bluesky } from "./Icons";
import { teamMembers } from "./team";
import { Link } from "react-router-dom";

interface TeamProps {
  className?: string;
}

const getSocialIcon = (platform: string): React.ReactNode => {
  const iconClass = "w-5 h-5";
  switch (platform) {
    case "linkedin":
      return <Linkedin className={iconClass} />;
    case "github":
      return <Github className={iconClass} />;
    case "twitter":
      return <Twitter className={iconClass} />;
    case "bluesky":
      return <Bluesky className={iconClass} />;
    default:
      return null;
  }
};

const getSocialColor = (platform: string): string => {
  switch (platform) {
    case "linkedin":
      return "hover:bg-blue-600 hover:text-white";
    case "github":
      return "hover:bg-gray-900 hover:text-white";
    case "twitter":
      return "hover:bg-blue-400 hover:text-white";
    case "bluesky":
      return "hover:bg-blue-500 hover:text-white";
    default:
      return "hover:bg-blue hover:text-white";
  }
};

const Team: React.FC<TeamProps> = ({ className = "" }) => {
  return (
    <section
      id='team'
      className={`relative py-20 bg-gradient-to-br from-skyblue/30 via-white to-skyblue/20 overflow-hidden ${className}`}
    >
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 right-10 w-64 h-64 bg-blue rounded-full blur-3xl' />
        <div className='absolute bottom-20 left-10 w-48 h-48 bg-positivegreen rounded-full blur-3xl' />
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6'>
        <div className='text-center space-y-6 mb-16'>
          <div className='inline-flex items-center px-4 py-2 bg-blue/10 text-blue rounded-full text-sm font-medium'>
            Nuestro Equipo
          </div>

          <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight'>
            <span className='text-blue-300'>Conoce al equipo</span>
            <br />
            <span className='bg-gradient-to-r from-blue to-positivegreen bg-clip-text text-transparent'>
              detrás de la innovación
            </span>
          </h2>

          <p className='text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed'>
            Un equipo apasionado de profesionales dedicados a transformar ideas
            en soluciones digitales extraordinarias.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className='group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl
                       transition-all duration-300 transform hover:-translate-y-2
                       border border-gray-100'
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className='relative mb-6'>
                <div className='aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-blue/20 to-positivegreen/20 flex items-center justify-center'>
                  <img
                    src={member.image}
                    alt={member.name}
                    className='w-full h-full object-cover'
                    onError={e => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      if (target.nextElementSibling) {
                        (
                          target.nextElementSibling as HTMLElement
                        ).style.display = "flex";
                      }
                    }}
                  />
                  <div
                    className='absolute inset-0 flex items-center justify-center text-6xl font-bold text-blue/30'
                    style={{ display: "none" }}
                  >
                    {member.name.charAt(0)}
                  </div>
                </div>
                <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2'>
                  <div className='bg-blue text-white px-4 py-1 rounded-full text-xs font-medium shadow-lg'>
                    {member.role}
                  </div>
                </div>
              </div>

              <div className='text-center space-y-4 mt-6'>
                <h3 className='text-xl font-bold text-blue group-hover:text-positivegreen transition-colors duration-300'>
                  {member.name}
                </h3>

                <p className='text-gray-600 text-sm leading-relaxed min-h-[4rem]'>
                  {member.bio}
                </p>

                <div className='flex justify-center gap-2 pt-4'>
                  {member.socials.map(social => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center
                               text-gray-600 transition-all duration-300 transform hover:scale-110
                               ${getSocialColor(social.platform)}`}
                      aria-label={`${member.name} en ${social.platform}`}
                    >
                      {getSocialIcon(social.platform)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <div className='inline-block bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-gray-100'>
            <h3 className='text-2xl font-bold text-blue mb-4'>
              ¿Quieres unirte al equipo?
            </h3>
            <p className='text-gray-600 mb-6 max-w-2xl'>
              Estamos siempre buscando talento apasionado por la tecnología y la
              innovación. Si te interesa formar parte de nuestro equipo, nos
              encantaría conocerte.
            </p>

            <div className='flex justify-center justify-items-center'>
              <Link
                to='/work-with-us'
                className='group bg-blue hover:bg-positivegreen text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue/25 flex items-center gap-2 mx-auto'
              >
                Ver Oportunidades
                <svg
                  className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 7l5 5m0 0l-5 5m5-5H6'
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
