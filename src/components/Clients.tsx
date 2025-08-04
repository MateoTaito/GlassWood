// src/components/ClientsSwiperSection.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
    {
        id: 1,
        logoSrc: "clients/urbina/logo_urbina.png",
        title: "Urbina Consultores",
        description: `Consultora tributaria legal
Plataforma institucional moderna y optimizada para SEO.`,
        mediaSrc: "clients/urbina/urbina_combination.png",
        altText: "Urbina Consultores - desktop y móvil",
    },
    // ➤ Añade más objetos con logoSrc, title, description, mediaSrc y altText
];

export default function ClientsSwiperSection() {
    return (
        <section className="bg-blue-50 py-12 px-4 md:px-8">
            <div className="max-w-screen-lg mx-auto">
                {/* Título general */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">
                        Clientes que confían en nosotros
                    </h2>
                    <p className="mt-2 text-sm sm:text-base italic text-blue-500">
                        Organizaciones que han transformado su presencia digital
                    </p>
                </div>

                {/* Swiper */}
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    loop
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="relative bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                                {/* Logo solapado */}
                                <div className="absolute -top-6 left-6 bg-white rounded-full p-2 shadow">
                                    <img
                                        src={slide.logoSrc}
                                        alt={`${slide.title} logo`}
                                        className="w-12 h-12"
                                    />
                                </div>

                                {/* Texto (izquierda) */}
                                <div className="w-full md:w-1/2 text-center md:text-left">
                                    <h3 className="text-xl font-semibold text-blue-800">
                                        {slide.title}
                                    </h3>
                                    <p className="mt-2 text-gray-700 whitespace-pre-line">
                                        {slide.description}
                                    </p>
                                </div>

                                {/* Imagen (derecha) */}
                                <div className="w-full md:w-1/2 flex justify-center">
                                    <img
                                        src={slide.mediaSrc}
                                        alt={slide.altText}
                                        className="w-full max-w-sm md:max-w-md"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
