import React from 'react';
import { Database, FileText, DollarSign, BarChart3, ExternalLink, Shield } from 'lucide-react';

const SistemaRC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Proyectos',
      description: 'Seguimiento detallado de todos nuestros proyectos activos y finalizados'
    },
    {
      icon: DollarSign,
      title: 'Donaciones',
      description: 'Transparencia total sobre fondos recibidos y su distribución'
    },
    {
      icon: BarChart3,
      title: 'Indicadores',
      description: 'Métricas de impacto y resultados de nuestras iniciativas'
    },
    {
      icon: Shield,
      title: 'Rendición de Cuentas',
      description: 'Informes financieros y de actividades accesibles para todos'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            <Database className="w-4 h-4" />
            <span>Plataforma de Transparencia</span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Sistema RC
          </h2>

          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Nuestra plataforma interna que centraliza y pone a disposición pública toda la información sobre nuestros proyectos, donaciones recibidas, indicadores de impacto y más. Un compromiso con la transparencia total.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12 text-left">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href="https://sistema.redciudadana.org.gt/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Acceder al Sistema RC
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SistemaRC;
