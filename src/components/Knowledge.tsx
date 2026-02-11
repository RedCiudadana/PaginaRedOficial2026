import React, { useState } from 'react';
import { FileText, Download } from 'lucide-react';

const Knowledge = () => {
  const [activeTab, setActiveTab] = useState('publications');

  const publications = [
    {
      title: 'Guía Práctica de Gobierno Abierto para Municipalidades',
      type: 'Guía Metodológica',
      pages: 84,
      downloads: 3420,
      date: 'Diciembre 2023',
      description: 'Manual completo para implementar principios de gobierno abierto a nivel municipal.',
      format: 'PDF'
    },
    {
      title: 'Estado de la Transparencia en Guatemala 2023',
      type: 'Informe Anual',
      pages: 156,
      downloads: 5680,
      date: 'Noviembre 2023',
      description: 'Análisis comprehensivo del nivel de transparencia en instituciones públicas guatemaltecas.',
      format: 'PDF'
    },
    {
      title: 'Toolkit de Verificación para Periodistas',
      type: 'Herramientas',
      pages: 45,
      downloads: 2890,
      date: 'Octubre 2023',
      description: 'Conjunto de herramientas y metodologías para la verificación de información.',
      format: 'PDF + Excel'
    },
    {
      title: 'Diagnóstico de Contrataciones Públicas 2023',
      type: 'Investigación',
      pages: 198,
      downloads: 4230,
      date: 'Septiembre 2023',
      description: 'Estudio detallado sobre patrones y riesgos en contrataciones públicas guatemaltecas.',
      format: 'PDF'
    }
  ];

  const tabs = [
    { id: 'publications', label: 'Publicaciones', icon: FileText }
  ];

  return (
    <section id="conocimiento" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Centro de Conocimiento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accede a nuestras investigaciones, análisis, guías prácticas y recursos especializados 
            para fortalecer la transparencia y la participación ciudadana
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-gray-100 rounded-2xl p-2 mb-12 inline-flex w-full overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-200 whitespace-nowrap flex-1 justify-center ${
                activeTab === tab.id
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <tab.icon className="mr-2" size={20} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Publications Content */}
        {activeTab === 'publications' && (
          <div>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {publications.map((publication, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="bg-primary text-green-800 px-3 py-1 rounded-full text-xs font-medium mr-3">
                          {publication.type}
                        </span>
                        <span className="text-sm text-gray-500">{publication.date}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {publication.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {publication.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{publication.pages} páginas</span>
                      <span>•</span>
                      <span>{publication.format}</span>
                      <span>•</span>
                      <span>{publication.downloads.toLocaleString()} descargas</span>
                    </div>
                    
                    <button className="bg-primary hover:bg-primary text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center">
                      <Download size={16} className="mr-2" />
                      Descargar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Repositorio Completo
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Accede a nuestro repositorio completo con más de 150 publicaciones, investigaciones 
                y recursos especializados organizados por temática y año.
              </p>
              <button className="bg-primary hover:bg-primary text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Explorar Repositorio Completo
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Knowledge;