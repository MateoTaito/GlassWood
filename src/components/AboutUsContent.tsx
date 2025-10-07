import React from "react";
import { Target, Users } from "lucide-react";
import { aboutUsContent } from "../data/aboutUsContent";

interface AboutUsContentProps {
  className?: string;
}

const AboutUsContent: React.FC<AboutUsContentProps> = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Hero Section */}
      <section className='relative py-20 bg-gradient-to-br from-skyblue/30 via-white to-skyblue/20 overflow-hidden'>
        <div className='absolute inset-0 opacity-5'>
          <div className='absolute top-20 right-10 w-64 h-64 bg-blue rounded-full blur-3xl' />
          <div className='absolute bottom-20 left-10 w-48 h-48 bg-positivegreen rounded-full blur-3xl' />
        </div>

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6'>
          <div className='text-center space-y-6 mb-16'>
            <div className='inline-flex items-center px-4 py-2 bg-blue/10 text-blue rounded-full text-sm font-medium'>
              {aboutUsContent.hero.subtitle}
            </div>

            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight'>
              <span className='bg-gradient-to-r from-blue to-positivegreen bg-clip-text text-transparent'>
                {aboutUsContent.hero.title}
              </span>
            </h1>

            <p className='text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed'>
              {aboutUsContent.hero.description}
            </p>
          </div>

          {/* Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'>
            {[
              {
                label: "Proyectos Exitosos",
                value: aboutUsContent.stats.projects,
              },
              {
                label: "Clientes Satisfechos",
                value: aboutUsContent.stats.clients,
              },
              {
                label: "Años de Experiencia",
                value: aboutUsContent.stats.experience,
              },
              {
                label: "Satisfacción del Cliente",
                value: aboutUsContent.stats.satisfaction,
              },
            ].map((stat, index) => (
              <div
                key={index}
                className='text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100'
              >
                <div className='text-3xl font-bold text-blue mb-2'>
                  {stat.value}
                </div>
                <div className='text-sm text-gray-600'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-16'>
            {/* Mission */}
            <div className='bg-gradient-to-br from-blue/5 to-blue/10 p-8 rounded-2xl'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-16 h-16 bg-blue/10 rounded-2xl flex items-center justify-center text-blue'>
                  {aboutUsContent.mission.icon}
                </div>
                <h2 className='text-2xl font-bold text-blue'>
                  {aboutUsContent.mission.title}
                </h2>
              </div>
              <p className='text-gray-700 leading-relaxed'>
                {aboutUsContent.mission.content}
              </p>
            </div>

            {/* Vision */}
            <div className='bg-gradient-to-br from-positivegreen/5 to-positivegreen/10 p-8 rounded-2xl'>
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-16 h-16 bg-positivegreen/10 rounded-2xl flex items-center justify-center text-positivegreen'>
                  {aboutUsContent.vision.icon}
                </div>
                <h2 className='text-2xl font-bold text-positivegreen'>
                  {aboutUsContent.vision.title}
                </h2>
              </div>
              <p className='text-gray-700 leading-relaxed'>
                {aboutUsContent.vision.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className='py-20 bg-gradient-to-br from-skyblue/20 via-white to-skyblue/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-blue mb-6'>
              Nuestros Valores
            </h2>
            <p className='text-lg text-gray-700 max-w-3xl mx-auto'>
              Los principios que guían cada decisión y cada línea de código que
              escribimos.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {aboutUsContent.values.map((value, index) => (
              <div
                key={value.id}
                className='group bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className='w-12 h-12 bg-blue/10 rounded-xl flex items-center justify-center text-blue group-hover:text-positivegreen group-hover:bg-positivegreen/10 transition-colors duration-300 mb-4'>
                  {value.icon}
                </div>
                <h3 className='text-xl font-bold text-blue mb-3 group-hover:text-positivegreen transition-colors duration-300'>
                  {value.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story & Timeline */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-blue mb-6'>
              {aboutUsContent.story.title}
            </h2>
            <p className='text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed'>
              {aboutUsContent.story.content}
            </p>
          </div>

          {/* Timeline */}
          <div className='relative'>
            {/* Mobile Zigzag Timeline */}
            <div className='md:hidden space-y-12'>
              {aboutUsContent.story.milestones.map((milestone, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={milestone.id}
                    className={`relative flex ${isEven ? "pl-12" : "pr-12"}`}
                  >
                    {/* Vertical segment */}
                    <div
                      className={`absolute top-0 bottom-0 ${
                        isEven ? "left-5" : "right-5"
                      } w-[3px] bg-gradient-to-b from-blue to-positivegreen`}
                    />
                    {/* Dot */}
                    <div
                      className={`absolute ${
                        isEven
                          ? "left-5 -translate-x-1/2"
                          : "right-5 translate-x-1/2"
                      } top-1/2 -translate-y-1/2 w-5 h-5 bg-blue rounded-full border-2 border-white shadow-lg`}
                    />
                    {/* Card */}
                    <div
                      className={`w-full ${
                        isEven ? "ml-4" : "mr-4"
                      } bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300`}
                    >
                      <div className='text-2xl font-bold text-blue mb-2'>
                        {milestone.year}
                      </div>
                      <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                        {milestone.title}
                      </h3>
                      <p className='text-gray-600'>{milestone.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop Original Timeline */}
            <div className='hidden md:block'>
              <div className='absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue to-positivegreen'></div>
              <div className='space-y-12'>
                {aboutUsContent.story.milestones.map((milestone, index) => (
                  <div
                    key={milestone.id}
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div
                      className={`w-1/2 ${
                        index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                      }`}
                    >
                      <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300'>
                        <div className='text-2xl font-bold text-blue mb-2'>
                          {milestone.year}
                        </div>
                        <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                          {milestone.title}
                        </h3>
                        <p className='text-gray-600'>{milestone.description}</p>
                      </div>
                    </div>

                    <div className='w-6 h-6 bg-blue rounded-full border-4 border-white shadow-lg z-10 flex-shrink-0'></div>

                    <div className='w-1/2'></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className='py-20 bg-gradient-to-br from-skyblue/20 via-white to-skyblue/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold text-blue mb-6'>
              {aboutUsContent.team.title}
            </h2>
            <p className='text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed'>
              {aboutUsContent.team.description}
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {aboutUsContent.team.members.map((member, index) => (
              <div
                key={member.id}
                className='group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100'
                style={{ animationDelay: `${index * 0.1}s` }}
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
                  <p className='text-gray-600 text-sm leading-relaxed'>
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className='text-center mt-12'>
            <a
              href='/team'
              className='group bg-blue hover:bg-positivegreen text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue/25 inline-flex items-center gap-2'
            >
              Conoce Todo el Equipo
              <Users className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-20 bg-blue text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
            ¿Listo para transformar tu negocio?
          </h2>
          <p className='text-xl text-skyblue mb-8 max-w-3xl mx-auto'>
            Únete a las empresas que ya confían en nosotros para llevar sus
            ideas al siguiente nivel.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='/contact'
              className='bg-positivegreen hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center justify-center gap-2'
            >
              Comenzar Proyecto
              <Target className='w-5 h-5' />
            </a>
            <a
              href='/team'
              className='bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2'
            >
              Conocer Equipo
              <Users className='w-5 h-5' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsContent;
