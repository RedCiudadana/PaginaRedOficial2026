import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import { Send } from 'lucide-react';
import Slider from '../assets/banner/03_SLIDER.png';

const ContactPage = () => {
  const heroSlides = [
    {
      id: 'contact-main',
      title: 'Contacto',
      subtitle: 'Estamos aquí para apoyarte',
      description: 'Contáctanos para colaboraciones institucionales, consultas especializadas, solicitudes de medios o cualquier información que necesites sobre nuestro trabajo.',
      image: Slider,
      cta: {
        primary: { text: 'Enviar Mensaje', action: '#contacto-form' }
      }
    }
  ];

  return (
    <div className="">
      <HeroSlider slides={heroSlides} />

      {/* Main Contact Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-10 shadow-xl border border-gray-100">
              <div className="flex items-center mb-6 lg:mb-8">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary rounded-2xl flex items-center justify-center mr-4">
                  <Send className="text-blue-600" size={24} />
                </div>
                <div>
                  <h2 className="text-xl lg:text-3xl font-bold text-gray-900">Envíanos un Mensaje</h2>
                  <p className="text-gray-600 text-sm lg:text-base">Te responderemos en menos de 48 horas</p>
                </div>
              </div>
              
              <form className="space-y-4 lg:space-y-6" id="contacto-form">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 lg:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm lg:text-base"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Apellido *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 lg:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm lg:text-base"
                      placeholder="Tu apellido"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 lg:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm lg:text-base"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organización
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 lg:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm lg:text-base"
                      placeholder="Nombre de tu organización"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 lg:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm lg:text-base"
                      placeholder="+502 0000-0000"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Motivo de Contacto *
                  </label>
                  <select 
                    required
                    className="w-full px-4 py-3 lg:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm lg:text-base"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="colaboracion">Colaboración Institucional</option>
                    <option value="consultoria">Consultoría Especializada</option>
                    <option value="medios">Solicitud de Medios</option>
                    <option value="capacitacion">Capacitación y Formación</option>
                    <option value="alianzas">Alianzas Estratégicas</option>
                    <option value="donacion">Donaciones y Apoyo</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 lg:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-sm lg:text-base"
                    placeholder="Cuéntanos más detalles sobre tu consulta o propuesta..."
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="mt-1 mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    Acepto la <Link to="/contacto" className="text-blue-600 hover:underline">política de privacidad</Link> y 
                    el tratamiento de mis datos personales según la normativa guatemalteca.
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 lg:py-5 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm lg:text-base"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
              Preguntas Frecuentes
            </h2>
            <p className="text-gray-600 text-sm lg:text-lg">
              Encuentra respuestas rápidas a las consultas más comunes
            </p>
          </div>

          <div className="space-y-4 lg:space-y-6">
            <div className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-md">
              <h3 className="font-bold text-gray-900 mb-2 text-sm lg:text-base">¿Cómo puedo colaborar con Red Ciudadana?</h3>
              <p className="text-gray-600 text-sm lg:text-base">
                Ofrecemos múltiples formas de colaboración: alianzas institucionales, voluntariado, 
                donaciones y participación en nuestros programas de formación.
              </p>
            </div>

            <div className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-md">
              <h3 className="font-bold text-gray-900 mb-2 text-sm lg:text-base">¿Ofrecen servicios de consultoría?</h3>
              <p className="text-gray-600 text-sm lg:text-base">
                Sí, brindamos consultoría especializada en gobierno digital, transparencia, 
                anticorrupción y fortalecimiento del periodismo.
              </p>
            </div>

            <div className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-md">
              <h3 className="font-bold text-gray-900 mb-2 text-sm lg:text-base">¿Cómo puedo acceder a sus capacitaciones?</h3>
              <p className="text-gray-600 text-sm lg:text-base">
                A través de nuestro programa Conecta Futuro ofrecemos cursos especializados. 
                Visita la sección correspondiente para conocer la oferta actual.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
