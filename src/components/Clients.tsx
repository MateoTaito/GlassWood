// src/components/ClientsSwiperSection.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import './Clients.css';

const slides = [
  {
    id: 1,
    logoSrc: 'clients/urbina/logo_urbina.webp',
    title: 'Urbina Consultores',
    description: `Consultora tributaria legal
Plataforma institucional moderna y optimizada para SEO.`,
    mediaSrc: 'clients/urbina/urbina_combination.png',
    altText: 'Urbina Consultores - desktop y móvil',
  },
  {
    id: 2,
    logoSrc: 'clients/uakari/logo_uakari.png',
    title: 'Uakari Academy',
    description: `Academia de formación online
Plataforma de cursos online con integración de pagos y gestión de usuarios.`,
    mediaSrc: 'clients/uakari/uakari_combination.png',
    altText: 'Uakari Academy - desktop y móvil',
  },
  // ➤ Añade más objetos con logoSrc, title, description, mediaSrc y altText
];

export default function ClientsSwiperSection() {
  return (
    <section className='bg-blue-50 py-12 w-full'>
      <div className='w-screen overflow-visible'>
        {/* Título general */}
        <div className='text-center mb-8'>
          <h2 className='text-2xl sm:text-3xl font-bold text-blue-700'>
            Clientes que confían en nosotros
          </h2>
          <p className='mt-2 text-sm sm:text-base italic text-blue-500'>
            Organizaciones que han transformado su presencia digital
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
          pagination
          loop
          className='w-full overflow-visible'
          style={{ overflow: 'visible' }}
        >
          {slides.map(slide => (
            <SwiperSlide key={slide.id} className='w-full overflow-visible'>
              <div className='min-h-[25rem] relative bg-white shadow-md p-6 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 overflow-visible'>
                {/* Logo solapado */}
                <div className='absolute -top-12 left-50 bg-white rounded-full p-2 shadow-xl z-10'>
                  <img
                    src={slide.logoSrc}
                    alt={`${slide.title} logo`}
                    className='w-28 h-28'
                  />
                </div>
                <div className='flex w-full justify-center items-center'>
                  {/* Texto (izquierda) */}
                  <div className='text-start mx-6'>
                    <div>
                      <h1 className='text-start text-3xl font-semibold text-blue-800'>
                        {slide.title}
                      </h1>
                      <p className='mt-2 text-gray-700 whitespace-pre-line'>
                        {slide.description}
                      </p>
                    </div>
                  </div>

                  {/* Imagen (derecha) */}
                  <div className=' flex justify-center items-center'>
                    <img
                      src={slide.mediaSrc}
                      alt={slide.altText}
                      className='w-full max-w-sm md:max-w-md'
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
