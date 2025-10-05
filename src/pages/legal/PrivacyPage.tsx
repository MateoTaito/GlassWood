import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Eye, Lock, FileText } from "lucide-react";

const PrivacyPage: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50 pt-20'>
      {/* Header */}
      <div className='bg-white shadow-sm border-b'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <Link
            to='/'
            className='inline-flex items-center gap-2 text-blue hover:text-positivegreen
                     transition-colors duration-300 mb-6 group'
          >
            <ArrowLeft className='w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300' />
            Volver al inicio
          </Link>

          <div className='flex items-center gap-4 mb-4'>
            <div className='w-12 h-12 bg-blue/10 rounded-lg flex items-center justify-center'>
              <Shield className='w-6 h-6 text-blue' />
            </div>
            <div>
              <h1 className='text-3xl font-bold text-gray-900'>
                Política de Privacidad
              </h1>
              <p className='text-gray-600 mt-1'>
                Última actualización: {new Date().toLocaleDateString("es-ES")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-8'>
          <div className='prose prose-blue max-w-none'>
            <section className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                <Eye className='w-5 h-5 text-blue' />
                1. Información que Recopilamos
              </h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                En Cloud and Digital SpA recopilamos información cuando usted:
              </p>
              <ul className='list-disc pl-6 text-gray-700 space-y-2'>
                <li>Visita nuestro sitio web</li>
                <li>
                  Se pone en contacto con nosotros a través de formularios
                </li>
                <li>Solicita nuestros servicios</li>
                <li>Se suscribe a nuestro boletín informativo</li>
              </ul>

              <p className='text-gray-700 leading-relaxed mt-4'>
                Los tipos de información que podemos recopilar incluyen:
              </p>
              <ul className='list-disc pl-6 text-gray-700 space-y-2'>
                <li>Información de contacto (nombre, email, teléfono)</li>
                <li>Información de la empresa</li>
                <li>Datos de navegación y uso del sitio web</li>
                <li>Preferencias y comentarios</li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                <Lock className='w-5 h-5 text-blue' />
                2. Cómo Utilizamos su Información
              </h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                Utilizamos la información recopilada para:
              </p>
              <ul className='list-disc pl-6 text-gray-700 space-y-2'>
                <li>Proporcionar y mejorar nuestros servicios</li>
                <li>Responder a sus consultas y solicitudes</li>
                <li>Enviar información relevante sobre nuestros servicios</li>
                <li>Personalizar su experiencia en nuestro sitio web</li>
                <li>Cumplir con obligaciones legales</li>
                <li>Proteger nuestros derechos y prevenir fraudes</li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                <FileText className='w-5 h-5 text-blue' />
                3. Compartir Información
              </h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                No vendemos, comercializamos ni transferimos su información
                personal a terceros, excepto en las siguientes circunstancias:
              </p>
              <ul className='list-disc pl-6 text-gray-700 space-y-2'>
                <li>Con su consentimiento explícito</li>
                <li>
                  Con proveedores de servicios que nos ayudan a operar nuestro
                  negocio
                </li>
                <li>Para cumplir con obligaciones legales</li>
                <li>Para proteger nuestros derechos, propiedad o seguridad</li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                4. Seguridad de los Datos
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Implementamos medidas de seguridad técnicas y organizativas
                apropiadas para proteger su información personal contra acceso
                no autorizado, alteración, divulgación o destrucción. Utilizamos
                cifrado SSL y otras tecnologías de seguridad para proteger la
                transmisión de datos.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                5. Sus Derechos
              </h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                Usted tiene derecho a:
              </p>
              <ul className='list-disc pl-6 text-gray-700 space-y-2'>
                <li>Acceder a su información personal</li>
                <li>Rectificar información inexacta</li>
                <li>Solicitar la eliminación de su información</li>
                <li>Oponerse al procesamiento de su información</li>
                <li>Solicitar la portabilidad de sus datos</li>
                <li>Retirar su consentimiento en cualquier momento</li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                6. Cookies
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Nuestro sitio web utiliza cookies para mejorar su experiencia de
                navegación. Para obtener información detallada sobre el uso de
                cookies, consulte nuestra{" "}
                <Link
                  to='/cookies'
                  className='text-blue hover:text-positivegreen underline'
                >
                  Política de Cookies
                </Link>
                .
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                7. Cambios en esta Política
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Podemos actualizar esta política de privacidad ocasionalmente.
                Le notificaremos sobre cambios significativos publicando la
                nueva política en esta página y actualizando la fecha de "última
                actualización".
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                8. Contacto
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Si tiene preguntas sobre esta política de privacidad o sobre
                cómo manejamos su información personal, puede contactarnos en:
              </p>
              <div className='bg-gray-50 rounded-lg p-4 mt-4'>
                <p className='text-gray-700'>
                  <strong>Cloud and Digital SpA</strong>
                  <br />
                  Email: info@cloudanddigital.cl
                  <br />
                  Teléfono: +56 9 5690 3556
                  <br />
                  Dirección: Toromazote 135, San Felipe, Chile
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
