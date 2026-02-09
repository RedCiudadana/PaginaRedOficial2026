import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Lightbulb, ArrowRight, Award } from 'lucide-react';

const ExecutiveSummary = () => {
  const keyPoints = [
    {
      icon: Target,
      title: 'Nuestra Misión',
      description: 'Promovemos la transparencia, innovación pública y participación ciudadana para fortalecer la democracia guatemalteca.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Lightbulb,
      title: 'Cómo lo Hacemos',
      description: 'A través de tecnología, capacitación especializada y colaboración con instituciones públicas y medios de comunicación.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Award,
      title: 'Nuestro Impacto',
      description: 'Transformando Guatemala con presencia nacional y resultados tangibles en transparencia y participación ciudadana.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-blue-50/30 to-green-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 lg:px-6 lg:py-3 rounded-full mb-4 lg:mb-6">
            <Target className="mr-2" size={16} />
            <span className="font-semibold text-sm lg:text-base">¿Qué es Red Ciudadana?</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
            Líderes en Transparencia e Innovación Pública
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Somos una organización guatemalteca que desde 2010 trabaja para construir una sociedad más transparente, 
            participativa e innovadora a través de la tecnología y la colaboración ciudadana.
          </p>
        </div>

        {/* Key Points */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {keyPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className={`w-12 h-12 lg:w-14 lg:h-14 ${point.bgColor} rounded-xl flex items-center justify-center mb-4 lg:mb-6`}>
                <point.icon className={point.color} size={24} />
              </div>
              
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">
                {point.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                {point.description}
              </p>
            </div>
          ))}
        </div>


        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-white">
            <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4">
              Conoce Más Sobre Nuestro Trabajo
            </h3>
            <p className="text-blue-100 mb-6 lg:mb-8 max-w-2xl mx-auto text-sm lg:text-base px-4">
              Descubre cómo estamos transformando Guatemala a través de nuestros cuatro objetivos estratégicos 
              y más de 150 proyectos implementados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quienes-somos"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 text-sm lg:text-base"
              >
                Conocer Nuestra Historia
                <ArrowRight className="ml-2" size={16} />
              </Link>
              <Link
                to="/estrategia"
                className="inline-flex items-center border-2 border-white text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 text-sm lg:text-base"
              >
                Ver Plan Estratégico
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;