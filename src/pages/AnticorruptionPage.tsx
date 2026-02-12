import React, { useState } from 'react';
import { Shield, Eye, AlertTriangle, Database, Search, ArrowRight, CheckCircle, TrendingUp, Target, Award, FileText } from 'lucide-react';

const AnticorruptionPage = () => {
  const [activeProgram, setActiveProgram] = useState(0);

  const programs = [
    {
      id: 'open-contracting',
      title: 'Implementación y Lanzamiento de Open Contracting',
      icon: FileText,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-primary',
      textColor: 'text-blue-600',
      description: 'Implementamos estándares internacionales de contratación abierta para aumentar la transparencia en procesos de adquisición pública y facilitar el monitoreo ciudadano.',
      objectives: [
        'Implementar el estándar OCDS en instituciones públicas',
        'Capacitar funcionarios en contratación abierta',
        'Desarrollar herramientas de análisis de contratos',
        'Facilitar el monitoreo ciudadano de contrataciones'
      ],
      achievements: [
        { metric: '18', label: 'Instituciones implementando OCDS' },
        { metric: '2,340', label: 'Contratos en formato abierto' },
        { metric: 'Q12.5M', label: 'Valor monitoreado' }
      ],
      projects: [
        'Portal Nacional de Contratación Abierta',
        'Sistema de Monitoreo OCDS',
        'Capacitación en Estándares Internacionales',
        'Red de Instituciones Open Contracting'
      ],
      impact: 'Hemos logrado que 18 instituciones adopten estándares OCDS, publicando 2,340 contratos en formato abierto por un valor de Q12.5 millones monitoreados.'
    },
    {
      id: 'red-flags',
      title: 'Red Flags de Contrataciones e Índice Anticorrupción',
      icon: AlertTriangle,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-primary',
      textColor: 'text-red-600',
      description: 'Desarrollamos sistemas automatizados de detección de señales de alerta en contrataciones públicas y creamos índices que miden el riesgo de corrupción en instituciones.',
      objectives: [
        'Identificar patrones sospechosos en contrataciones',
        'Crear algoritmos de detección automática',
        'Desarrollar índices de riesgo institucional',
        'Generar alertas tempranas para autoridades'
      ],
      achievements: [
        { metric: '156', label: 'Alertas rojas generadas' },
        { metric: '89%', label: 'Precisión en detección' },
        { metric: '23', label: 'Instituciones evaluadas' }
      ],
      projects: [
        'Sistema de Alertas Automatizadas',
        'Índice Nacional Anticorrupción',
        'Dashboard de Riesgos Institucionales',
        'Algoritmos de Machine Learning'
      ],
      impact: 'Generamos 156 alertas rojas con 89% de precisión, evaluando 23 instituciones y previniendo potenciales actos de corrupción por Q8.7 millones.'
    },
    {
      id: 'pida-portal',
      title: 'Implementando PIDA y Portal Anticorrupción',
      icon: Database,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-primary',
      textColor: 'text-green-600',
      description: 'Desarrollamos el Programa de Datos Abiertos contra la Corrupción (PIDA) y un portal integral que centraliza información, herramientas y recursos anticorrupción.',
      objectives: [
        'Centralizar datos anticorrupción en una plataforma',
        'Facilitar acceso ciudadano a información crítica',
        'Crear herramientas de análisis colaborativo',
        'Promover la participación ciudadana en vigilancia'
      ],
      achievements: [
        { metric: '45', label: 'Datasets anticorrupción disponibles' },
        { metric: '12,500', label: 'Usuarios activos mensuales' },
        { metric: '234', label: 'Reportes ciudadanos procesados' }
      ],
      projects: [
        'Portal Anticorrupción Nacional',
        'Base de Datos PIDA',
        'Herramientas de Análisis Ciudadano',
        'Sistema de Reportes Colaborativos'
      ],
      impact: 'Publicamos 45 datasets anticorrupción con 12,500 usuarios mensuales activos y procesamos 234 reportes ciudadanos, fortaleciendo la vigilancia social.'
    },
    {
      id: 'access-observatory',
      title: 'Plataforma de Acceso a la Información y Observatorio de Transparencia Fiscal',
      icon: Eye,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-primary',
      textColor: 'text-purple-600',
      description: 'Creamos una plataforma integral para facilitar solicitudes de información pública y un observatorio que monitorea la transparencia fiscal de instituciones gubernamentales.',
      objectives: [
        'Facilitar solicitudes de información pública',
        'Monitorear transparencia fiscal institucional',
        'Crear indicadores de transparencia',
        'Promover rendición de cuentas públicas'
      ],
      achievements: [
        { metric: '1,234', label: 'Solicitudes de información tramitadas' },
        { metric: '78%', label: 'Tasa de respuesta institucional' },
        { metric: '34', label: 'Instituciones monitoreadas fiscalmente' }
      ],
      projects: [
        'Plataforma de Solicitudes de Información',
        'Observatorio de Transparencia Fiscal',
        'Índice de Transparencia Institucional',
        'Sistema de Seguimiento de Respuestas'
      ],
      impact: 'Tramitamos 1,234 solicitudes de información con 78% de respuesta institucional, monitoreando fiscalmente 34 instituciones y mejorando la transparencia pública.'
    }
  ];

  const overallStats = [
    { icon: Shield, number: '67+', label: 'Casos Anticorrupción Documentados', color: 'text-red-600' },
    { icon: Eye, number: '34', label: 'Instituciones Monitoreadas', color: 'text-blue-600' },
    { icon: AlertTriangle, number: '156', label: 'Alertas Rojas Generadas', color: 'text-orange-600' },
    { icon: Database, number: 'Q45M', label: 'Valor Monitoreado', color: 'text-green-600' }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary text-red-300 px-6 py-3 rounded-full mb-6">
              <Shield className="mr-2" size={20} />
              <span className="font-semibold">Objetivo Estratégico 3</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Anticorrupción
            </h1>
            
            <p className="text-xl lg:text-2xl text-red-100 max-w-4xl mx-auto font-light leading-relaxed">
              Desarrollamos herramientas y metodologías para la prevención, detección y combate 
              de la corrupción en instituciones públicas guatemaltecas
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
                <div className="text-red-200 text-sm">{stat.label}</div>
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
              Cuatro Programas Anticorrupción
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada programa aborda aspectos específicos de la lucha anticorrupción 
              con herramientas tecnológicas y metodologías probadas
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

      {/* Tools Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Herramientas Anticorrupción Disponibles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plataformas y recursos especializados para ciudadanos, periodistas y funcionarios 
              comprometidos con la transparencia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="text-red-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Portal Anticorrupción</h3>
              <p className="text-gray-600 mb-4">Acceso centralizado a datos, herramientas y reportes</p>
              <div className="text-2xl font-bold text-red-600">12.5K</div>
              <div className="text-gray-500 text-sm">Usuarios Mensuales</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sistema de Alertas</h3>
              <p className="text-gray-600 mb-4">Detección automática de patrones sospechosos</p>
              <div className="text-2xl font-bold text-blue-600">89%</div>
              <div className="text-gray-500 text-sm">Precisión</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Database className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Base de Datos PIDA</h3>
              <p className="text-gray-600 mb-4">Repositorio de datos abiertos anticorrupción</p>
              <div className="text-2xl font-bold text-green-600">45</div>
              <div className="text-gray-500 text-sm">Datasets Disponibles</div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-primary hover:bg-primary text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 mr-4">
              Acceder al Portal Anticorrupción
            </button>
            <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary transition-colors duration-200">
              Descargar Guía de Uso
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Detectaste un posible caso de corrupción?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Utiliza nuestras herramientas para reportar, analizar y dar seguimiento a casos 
            de corrupción de manera segura y efectiva.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary transition-colors duration-200">
              Hacer un Reporte
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
              Conocer Metodología
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnticorruptionPage;
