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
      className={`relative py-20 scroll-mt-24 bg-gradient-to-br from-sand/20 via-sand/15 to-sand/10 overflow-hidden ${className}`}
    >
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-20 right-10 w-64 h-64 bg-blue rounded-full blur-3xl' />
        <div className='absolute bottom-20 left-10 w-48 h-48 bg-positivegreen rounded-full blur-3xl' />
      </div>

      <div className='relative max-w-md md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6'>
        <div className='text-center space-y-6 mb-16'>
          <div className='inline-flex items-center px-4 py-2 bg-brand/10 text-brand rounded-full text-sm font-medium'>
            Lorem ipsum
          </div>

          <h2 className='text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight'>
            <span className='text-brand/70'>Lorem ipsum</span>
            <br />
            <span className='bg-gradient-to-r from-brand to-positivegreen bg-clip-text text-transparent'>
              dolor sit amet
            </span>
          </h2>

          <p className='text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-md md:max-w-none mx-auto'>
          {/* Contact Information */}
          <div className='space-y-8'>
            {/* Company Info */}
            <div className='bg-sand rounded-2xl p-6 sm:p-8 shadow-sm border border-brand/10 max-w-md w-full mx-auto'>
              <h3 className='text-2xl font-bold text-brand mb-6'>
                Lorem ipsum
              </h3>

              <div className='space-y-6'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Mail className='w-6 h-6 text-brand' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-1'>Lorem</h4>
                    <a
                      href='mailto:lorem.ipsum@example.com'
                      className='text-gray-600 hover:text-brand transition-colors'
                    >
                      lorem.ipsum@example.com
                    </a>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <Phone className='w-6 h-6 text-brand' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-1'>Lorem</h4>
                    <a
                      href='tel:+000000000'
                      className='text-gray-600 hover:text-brand transition-colors break-all'
                    >
                      +00 0000 0000
                    </a>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <MapPin className='w-6 h-6 text-brand' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900 mb-1'>Lorem</h4>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div className='bg-sand rounded-2xl p-6 sm:p-8 shadow-sm border border-brand/10 max-w-md w-full mx-auto'>
              <h3 className='text-2xl font-bold text-brand mb-6'>
                Lorem ipsum directo
              </h3>

              <div className='space-y-6'>
                {teamMembers.map(member => (
                  <div
                    key={member.id}
                    className='flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-4 p-4 bg-sand/50 rounded-xl hover:bg-sand/60 transition-colors'
                  >
                    <div className='flex-1'>
                      <h4 className='font-semibold text-gray-900'>
                        Lorem Ipsum
                      </h4>
                      <p className='text-sm text-gray-600 mb-2'>
                        Dolor sit amet
                      </p>
                      <a
                        href={`mailto:lorem.ipsum@example.com`}
                        title={'lorem.ipsum@example.com'}
                        className='text-sm text-brand hover:text-positivegreen transition-colors whitespace-nowrap'
                      >
                        lorem.ipsum@example.com
                      </a>
                    </div>

                    <div className='flex gap-2 flex-nowrap sm:ml-4 sm:flex-col'>
                      {member.socials.map(social => (
                        <a
                          key={social.platform}
                          href={social.url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className={`w-8 h-8 rounded-lg bg-sand/20 flex items-center justify-center
                                   text-gray-600 transition-all duration-300 transform hover:scale-110
                                   ${getSocialColor(social.platform)} shadow-sm border border-brand/10 focus:outline-none focus:ring-2 focus:ring-brand/30`}
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
          <div className='bg-sand rounded-2xl p-6 sm:p-8 shadow-sm border border-brand/10 max-w-md w-full mx-auto'>
            <h3 className='text-2xl font-bold text-brand mb-6'>
              Lorem ipsum
            </h3>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='flex flex-col sm:grid sm:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Lorem *
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
                      className='w-full pl-12 pr-4 py-3 border border-brand/10 rounded-lg bg-sand/40 text-gray-900 focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors'
                      placeholder='Lorem ipsum'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Lorem *
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
                      className='w-full pl-12 pr-4 py-3 border border-brand/10 rounded-lg bg-sand/40 text-gray-900 focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors'
                      placeholder='lorem.ipsum@example.com'
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Lorem *
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className='w-full px-4 py-3 border border-brand/10 rounded-lg bg-sand/40 text-gray-900 focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors'
                  placeholder='Lorem ipsum dolor sit amet'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-2'
                >
                  Lorem *
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
                    className='w-full pl-12 pr-4 py-3 border border-brand/10 rounded-lg bg-sand/40 text-gray-900 focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors resize-none'
                    placeholder='Lorem ipsum dolor sit amet, consectetur.'
                  />
                </div>
              </div>

              {submitStatus === "success" && (
                <div className='p-4 bg-positivegreen/10 text-positivegreen rounded-lg'>
                  Lorem ipsum dolor sit amet. Preparado para enviar.
                </div>
              )}

              {submitStatus === "error" && (
                <div className='p-4 bg-coral/10 text-coral rounded-lg'>
                  Error: Lorem ipsum dolor. Intenta nuevamente.
                </div>
              )}

              <button
                type='submit'
                disabled={isSubmitting}
                className='group w-full bg-brand hover:bg-positivegreen text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-brand/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
              >
                {isSubmitting ? (
                  <>
                    <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white' />
                    Lorem...
                  </>
                ) : (
                  <>
                    Lorem ipsum
                    <Send className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
                  </>
                )}
              </button>
            </form>

            <div className='mt-8 pt-6 border-t border-gray-200'>
              <p className='text-sm text-gray-600 text-center'>
                Lorem ipsum dolor sit amet. Contacto: {" "}
                <a
                  href='mailto:lorem.ipsum@example.com'
                  className='text-brand hover:text-positivegreen transition-colors font-medium'
                >
                  lorem.ipsum@example.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='mt-16 text-center'>
          <div className='inline-block bg-sand/90 p-6 sm:p-8 rounded-2xl shadow-sm border border-brand/10 max-w-md sm:max-w-2xl w-full mx-auto'>
            <h3 className='text-2xl font-bold text-brand mb-4'>
              Lorem ipsum dolor
            </h3>
            <p className='text-gray-600 mb-6 max-w-2xl'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a
              href='mailto:lorem.ipsum@example.com?subject=Consulta%20Lorem'
              className='group bg-brand hover:bg-positivegreen text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-brand/25 inline-flex items-center gap-2'
            >
              Lorem ipsum
              <Mail className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
