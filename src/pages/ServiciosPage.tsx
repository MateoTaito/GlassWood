import React from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../data/servicesConfig";
import {
  MonitorSmartphone,
  Rocket,
  Zap,
  Shield,
  BookOpen,
  Video,
  BarChart,
  Award,
  Search,
  Target,
  Wrench,
  TrendingUp,
} from "lucide-react";

const ServiciosPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-gray-900 mb-4'>
            Servicio no encontrado
          </h1>
          <p className='text-gray-600'>
            El servicio que buscas no existe o ha sido movido.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative py-20 lg:py-32 overflow-hidden mt-20 lg:mt-24'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue to-skyblue'></div>
        {service.heroImage && (
          <div className='absolute inset-0 opacity-20'>
            <img
              src={service.heroImage}
              alt={service.title}
              className='w-full h-full object-cover'
            />
          </div>
        )}
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center text-white'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              {service.title}
            </h1>
            <p className='text-xl md:text-2xl mb-8 text-skyblue'>
              {service.subtitle}
            </p>
            <p className='text-lg md:text-xl max-w-3xl mx-auto leading-relaxed'>
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Características Principales
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Todo lo que necesitas para llevar tu proyecto al siguiente nivel
            </p>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {service.features.map((feature, index) => (
              <div key={index} className='text-center group'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center'>
                  {(() => {
                    if (service.id === "desarrollo-web") {
                      return (
                        [
                          <MonitorSmartphone
                            key='dw-0'
                            className='w-10 h-10 text-blue'
                          />,
                          <Rocket key='dw-1' className='w-10 h-10 text-blue' />,
                          <Zap key='dw-2' className='w-10 h-10 text-blue' />,
                          <Shield key='dw-3' className='w-10 h-10 text-blue' />,
                        ][index] || null
                      );
                    }
                    if (service.id === "plataformas-cursos") {
                      return (
                        [
                          <BookOpen
                            key='pc-0'
                            className='w-10 h-10 text-blue'
                          />,
                          <Video key='pc-1' className='w-10 h-10 text-blue' />,
                          <BarChart
                            key='pc-2'
                            className='w-10 h-10 text-blue'
                          />,
                          <Award key='pc-3' className='w-10 h-10 text-blue' />,
                        ][index] || null
                      );
                    }
                    if (service.id === "consultoria-digital") {
                      return (
                        [
                          <Search key='cd-0' className='w-10 h-10 text-blue' />,
                          <Target key='cd-1' className='w-10 h-10 text-blue' />,
                          <Wrench key='cd-2' className='w-10 h-10 text-blue' />,
                          <TrendingUp
                            key='cd-3'
                            className='w-10 h-10 text-blue'
                          />,
                        ][index] || null
                      );
                    }
                    return feature.icon;
                  })()}
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                  {feature.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Beneficios para tu Negocio
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Descubre cómo este servicio puede transformar tu empresa
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className='bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300'
              >
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>
                  {benefit.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-br from-blue to-positivegreen'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            ¿Listo para comenzar?
          </h2>
          <p className='text-xl text-skyblue mb-8'>
            {service.ctaSubtext ||
              "Contacta con nosotros y hagamos realidad tu proyecto"}
          </p>
          <button
            aria-disabled='true'
            className='bg-gray-200 text-gray-500 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-red-500 cursor-not-allowed'
          >
            {service.ctaText} (inactivo)
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServiciosPage;
