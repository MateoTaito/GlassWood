import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  FileText,
  Scale,
  UserCheck,
  AlertTriangle,
} from "lucide-react";

const TermsPage: React.FC = () => {
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
              <Scale className='w-6 h-6 text-blue' />
            </div>
            <div>
              <h1 className='text-3xl font-bold text-gray-900'>
                Términos de Servicio
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
                <FileText className='w-5 h-5 text-blue' />
                1. Aceptación de los Términos
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Al acceder y utilizar los servicios de Cloud and Digital SpA
                ("nosotros", "nuestro" o "la empresa"), usted acepta cumplir y
                estar sujeto a estos términos de servicio. Si no está de acuerdo
                con alguna parte de estos términos, no debe usar nuestros
                servicios.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                <UserCheck className='w-5 h-5 text-blue' />
                2. Descripción de los Servicios
              </h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                Cloud and Digital SpA ofrece servicios de tecnología que
                incluyen:
              </p>
              <ul className='list-disc pl-6 text-gray-700 space-y-2'>
                <li>Desarrollo de aplicaciones web personalizadas</li>
                <li>Creación de plataformas de cursos en línea</li>
                <li>Consultoría digital y tecnológica</li>
                <li>Mantenimiento y soporte técnico</li>
                <li>Servicios relacionados de tecnología de la información</li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                3. Uso Aceptable
              </h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                Al utilizar nuestros servicios, usted se compromete a:
              </p>
              <ul className='list-disc pl-6 text-gray-700 space-y-2'>
                <li>Proporcionar información precisa y actualizada</li>
                <li>No utilizar los servicios para actividades ilegales</li>
                <li>
                  No interferir con el funcionamiento de nuestros sistemas
                </li>
                <li>Respetar los derechos de propiedad intelectual</li>
                <li>
                  Mantener la confidencialidad de sus credenciales de acceso
                </li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                4. Derechos de Propiedad Intelectual
              </h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                Todos los derechos de propiedad intelectual sobre nuestros
                servicios, incluyendo pero no limitado a código fuente, diseños,
                marcas comerciales y contenido, permanecen como propiedad de
                Cloud and Digital SpA o sus licenciantes.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                Los trabajos personalizados desarrollados específicamente para
                el cliente serán entregados según lo acordado en el contrato de
                servicios correspondiente.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                5. Pago y Facturación
              </h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                Los términos de pago se establecerán en cada contrato de
                servicios individual. En general:
              </p>
              <ul className='list-disc pl-6 text-gray-700 space-y-2'>
                <li>Los pagos deben realizarse según el cronograma acordado</li>
                <li>
                  Los pagos atrasados pueden resultar en suspensión de servicios
                </li>
                <li>
                  Todos los precios están sujetos a los impuestos aplicables
                </li>
                <li>
                  Las modificaciones de alcance pueden resultar en ajustes de
                  precio
                </li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                <AlertTriangle className='w-5 h-5 text-blue' />
                6. Limitación de Responsabilidad
              </h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                En la máxima medida permitida por la ley:
              </p>
              <ul className='list-disc pl-6 text-gray-700 space-y-2'>
                <li>Nuestros servicios se proporcionan "tal como están"</li>
                <li>
                  No garantizamos que los servicios estarán libres de errores
                </li>
                <li>
                  No seremos responsables por daños indirectos o consecuenciales
                </li>
                <li>
                  Nuestra responsabilidad total no excederá el monto pagado por
                  los servicios
                </li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                7. Confidencialidad
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Ambas partes se comprometen a mantener la confidencialidad de
                cualquier información confidencial compartida durante la
                prestación de servicios. Esta obligación permanecerá vigente
                incluso después de la terminación del acuerdo de servicios.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                8. Terminación
              </h2>
              <p className='text-gray-700 leading-relaxed mb-4'>
                Cualquiera de las partes puede terminar el acuerdo de servicios:
              </p>
              <ul className='list-disc pl-6 text-gray-700 space-y-2'>
                <li>Con aviso previo según lo establecido en el contrato</li>
                <li>Inmediatamente en caso de incumplimiento material</li>
                <li>Inmediatamente en caso de insolvencia de la otra parte</li>
              </ul>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                9. Modificaciones
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Nos reservamos el derecho de modificar estos términos en
                cualquier momento. Las modificaciones entrarán en vigor
                inmediatamente después de su publicación en nuestro sitio web.
                Su uso continuado de nuestros servicios constituye la aceptación
                de los términos modificados.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                10. Ley Aplicable
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Estos términos se regirán e interpretarán de acuerdo con las
                leyes de Chile. Cualquier disputa será resuelta en los
                tribunales competentes de San Felipe, Chile.
              </p>
            </section>

            <section className='mb-8'>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>
                11. Contacto
              </h2>
              <p className='text-gray-700 leading-relaxed'>
                Si tiene preguntas sobre estos términos de servicio, puede
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

export default TermsPage;
