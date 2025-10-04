import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import {
  Shield,
  Handshake,
  Cog,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";

interface CommitmentItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

interface WhyUsProps {
  className?: string;
}

const commitmentItems: CommitmentItem[] = [
  {
    id: 1,
    title: "Seguridad integrada desde el diseño",
    description:
      "Implementamos las mejores prácticas de seguridad desde la primera línea de código, protegiendo tus datos y los de tus usuarios.",
    icon: <Shield className='w-8 h-8' />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    title: "Acompañamiento claro y cercano",
    description:
      "Te guiamos en cada paso del proceso con comunicación transparente y soporte técnico especializado.",
    icon: <Handshake className='w-8 h-8' />,
    color: "text-positivegreen",
    bgColor: "bg-green-50",
  },
  {
    id: 3,
    title: "Automatización y eficiencia",
    description:
      "Optimizamos tus procesos con soluciones automatizadas que ahorran tiempo y reducen errores operativos.",
    icon: <Cog className='w-8 h-8' />,
    color: "text-orange",
    bgColor: "bg-orange-50",
  },
  {
    id: 4,
    title: "Agilidad y adaptabilidad",
    description:
      "Desarrollamos con metodologías ágiles que nos permiten adaptarnos rápidamente a tus necesidades cambiantes.",
    icon: <Zap className='w-8 h-8' />,
    color: "text-coral",
    bgColor: "bg-red-50",
  },
];

const WhyUs: React.FC<WhyUsProps> = ({ className = "" }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("why-us-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      id='why-us-section'
      className={`relative py-20 bg-gradient-to-br from-skyblue via-skyblue to-blue-100 overflow-hidden ${className}`}
    >
      {/* Background decorative elements */}
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute top-10 left-10 w-32 h-32 bg-blue rounded-full blur-2xl animate-pulse' />
        <div
          className='absolute bottom-20 right-20 w-24 h-24 bg-positivegreen rounded-full blur-xl animate-bounce'
          style={{ animationDelay: "1s" }}
        />
        <div
          className='absolute top-1/2 left-1/4 w-16 h-16 bg-orange rounded-full blur-lg animate-ping'
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center space-y-6 mb-16'>
          <div className='inline-flex items-center px-4 py-2 bg-blue/20 text-blue rounded-full text-sm font-medium'>
            <CheckCircle className='w-4 h-4 mr-2' />
            Nuestros Valores
          </div>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-blue leading-tight'>
            Nuestro
            <span className='bg-gradient-to-r from-blue to-positivegreen bg-clip-text text-transparent'>
              {" "}
              compromiso
            </span>
            <br />
            contigo
          </h2>

          <p className='text-lg text-blue-700 max-w-3xl mx-auto leading-relaxed'>
            Trabajamos con valores sólidos que nos permiten crear soluciones
            digitales excepcionales y duraderas.
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className='hidden lg:grid grid-cols-2 gap-8 max-w-6xl mx-auto'>
          {commitmentItems.map((item, index) => (
            <div
              key={item.id}
              className={`group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl
                        transition-all duration-500 transform hover:scale-105
                        border border-gray-100 hover:border-blue/20
                        ${isVisible ? "animate-in slide-in-from-bottom-4" : "opacity-0"}
                      `}
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: "both",
              }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className='flex items-start gap-6'>
                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center
                            transition-all duration-300 group-hover:scale-110
                            ${activeIndex === index ? item.bgColor : "bg-gray-50"}
                          `}
                >
                  <div
                    className={`transition-colors duration-300 ${
                      activeIndex === index ? item.color : "text-gray-400"
                    }`}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className='flex-1 space-y-4'>
                  <h3 className='text-xl font-bold text-blue group-hover:text-positivegreen transition-colors duration-300'>
                    {item.title}
                  </h3>
                  <p className='text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300'>
                    {item.description}
                  </p>

                  {/* Action indicator */}
                  <div className='flex items-center gap-2 text-blue opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0'>
                    <span className='text-sm font-medium'>Saber más</span>
                    <ArrowRight className='w-4 h-4' />
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className='mt-6 h-1 bg-gray-100 rounded-full overflow-hidden'>
                <div
                  className={`h-full transition-all duration-500 ${
                    activeIndex === index ? "w-full bg-positivegreen" : "w-0"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swiper View */}
        <div className='lg:hidden'>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-blue !opacity-50",
              bulletActiveClass:
                "swiper-pagination-bullet-active !bg-blue !opacity-100",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={1}
            spaceBetween={20}
            className='!pb-12'
            onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
          >
            {commitmentItems.map(item => (
              <SwiperSlide key={item.id}>
                <div className='group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 mx-4 border border-gray-100'>
                  {/* Icon */}
                  <div className='flex justify-center mb-6'>
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center
                                group-hover:scale-110 transition-transform duration-300
                                ${item.bgColor}
                              `}
                    >
                      <div className={item.color}>{item.icon}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className='text-center space-y-4'>
                    <h3 className='text-xl font-bold text-blue'>
                      {item.title}
                    </h3>
                    <p className='text-gray-600 leading-relaxed'>
                      {item.description}
                    </p>
                  </div>

                  {/* Decorative element */}
                  <div className='mt-6 flex justify-center'>
                    <div className='w-12 h-1 bg-gradient-to-r from-blue to-positivegreen rounded-full' />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom CTA */}
        <div className='mt-16 text-center'>
          <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-white/50'>
            <h3 className='text-2xl font-bold text-blue mb-4'>
              ¿Listo para comenzar tu proyecto?
            </h3>
            <p className='text-gray-600 mb-6'>
              Conversemos sobre cómo podemos ayudarte a digitalizar y hacer
              crecer tu negocio con nuestras soluciones personalizadas.
            </p>
            <div className='flex justify-center justify-items-center'>
              <Link
                className='group bg-blue hover:bg-positivegreen text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 w-auto'
                to='/contact'
              >
                Comenzar conversación
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
