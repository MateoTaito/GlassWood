import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Cookie, Settings, Info, ToggleLeft } from "lucide-react";

const CookiesPage: React.FC = () => {
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
              <Cookie className='w-6 h-6 text-blue' />
            </div>
            <div>
              <h1 className='text-3xl font-bold text-gray-900'>
                Política de Cookies
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
                <Info className='w-5 h-5 text-blue' />
                ¿Qué son las Cookies?
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Las cookies son pequeños archivos de texto que se almacenan en
                su dispositivo cuando visita nuestro sitio web. Estas cookies
                nos ayudan a proporcionar una mejor experiencia de usuario,
                recordar sus preferencias y analizar cómo utiliza nuestro sitio
                web.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                <Settings className='w-5 h-5 text-blue' />
                Tipos de Cookies que Utilizamos
              </h2>

              <div className='space-y-6'>
                <div className='bg-gray-50 rounded-lg p-4'>
                  <h3 className='font-semibold text-gray-900 mb-2'>
                    Cookies Estrictamente Necesarias
                  </h3>
                  <p className='text-gray-700 text-sm leading-relaxed'>
                    Estas cookies son esenciales para el funcionamiento del
                    sitio web y no se pueden desactivar. Permiten funciones
                    básicas como la navegación por páginas y el acceso a áreas
                    seguras del sitio web.
                  </p>
                  <div className='mt-2 text-xs text-gray-500'>
                    Ejemplos: cookies de sesión, cookies de seguridad
                  </div>
                </div>

                <div className='bg-gray-50 rounded-lg p-4'>
                  <h3 className='font-semibold text-gray-900 mb-2'>
                    Cookies de Rendimiento
                  </h3>
                  <p className='text-gray-700 text-sm leading-relaxed'>
                    Estas cookies recopilan información sobre cómo los
                    visitantes utilizan nuestro sitio web, como qué páginas
                    visitan con más frecuencia y si reciben mensajes de error.
                    Toda la información es anónima.
                  </p>
                  <div className='mt-2 text-xs text-gray-500'>
                    Ejemplos: Google Analytics, métricas de rendimiento
                  </div>
                </div>

                <div className='bg-gray-50 rounded-lg p-4'>
                  <h3 className='font-semibold text-gray-900 mb-2'>
                    Cookies de Funcionalidad
                  </h3>
                  <p className='text-gray-700 text-sm leading-relaxed'>
                    Estas cookies permiten que el sitio web recuerde las
                    opciones que usted hace y proporcionan funciones mejoradas y
                    más personales.
                  </p>
                  <div className='mt-2 text-xs text-gray-500'>
                    Ejemplos: preferencias de idioma, configuraciones de usuario
                  </div>
                </div>

                <div className='bg-gray-50 rounded-lg p-4'>
                  <h3 className='font-semibold text-gray-900 mb-2'>
                    Cookies de Marketing
                  </h3>
                  <p className='text-gray-700 text-sm leading-relaxed'>
                    Estas cookies se utilizan para mostrar anuncios que son
                    relevantes para usted y sus intereses. También pueden ser
                    utilizadas para limitar el número de veces que ve un
                    anuncio.
                  </p>
                  <div className='mt-2 text-xs text-gray-500'>
                    Ejemplos: cookies de redes sociales, cookies publicitarias
                  </div>
                </div>
              </div>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                Cookies de Terceros
              </h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                Nuestro sitio web puede contener cookies de terceros,
                incluyendo:
              </p>
              <ul className='list-disc pl-6 text-gray-700 space-y-2'>
                <li>
                  <strong>Google Analytics:</strong> Para analizar el tráfico
                  del sitio web
                </li>
                <li>
                  <strong>Redes Sociales:</strong> Para funciones de compartir
                  en redes sociales
                </li>
                <li>
                  <strong>Servicios de Chat:</strong> Para atención al cliente
                  en línea
                </li>
                <li>
                  <strong>Mapas:</strong> Para mostrar ubicaciones y direcciones
                </li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                <ToggleLeft className='w-5 h-5 text-blue' />
                Control de Cookies
              </h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                Usted puede controlar y/o eliminar las cookies como desee.
                Puede:
              </p>
              <ul className='list-disc pl-6 text-gray-700 space-y-2 mb-4'>
                <li>
                  Eliminar todas las cookies que ya están en su dispositivo
                </li>
                <li>
                  Configurar la mayoría de los navegadores para evitar que se
                  coloquen cookies
                </li>
                <li>
                  Configurar su navegador para que le notifique cuando se envían
                  cookies
                </li>
              </ul>

              <div className='bg-blue/5 border border-blue/20 rounded-lg p-4'>
                <p className='text-gray-700 text-sm'>
                  <strong>Nota:</strong> Si elige eliminar o desactivar las
                  cookies, algunas funciones de nuestro sitio web pueden no
                  funcionar correctamente.
                </p>
              </div>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                Configuración del Navegador
              </h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                Para gestionar las cookies en los navegadores más comunes:
              </p>

              <div className='grid md:grid-cols-2 gap-4'>
                <div className='bg-gray-50 rounded-lg p-4'>
                  <h3 className='font-semibold text-gray-900 mb-2'>
                    Google Chrome
                  </h3>
                  <p className='text-sm text-gray-700'>
                    Configuración → Privacidad y seguridad → Cookies y otros
                    datos de sitios
                  </p>
                </div>

                <div className='bg-gray-50 rounded-lg p-4'>
                  <h3 className='font-semibold text-gray-900 mb-2'>
                    Mozilla Firefox
                  </h3>
                  <p className='text-sm text-gray-700'>
                    Opciones → Privacidad y seguridad → Cookies y datos del
                    sitio
                  </p>
                </div>

                <div className='bg-gray-50 rounded-lg p-4'>
                  <h3 className='font-semibold text-gray-900 mb-2'>Safari</h3>
                  <p className='text-sm text-gray-700'>
                    Preferencias → Privacidad → Gestionar datos de sitios web
                  </p>
                </div>

                <div className='bg-gray-50 rounded-lg p-4'>
                  <h3 className='font-semibold text-gray-900 mb-2'>
                    Microsoft Edge
                  </h3>
                  <p className='text-sm text-gray-700'>
                    Configuración → Privacidad, búsqueda y servicios → Cookies
                  </p>
                </div>
              </div>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                Duración de las Cookies
              </h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                Las cookies pueden ser:
              </p>
              <ul className='list-disc pl-6 text-gray-700 space-y-2'>
                <li>
                  <strong>Cookies de sesión:</strong> Se eliminan cuando cierra
                  el navegador
                </li>
                <li>
                  <strong>Cookies persistentes:</strong> Permanecen por un
                  período determinado (hasta 2 años)
                </li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                Cambios en esta Política
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Podemos actualizar esta política de cookies ocasionalmente para
                reflejar cambios en nuestras prácticas o por razones operativas,
                legales o regulatorias. Le recomendamos que revise esta página
                periódicamente.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                Contacto
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Si tiene preguntas sobre nuestra política de cookies, puede
                contactarnos en:
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

export default CookiesPage;
