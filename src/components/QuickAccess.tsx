import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Shield, BookOpen, Database, Users, Brain, Scale, FileCheck, ClipboardList, ExternalLink } from 'lucide-react';

const QuickAccess = () => {
  const quickLinks = [
    {
      icon: Lightbulb,
      title: 'Conecta Futuro',
      description: 'Formación de vanguardia para funcionarios y periodistas',
      features: ['Cursos especializados', 'Certificaciones', 'Comunidad'],
      color: 'from-gray-800 to-black',
      textColor: 'text-gray-900',
      bgColor: 'bg-gray-100',
      href: 'https://escuela.redciudadana.org/',
      external: true
    },
    {
      icon: Shield,
      title: 'Portal Anticorrupción',
      description: 'Herramientas y recursos para combatir la corrupción',
      features: ['Monitoreo ciudadano', 'Alertas tempranas', 'Recursos'],
      color: 'from-gray-800 to-black',
      textColor: 'text-gray-900',
      bgColor: 'bg-gray-100',
      href: 'https://anticorrupcion.redciudadana.org/',
      external: true
    },
    {
      icon: BookOpen,
      title: 'Portal de Gobierno Digital',
      description: 'Plataforma integral para la transformación digital del sector público',
      features: ['Servicios digitales', 'Trámites en línea', 'Datos gubernamentales'],
      color: 'from-gray-800 to-black',
      textColor: 'text-gray-900',
      bgColor: 'bg-gray-100',
      href: 'https://gobiernodigital.redciudadana.org/',
      external: true
    },
    {
      icon: Database,
      title: 'Datos Abiertos',
      description: 'Acceso a datos públicos y transparencia gubernamental',
      features: ['Conjuntos de datos', 'Visualizaciones', 'API pública'],
      color: 'from-gray-800 to-black',
      textColor: 'text-gray-900',
      bgColor: 'bg-gray-100',
      href: 'https://datosabiertos.redciudadana.org/',
      external: true
    },
    {
      icon: Users,
      title: 'Participa',
      description: 'Plataforma de participación ciudadana, donde se plantean discusiones sobre marco normativo, políticas y co-creación',
      features: ['Consultas públicas', 'Propuestas ciudadanas', 'Co-creación'],
      color: 'from-gray-800 to-black',
      textColor: 'text-gray-900',
      bgColor: 'bg-gray-100',
      href: 'https://participa.redciudadana.org.gt/',
      external: true
    },
    {
      icon: Brain,
      title: 'Inteligencia Artificial Red Ciudadana',
      description: 'Herramientas de IA para análisis y procesamiento de información',
      features: ['Análisis automatizado', 'Procesamiento de datos', 'Modelos IA'],
      color: 'from-gray-800 to-black',
      textColor: 'text-gray-900',
      bgColor: 'bg-gray-100',
      href: 'https://ia.redciudadana.org/',
      external: true
    },
    {
      icon: Scale,
      title: 'Justiciapedia',
      description: 'Es una herramienta interactiva y sencilla que busca acercar a la ciudadanía con el sector justicia',
      features: ['Información accesible', 'Comprensión del sector', 'Interactivo'],
      color: 'from-gray-800 to-black',
      textColor: 'text-gray-900',
      bgColor: 'bg-gray-100',
      href: 'https://justiciapedia.redciudadana.org/',
      external: true
    },
    {
      icon: FileCheck,
      title: 'Justicia Abierta',
      description: 'Creemos en el poder de la innovación para mejorar los servicios públicos en el sector justicia',
      features: ['Innovación judicial', 'Servicios públicos', 'Transparencia'],
      color: 'from-gray-800 to-black',
      textColor: 'text-gray-900',
      bgColor: 'bg-gray-100',
      href: 'https://justicia-abierta.org/',
      external: true
    },
    {
      icon: ClipboardList,
      title: 'Observatorio de Trámites',
      description: 'Red Ciudadana recopila y organiza información sobre trámites gubernamentales',
      features: ['Información de trámites', 'Requisitos completos', 'Guías paso a paso'],
      color: 'from-gray-800 to-black',
      textColor: 'text-gray-900',
      bgColor: 'bg-gray-100',
      href: 'https://tramites.redciudadana.org/',
      external: true
    }
  ];

  return (
    <section className="py-10 sm:py-12 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-20">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-6">
            Herramientas de Red Ciudadana
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Herramientas especializadas para diferentes actores del ecosistema democrático
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
          {quickLinks.map((link, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 lg:hover:-translate-y-2 overflow-hidden border border-gray-100 relative"
            >
              {/* Header with gradient */}
              <div className={`relative bg-gradient-to-r ${link.color} p-3 sm:p-4 lg:p-6 text-white`}>
                <div className="flex items-center justify-between mb-3 lg:mb-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <link.icon size={20} />
                  </div>
                </div>
                
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2">{link.title}</h3>
                <p className="text-white/90 text-xs sm:text-sm">
                  {link.description}
                </p>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4 lg:p-6">
                <div className="space-y-2 lg:space-y-3 mb-4 lg:mb-6">
                  {link.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className={`w-2 h-2 ${link.bgColor} rounded-full mr-3`}></div>
                      <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center ${link.textColor} font-medium hover:underline transition-all duration-300 text-xs sm:text-sm lg:text-base`}
                >
                  Explorar plataforma
                  <ExternalLink className="ml-2" size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-6 sm:mt-8 lg:mt-16 text-center">
          <div className="bg-primary rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">
              ¿Necesitas algo específico?
            </h3>
            <p className="text-sm lg:text-base text-white mb-4 lg:mb-6 max-w-2xl mx-auto px-4">
              Nuestro equipo está disponible para apoyarte con herramientas personalizadas y capacitaciones especializadas.
            </p>
            <Link
              to="/contacto"
              className="inline-block bg-white hover:bg-gray-800 text-gray-600 hover:text-white px-4 py-2 lg:px-8 lg:py-3 rounded-lg font-medium transition-colors duration-300 text-sm lg:text-base"
            >
              Contactar Equipo Especializado
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;