import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Users,
  Calendar,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  Heart,
  Zap,
  Trophy,
  Coffee,
} from "lucide-react";
import {
  getActiveRoles,
  getDepartments,
  type JobRole,
} from "../data/rolesConfig";

const WorkWithUsPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  const activeRoles = getActiveRoles();
  const departments = getDepartments();

  const filteredRoles =
    selectedDepartment === "all"
      ? activeRoles
      : activeRoles.filter(role => role.department === selectedDepartment);

  const getTypeLabel = (type: JobRole["type"]): string => {
    const labels = {
      "full-time": "Tiempo Completo",
      "part-time": "Tiempo Parcial",
      contract: "Contrato",
      internship: "Práctica",
    };
    return labels[type];
  };

  const getExperienceLabel = (experience: JobRole["experience"]): string => {
    const labels = {
      junior: "Junior",
      mid: "Mid-level",
      senior: "Senior",
      lead: "Lead",
    };
    return labels[experience];
  };

  const formatSalary = (salary: JobRole["salary"]): string => {
    if (!salary) return "A convenir";
    return `$${salary.min.toLocaleString()} - $${salary.max.toLocaleString()} ${salary.currency}`;
  };

  const toggleRoleExpansion = (roleId: string): void => {
    setExpandedRole(expandedRole === roleId ? null : roleId);
  };

  const companyValues = [
    {
      icon: <Zap className='w-6 h-6' />,
      title: "Innovación",
      description: "Trabajamos con tecnologías de vanguardia",
      color: "bg-yellow-500",
    },
    {
      icon: <Heart className='w-6 h-6' />,
      title: "Bienestar",
      description: "Tu equilibrio vida-trabajo es prioritario",
      color: "bg-red-500",
    },
    {
      icon: <Trophy className='w-6 h-6' />,
      title: "Crecimiento",
      description: "Desarrollo profesional continuo",
      color: "bg-blue-500",
    },
    {
      icon: <Coffee className='w-6 h-6' />,
      title: "Cultura",
      description: "Ambiente colaborativo y relajado",
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-skyblue/10'>
      {/* Integrated Header */}
      <div className='bg-white border-b border-gray-100 pt-24'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='py-12 text-center'>
            <div className='inline-flex items-center gap-2 bg-blue/10 text-blue px-4 py-2 rounded-full text-sm font-medium mb-6'>
              <Users className='w-4 h-4' />
              Únete a nuestro equipo
            </div>
            <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
              Trabaja con{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue to-positivegreen'>
                nosotros
              </span>
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Construimos el futuro digital de Chile. Si te apasiona la
              tecnología y quieres crear soluciones que impacten vidas reales,
              este es tu lugar.
            </p>
          </div>
        </div>
      </div>

      {/* Company Values - Floating Cards */}
      <section className='relative -mt-8 mb-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
            {companyValues.map((value, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 text-center group'
              >
                <div
                  className={`w-12 h-12 ${value.color} rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {value.icon}
                </div>
                <h3 className='font-semibold text-gray-900 mb-2'>
                  {value.title}
                </h3>
                <p className='text-sm text-gray-600'>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className='py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 mb-4'>
              {activeRoles.length > 0
                ? "Oportunidades Disponibles"
                : "Próximamente: Nuevas Oportunidades"}
            </h2>
            <p className='text-lg text-gray-600'>
              {activeRoles.length > 0
                ? `${activeRoles.length} posición${activeRoles.length === 1 ? "" : "es"} esperando por el talento adecuado`
                : "Estamos creciendo y pronto tendremos nuevas posiciones"}
            </p>
          </div>

          {activeRoles.length > 0 ? (
            <div className='space-y-8'>
              {/* Department Filter */}
              <div className='flex flex-wrap justify-center gap-3'>
                <button
                  onClick={() => setSelectedDepartment("all")}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedDepartment === "all"
                      ? "bg-blue text-white shadow-lg scale-105"
                      : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  Todas ({activeRoles.length})
                </button>
                {departments.map(department => {
                  const count = activeRoles.filter(
                    role => role.department === department
                  ).length;
                  return (
                    <button
                      key={department}
                      onClick={() => setSelectedDepartment(department)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                        selectedDepartment === department
                          ? "bg-blue text-white shadow-lg scale-105"
                          : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                      }`}
                    >
                      {department} ({count})
                    </button>
                  );
                })}
              </div>

              {/* Job Cards Grid */}
              <div className='grid gap-6'>
                {filteredRoles.map(role => (
                  <div
                    key={role.id}
                    className='bg-white rounded-2xl border border-gray-100 hover:border-blue/20 hover:shadow-lg transition-all duration-300 overflow-hidden'
                  >
                    {/* Role Header */}
                    <div className='p-8'>
                      <div className='flex flex-col lg:flex-row lg:items-start justify-between gap-6'>
                        <div className='flex-1'>
                          <div className='flex items-center gap-3 mb-4'>
                            <h3 className='text-2xl font-bold text-gray-900'>
                              {role.title}
                            </h3>
                            <span className='bg-positivegreen/10 text-positivegreen px-3 py-1 rounded-full text-sm font-medium'>
                              {getExperienceLabel(role.experience)}
                            </span>
                          </div>

                          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
                            <div className='flex items-center gap-2 text-gray-600'>
                              <Users className='w-4 h-4 text-blue' />
                              <span className='text-sm'>{role.department}</span>
                            </div>
                            <div className='flex items-center gap-2 text-gray-600'>
                              <MapPin className='w-4 h-4 text-blue' />
                              <span className='text-sm'>{role.location}</span>
                            </div>
                            <div className='flex items-center gap-2 text-gray-600'>
                              <Clock className='w-4 h-4 text-blue' />
                              <span className='text-sm'>
                                {getTypeLabel(role.type)}
                              </span>
                            </div>
                            <div className='flex items-center gap-2 text-gray-600'>
                              <Calendar className='w-4 h-4 text-blue' />
                              <span className='text-sm'>
                                {formatSalary(role.salary)}
                              </span>
                            </div>
                          </div>

                          <p className='text-gray-600 leading-relaxed'>
                            {role.description}
                          </p>
                        </div>

                        <div className='flex flex-col gap-3'>
                          <button
                            onClick={() => toggleRoleExpansion(role.id)}
                            className='flex items-center gap-2 bg-blue text-white px-6 py-3 rounded-xl hover:bg-blue/90 transition-all duration-300 font-medium'
                          >
                            {expandedRole === role.id ? (
                              <>
                                Menos info
                                <ChevronUp className='w-4 h-4' />
                              </>
                            ) : (
                              <>
                                Ver detalles
                                <ChevronDown className='w-4 h-4' />
                              </>
                            )}
                          </button>
                          <button className='bg-positivegreen text-white px-6 py-3 rounded-xl hover:bg-positivegreen/90 transition-all duration-300 font-medium'>
                            Aplicar ahora
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {expandedRole === role.id && (
                      <div className='border-t bg-gray-50/50 p-8'>
                        <div className='grid lg:grid-cols-3 gap-8'>
                          {/* Responsibilities */}
                          <div className='space-y-4'>
                            <h4 className='text-lg font-semibold text-gray-900 flex items-center gap-2'>
                              <div className='w-8 h-8 bg-blue/10 rounded-lg flex items-center justify-center'>
                                <Users className='w-4 h-4 text-blue' />
                              </div>
                              Responsabilidades
                            </h4>
                            <ul className='space-y-3'>
                              {role.responsibilities.map(
                                (responsibility, index) => (
                                  <li
                                    key={index}
                                    className='flex items-start gap-3 text-gray-600'
                                  >
                                    <div className='w-6 h-6 bg-blue/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0'>
                                      <div className='w-2 h-2 bg-blue rounded-full'></div>
                                    </div>
                                    <span className='text-sm leading-relaxed'>
                                      {responsibility}
                                    </span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>

                          {/* Requirements */}
                          <div className='space-y-4'>
                            <h4 className='text-lg font-semibold text-gray-900 flex items-center gap-2'>
                              <div className='w-8 h-8 bg-positivegreen/10 rounded-lg flex items-center justify-center'>
                                <Trophy className='w-4 h-4 text-positivegreen' />
                              </div>
                              Requisitos
                            </h4>
                            <ul className='space-y-3'>
                              {role.requirements.map((requirement, index) => (
                                <li
                                  key={index}
                                  className='flex items-start gap-3 text-gray-600'
                                >
                                  <div className='w-6 h-6 bg-positivegreen/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0'>
                                    <div className='w-2 h-2 bg-positivegreen rounded-full'></div>
                                  </div>
                                  <span className='text-sm leading-relaxed'>
                                    {requirement}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Benefits */}
                          <div className='space-y-4'>
                            <h4 className='text-lg font-semibold text-gray-900 flex items-center gap-2'>
                              <div className='w-8 h-8 bg-skyblue/10 rounded-lg flex items-center justify-center'>
                                <Heart className='w-4 h-4 text-skyblue' />
                              </div>
                              Beneficios
                            </h4>
                            <ul className='space-y-3'>
                              {role.benefits.map((benefit, index) => (
                                <li
                                  key={index}
                                  className='flex items-start gap-3 text-gray-600'
                                >
                                  <div className='w-6 h-6 bg-skyblue/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0'>
                                    <div className='w-2 h-2 bg-skyblue rounded-full'></div>
                                  </div>
                                  <span className='text-sm leading-relaxed'>
                                    {benefit}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Nice to Have */}
                        {role.niceToHave && role.niceToHave.length > 0 && (
                          <div className='mt-8 pt-6 border-t border-gray-200'>
                            <h4 className='text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2'>
                              <div className='w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center'>
                                <Zap className='w-4 h-4 text-yellow-600' />
                              </div>
                              Deseable (Plus)
                            </h4>
                            <div className='flex flex-wrap gap-2'>
                              {role.niceToHave.map((item, index) => (
                                <span
                                  key={index}
                                  className='bg-yellow-50 text-yellow-700 px-3 py-1 rounded-lg text-sm border border-yellow-200'
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* No Roles State */
            <div className='text-center py-16'>
              <div className='max-w-2xl mx-auto'>
                <div className='w-24 h-24 bg-gradient-to-br from-blue to-positivegreen rounded-2xl flex items-center justify-center mx-auto mb-8'>
                  <Users className='w-12 h-12 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                  ¡Estamos creciendo!
                </h3>
                <p className='text-lg text-gray-600 mb-8'>
                  Aunque no tengamos vacantes en este momento, siempre nos
                  interesa conocer talento excepcional. Envíanos tu perfil y te
                  contactaremos cuando surja la oportunidad perfecta.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <a
                    href='mailto:careers@cloudanddigital.cl'
                    className='inline-flex items-center justify-center gap-2 bg-blue text-white py-4 px-8 rounded-xl font-semibold hover:bg-blue/90 transition-all duration-300 shadow-lg hover:shadow-xl'
                  >
                    <Mail className='w-5 h-5' />
                    Enviar CV
                  </a>
                  <a
                    href='tel:+56956903556'
                    className='inline-flex items-center justify-center gap-2 bg-white border-2 border-blue text-blue py-4 px-8 rounded-xl font-semibold hover:bg-blue hover:text-white transition-all duration-300'
                  >
                    <Phone className='w-5 h-5' />
                    Conversemos
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className='py-16 bg-gradient-to-r from-blue via-blue to-positivegreen'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8'>
            <h2 className='text-3xl font-bold text-white mb-4'>
              ¿Tienes preguntas?
            </h2>
            <p className='text-xl text-skyblue mb-8'>
              Nuestro equipo está aquí para resolver todas tus dudas sobre
              trabajar con nosotros
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='mailto:careers@cloudanddigital.cl'
                className='inline-flex items-center justify-center gap-2 bg-white text-blue py-4 px-8 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg'
              >
                <Mail className='w-5 h-5' />
                careers@cloudanddigital.cl
              </a>
              <a
                href='tel:+56956903556'
                className='inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white text-white py-4 px-8 rounded-xl font-semibold hover:bg-white hover:text-blue transition-all duration-300'
              >
                <Phone className='w-5 h-5' />
                +56 9 5690 3556
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkWithUsPage;
