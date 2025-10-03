import React, { useState } from "react";
import {
  Play,
  Users,
  Award,
  CreditCard,
  Palette,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Video,
  BarChart,
} from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface CourseSectionProps {
  onGetStarted?: () => void;
  onDemo?: () => void;
  className?: string;
}

const features: Feature[] = [
  {
    id: "multimedia",
    title: "Lecciones multimedia y evaluaciones",
    description: "Videos HD, documentos interactivos y exámenes automatizados",
    icon: <Video className='w-5 h-5' />,
  },
  {
    id: "management",
    title: "Panel de gestión de usuarios",
    description: "Control total sobre estudiantes, instructores y contenido",
    icon: <Users className='w-5 h-5' />,
  },
  {
    id: "payments",
    title: "Integración con medios de pago",
    description: "WebPay, PayPal y otros procesadores de pago seguros",
    icon: <CreditCard className='w-5 h-5' />,
  },
  {
    id: "customization",
    title: "Personalización visual",
    description: "Diseño adaptado a tu marca y colores corporativos",
    icon: <Palette className='w-5 h-5' />,
  },
];

const stats = [
  {
    label: "Tiempo de desarrollo",
    value: "4-6 semanas",
    icon: <BarChart className='w-6 h-6' />,
  },
  {
    label: "Usuarios concurrentes",
    value: "1000+",
    icon: <Users className='w-6 h-6' />,
  },
  {
    label: "Certificados emitidos",
    value: "Ilimitados",
    icon: <Award className='w-6 h-6' />,
  },
];

const CourseSection: React.FC<CourseSectionProps> = ({
  onGetStarted = () => {},
  onDemo = () => {},
  className = "",
}) => {
  const [activeFeature, setActiveFeature] = useState<string>("multimedia");

  return (
    <section
      className={`py-20 bg-gradient-to-br from-white to-skyblue/30 ${className}`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center space-y-6 mb-16'>
          <div className='inline-flex items-center px-4 py-2 bg-blue/10 text-blue rounded-full text-sm font-medium'>
            <BookOpen className='w-4 h-4 mr-2' />
            Solución Educativa
          </div>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-blue leading-tight'>
            Plataforma de Cursos con
            <br />
            <span className='bg-gradient-to-r from-blue to-positivegreen bg-clip-text text-transparent'>
              Certificación Automática
            </span>
          </h2>

          <p className='text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed'>
            Lanza tu academia digital en tiempo récord. Creamos una plataforma
            robusta para cursos online con emisión automática de certificados y
            gestión completa de usuarios.
          </p>
        </div>

        {/* Main content grid */}
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left column - Features */}
          <div className='space-y-8'>
            <div className='space-y-6'>
              <h3 className='text-2xl font-bold text-blue mb-6'>
                Todo lo que necesitas para tu academia online
              </h3>

              {features.map(feature => (
                <div
                  key={feature.id}
                  className={`group p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    activeFeature === feature.id
                      ? "border-blue bg-blue/5 shadow-lg"
                      : "border-gray-200 hover:border-blue/50 hover:bg-blue/5"
                  }`}
                  onClick={() => setActiveFeature(feature.id)}
                >
                  <div className='flex items-start gap-4'>
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                        activeFeature === feature.id
                          ? "bg-blue text-white"
                          : "bg-skyblue text-blue group-hover:bg-blue group-hover:text-white"
                      }`}
                    >
                      {feature.icon}
                    </div>

                    <div className='flex-1'>
                      <h4
                        className={`font-semibold text-lg mb-2 transition-colors duration-300 ${
                          activeFeature === feature.id
                            ? "text-blue"
                            : "text-gray-800"
                        }`}
                      >
                        {feature.title}
                      </h4>
                      <p className='text-gray-600 leading-relaxed'>
                        {feature.description}
                      </p>
                    </div>

                    <CheckCircle
                      className={`w-6 h-6 transition-all duration-300 ${
                        activeFeature === feature.id
                          ? "text-positivegreen opacity-100 scale-100"
                          : "text-gray-300 opacity-0 scale-75"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className='flex flex-col sm:flex-row gap-4 pt-6'>
              <button
                onClick={onGetStarted}
                className='group bg-blue hover:bg-positivegreen text-white font-semibold
                         px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105
                         hover:shadow-lg hover:shadow-blue/25 flex items-center justify-center gap-2'
              >
                Quiero mi plataforma de cursos
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
              </button>

              <button
                onClick={onDemo}
                className='group bg-transparent hover:bg-blue/10 text-blue border-2 border-blue
                         font-semibold px-8 py-4 rounded-xl transition-all duration-300
                         flex items-center justify-center gap-2'
              >
                <Play className='w-5 h-5' />
                Ver demo en vivo
              </button>
            </div>
          </div>

          {/* Right column - Visual showcase */}
          <div className='space-y-8'>
            {/* Stats cards */}
            <div className='grid grid-cols-1 gap-4'>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className='bg-white p-6 rounded-xl shadow-sm hover:shadow-lg
                           transition-all duration-300 transform hover:scale-105
                           border border-gray-100 group'
                >
                  <div className='flex items-center gap-4'>
                    <div
                      className='w-12 h-12 bg-skyblue text-blue rounded-lg
                                  flex items-center justify-center group-hover:bg-blue
                                  group-hover:text-white transition-colors duration-300'
                    >
                      {stat.icon}
                    </div>
                    <div>
                      <div className='text-2xl font-bold text-blue'>
                        {stat.value}
                      </div>
                      <div className='text-sm text-gray-600'>{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature highlight */}
            <div className='bg-gradient-to-r from-blue to-blue-700 p-8 rounded-2xl text-white'>
              <h4 className='text-xl font-bold mb-4'>
                🎓 Certificación Automática
              </h4>
              <p className='text-skyblue leading-relaxed mb-6'>
                Los estudiantes reciben automáticamente sus certificados al
                completar los cursos. Diseño profesional con códigos de
                verificación únicos.
              </p>
              <div className='flex items-center gap-2 text-sm'>
                <Award className='w-4 h-4' />
                <span>Certificados con validación blockchain disponible</span>
              </div>
            </div>

            {/* Process steps */}
            <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
              <h4 className='font-bold text-blue mb-4'>
                Proceso de implementación:
              </h4>
              <div className='space-y-3'>
                {[
                  "Análisis de necesidades y diseño UX/UI",
                  "Desarrollo de la plataforma base",
                  "Integración de contenidos y pruebas",
                  "Lanzamiento y capacitación del equipo",
                ].map((step, index) => (
                  <div key={index} className='flex items-center gap-3'>
                    <div
                      className='w-6 h-6 bg-positivegreen text-white rounded-full
                                  flex items-center justify-center text-xs font-bold'
                    >
                      {index + 1}
                    </div>
                    <span className='text-gray-700 text-sm'>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA section */}
        <div className='mt-20 text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100'>
          <h3 className='text-2xl font-bold text-blue mb-4'>
            ¿Listo para revolucionar tu forma de enseñar?
          </h3>
          <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
            Únete a las instituciones que ya han transformado su educación
            online con nuestra plataforma de cursos certificados.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button
              onClick={onGetStarted}
              className='bg-positivegreen hover:bg-blue text-white font-semibold
                       px-8 py-3 rounded-lg transition-colors duration-300'
            >
              Comenzar mi proyecto
            </button>
            <button
              onClick={onDemo}
              className='bg-transparent hover:bg-skyblue/20 text-blue border border-blue
                       font-semibold px-8 py-3 rounded-lg transition-colors duration-300'
            >
              Agendar consultoría gratuita
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
