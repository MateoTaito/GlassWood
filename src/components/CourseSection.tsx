// src/components/CourseCertificationSection.jsx
export default function CourseSection() {
  return (
    <section className='bg-white py-12 px-4'>
      <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-start md:items-center md:justify-between'>
        {/* Izquierda: título + descripción + botón */}
        <div className='w-full md:w-1/2 space-y-4 text-center md:text-left'>
          <h2 className='text-2xl sm:text-3xl font-bold text-blue-600'>
            Plataforma de Cursos con Certificación
          </h2>
          <p className='text-base sm:text-lg text-gray-700'>
            Lanza tu academia digital en tiempo récord
            <br />
            Creamos una plataforma robusta para cursos online con emisión
            automática de certificados
          </p>
          <button className='mt-2 bg-blue-600 hover:bg-positivegreen text-white hover:text-black font-medium px-6 py-3 rounded-md inline-block transition-colors'>
            Quiero mi plataforma de cursos
          </button>
        </div>

        {/* Derecha: lista de features */}
        <ul className='w-full md:w-1/2 mt-8 md:mt-0 space-y-3'>
          {[
            'Lecciones multimedia y evaluaciones',
            'Panel de gestión de usuarios',
            'Integración con medios de pago',
            'Personalización visual',
          ].map(item => (
            <li key={item} className='flex items-start'>
              {/* Icono de check */}
              <svg
                className='flex-shrink-0 w-5 h-5 text-blue-600 mt-1'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414L9 14.414 5.293 10.707a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 00-1.414-1.414z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='ml-3 text-gray-700'>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
