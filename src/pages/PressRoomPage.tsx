import React, { useState } from 'react';
import HeroSlider from '../components/HeroSlider';
import {
  Newspaper,
  Download,
  Calendar,
  FileText,
  Image as ImageIcon,
  ExternalLink,
  Tag
} from 'lucide-react';

const PressRoomPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const heroSlides = [
    {
      id: 'press-main',
      title: 'Sala de Prensa',
      subtitle: 'Información para Periodistas y Medios',
      description: 'Accede a comunicados de prensa, recursos multimedia, información sobre eventos y proyectos. Todo lo que necesitas para contar nuestras historias.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      cta: {
        primary: { text: 'Kit de Medios', action: '#media-kit' }
      }
    }
  ];

  const pressReleases = [
    {
      title: 'Red Ciudadana lanza nueva plataforma de monitoreo electoral',
      date: '18 Enero 2024',
      category: 'Innovación',
      summary: 'La organización presenta una herramienta innovadora para el seguimiento transparente de procesos electorales en tiempo real, beneficiando a más de 100,000 ciudadanos.',
      type: 'Comunicado de Prensa',
      tags: ['Democracia', 'Tecnología', 'Elecciones']
    },
    {
      title: 'Capacitación especializada beneficia a 150 periodistas guatemaltecos',
      date: '15 Enero 2024',
      category: 'Educación',
      summary: 'Programa Conecta Futuro gradúa nueva cohorte de profesionales en periodismo de investigación y verificación de datos.',
      type: 'Comunicado de Prensa',
      tags: ['Periodismo', 'Educación', 'Conecta Futuro']
    },
    {
      title: 'Reconocimiento internacional por innovación en transparencia',
      date: '12 Enero 2024',
      category: 'Premios',
      summary: 'Red Ciudadana recibe premio regional por su contribución al gobierno abierto en América Latina otorgado por la OEA.',
      type: 'Comunicado de Prensa',
      tags: ['Transparencia', 'Gobierno Abierto', 'Internacional']
    },
    {
      title: 'Nuevo informe revela avances en transparencia municipal',
      date: '08 Enero 2024',
      category: 'Investigación',
      summary: 'Estudio comprehensivo analiza el nivel de transparencia en 340 municipalidades guatemaltecas, identificando mejores prácticas y áreas de oportunidad.',
      type: 'Informe',
      tags: ['Transparencia', 'Municipios', 'Investigación']
    },
    {
      title: 'Alianza estratégica con universidades fortalece democracia digital',
      date: '05 Enero 2024',
      category: 'Alianzas',
      summary: 'Red Ciudadana firma convenio con 5 universidades para promover la participación ciudadana digital entre jóvenes.',
      type: 'Comunicado de Prensa',
      tags: ['Alianzas', 'Educación', 'Juventud']
    }
  ];

  const mediaResources = [
    {
      title: 'Logotipos y Marca',
      description: 'Logos en alta resolución en formatos PNG, SVG y PDF',
      icon: ImageIcon,
      files: 8,
      size: '12 MB'
    },
    {
      title: 'Fotografías Institucionales',
      description: 'Imágenes de eventos, equipo y actividades',
      icon: ImageIcon,
      files: 45,
      size: '250 MB'
    },
    {
      title: 'Infografías y Datos',
      description: 'Visualizaciones y estadísticas en formatos editables',
      icon: FileText,
      files: 24,
      size: '35 MB'
    },
    {
      title: 'Videos Institucionales',
      description: 'Material audiovisual en alta calidad',
      icon: ExternalLink,
      files: 12,
      size: '1.2 GB'
    }
  ];

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'Innovación', label: 'Innovación' },
    { id: 'Educación', label: 'Educación' },
    { id: 'Investigación', label: 'Investigación' },
    { id: 'Premios', label: 'Premios' },
    { id: 'Alianzas', label: 'Alianzas' }
  ];

  const filteredReleases = selectedCategory === 'all'
    ? pressReleases
    : pressReleases.filter(release => release.category === selectedCategory);

  return (
    <div className="pt-20">
      <HeroSlider slides={heroSlides} />

      {/* Press Releases */}
      <section id="press-releases" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comunicados de Prensa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Últimas noticias y anuncios de Red Ciudadana
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Press Release List */}
          <div className="space-y-6 mb-12">
            {filteredReleases.map((release, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                        {release.type}
                      </span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {release.category}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {release.date}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {release.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {release.summary}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {release.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="flex items-center text-xs text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
                          <Tag size={12} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 lg:ml-6">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center whitespace-nowrap">
                      Leer Completo
                      <ExternalLink size={16} className="ml-2" />
                    </button>
                    <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center whitespace-nowrap">
                      <Download size={16} className="mr-2" />
                      Descargar PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              Ver Todos los Comunicados
            </button>
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section id="media-kit" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kit de Medios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recursos multimedia y materiales institucionales para uso editorial
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {mediaResources.map((resource, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <resource.icon className="text-blue-600" size={24} />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {resource.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {resource.description}
                </p>

                <div className="flex justify-between text-xs text-gray-500 mb-4">
                  <span>{resource.files} archivos</span>
                  <span>{resource.size}</span>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center text-sm">
                  <Download size={16} className="mr-2" />
                  Descargar
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressRoomPage;
