import { Pagination, Autoplay } from 'swiper/modules';

// 2. Importa los componentes React
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const elements = [
  {
    id: 1,
    title: 'Seguridad integrada desde el diseño',
    icon: 'fa-solid fa-shield-halved',
  },
  {
    id: 2,
    title: 'Acompañamiento claro y cercano',
    icon: 'fa-solid fa-handshake',
  },
  {
    id: 3,
    title: 'Automatización y eficiencia',
    icon: 'fa-solid fa-gears',
  },
  {
    id: 4,
    title: 'Agilidad y adaptabilidad',
    icon: 'fa-solid fa-bolt',
  },
];

function WhyUs() {
  return (
    <section className='bg-skyblue py-16'>
      <h2 className='text-center text-blue text-3xl md:text-4xl font-bold sm:mb-12'>
        Nuestro compromiso
      </h2>

      <div className='hidden sm:grid grid-flow-col grid-rows-4 lg:grid-rows-2 gap-5 lg:gap-10 mx-5 w-auto justify-center'>
        {elements.map(item => (
          <div key={item.id} className='flex items-center md:gap-6'>
            <div className='bg-white rounded-full shadow-md flex justify-center items-center w-[10rem] h-[10rem]'>
              <i className={`${item.icon} text-positivegreen text-[5rem]`}></i>
            </div>
            <p className='text-blue font-semibold text-3xl'>{item.title}</p>
          </div>
        ))}
      </div>
      <div className='sm:hidden h-full'>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination
          autoplay={{
            delay: 3000, // 3 segundos entre slides
            disableOnInteraction: false, // no pausa al interactuar
          }}
          slidesPerView={1}
          className='h-full'
        >
          {elements.map(item => (
            <SwiperSlide
              key={item.id}
              className='flex flex-col justify-center items-center '
            >
              <div
                className='group flex flex-col items-center
                bg-gradient-to-br from-blue-50 to-white
                rounded-2xl shadow-md hover:shadow-xl
                hover:scale-[1.025] transition-transform duration-300
                p-6 m-12'
              >
                <div
                  className='w-40 h-40 bg-white rounded-full
                  flex justify-center items-center
                  ring-2 ring-blue-100
                  group-hover:ring-blue-300
                  transition-all duration-300'
                >
                  <i
                    className={`${item.icon} text-positivegreen text-[5rem]`}
                  ></i>
                </div>
                <p className='mt-6 text-lg font-semibold text-blue-700 text-center'>
                  {item.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default WhyUs;
