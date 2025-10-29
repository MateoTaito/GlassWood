import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import {
  Leaf,
  Recycle,
  Sprout,
  Globe,
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
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
    icon: <Leaf className='w-8 h-8' />,
    color: "text-positivegreen",
    bgColor: "bg-sand",
  },
  {
    id: 2,
    title: "Consectetur adipiscing",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    icon: <Recycle className='w-8 h-8' />,
    color: "text-brand",
    bgColor: "bg-sand",
  },
  {
    id: 3,
    title: "Sed do eiusmod",
    description:
      "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    icon: <Sprout className='w-8 h-8' />,
    color: "text-positivegreen",
    bgColor: "bg-sand",
  },
  {
    id: 4,
    title: "Incididunt ut labore",
    description:
      "Dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate.",
    icon: <Globe className='w-8 h-8' />,
    color: "text-brand",
    bgColor: "bg-sand",
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
      className={`relative py-20 bg-gradient-to-br from-sand via-white to-sand overflow-hidden ${className}`}
    >
      {/* Background decorative elements */}
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute top-10 left-10 w-32 h-32 bg-brand rounded-full blur-2xl animate-pulse' />
        <div
          className='absolute bottom-20 right-20 w-24 h-24 bg-positivegreen rounded-full blur-xl animate-bounce'
          style={{ animationDelay: "1s" }}
        />
        <div
          className='absolute top-1/2 left-1/4 w-16 h-16 bg-sand rounded-full blur-lg animate-ping'
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center space-y-6 mb-16'>
          <div className='inline-flex items-center px-4 py-2 bg-brand/10 text-brand rounded-full text-sm font-medium'>
            <CheckCircle className='w-4 h-4 mr-2' />
            Lorem ipsum
          </div>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-brand leading-tight'>
            Lorem ipsum
            <span className='bg-gradient-to-r from-brand to-positivegreen bg-clip-text text-transparent'>
              {" "}
              dolor sit amet
            </span>
            <br />
            consectetur
          </h2>

          <p className='text-lg text-brand/80 max-w-3xl mx-auto leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className='hidden lg:grid grid-cols-2 gap-8 max-w-6xl mx-auto'>
          {commitmentItems.map((item, index) => (
            <div
              key={item.id}
              className={`group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl
                        transition-all duration-500 transform hover:scale-105
                        border border-gray-100 hover:border-brand/20
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
                  <h3 className='text-xl font-bold text-brand group-hover:text-positivegreen transition-colors duration-300'>
                    {item.title}
                  </h3>
                  <p className='text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300'>
                    {item.description}
                  </p>

                  {/* Action indicator */}
                  <div className='flex items-center gap-2 text-brand opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0'>
                    <span className='text-sm font-medium'>Lorem ipsum</span>
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
              bulletClass: "swiper-pagination-bullet !bg-brand !opacity-50",
              bulletActiveClass:
                "swiper-pagination-bullet-active !bg-brand !opacity-100",
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
                    <h3 className='text-xl font-bold text-brand'>
                      {item.title}
                    </h3>
                    <p className='text-gray-600 leading-relaxed'>
                      {item.description}
                    </p>
                  </div>

                  {/* Decorative element */}
                  <div className='mt-6 flex justify-center'>
                    <div className='w-12 h-1 bg-gradient-to-r from-brand to-positivegreen rounded-full' />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bottom CTA */}
        <div className='mt-16 text-center'>
          <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-white/50'>
            <h3 className='text-2xl font-bold text-brand mb-4'>
              Lorem ipsum dolor sit amet?
            </h3>
            <p className='text-gray-600 mb-6'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='flex justify-center justify-items-center'>
              <Link
                className='group bg-brand hover:bg-positivegreen text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 w-auto'
                to='/contact'
              >
                Lorem ipsum
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
