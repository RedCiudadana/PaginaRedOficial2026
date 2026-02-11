import React, { useState } from 'react';
import { Award, Users, Target, Eye, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const AboutUs = () => {
  const [currentYear, setCurrentYear] = useState(0);

  const timeline = [
    {
      year: '2011',
      title: 'Fundación de Red Ciudadana',
      description: 'Inicio de nuestra misión de fortalecer la democracia a través de la tecnología',
      achievements: []
    },
    {
      year: '2013',
      title: 'Primera Plataforma de Participación Ciudadana',
      description: 'Lanzamiento de herramientas para la participación ciudadana con tecnología',
      achievements: []
    },
    {
      year: '2015',
      title: 'Programa de Fortalecimiento de Espacios Cívicos',
      description: 'Capacitación de líderes comunitarios en incidencia política y movilización social',
      achievements: []
    },
    {
      year: '2017',
      title: 'Primer portal de datos abiertos',
      description: 'Colaboraciones con instituciones de gobierno en Guatemala para promover iniciativas de datos abiertos.',
      achievements: []
    },
    {
      year: '2020',
      title: 'Transformación Digital durante COVID-19',
      description: 'Apoyo a instituciones públicas en su digitalización',
      achievements: []
    },
    {
      year: '2025',
      title: 'Programa de Innovación Gubernamental',
      description: 'Implementación de IA y automatización en el sector público',
      achievements: []
    },
    {
      year: '2026',
      title: '15 Años Transformando Guatemala',
      description: 'Celebramos nuestro aniversario y miramos hacia el futuro',
      achievements: []
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Transparencia',
      description: 'Promovemos el acceso a la información y la rendición de cuentas en todas las instituciones.'
    },
    {
      icon: Users,
      title: 'Participación',
      description: 'Fortalecemos la participación ciudadana informada y efectiva en los procesos democráticos.'
    },
    {
      icon: Eye,
      title: 'Integridad',
      description: 'Actuamos con ética y coherencia entre nuestros valores y acciones.'
    },
    {
      icon: Heart,
      title: 'Impacto Social',
      description: 'Buscamos generar cambios positivos y duraderos en la sociedad guatemalteca.'
    }
  ];


  return (
    <section id="quienes-somos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Quiénes Somos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            15 años de logros, innovación y transformación social
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
              <Target className="text-blue-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión</h3>
            <p className="text-gray-600 leading-relaxed">
              Promover la transparencia, la innovación pública y la participación ciudadana 
              para fortalecer la democracia guatemalteca a través del uso estratégico de la tecnología.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
              <Eye className="text-green-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión</h3>
            <p className="text-gray-600 leading-relaxed">
              Ser la organización de referencia en América Latina en transparencia e innovación pública, 
              liderando la transformación digital del sector público guatemalteco.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
              <Award className="text-purple-600" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Impacto</h3>
            <p className="text-gray-600 leading-relaxed">
              Más de 156 proyectos implementados, 2,840 periodistas capacitados y presencia 
              en 22 departamentos de Guatemala con reconocimiento internacional.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nuestros Valores
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="text-blue-600" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nuestra Trayectoria
          </h3>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            {/* Timeline Navigation */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setCurrentYear(Math.max(0, currentYear - 1))}
                disabled={currentYear === 0}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {timeline.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentYear(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentYear ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setCurrentYear(Math.min(timeline.length - 1, currentYear + 1))}
                disabled={currentYear === timeline.length - 1}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Timeline Content */}
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {timeline[currentYear].year}
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                {timeline[currentYear].title}
              </h4>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {timeline[currentYear].description}
              </p>
              {timeline[currentYear].achievements.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  {timeline[currentYear].achievements.map((achievement, index) => (
                    <span
                      key={index}
                      className="bg-primary text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;