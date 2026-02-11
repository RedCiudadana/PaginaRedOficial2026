import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import icon01 from '../assets/iconos/01_ICON.png';
import icon04 from '../assets/iconos/04_ICON.png';
import icon05 from '../assets/iconos/05_ICON.png';
import icon02 from '../assets/iconos/02_ICON.png';

const StrategicObjectives = () => {
  const [activeObjective, setActiveObjective] = useState(0);

  const objectives = [
    {
      id: 'innovation',
      iconSrc: icon01,
      iconAlt: 'Innovación en Gobierno',
      title: 'Innovación en Gobierno',
      subtitle: 'Transformación Digital del Sector Público',
      description: 'Modernizamos la administración pública a través de tecnología avanzada, datos abiertos y servicios ciudadanos digitales que mejoran la experiencia de los guatemaltecos.',
      color: 'from-gray-800 to-black',
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-900',
      borderColor: 'border-gray-300',
      stats: [
        { number: '25', label: 'Instituciones Digitalizadas' },
        { number: '150', label: 'Servicios en Línea' },
        { number: '300', label: 'Datasets Abiertos' }
      ],
      achievements: [
        'Portal de Transparencia Municipal',
        'Sistema de Gobierno Digital',
        'Plataforma de Datos Abiertos'
      ],
      link: '/innovacion-gobierno'
    },
    {
      id: 'civic-spaces',
      iconSrc: icon04,
      iconAlt: 'Fortalecimiento de Espacios Cívicos',
      title: 'Fortalecimiento de Espacios Cívicos',
      subtitle: 'Empoderamiento Ciudadano y Activismo',
      description: 'Capacitamos líderes comunitarios y activistas en habilidades de liderazgo, incidencia política y movilización social. Promovemos el uso de datos abiertos para monitorear el estado de los espacios cívicos y la libertad de expresión y asociación.',
      color: 'from-gray-800 to-black',
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-900',
      borderColor: 'border-gray-300',
      stats: [
        { number: '420', label: 'Líderes Capacitados' },
        { number: '85', label: 'Organizaciones Fortalecidas' },
        { number: '52', label: 'Iniciativas Ciudadanas' }
      ],
      achievements: [
        'Academia de Liderazgo Comunitario',
        'Observatorio de Espacios Cívicos',
        'Red de Activismo Digital'
      ],
      link: '/fortalecimiento-periodismo'
    },
    {
      id: 'anticorruption',
      iconSrc: icon05,
      iconAlt: 'Anticorrupción',
      title: 'Anticorrupción',
      subtitle: 'Transparencia y Rendición de Cuentas',
      description: 'Desarrollamos herramientas y metodologías para la prevención, detección y combate de la corrupción en instituciones públicas guatemaltecas.',
      color: 'from-gray-800 to-black',
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-900',
      borderColor: 'border-gray-300',
      stats: [
        { number: '89', label: 'Casos Documentados' },
        { number: '18', label: 'Instituciones Monitoreadas' },
        { number: '156', label: 'Alertas Generadas' }
      ],
      achievements: [
        'Sistema de Alertas Anticorrupción',
        'Observatorio de Contrataciones',
        'Herramientas de Monitoreo Ciudadano'
      ],
      link: '/anticorrupcion'
    },
    {
      id: 'digital',
      iconSrc: icon02,
      iconAlt: 'Transformación Digital',
      title: 'Transformación Digital',
      subtitle: 'Tecnologías Emergentes para el Sector Público',
      description: 'Lideramos la adopción de tecnologías emergentes como inteligencia artificial, blockchain e IoT para modernizar el sector público guatemalteco.',
      color: 'from-gray-800 to-black',
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-900',
      borderColor: 'border-gray-300',
      stats: [
        { number: '6', label: 'Proyectos Piloto' },
        { number: '124', label: 'Funcionarios Capacitados' },
        { number: '3', label: 'Tecnologías Implementadas' }
      ],
      achievements: [
        'Gobierno Digital Piloto',
        'IA para Detección de Patrones',
        'Blockchain para Transparencia'
      ],
      link: '/transformacion-digital'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">
            Cuatro Objetivos Estratégicos
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed px-4">
            Transformamos Guatemala a través de la innovación, transparencia y participación ciudadana
          </p>
        </div>

        {/* Interactive Objectives Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
          {objectives.map((objective, index) => (
            <div
              key={objective.id}
              className={`group relative bg-white rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 lg:hover:-translate-y-2 hover:scale-105 overflow-hidden border-2 ${
                activeObjective === index ? objective.borderColor : 'border-gray-100'
              } cursor-pointer`}
              onMouseEnter={() => setActiveObjective(index)}
              onClick={() => setActiveObjective(index)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${objective.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Header */}
              <div className={`relative p-4 sm:p-6 lg:p-8 bg-white border-b border-gray-100`}>
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                  <div className={`w-20 h-20 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}>
                    <img src={objective.iconSrc} alt={objective.iconAlt} className="w-100 h-100" />
                  </div>
                </div>
                
                <h3 className={`text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2`}>
                  {objective.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">
                  {objective.description}
                </p>
              </div>

              {/* Content */}
              <div className="relative p-3 sm:p-4 lg:p-6">
                {/* CTA */}
                <div className="text-center">
                  <Link
                  to={objective.link}
                    className={`inline-flex items-center ${objective.textColor} font-medium hover:underline transition-all duration-300 text-sm lg:text-base`}
                  >
                    Conocer más
                    <ArrowRight className="ml-1" size={12} />
                  </Link>
                </div>
              </div>

              {/* Active Indicator */}
              {activeObjective === index && (
                <div className={`absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r ${objective.color}`}></div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StrategicObjectives;