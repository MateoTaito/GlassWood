import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ExternalLink,
  Quote,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";
import "swiper/swiper-bundle.css";
import "./Clients.css";

interface ClientProject {
  id: string;
  logoSrc: string;
  title: string;
  category: string;
  description: string;
  mediaSrc: string;
  altText: string;
  websiteUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    rating: number;
  };
  metrics?: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
  technologies?: string[];
}

interface ClientsSectionProps {
  onViewProject?: (projectId: string) => void;
  onContactUs?: () => void;
  className?: string;
}

const clientProjects: ClientProject[] = [
  {
    id: "urbina",
    logoSrc: "clients/urbina/logo_urbina.webp",
    title: "Urbina Consultores",
    category: "Consultoría Legal y Tributaria",
    description: `Desarrollamos una plataforma institucional moderna y optimizada para SEO que refleja la seriedad y profesionalismo de esta prestigiosa consultora tributaria legal.

    La nueva presencia digital incluye un sistema de gestión de contenidos intuitivo, formularios de contacto especializados y una arquitectura de información clara que facilita a los clientes encontrar exactamente el servicio que necesitan.`,
    mediaSrc: "clients/urbina/urbina_combination.webp",
    altText: "Urbina Consultores - Vista responsive desktop y móvil",
    websiteUrl: "https://urbinaconsultores.cl",
    testimonial: {
      quote:
        "El nuevo sitio web ha mejorado significativamente nuestra presencia digital. Los clientes encuentran fácilmente la información que necesitan y hemos visto un aumento notable en las consultas.",
      author: "María Urbina",
      position: "Directora General",
      rating: 5,
    },
    metrics: [
      {
        label: "Aumento en consultas",
        value: "+150%",
        icon: <TrendingUp className='w-5 h-5' />,
      },
      {
        label: "Tiempo de carga",
        value: "< 2s",
        icon: <Award className='w-5 h-5' />,
      },
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "SEO"],
  },
  {
    id: "uakari",
    logoSrc: "clients/uakari/logo_uakari.png",
    title: "Uakari Academy",
    category: "Plataforma Educativa Online",
    description: `Creamos una academia de formación online completa con sistema de cursos, evaluaciones automatizadas y emisión de certificados digitales.

    La plataforma incluye integración con medios de pago, panel de administración avanzado, sistema de gamificación para estudiantes y análisis detallados de progreso. Los instructores pueden crear contenido multimedia y gestionar sus cursos de manera intuitiva.`,
    mediaSrc: "clients/uakari/uakari_combination.png",
    altText: "Uakari Academy - Plataforma de cursos online responsive",
    websiteUrl: "https://uakariacademy.com",
    testimonial: {
      quote:
        "La plataforma superó nuestras expectativas. El sistema de certificaciones automático y la interfaz intuitiva han revolucionado nuestra forma de enseñar online.",
      author: "Carlos Mendoza",
      position: "Fundador & CEO",
      rating: 5,
    },
    metrics: [
      {
        label: "Estudiantes activos",
        value: "500+",
        icon: <Users className='w-5 h-5' />,
      },
      {
        label: "Certificados emitidos",
        value: "1,200+",
        icon: <Award className='w-5 h-5' />,
      },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
  },
];

const ClientsSection: React.FC<ClientsSectionProps> = ({
  onViewProject: _onViewProject = () => {},
  onContactUs: _onContactUs = () => {},
  className = "",
}) => {
  const swiperRef = useRef<{
    slidePrev: () => void;
    slideNext: () => void;
    slideTo: (index: number) => void;
  } | null>(null);

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section
      id='clients-section'
      className={`relative py-20 bg-gradient-to-br from-blue-50 via-white to-skyblue/30 overflow-hidden ${className}`}
    >
      {/* Background decorative elements */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 right-20 w-64 h-64 bg-blue rounded-full blur-3xl' />
        <div className='absolute bottom-20 left-20 w-48 h-48 bg-positivegreen rounded-full blur-3xl' />
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center space-y-6 mb-16'>
          <div className='inline-flex items-center px-4 py-2 bg-blue/10 text-blue rounded-full text-sm font-medium'>
            <Award className='w-4 h-4 mr-2' />
            Casos de Éxito
          </div>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-blue leading-tight'>
            Clientes que confían
            <br />
            <span className='bg-gradient-to-r from-blue to-positivegreen bg-clip-text text-transparent'>
              en nosotros
            </span>
          </h2>

          <p className='text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Organizaciones que han transformado su presencia digital con
            nuestras soluciones personalizadas. Cada proyecto es una historia de
            éxito compartida.
          </p>
        </div>

        {/* Navigation moved to sides of carousel */}

        {/* Projects Swiper */}
        <div className='relative'>
          <button
            onClick={handlePrevSlide}
            className='hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 w-12 h-12 bg-white hover:bg-blue text-blue hover:text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-white items-center justify-center'
            aria-label='Proyecto anterior'
          >
            <ChevronLeft className='w-6 h-6 block' />
          </button>
          <button
            onClick={handleNextSlide}
            className='hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-30 w-12 h-12 bg-white hover:bg-blue text-blue hover:text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-white items-center justify-center'
            aria-label='Siguiente proyecto'
          >
            <ChevronRight className='w-6 h-6 block' />
          </button>
          <Swiper
            modules={[Autoplay, EffectFade, Navigation]}
            onSwiper={swiper => {
              swiperRef.current = swiper;
            }}
            onSlideChange={() => {}}
            autoplay={{
              delay: 8000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            effect='fade'
            fadeEffect={{
              crossFade: true,
            }}
            loop={clientProjects.length > 1}
            className='overflow-visible pb-8'
            style={{ overflow: "visible" }}
          >
            {clientProjects.map(project => (
              <SwiperSlide key={project.id}>
                <div className='flex flex-col items-center'>
                  {/* Logo badge */}
                  <div className='relative z-30 -mb-12 drop-shadow-[0_4px_20px_rgba(0,0,0,0.15)]'>
                    <div className='w-24 h-24 bg-white rounded-full p-3 shadow-xl border-4 border-gray-100'>
                      <img
                        src={project.logoSrc}
                        alt={`${project.title} logo`}
                        className='w-full h-full object-contain brightness-110 contrast-110'
                      />
                    </div>
                  </div>

                  <div
                    className='relative bg-white rounded-3xl shadow-xl overflow-hidden backdrop-blur-sm w-full
                                before:absolute before:inset-0 before:bg-gradient-to-br
                                before:from-blue/5 before:via-transparent before:to-positivegreen/5
                                before:z-10'
                  >
                    {/* Curved overlay motif */}
                    <div
                      aria-hidden='true'
                      className='absolute inset-0 pointer-events-none select-none z-10'
                    >
                      <svg
                        className='w-full h-full'
                        viewBox='0 0 1440 600'
                        preserveAspectRatio='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M1440 0 C1220 90 1080 200 900 320 C660 480 420 560 0 600 L1440 600 Z'
                          fill='rgba(0,49,130,0.08)'
                        />
                      </svg>
                    </div>
                    <div className='relative z-20 pt-16 p-8 lg:p-12'>
                      <div className='grid lg:grid-cols-2 gap-12 items-center'>
                        {/* Content */}
                        <div className='space-y-8'>
                          {/* Project info */}
                          <div className='space-y-4'>
                            <div className='inline-flex items-center px-3 py-1 bg-blue/10 text-blue rounded-full text-sm font-medium'>
                              {project.category}
                            </div>

                            <h3 className='text-3xl lg:text-4xl font-bold text-blue'>
                              {project.title}
                            </h3>

                            <p className='text-gray-600 leading-relaxed text-lg'>
                              {project.description}
                            </p>
                          </div>

                          {/* Technologies */}
                          {project.technologies && (
                            <div className='space-y-3'>
                              <h4 className='font-semibold text-gray-800'>
                                Tecnologías utilizadas:
                              </h4>
                              <div className='flex flex-wrap gap-2'>
                                {project.technologies.map((tech, index) => (
                                  <span
                                    key={index}
                                    className='px-3 py-1 bg-skyblue/30 text-blue text-sm rounded-full
                                           border border-blue/20 hover:bg-blue hover:text-white
                                           transition-colors duration-300'
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Metrics */}
                          {project.metrics && (
                            <div className='grid grid-cols-2 gap-4'>
                              {project.metrics.map((metric, index) => (
                                <div
                                  key={index}
                                  className='bg-gradient-to-r from-blue/5 to-positivegreen/5 p-4 rounded-xl
                                         border border-blue/10 hover:from-blue/10 hover:to-positivegreen/10
                                         transition-all duration-300'
                                >
                                  <div className='flex items-center gap-3'>
                                    <div className='text-blue'>
                                      {metric.icon}
                                    </div>
                                    <div>
                                      <div className='text-2xl font-bold text-blue'>
                                        {metric.value}
                                      </div>
                                      <div className='text-sm text-gray-600'>
                                        {metric.label}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Testimonial */}
                          {project.testimonial && (
                            <div
                              className='relative bg-gradient-to-r from-blue to-blue-700 p-6 rounded-xl
                                        text-white shadow-lg hover:shadow-xl transition-shadow duration-300
                                        before:absolute before:-inset-1 before:bg-gradient-to-r
                                        before:from-blue before:via-positivegreen before:to-blue
                                        before:rounded-xl before:opacity-75 before:-z-10 before:blur-sm'
                            >
                              <div className='flex items-start gap-4'>
                                <Quote className='w-8 h-8 text-skyblue flex-shrink-0 mt-1' />
                                <div className='space-y-4'>
                                  <p className='text-skyblue leading-relaxed italic'>
                                    "{project.testimonial.quote}"
                                  </p>
                                  <div className='flex items-center justify-between'>
                                    <div>
                                      <div className='font-semibold'>
                                        {project.testimonial.author}
                                      </div>
                                      <div className='text-skyblue text-sm'>
                                        {project.testimonial.position}
                                      </div>
                                    </div>
                                    <div className='flex gap-1'>
                                      {renderStars(project.testimonial.rating)}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Action buttons */}
                          <div className='flex flex-col sm:flex-row gap-4'>
                            <button
                              aria-disabled='true'
                              className='bg-gray-200 text-gray-500 font-semibold px-6 py-3 rounded-xl border-2 border-red-500 cursor-not-allowed flex items-center justify-center gap-2'
                            >
                              Ver proyecto completo (inactivo)
                              <ExternalLink className='w-4 h-4' />
                            </button>

                            {project.websiteUrl && (
                              <a
                                href={project.websiteUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='group bg-transparent hover:bg-blue/10 text-blue border border-blue
                                       font-semibold px-6 py-3 rounded-xl transition-all duration-300
                                       flex items-center justify-center gap-2'
                              >
                                Visitar sitio web
                                <ExternalLink className='w-4 h-4' />
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Project image */}
                        <div className='relative group'>
                          <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
                            <img
                              src={project.mediaSrc}
                              alt={project.altText}
                              className='w-full h-auto transform group-hover:scale-105 transition-transform duration-700'
                            />
                            <div
                              className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent
                                        to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                            />
                          </div>

                          {/* Floating elements */}
                          <div
                            className='absolute -top-4 -right-4 w-8 h-8 bg-positivegreen rounded-full
                                      opacity-75 animate-[float_3s_ease-in-out_infinite]'
                          />
                          <div
                            className='absolute -bottom-4 -left-4 w-6 h-6 bg-blue rounded-full
                                      animate-[float_3s_ease-in-out_infinite] [animation-delay:1s]'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom CTA */}
        <div
          className='mt-20 text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 border
                      border-white/50 hover:bg-white/90 transition-all duration-300'
        >
          <h3 className='text-2xl font-bold text-blue mb-4'>
            ¿Tu proyecto será el próximo caso de éxito?
          </h3>
          <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
            Únete a las empresas que ya han transformado su presencia digital
            con nuestras soluciones personalizadas.
          </p>
          <button
            aria-disabled='true'
            className='bg-gray-200 text-gray-500 font-semibold px-8 py-4 rounded-xl border-2 border-red-500 cursor-not-allowed flex items-center gap-2 mx-auto'
          >
            Comenzar mi proyecto (inactivo)
            <ChevronRight className='w-5 h-5' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
