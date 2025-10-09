import React, { useState } from "react";
import { Linkedin, Github, Bluesky } from "./Icons";
import { Mail, MapPin, Phone, Send, User, MessageSquare } from "lucide-react";
import { teamMembers } from "./team";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactProps {
  className?: string;
}

const getSocialIcon = (platform: string): React.ReactNode => {
  const iconClass = "w-5 h-5";
  switch (platform) {
    case "linkedin":
      return <Linkedin className={iconClass} />;
    case "github":
      return <Github className={iconClass} />;
    case "bluesky":
      return <Bluesky className={iconClass} />;
    default:
      return null;
  }
};

const getSocialColor = (platform: string): string => {
  switch (platform) {
    case "linkedin":
      return "hover:bg-blue-600 hover:text-white";
    case "github":
      return "hover:bg-gray-900 hover:text-white";
    case "bluesky":
      return "hover:bg-blue-500 hover:text-white";
    default:
      return "hover:bg-blue hover:text-white";
  }
};

const Contact: React.FC<ContactProps> = ({ className = "" }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const mailtoLink = `mailto:info@cloudanddigital.cl?subject=${encodeURIComponent(
        `Contacto desde web: ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (_error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id='contact'
      className={`relative py-20 bg-gradient-to-br from-skyblue/30 via-white to-skyblue/20 overflow-hidden ${className}`}
    >
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 right-10 w-64 h-64 bg-blue rounded-full blur-3xl' />
        <div className='absolute bottom-20 left-10 w-48 h-48 bg-positivegreen rounded-full blur-3xl' />
      </div>

      <div className='relative max-w-md md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6'>
        <div className='text-center space-y-6 mb-16'>
          <div className='inline-flex items-center px-4 py-2 bg-blue/10 text-blue rounded-full text-sm font-medium'>
            Contacto
          </div>

          <h2 className='text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight'>
            <span className='text-blue-300'>Conecta con</span>
            <br />
            <span className='bg-gradient-to-r from-blue to-positivegreen bg-clip-text text-transparent'>
              nuestro equipo
            </span>
          </h2>

          <p className='text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed'>
            Estamos aquí para ayudarte a convertir tus ideas en realidad
            digital. Contáctanos y comencemos a construir algo extraordinario
            juntos.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-md md:max-w-none mx-auto'>
          {/* Contact Information */}
          <div className='space-y-8'>
            {/* Company Info */}
            <div className='bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 max-w-md w-full mx-auto'>
              <h3 className='text-2xl font-bold text-blue mb-6'>
                Información de Contacto
              </h3>

              <div className='space-y-6'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-blue/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Mail className='w-6 h-6 text-blue' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-1'>Email</h4>
                    <a
                      href='mailto:info@cloudanddigital.cl'
                      className='text-gray-600 hover:text-blue transition-colors'
                    >
                      info@cloudanddigital.cl
                    </a>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-blue/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Phone className='w-6 h-6 text-blue' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Teléfono
                    </h4>
                    <a
                      href='tel:+56912345678'
                      className='text-gray-600 hover:text-blue transition-colors break-all'
                    >
                      +56 9 5690 3556
                    </a>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-blue/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <MapPin className='w-6 h-6 text-blue' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-1'>
                      Ubicación
                    </h4>
                    <p className='text-gray-600'>San Felipe, Chile</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div className='bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 max-w-md w-full mx-auto'>
              <h3 className='text-2xl font-bold text-blue mb-6'>
                Contacta Directamente
              </h3>

              <div className='space-y-6'>
                {teamMembers.map(member => (
                  <div
                    key={member.id}
                    className='flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors'
                  >
                    <div className='flex-1'>
                      <h4 className='font-semibold text-gray-900'>
                        {member.name}
                      </h4>
                      <p className='text-sm text-gray-600 mb-2'>
                        {member.role}
                      </p>
                      <a
                        href={`mailto:${member.email}`}
                        title={member.email}
                        className='text-sm text-blue hover:text-positivegreen transition-colors whitespace-nowrap'
                      >
                        {member.email}
                      </a>
                    </div>

                    <div className='flex gap-2 flex-nowrap sm:ml-4 sm:flex-col'>
                      {member.socials.map(social => (
                        <a
                          key={social.platform}
                          href={social.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className={`w-8 h-8 rounded-lg bg-white flex items-center justify-center
                                   text-gray-600 transition-all duration-300 transform hover:scale-110
                                   ${getSocialColor(social.platform)} shadow-sm border border-blue/20 hover:border-blue focus:outline-none focus:ring-2 focus:ring-blue/30`}
                          aria-label={`${member.name} en ${social.platform}`}
                        >
                          {getSocialIcon(social.platform)}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 max-w-md w-full mx-auto'>
            <h3 className='text-2xl font-bold text-blue mb-6'>
              Envíanos un Mensaje
            </h3>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='flex flex-col sm:grid sm:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Nombre *
                  </label>
                  <div className='relative'>
                    <User className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className='w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue/20 focus:border-blue transition-colors'
                      placeholder='Tu nombre'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Email *
                  </label>
                  <div className='relative'>
                    <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className='w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue/20 focus:border-blue transition-colors'
                      placeholder='tu@email.com'
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Asunto *
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue/20 focus:border-blue transition-colors'
                  placeholder='¿En qué podemos ayudarte?'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Mensaje *
                </label>
                <div className='relative'>
                  <MessageSquare className='absolute left-3 top-4 w-5 h-5 text-gray-400' />
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className='w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue/20 focus:border-blue transition-colors resize-none'
                    placeholder='Cuéntanos sobre tu proyecto o consulta...'
                  />
                </div>
              </div>

              {submitStatus === "success" && (
                <div className='p-4 bg-positivegreen/10 text-positivegreen rounded-lg'>
                  ¡Mensaje preparado! Se abrirá tu cliente de email.
                </div>
              )}

              {submitStatus === "error" && (
                <div className='p-4 bg-coral/10 text-coral rounded-lg'>
                  Hubo un error. Por favor, intenta nuevamente o contáctanos
                  directamente.
                </div>
              )}

              <button
                type='submit'
                disabled={isSubmitting}
                className='group w-full bg-blue hover:bg-positivegreen text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
              >
                {isSubmitting ? (
                  <>
                    <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white' />
                    Preparando...
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <Send className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
                  </>
                )}
              </button>
            </form>

            <div className='mt-8 pt-6 border-t border-gray-200'>
              <p className='text-sm text-gray-600 text-center'>
                También puedes escribirnos directamente a{" "}
                <a
                  href='mailto:info@cloudanddigital.cl'
                  className='text-blue hover:text-positivegreen transition-colors font-medium'
                >
                  info@cloudanddigital.cl
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='mt-16 text-center'>
          <div className='inline-block bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 max-w-md sm:max-w-2xl w-full mx-auto'>
            <h3 className='text-2xl font-bold text-blue mb-4'>
              ¿Listo para comenzar tu proyecto?
            </h3>
            <p className='text-gray-600 mb-6 max-w-2xl'>
              Nos encanta trabajar con empresas visionarias que buscan innovar.
              Hagamos algo increíble juntos.
            </p>
            <a
              href='mailto:info@cloudanddigital.cl?subject=Consulta%20de%20Proyecto'
              className='group bg-blue hover:bg-positivegreen text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue/25 inline-flex items-center gap-2'
            >
              Comenzar Conversación
              <Mail className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
