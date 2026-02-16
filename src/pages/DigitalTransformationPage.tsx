import React, { useState } from 'react';
import { Cpu, GraduationCap, FileText, Network, ArrowRight, CheckCircle, TrendingUp, Target, Award, Eye } from 'lucide-react';

const DigitalTransformationPage = () => {
  const [activeProgram, setActiveProgram] = useState(0);

  const programs = [
    {
      id: 'digital-government',
      title: 'Gobierno Digital',
      icon: Cpu,
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary',
      textColor: 'text-primary-600',
      description: 'Implementamos soluciones tecnológicas integrales para modernizar la administración pública, mejorando la eficiencia operativa y la experiencia ciudadana a través de servicios digitales.',
      objectives: [
        'Digitalizar procesos administrativos clave',
        'Implementar servicios públicos en línea',
        'Desarrollar plataformas de gestión integrada',
        'Capacitar funcionarios en herramientas digitales'
      ],
      achievements: [
        { metric: '25', label: 'Instituciones digitalizadas' },
        { metric: '150', label: 'Servicios en línea implementados' },
        { metric: '78%', label: 'Mejora en eficiencia operativa' }
      ],
      projects: [
        'Plataforma Nacional de Servicios Digitales',
        'Sistema Integrado de Gestión Pública',
        'Portal Único de Trámites Ciudadanos',
        'Red de Ventanillas Digitales'
      ],
      impact: 'Hemos digitalizado 25 instituciones públicas con 150 servicios en línea, mejorando la eficiencia operativa en 78% y beneficiando a más de 1.2 millones de ciudadanos.'
    },
    {
      id: 'digital-government-school',
      title: 'Encuentro y Escuela de Gobierno Digital',
      icon: GraduationCap,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-primary',
      textColor: 'text-green-600',
      description: 'Creamos espacios de formación y encuentro para funcionarios públicos, desarrollando capacidades en transformación digital y promoviendo el intercambio de mejores prácticas.',
      objectives: [
        'Capacitar funcionarios en transformación digital',
        'Crear comunidades de práctica gubernamental',
        'Facilitar intercambio de experiencias exitosas',
        'Desarrollar liderazgo digital en el sector público'
      ],
      achievements: [
        { metric: '340', label: 'Funcionarios capacitados' },
        { metric: '15', label: 'Encuentros nacionales realizados' },
        { metric: '89%', label: 'Satisfacción en capacitaciones' }
      ],
      projects: [
        'Escuela Virtual de Gobierno Digital',
        'Encuentro Anual de Innovación Pública',
        'Red de Líderes Digitales',
        'Programa de Mentorías Gubernamentales'
      ],
      impact: 'Capacitamos 340 funcionarios públicos en 15 encuentros nacionales con 89% de satisfacción, creando una red sólida de líderes en transformación digital.'
    },
    {
      id: 'national-policy',
      title: 'Política y Plan Nacional de Gobierno Digital',
      icon: FileText,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-primary',
      textColor: 'text-purple-600',
      description: 'Desarrollamos marcos normativos y estratégicos para guiar la transformación digital del Estado, estableciendo estándares, principios y roadmaps de implementación nacional.',
      objectives: [
        'Elaborar política nacional de gobierno digital',
        'Crear marcos normativos y estándares técnicos',
        'Establecer roadmaps de implementación',
        'Promover coordinación interinstitucional'
      ],
      achievements: [
        { metric: '1', label: 'Política Nacional aprobada' },
        { metric: '12', label: 'Marcos normativos desarrollados' },
        { metric: '45', label: 'Instituciones alineadas' }
      ],
      projects: [
        'Política Nacional de Gobierno Digital 2024-2030',
        'Marco de Arquitectura Empresarial del Estado',
        'Estándares de Interoperabilidad Nacional',
        'Plan de Implementación Sectorial'
      ],
      impact: 'Desarrollamos la Política Nacional de Gobierno Digital con 12 marcos normativos, alineando 45 instituciones bajo estándares comunes de transformación digital.'
    },
    {
      id: 'interoperability-access',
      title: 'Interoperabilidad y Acceso Inclusivo a Datos',
      icon: Network,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-primary',
      textColor: 'text-orange-600',
      description: 'Construimos la infraestructura tecnológica que permite la comunicación entre sistemas gubernamentales y garantiza el acceso inclusivo a datos públicos para todos los ciudadanos.',
      objectives: [
        'Implementar plataforma de interoperabilidad nacional',
        'Desarrollar APIs gubernamentales estándar',
        'Garantizar acceso inclusivo a datos públicos',
        'Crear ecosistema de datos abiertos'
      ],
      achievements: [
        { metric: '67', label: 'Sistemas interconectados' },
        { metric: '234', label: 'APIs gubernamentales activas' },
        { metric: '89%', label: 'Disponibilidad de servicios' }
      ],
      projects: [
        'Plataforma Nacional de Interoperabilidad',
        'Catálogo de APIs Gubernamentales',
        'Portal de Datos Abiertos Inclusivo',
        'Sistema de Identidad Digital Ciudadana'
      ],
      impact: 'Interconectamos 67 sistemas gubernamentales con 234 APIs activas y 89% de disponibilidad, democratizando el acceso a datos públicos para todos los guatemaltecos.'
    }
  ];

  const overallStats = [
    { icon: Cpu, number: '25+', label: 'Instituciones Digitalizadas', color: 'text-primary-600' },
    { icon: GraduationCap, number: '340', label: 'Funcionarios Capacitados', color: 'text-green-600' },
    { icon: FileText, number: '12', label: 'Marcos Normativos', color: 'text-purple-600' },
    { icon: Network, number: '67', label: 'Sistemas Interconectados', color: 'text-orange-600' }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full mb-6">
              <TrendingUp className="mr-2" size={20} />
              <span className="font-semibold">Objetivo Estratégico 4</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-primary">
              Transformación Digital
            </h1>
            
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto font-light leading-relaxed text-primary">
              Lideramos la adopción de tecnologías emergentes para modernizar el sector público 
              y construir un Estado digital inclusivo y eficiente
            </p>
          </div>

          {/* Overall Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {overallStats.map((stat, index) => (
              <div key={index} className="text-center bg-primary rounded-2xl p-6">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className={`text-white text-sm ${stat.color}`}>{stat.label}</div>
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
              Cuatro Programas de Transformación
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada programa aborda aspectos específicos de la transformación digital 
              con enfoque en innovación, capacitación y marcos normativos
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
                    className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap text-sm ${
                      activeProgram === index
                        ? `bg-gradient-to-r ${program.color} text-white shadow-md`
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <program.icon className="mr-2" size={16} />
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

      {/* Digital Innovation Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tecnologías Emergentes en el Sector Público
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Implementamos las tecnologías más avanzadas para crear un gobierno 
              del siglo XXI, eficiente, transparente e inclusivo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Cpu className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inteligencia Artificial</h3>
              <p className="text-gray-600 mb-4">Automatización de procesos y análisis predictivo</p>
              <div className="text-2xl font-bold text-primary-600">8</div>
              <div className="text-gray-500 text-sm">Proyectos IA Activos</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Network className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Blockchain</h3>
              <p className="text-gray-600 mb-4">Transparencia y trazabilidad en procesos públicos</p>
              <div className="text-2xl font-bold text-primary-600">3</div>
              <div className="text-gray-500 text-sm">Implementaciones Piloto</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Eye className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">IoT Ciudadano</h3>
              <p className="text-gray-600 mb-4">Sensores y dispositivos para ciudades inteligentes</p>
              <div className="text-2xl font-bold text-primary-600">15</div>
              <div className="text-gray-500 text-sm">Sensores Desplegados</div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-primary hover:bg-primary text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 mr-4">
              Explorar Tecnologías
            </button>
            <button className="border-2 px-8 py-4 rounded-lg font-semibold hover:bg-primary transition-colors duration-200">
              Ver Casos de Uso
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 !bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Tu institución está lista para la transformación digital?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Acompañamos a instituciones públicas en su proceso de transformación digital 
            con metodologías probadas y tecnologías de vanguardia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white transition-colors duration-200">
              Solicitar Consultoría Digital
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
              Descargar Guía de Transformación
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformationPage;
