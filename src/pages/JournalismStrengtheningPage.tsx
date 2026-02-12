import React, { useState } from 'react';
import { Users, Target, Megaphone, Shield, TrendingUp, ArrowRight, CheckCircle, Award, Heart, Eye } from 'lucide-react';

const JournalismStrengtheningPage = () => {
  const [activeProgram, setActiveProgram] = useState(0);

  const programs = [
    {
      id: 'community-leadership',
      title: 'Liderazgo Comunitario y Activismo',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-primary',
      textColor: 'text-blue-600',
      description: 'Capacitamos líderes comunitarios y activistas en habilidades de liderazgo transformacional, organización comunitaria y gestión de iniciativas ciudadanas para fortalecer el tejido social.',
      objectives: [
        'Formar líderes en técnicas de organización comunitaria',
        'Desarrollar habilidades de liderazgo transformacional',
        'Fortalecer capacidades de gestión de proyectos sociales',
        'Promover el activismo efectivo y sostenible'
      ],
      achievements: [
        { metric: '420', label: 'Líderes comunitarios capacitados' },
        { metric: '85', label: 'Organizaciones fortalecidas' },
        { metric: '52', label: 'Iniciativas ciudadanas implementadas' }
      ],
      projects: [
        'Academia de Liderazgo Comunitario',
        'Red Nacional de Activistas',
        'Programa de Mentorías para Líderes',
        'Escuela de Organización Social'
      ],
      impact: 'Hemos capacitado 420 líderes comunitarios que han fortalecido 85 organizaciones y lanzado 52 iniciativas ciudadanas exitosas en todo el país.'
    },
    {
      id: 'political-advocacy',
      title: 'Incidencia Política y Participación Ciudadana',
      icon: Target,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-primary',
      textColor: 'text-green-600',
      description: 'Fortalecemos las capacidades ciudadanas para incidir en políticas públicas, participar activamente en procesos democráticos y ejercer control social sobre las instituciones.',
      objectives: [
        'Capacitar en técnicas de incidencia política efectiva',
        'Desarrollar estrategias de advocacy ciudadano',
        'Promover la participación en espacios de toma de decisiones',
        'Fortalecer el monitoreo y control social'
      ],
      achievements: [
        { metric: '234', label: 'Acciones de incidencia realizadas' },
        { metric: '78%', label: 'Tasa de éxito en iniciativas' },
        { metric: '45', label: 'Políticas públicas influenciadas' }
      ],
      projects: [
        'Programa de Incidencia Ciudadana',
        'Escuela de Política Pública',
        'Red de Advocacy',
        'Observatorio de Participación'
      ],
      impact: 'Facilitamos 234 acciones de incidencia con 78% de éxito, logrando influenciar 45 políticas públicas a favor de la ciudadanía.'
    },
    {
      id: 'social-mobilization',
      title: 'Movilización Social y Activismo Digital',
      icon: Megaphone,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-primary',
      textColor: 'text-purple-600',
      description: 'Equipamos a organizaciones y activistas con herramientas digitales para la movilización social, campañas ciudadanas y comunicación efectiva en redes sociales.',
      objectives: [
        'Capacitar en herramientas de movilización digital',
        'Desarrollar estrategias de campañas ciudadanas',
        'Fortalecer comunicación en redes sociales',
        'Promover el activismo digital responsable'
      ],
      achievements: [
        { metric: '189', label: 'Activistas capacitados en digital' },
        { metric: '67', label: 'Campañas ciudadanas exitosas' },
        { metric: '340', label: 'Organizaciones conectadas' }
      ],
      projects: [
        'Academia de Activismo Digital',
        'Laboratorio de Campañas',
        'Red de Movilización',
        'Plataforma de Acción Colectiva'
      ],
      impact: 'Capacitamos 189 activistas digitales que ejecutaron 67 campañas exitosas, conectando 340 organizaciones en redes de movilización.'
    },
    {
      id: 'civic-monitoring',
      title: 'Monitoreo de Espacios Cívicos con Datos Abiertos',
      icon: Eye,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-primary',
      textColor: 'text-red-600',
      description: 'Promovemos el uso de datos abiertos para monitorear el estado de los espacios cívicos, la libertad de expresión y asociación, y documentar amenazas a las libertades democráticas.',
      objectives: [
        'Capacitar en análisis de datos sobre espacios cívicos',
        'Desarrollar indicadores de libertades civiles',
        'Crear sistemas de alerta temprana',
        'Promover la transparencia en restricciones cívicas'
      ],
      achievements: [
        { metric: '123', label: 'Reportes de monitoreo publicados' },
        { metric: '34', label: 'Indicadores cívicos desarrollados' },
        { metric: '89%', label: 'Cobertura territorial' }
      ],
      projects: [
        'Observatorio de Espacios Cívicos',
        'Plataforma de Datos Abiertos Cívicos',
        'Sistema de Alertas',
        'Monitor de Libertades'
      ],
      impact: 'Publicamos 123 reportes de monitoreo cívico con 89% de cobertura territorial, documentando el estado de las libertades democráticas.'
    },
    {
      id: 'civic-networks',
      title: 'Redes de Colaboración y Fortalecimiento Organizacional',
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-primary',
      textColor: 'text-orange-600',
      description: 'Construimos redes colaborativas entre organizaciones de sociedad civil para fortalecer capacidades institucionales, sostenibilidad y amplificar el impacto colectivo.',
      objectives: [
        'Crear redes de colaboración entre organizaciones',
        'Desarrollar modelos de sostenibilidad organizacional',
        'Facilitar el intercambio de mejores prácticas',
        'Promover la acción colectiva estratégica'
      ],
      achievements: [
        { metric: '67', label: 'Organizaciones en red' },
        { metric: '12', label: 'Alianzas estratégicas formadas' },
        { metric: '45%', label: 'Mejora en capacidad institucional' }
      ],
      projects: [
        'Red Nacional de OSC',
        'Fondo de Fortalecimiento',
        'Plataforma de Colaboración',
        'Programa de Sostenibilidad'
      ],
      impact: 'Conectamos 67 organizaciones en una red colaborativa con 12 alianzas estratégicas, mejorando la capacidad institucional en 45%.'
    }
  ];

  const overallStats = [
    { icon: Users, number: '420+', label: 'Líderes Capacitados', color: 'text-blue-600' },
    { icon: Target, number: '85', label: 'Organizaciones Fortalecidas', color: 'text-green-600' },
    { icon: Shield, number: '52', label: 'Iniciativas Ciudadanas', color: 'text-red-600' },
    { icon: Heart, number: '95%', label: 'Satisfacción Promedio', color: 'text-orange-600' }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary text-green-300 px-6 py-3 rounded-full mb-6">
              <Users className="mr-2" size={20} />
              <span className="font-semibold">Objetivo Estratégico 2</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Fortalecimiento de Espacios Cívicos
            </h1>

            <p className="text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto font-light leading-relaxed">
              Capacitamos líderes comunitarios y activistas en habilidades de liderazgo, incidencia política
              y movilización social. Promovemos el uso de datos abiertos para monitorear el estado de los
              espacios cívicos y la libertad de expresión y asociación.
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
                <div className="text-green-200 text-sm">{stat.label}</div>
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
              Cinco Programas Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada programa fortalece aspectos específicos del periodismo independiente 
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

      {/* Academia de Liderazgo Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Academia de Liderazgo Comunitario
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro programa insignia de formación ciudadana ofrece capacitaciones especializadas
              y certificaciones reconocidas para fortalecer el liderazgo comunitario guatemalteco
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Talleres de Liderazgo</h3>
              <p className="text-gray-600 mb-4">Programas intensivos de 8-16 semanas con metodologías participativas</p>
              <div className="text-2xl font-bold text-blue-600">18+</div>
              <div className="text-gray-500 text-sm">Talleres Disponibles</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certificaciones</h3>
              <p className="text-gray-600 mb-4">Reconocimiento oficial de competencias en liderazgo</p>
              <div className="text-2xl font-bold text-green-600">420</div>
              <div className="text-gray-500 text-sm">Líderes Certificados</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Red de Activismo</h3>
              <p className="text-gray-600 mb-4">Comunidad activa de líderes y mentores</p>
              <div className="text-2xl font-bold text-purple-600">650+</div>
              <div className="text-gray-500 text-sm">Miembros Activos</div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-primary hover:bg-primary text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 mr-4">
              Explorar la Academia
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary transition-colors duration-200">
              Ver Talleres Disponibles
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Eres líder comunitario o activista?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad de líderes comprometidos con el fortalecimiento
            de los espacios cívicos y la defensa de las libertades democráticas en Guatemala.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary transition-colors duration-200">
              Aplicar a la Academia
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
              Solicitar Información
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JournalismStrengtheningPage;
