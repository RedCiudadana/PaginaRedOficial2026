import React, { useState } from 'react';
import { Target, TrendingUp, Users, Shield, Cpu, ChevronDown, ChevronUp } from 'lucide-react';

const Strategy = () => {
  const [activeObjective, setActiveObjective] = useState(0);

  const objectives = [
    {
      icon: Cpu,
      title: 'Innovación en Gobierno',
      description: 'Transformar la administración pública a través de tecnología y mejores prácticas',
      color: 'text-gray-900',
      bgColor: 'bg-gray-200',
      programs: [
        'Gobierno Digital',
        'Datos Abiertos',
        'Servicios Ciudadanos'
      ],
      kpis: [
        { metric: 'Instituciones digitalizadas', target: '25', current: '12' },
        { metric: 'Servicios en línea', target: '150', current: '78' },
        { metric: 'Datasets abiertos', target: '300', current: '145' }
      ],
      activities: [
        'Diagnósticos institucionales',
        'Implementación de plataformas',
        'Capacitación a funcionarios',
        'Monitoreo y evaluación'
      ]
    },
    {
      icon: Users,
      title: 'Fortalecimiento de Espacios Cívicos',
      description: 'Capacitar líderes comunitarios y activistas en habilidades de liderazgo e incidencia política',
      color: 'text-gray-900',
      bgColor: 'bg-gray-200',
      programs: [
        'Academia de Liderazgo',
        'Monitoreo de Espacios Cívicos',
        'Activismo Digital'
      ],
      kpis: [
        { metric: 'Líderes capacitados', target: '600', current: '420' },
        { metric: 'Organizaciones fortalecidas', target: '120', current: '85' },
        { metric: 'Iniciativas ciudadanas', target: '80', current: '52' }
      ],
      activities: [
        'Talleres de liderazgo',
        'Capacitación en incidencia',
        'Análisis de datos abiertos',
        'Redes de movilización'
      ]
    },
    {
      icon: Shield,
      title: 'Combate a la Corrupción',
      description: 'Desarrollar herramientas y metodologías para la prevención y detección de corrupción',
      color: 'text-gray-900',
      bgColor: 'bg-gray-200',
      programs: [
        'Portal Anticorrupción',
        'Monitoreo Ciudadano',
        'Alertas Tempranas'
      ],
      kpis: [
        { metric: 'Casos documentados', target: '200', current: '89' },
        { metric: 'Instituciones monitoreadas', target: '35', current: '18' },
        { metric: 'Alertas generadas', target: '400', current: '156' }
      ],
      activities: [
        'Investigación colaborativa',
        'Desarrollo de indicadores',
        'Capacitación ciudadana',
        'Articulación interinstitucional'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Transformación Digital',
      description: 'Liderar la adopción de tecnologías emergentes en el sector público y civil',
      color: 'text-gray-900',
      bgColor: 'bg-gray-200',
      programs: [
        'Inteligencia Artificial',
        'Blockchain Público',
        'IoT Ciudadano'
      ],
      kpis: [
        { metric: 'Proyectos piloto', target: '15', current: '6' },
        { metric: 'Funcionarios capacitados', target: '300', current: '124' },
        { metric: 'Tecnologías implementadas', target: '8', current: '3' }
      ],
      activities: [
        'Investigación aplicada',
        'Prototipos funcionales',
        'Pruebas piloto',
        'Escalamiento institucional'
      ]
    }
  ];

  return (
    <section id="estrategia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Plan Estratégico 2024-2028
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Nuestra hoja de ruta para transformar Guatemala a través de cuatro objetivos estratégicos 
            con metas ambiciosas y medibles
          </p>
          
          <div className="inline-flex items-center bg-gradient-to-r from-gray-100 to-gray-200 px-6 py-3 rounded-full">
            <Target className="text-gray-900 mr-2" size={20} />
            <span className="font-semibold text-gray-900">Visión 2028: Referente Regional en Innovación Pública</span>
          </div>
        </div>

        {/* Objectives Overview */}
        <div className="grid lg:grid-cols-4 gap-6 mb-16">
          {objectives.map((objective, index) => (
            <button
              key={index}
              onClick={() => setActiveObjective(index)}
              className={`text-left p-6 rounded-2xl transition-all duration-300 ${
                activeObjective === index
                  ? 'bg-gradient-to-br from-gray-100 to-white shadow-lg border-2 border-gray-300'
                  : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
              }`}
            >
              <div className={`w-12 h-12 ${objective.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                <objective.icon className={objective.color} size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{objective.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{objective.description}</p>
            </button>
          ))}
        </div>

        {/* Detailed View */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Details */}
            <div>
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 ${objectives[activeObjective].bgColor} rounded-2xl flex items-center justify-center mr-4`}>
                  {React.createElement(objectives[activeObjective].icon, {
                    className: objectives[activeObjective].color,
                    size: 32
                  })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{objectives[activeObjective].title}</h3>
                  <p className="text-gray-600">{objectives[activeObjective].description}</p>
                </div>
              </div>

              {/* Programs */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Programas Asociados</h4>
                <div className="space-y-2">
                  {objectives[activeObjective].programs.map((program, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-2 h-2 ${objectives[activeObjective].bgColor} rounded-full mr-3`}></div>
                      <span className="text-gray-700">{program}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Actividades Clave</h4>
                <div className="grid grid-cols-2 gap-2">
                  {objectives[activeObjective].activities.map((activity, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 shadow-sm border">
                      <span className="text-gray-700 text-sm">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - KPIs */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-6">Indicadores de Desempeño (KPIs)</h4>
              <div className="space-y-6">
                {objectives[activeObjective].kpis.map((kpi, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border">
                    <div className="flex justify-between items-start mb-3">
                      <h5 className="font-semibold text-gray-900 text-sm">{kpi.metric}</h5>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">{kpi.current}</div>
                        <div className="text-sm text-gray-500">de {kpi.target}</div>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-gray-800 to-black h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(parseInt(kpi.current) / parseInt(kpi.target)) * 100}%` }}
                      ></div>
                    </div>
                    
                    <div className="text-xs text-gray-500 mt-2">
                      {Math.round((parseInt(kpi.current) / parseInt(kpi.target)) * 100)}% completado
                    </div>
                  </div>
                ))}
              </div>

              {/* Timeline */}
              <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border">
                <h5 className="font-semibold text-gray-900 mb-4">Cronograma 2024-2028</h5>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-400 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">2024: Diseño e implementación inicial</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-600 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">2025-2026: Desarrollo y escalamiento</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-900 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">2027-2028: Consolidación y evaluación</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Quieres conocer el plan completo?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Descarga nuestro Plan Estratégico 2024-2028 completo con metodologías detalladas,
              cronogramas específicos y marcos de evaluación.
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Descargar Plan Estratégico (PDF)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;