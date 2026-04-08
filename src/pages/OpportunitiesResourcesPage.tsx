import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Download, FileText, CheckCircle, Lightbulb, Users, Target, TrendingUp, Award, MessageSquare } from 'lucide-react';

const OpportunitiesResourcesPage = () => {
  const guides = [
    {
      title: 'Cómo escribir una propuesta ganadora',
      description: 'Guía paso a paso para estructurar tu propuesta de proyecto.',
      icon: FileText,
      color: 'blue'
    },
    {
      title: 'Presupuestos efectivos para grants',
      description: 'Aprende a crear presupuestos realistas y justificados.',
      icon: Target,
      color: 'green'
    },
    {
      title: 'Teoría de cambio y marco lógico',
      description: 'Herramientas para diseñar la lógica de intervención de tu proyecto.',
      icon: TrendingUp,
      color: 'purple'
    },
    {
      title: 'Medición de impacto social',
      description: 'Define indicadores y métricas que demuestren el valor de tu proyecto.',
      icon: Award,
      color: 'yellow'
    }
  ];

  const templates = [
    'Plantilla de presupuesto para grants',
    'Modelo de carta de intención',
    'Formato de cronograma de actividades',
    'Template de marco lógico',
    'Plantilla de CV organizacional',
    'Modelo de cartas de apoyo'
  ];

  const successStories = [
    {
      org: 'Observatorio Ciudadano',
      grant: 'Fondo de Transparencia LAC',
      amount: '$75,000 USD',
      project: 'Plataforma de monitoreo de contrataciones públicas',
      tip: 'Enfocamos la propuesta en resultados medibles y escalabilidad regional.'
    },
    {
      org: 'Red de Periodistas GT',
      grant: 'ICFJ Fellowship',
      amount: '$12,000 USD',
      project: 'Investigación sobre desinformación electoral',
      tip: 'Demostramos alianzas estratégicas con medios regionales.'
    },
    {
      org: 'Innovación Municipal',
      grant: 'BID Lab Accelerator',
      amount: '$50,000 USD',
      project: 'App de participación ciudadana en presupuestos',
      tip: 'Presentamos prototipo funcional y validación con usuarios.'
    }
  ];

  const tips = [
    {
      icon: CheckCircle,
      title: 'Lee cuidadosamente los requisitos',
      description: 'Asegúrate de cumplir todos los criterios de elegibilidad antes de aplicar.'
    },
    {
      icon: Users,
      title: 'Demuestra capacidad institucional',
      description: 'Incluye información sobre tu equipo, experiencia previa y sostenibilidad.'
    },
    {
      icon: Lightbulb,
      title: 'Sé específico y concreto',
      description: 'Evita generalidades. Usa datos, ejemplos y evidencia de tu contexto.'
    },
    {
      icon: Target,
      title: 'Alinea tu propuesta con las prioridades del donante',
      description: 'Investiga los objetivos estratégicos de la organización convocante.'
    },
    {
      icon: MessageSquare,
      title: 'Solicita retroalimentación externa',
      description: 'Pide a colegas o mentores revisar tu propuesta antes de enviarla.'
    },
    {
      icon: TrendingUp,
      title: 'Enfatiza el impacto y la innovación',
      description: 'Muestra cómo tu proyecto genera cambio real y aporta soluciones creativas.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/oportunidades" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-4">
            <ArrowLeft size={20} />
            Volver a oportunidades
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen size={64} className="mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Recursos y Consejos para Aplicar
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            Herramientas, guías y plantillas para aumentar tus probabilidades de éxito
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Guías y Tutoriales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide, index) => {
              const Icon = guide.icon;
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600',
                green: 'bg-green-100 text-green-600',
                purple: 'bg-purple-100 text-purple-600',
                yellow: 'bg-yellow-100 text-yellow-600'
              };
              return (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
                  <div className={`${colorClasses[guide.color as keyof typeof colorClasses]} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.title}</h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
                    Leer guía <Download size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Plantillas Descargables</h2>
          <div className="bg-white rounded-xl shadow-md p-8">
            <p className="text-gray-600 mb-6">
              Descarga plantillas editables en formato Word y Excel para facilitar tu proceso de aplicación.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {templates.map((template, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <FileText className="text-blue-600" size={20} />
                    <span className="font-medium text-gray-900">{template}</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700">
                    <Download size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos Clave</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <Icon className="text-green-600 mb-4" size={32} />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Casos de Éxito</h2>
          <div className="space-y-6">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-8 border-l-4 border-green-500">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{story.org}</h3>
                    <p className="text-gray-600">{story.project}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 mb-1">Grant obtenido</div>
                    <div className="text-2xl font-bold text-green-600">{story.amount}</div>
                    <div className="text-sm text-gray-600">{story.grant}</div>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-semibold text-green-900 mb-1">Consejo clave:</div>
                      <p className="text-green-800">{story.tip}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <Users size={48} className="mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">¿Necesitas asesoría personalizada?</h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Red Ciudadana ofrece sesiones de mentoría para organizaciones que buscan financiamiento para proyectos de tecnología cívica, transparencia y datos abiertos.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
          >
            Solicitar asesoría
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesResourcesPage;
