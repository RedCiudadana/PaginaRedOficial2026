import React, { useState } from 'react';
import { Building2, Users, Scale, MapPin, ArrowRight, CheckCircle, TrendingUp, Target, Award, Eye } from 'lucide-react';

const InnovationGovernmentPage = () => {
  const [activeProgram, setActiveProgram] = useState(0);

  const programs = [
    {
      id: 'gobierno-abierto',
      title: 'Gobierno Abierto',
      icon: Building2,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-primary',
      textColor: 'text-blue-600',
      description: 'Promovemos la transparencia, participación ciudadana y colaboración en las instituciones públicas para crear gobiernos más abiertos y responsables.',
      objectives: [
        'Implementar políticas de transparencia activa',
        'Facilitar la participación ciudadana en decisiones públicas',
        'Desarrollar mecanismos de rendición de cuentas',
        'Fortalecer la colaboración gobierno-sociedad civil'
      ],
      achievements: [
        { metric: '15', label: 'Instituciones con políticas de gobierno abierto' },
        { metric: '89%', label: 'Mejora en índices de transparencia' },
        { metric: '2,340', label: 'Ciudadanos participando activamente' }
      ],
      projects: [
        'Portal Nacional de Transparencia',
        'Plataforma de Participación Ciudadana',
        'Sistema de Rendición de Cuentas Digital',
        'Red de Funcionarios de Gobierno Abierto'
      ],
      impact: 'Hemos logrado que 15 instituciones públicas adopten estándares internacionales de gobierno abierto, mejorando significativamente la confianza ciudadana.'
    },
    {
      id: 'innovacion-publica',
      title: 'Innovación Pública',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-primary',
      textColor: 'text-green-600',
      description: 'Impulsamos la adopción de metodologías innovadoras y tecnologías emergentes para modernizar la gestión pública y mejorar los servicios ciudadanos.',
      objectives: [
        'Introducir metodologías ágiles en el sector público',
        'Implementar tecnologías emergentes (IA, IoT, Blockchain)',
        'Crear laboratorios de innovación gubernamental',
        'Desarrollar capacidades de innovación en funcionarios'
      ],
      achievements: [
        { metric: '8', label: 'Laboratorios de innovación establecidos' },
        { metric: '156', label: 'Funcionarios capacitados en innovación' },
        { metric: '23', label: 'Proyectos piloto implementados' }
      ],
      projects: [
        'GovLab Guatemala - Laboratorio de Innovación',
        'Programa de Inteligencia Artificial Pública',
        'Red de Innovadores Públicos',
        'Hackathones Cívicos Nacionales'
      ],
      impact: 'Establecimos 8 laboratorios de innovación que han generado 23 proyectos piloto, transformando la manera de entregar servicios públicos.'
    },
    {
      id: 'justicia-abierta',
      title: 'Justicia Abierta',
      icon: Scale,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-primary',
      textColor: 'text-purple-600',
      description: 'Trabajamos para hacer el sistema de justicia más transparente, accesible y eficiente mediante tecnología y participación ciudadana.',
      objectives: [
        'Digitalizar procesos judiciales clave',
        'Crear sistemas de seguimiento de casos',
        'Implementar mecanismos de transparencia judicial',
        'Facilitar el acceso ciudadano a la justicia'
      ],
      achievements: [
        { metric: '12', label: 'Juzgados con sistemas digitales' },
        { metric: '67%', label: 'Reducción en tiempos de proceso' },
        { metric: '4,890', label: 'Casos con seguimiento digital' }
      ],
      projects: [
        'Sistema Nacional de Seguimiento Judicial',
        'Portal de Transparencia Judicial',
        'Plataforma de Acceso a la Justicia',
        'Observatorio de Justicia Abierta'
      ],
      impact: 'Digitalizamos 12 juzgados piloto, reduciendo los tiempos de proceso en 67% y mejorando el acceso ciudadano a la justicia.'
    },
    {
      id: 'municipalidades-abiertas',
      title: 'Municipalidades Abiertas',
      icon: MapPin,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-primary',
      textColor: 'text-orange-600',
      description: 'Fortalecemos la gestión municipal mediante herramientas digitales, transparencia presupuestaria y participación ciudadana local.',
      objectives: [
        'Implementar portales de transparencia municipal',
        'Digitalizar servicios municipales básicos',
        'Crear mecanismos de participación local',
        'Fortalecer capacidades de gestión municipal'
      ],
      achievements: [
        { metric: '45', label: 'Municipalidades con portales de transparencia' },
        { metric: '78', label: 'Servicios municipales digitalizados' },
        { metric: '12,500', label: 'Ciudadanos usando servicios digitales' }
      ],
      projects: [
        'Red Nacional de Municipalidades Abiertas',
        'Portal de Transparencia Municipal',
        'Sistema de Gestión Municipal Digital',
        'Programa de Capacitación Municipal'
      ],
      impact: '45 municipalidades han adoptado nuestros estándares de transparencia, beneficiando directamente a más de 2.8 millones de guatemaltecos.'
    }
  ];

  const overallStats = [
    { icon: Building2, number: '80+', label: 'Instituciones Transformadas', color: 'text-blue-600' },
    { icon: Users, number: '2.8M', label: 'Ciudadanos Beneficiados', color: 'text-green-600' },
    { icon: Target, number: '156', label: 'Proyectos Implementados', color: 'text-purple-600' },
    { icon: Award, number: '89%', label: 'Satisfacción Promedio', color: 'text-orange-600' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary text-blue-300 px-6 py-3 rounded-full mb-6">
              <Building2 className="mr-2" size={20} />
              <span className="font-semibold">Objetivo Estratégico 1</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Innovación en Gobierno
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto font-light leading-relaxed">
              Transformamos la administración pública a través de tecnología avanzada, 
              datos abiertos y servicios ciudadanos digitales
            </p>
          </div>

          {/* Overall Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {overallStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Cuatro Programas Estratégicos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada programa aborda aspectos específicos de la innovación gubernamental 
              con metodologías probadas y resultados medibles
            </p>
          </div>

          {/* Program Selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg overflow-x-auto">
              <div className="flex space-x-2 min-w-max">
                {programs.map((program, index) => (
                  <button
                    key={program.id}
                    onClick={() => setActiveProgram(index)}
                    className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                      activeProgram === index
                        ? `bg-gradient-to-r ${program.color} text-white shadow-md`
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <program.icon className="mr-2" size={20} />
                    {program.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Program Details */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className={`bg-gradient-to-r ${programs[activeProgram].color} p-8 text-white`}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6">
                  {React.createElement(programs[activeProgram].icon, { size: 32 })}
                </div>
                <div>
                  <h3 className="text-3xl font-bold">{programs[activeProgram].title}</h3>
                  <p className="text-white/90 text-lg mt-2">{programs[activeProgram].description}</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column */}
                <div className="space-y-8">
                  {/* Objectives */}
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Objetivos Específicos</h4>
                    <div className="space-y-4">
                      {programs[activeProgram].objectives.map((objective, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className={`${programs[activeProgram].textColor} mr-3 mt-1 flex-shrink-0`} size={20} />
                          <span className="text-gray-700">{objective}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Projects */}
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Proyectos Destacados</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {programs[activeProgram].projects.map((project, index) => (
                        <div key={index} className={`${programs[activeProgram].bgColor} rounded-lg p-4`}>
                          <span className="font-medium text-gray-900">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Achievements */}
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Logros Cuantificables</h4>
                    <div className="space-y-6">
                      {programs[activeProgram].achievements.map((achievement, index) => (
                        <div key={index} className="text-center">
                          <div className={`text-4xl font-bold ${programs[activeProgram].textColor} mb-2`}>
                            {achievement.metric}
                          </div>
                          <div className="text-gray-600 font-medium">
                            {achievement.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className={`${programs[activeProgram].bgColor} rounded-2xl p-6`}>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Impacto Destacado</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {programs[activeProgram].impact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Tu institución está lista para la transformación?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Trabajamos junto a instituciones públicas para implementar soluciones 
            de innovación gubernamental adaptadas a sus necesidades específicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary transition-colors duration-200">
              Solicitar Consultoría
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
              Ver Casos de Éxito
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovationGovernmentPage;