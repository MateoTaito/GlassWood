import React from "react";
import {
  CheckCircle,
  Users,
  Target,
  Award,
  Leaf,
  Sprout,
  Recycle,
} from "lucide-react";
import { teamMembers } from "./team";

interface Stat {
  id: string;
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface AboutUsProps {
  className?: string;
}

const stats: Stat[] = [
  {
    id: "projects",
    value: "50+",
    label: "Lorem ipsum",
    icon: <CheckCircle className='w-8 h-8' />,
  },
  {
    id: "clients",
    value: "30+",
    label: "Dolor sit amet",
    icon: <Users className='w-8 h-8' />,
  },
  {
    id: "experience",
    value: "5+",
    label: "Consectetur",
    icon: <Target className='w-8 h-8' />,
  },
  {
    id: "satisfaction",
    value: "100%",
    label: "Adipiscing elit",
    icon: <Award className='w-8 h-8' />,
  },
];

interface CoreValue {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const coreValues: readonly CoreValue[] = [
  {
    title: "Lorem ipsum",
    description: "Dolor sit amet, consectetur adipiscing elit.",
    Icon: Leaf,
  },
  {
    title: "Consectetur",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore.",
    Icon: Recycle,
  },
  {
    title: "Adipiscing elit",
    description: "Ut enim ad minim veniam, quis nostrud exercitation.",
    Icon: Sprout,
  },
];

const AboutUs: React.FC<AboutUsProps> = ({ className = "" }) => {
  return (
    <section
      id='about'
      className={`relative py-20 bg-sand overflow-hidden ${className}`}
    >
      {/* Background decorative elements */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 left-10 w-64 h-64 bg-brand rounded-full blur-3xl' />
        <div className='absolute bottom-20 right-10 w-48 h-48 bg-positivegreen rounded-full blur-3xl' />
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main content */}
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Left column - Text content */}
          <div className='space-y-8'>
            {/* Section badge */}
            <div className='inline-flex items-center px-4 py-2 bg-sand/50 text-brand rounded-full text-sm font-medium'>
              Lorem ipsum
            </div>

            {/* Main heading */}
            <div className='space-y-6'>
              <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight'>
                <span className='text-brand/70'>Lorem ipsum</span>
                <br />
                <span className='text-brand'>dolor sit amet</span>
                <br />
                <span className='bg-gradient-to-r from-brand to-positivegreen bg-clip-text text-transparent'>
                  consectetur adipiscing elit
                </span>
              </h2>

              <p className='text-lg lg:text-xl text-gray-700 leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>

            {/* Key points */}
            <div className='space-y-4'>
              {[
                "Lorem ipsum dolor sit amet",
                "Consectetur adipiscing elit",
                "Sed do eiusmod tempor",
                "Incididunt ut labore et dolore",
              ].map((point, index) => (
                <div key={index} className='flex items-start gap-3'>
                  <div className='flex-shrink-0 w-6 h-6 bg-positivegreen rounded-full flex items-center justify-center mt-0.5'>
                    <CheckCircle className='w-4 h-4 text-white' />
                  </div>
                  <p className='text-gray-700'>{point}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className='pt-4'>
              <button className='group bg-brand hover:bg-positivegreen text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-2'>
                Lorem ipsum
                <CheckCircle className='w-5 h-5 group-hover:scale-110 transition-transform' />
              </button>
            </div>
          </div>

          {/* Right column - Stats and visual elements */}
          <div className='space-y-8'>
            {/* Stats grid */}
            <div className='grid grid-cols-2 gap-6'>
              {stats.map(stat => (
                <div
                  key={stat.id}
                  className='group bg-gradient-to-br from-white to-sand/40 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100'
                >
                  <div className='flex flex-col items-center text-center space-y-3'>
                    <div className='text-brand group-hover:text-positivegreen transition-colors duration-300'>
                      {stat.icon}
                    </div>
                    <div className='text-3xl font-bold text-brand'>
                      {stat.value}
                    </div>
                    <div className='text-sm text-gray-600 font-medium'>
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature highlight box */}
            <div className='relative overflow-hidden rounded-2xl text-white p-8 bg-gradient-to-r from-brand to-brand'>
              <div
                aria-hidden='true'
                className='absolute inset-0 pointer-events-none select-none'
              >
                <svg
                  className='w-full h-full'
                  viewBox='0 0 1440 600'
                  preserveAspectRatio='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1440 0 C1220 100 1080 200 900 320 C660 480 420 560 0 600 L1440 600 Z'
                    fill='rgba(85,65,54,0.85)'
                  />
                </svg>
              </div>
              <div className='relative z-10'>
                <h3 className='text-xl font-bold mb-4'>
                  Lorem ipsum dolor sit amet
                </h3>
                <p className='text-sand leading-relaxed mb-6'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <div className='flex items-center gap-3'>
                  <div className='flex -space-x-2'>
                    {teamMembers.map(avatar => (
                      <div
                        key={avatar.id}
                        className='w-9 h-9 rounded-full border-2 border-white bg-sand overflow-hidden flex items-center justify-center'
                      >
                        <img
                          src={avatar.image}
                          alt={avatar.name}
                          className='w-full h-full object-cover'
                          loading='lazy'
                          decoding='async'
                        />
                      </div>
                    ))}
                  </div>
                  <span className='text-sm text-sand'>Lorem ipsum dolor</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section - Company values */}
        <div className='mt-20 pt-16 border-t border-gray-200'>
          <div className='text-center space-y-12'>
            <h3 className='text-2xl lg:text-3xl font-bold text-brand'>
              Lorem ipsum dolor sit amet
            </h3>

            <div className='grid md:grid-cols-3 gap-8'>
              {coreValues.map(v => (
                <div
                  key={v.title}
                  className='group p-6 rounded-xl transition-colors duration-300 text-center flex flex-col items-center'
                >
                  <div className='mb-4 group-hover:scale-125 transition-transform duration-300 ease-out text-brand'>
                    <v.Icon className='w-10 h-10' aria-hidden='true' />
                  </div>
                  <h4 className='text-lg font-semibold text-brand mb-2'>
                    {v.title}
                  </h4>
                  <p className='text-gray-600 leading-relaxed'>
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
