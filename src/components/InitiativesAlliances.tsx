import React, { useState } from 'react';
import { Award, Globe, Users, Building2, ChevronLeft, ChevronRight } from 'lucide-react';

const InitiativesAlliances = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Todas', icon: Globe },
    { id: 'government', label: 'Gobierno', icon: Building2 },
    { id: 'international', label: 'Internacional', icon: Globe },
    { id: 'civil', label: 'Sociedad Civil', icon: Users },
    { id: 'academic', label: 'Academia', icon: Award }
  ];

  const partners = [
    {
      id: 1,
      name: 'Gobierno de Guatemala',
      category: 'government',
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
      description: 'Colaboración en proyectos de transparencia y gobierno digital',
      type: 'Aliado Estratégico',
      since: '2015'
    },
    {
      id: 2,
      name: 'Banco Mundial',
      category: 'international',
      logo: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
      description: 'Financiamiento para proyectos de innovación pública',
      type: 'Socio Financiero',
      since: '2018'
    },
    {
      id: 3,
      name: 'USAID',
      category: 'international',
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
      description: 'Apoyo en programas de fortalecimiento democrático',
      type: 'Cooperante',
      since: '2016'
    },
    {
      id: 4,
      name: 'Universidad de San Carlos',
      category: 'academic',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
      description: 'Investigación conjunta y formación académica',
      type: 'Aliado Académico',
      since: '2017'
    },
    {
      id: 5,
      name: 'Fundación Soros',
      category: 'international',
      logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
      description: 'Apoyo a iniciativas de sociedad abierta',
      type: 'Fundación',
      since: '2019'
    },
    {
      id: 6,
      name: 'Acción Ciudadana',
      category: 'civil',
      logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
      description: 'Colaboración en transparencia y anticorrupción',
      type: 'ONG Aliada',
      since: '2014'
    },
    {
      id: 7,
      name: 'BID',
      category: 'international',
      logo: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
      description: 'Financiamiento para desarrollo digital',
      type: 'Banco de Desarrollo',
      since: '2020'
    },
    {
      id: 8,
      name: 'Ministerio de Educación',
      category: 'government',
      logo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
      description: 'Programas de educación cívica digital',
      type: 'Institución Pública',
      since: '2021'
    },
    {
      id: 9,
      name: 'Universidad Rafael Landívar',
      category: 'academic',
      logo: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
      description: 'Centro de investigación en gobierno digital',
      type: 'Universidad Privada',
      since: '2018'
    },
    {
      id: 10,
      name: 'Fundación Libertad y Desarrollo',
      category: 'civil',
      logo: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
      description: 'Think tank para políticas públicas',
      type: 'Think Tank',
      since: '2016'
    },
    {
      id: 11,
      name: 'OEA',
      category: 'international',
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
      description: 'Observación electoral y democracia',
      type: 'Organismo Internacional',
      since: '2017'
    },
    {
      id: 12,
      name: 'Contraloría General de Cuentas',
      category: 'government',
      logo: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop',
      description: 'Herramientas de auditoría ciudadana',
      type: 'Órgano de Control',
      since: '2019'
    }
  ];

  const filteredPartners = activeCategory === 'all' 
    ? partners 
    : partners.filter(partner => partner.category === activeCategory);

  const stats = [
    { number: '50+', label: 'Aliados Estratégicos', icon: Users },
    { number: '15', label: 'Países', icon: Globe },
    { number: '12', label: 'Años de Colaboración', icon: Award },
    { number: '25+', label: 'Proyectos Conjuntos', icon: Building2 }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Iniciativas y Alianzas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trabajamos junto a organizaciones líderes para maximizar nuestro impacto en Guatemala
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="text-white" size={20} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-md border border-gray-100 overflow-x-auto">
            <div className="flex space-x-2 min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category.id
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <category.icon className="mr-2" size={16} />
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredPartners.map((partner, index) => (
            <div
              key={partner.id}
              className="group bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Logo */}
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-20 object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="bg-primary text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {partner.type}
                    </span>
                    <span className="text-gray-500 text-xs">Desde {partner.since}</span>
                  </div>
                  <h3 className="font-bold text-gray-900">
                    {partner.name}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Recognition Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <div className="flex items-center justify-center mb-4">
            <Award className="mr-2" size={24} />
            <h3 className="text-2xl font-bold">Reconocimiento Internacional</h3>
          </div>
          
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Nuestro trabajo ha sido reconocido por organizaciones internacionales como referente en transparencia e innovación pública
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-2xl font-bold mb-1">2023</div>
              <div className="text-blue-100 text-sm">Premio Regional OEA</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-2xl font-bold mb-1">2022</div>
              <div className="text-blue-100 text-sm">Reconocimiento BID</div>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <div className="text-2xl font-bold mb-1">2021</div>
              <div className="text-blue-100 text-sm">Mención Banco Mundial</div>
            </div>
          </div>

          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-primary transition-colors duration-300">
            Conocer Más Alianzas
          </button>
        </div>
      </div>
    </section>
  );
};

export default InitiativesAlliances;