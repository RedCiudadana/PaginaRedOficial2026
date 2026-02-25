import React, { useEffect, useState } from 'react';
import { FileText, Download, User } from 'lucide-react';
import { getAllPublicaciones, Publication } from '../lib/cmsPublicaciones';

const Knowledge = () => {
  const [activeTab, setActiveTab] = useState('publications');
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);

  const tabs = [
    { id: 'publications', label: 'Publicaciones', icon: FileText }
  ];

  useEffect(() => {
    setPublications(getAllPublicaciones());
    setLoading(false);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) {
      return dateString;
    }
    return date.toLocaleDateString('es-GT', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (loading) {
    return (
      <section id="conocimiento" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[240px] flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </section>
    );
  }

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
                  ? 'bg-white text-primary shadow-md'
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
              {publications.map((publication) => (
                <div key={publication.slug} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium mr-3">
                          {publication.highlight ? 'Destacado' : 'Publicación'}
                        </span>
                        <span className="text-sm text-gray-500">{formatDate(publication.date)}</span>
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
                      {publication.autor && (
                        <span className="flex items-center gap-2">
                          <User size={14} />
                          {publication.autor}
                        </span>
                      )}
                    </div>
                    
                    {publication.enlace ? (
                      <a
                        href={publication.enlace}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-primary text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center"
                      >
                        <Download size={16} className="mr-2" />
                        Descargar
                      </a>
                    ) : (
                      <span className="text-sm text-gray-400">Enlace no disponible</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 text-center py-16">
              <h3 className="text-2xl font-bold text-white mb-4">
                Repositorio Completo
              </h3>
              <p className="text-white mb-6 max-w-2xl mx-auto">
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
