import React, { useState } from 'react';
import { Filter, Search, Calendar, MapPin, Users, ExternalLink, Award } from 'lucide-react';
import impactIcon1 from '../assets/iconos/11_ICON.png';
import impactIcon2 from '../assets/iconos/12_ICON.png';
import impactIcon3 from '../assets/iconos/13_ICON.png';
import impactIcon4 from '../assets/iconos/14_ICON.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'government', label: 'Innovación en Gobierno' },
    { id: 'journalism', label: 'Periodismo' },
    { id: 'anticorruption', label: 'Anticorrupción' },
    { id: 'digital', label: 'Transformación Digital' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Portal de Transparencia Municipal',
      category: 'government',
      description: 'Plataforma que permite a los ciudadanos acceder a información presupuestaria y de gestión de sus municipalidades.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      results: {
        municipalities: 45,
        users: 125000,
        transparency: '87%'
      },
      year: '2023',
      location: 'Nacional',
      status: 'Activo',
      testimonial: {
        text: "Gracias a esta plataforma, ahora sabemos exactamente cómo se invierte el presupuesto municipal.",
        author: "María González, Vecina de Quetzaltenango"
      }
    },
    {
      id: 2,
      title: 'Escuela de Periodismo de Investigación',
      category: 'journalism',
      description: 'Programa de capacitación integral para fortalecer las capacidades de periodistas en investigación y verificación.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      results: {
        journalists: 284,
        investigations: 67,
        impact: '156%'
      },
      year: '2024',
      location: 'Guatemala, Quetzaltenango',
      status: 'En desarrollo',
      testimonial: {
        text: "Este programa transformó mi manera de hacer periodismo. Ahora tengo herramientas profesionales para investigar.",
        author: "Jorge Morales, Periodista"
      }
    },
    {
      id: 3,
      title: 'Sistema de Alertas Anticorrupción',
      category: 'anticorruption',
      description: 'Herramienta de inteligencia artificial que detecta patrones sospechosos en contrataciones públicas.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      results: {
        contracts: 12500,
        alerts: 156,
        saved: 'Q2.4M'
      },
      year: '2023',
      location: 'Nacional',
      status: 'Activo',
      testimonial: {
        text: "Las alertas nos han permitido intervenir antes de que se consoliden procesos irregulares.",
        author: "Ana Pérez, Funcionaria de Contraloría"
      }
    },
    {
      id: 4,
      title: 'Gobierno Digital Piloto',
      category: 'digital',
      description: 'Transformación digital integral de servicios municipales con enfoque en experiencia ciudadana.',
      image: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      results: {
        services: 25,
        satisfaction: '94%',
        time_saved: '70%'
      },
      year: '2024',
      location: 'Antigua Guatemala',
      status: 'Piloto',
      testimonial: {
        text: "Ahora puedo hacer todos mis trámites municipales desde casa. Es increíble la diferencia.",
        author: "Carlos Mendez, Empresario"
      }
    },
    {
      id: 5,
      title: 'Red Nacional de Verificadores',
      category: 'journalism',
      description: 'Plataforma colaborativa para la verificación de información y combate a la desinformación.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      results: {
        verifiers: 89,
        fact_checks: 234,
        reach: '890K'
      },
      year: '2023',
      location: 'Nacional',
      status: 'Activo',
      testimonial: {
        text: "La red nos permite trabajar colaborativamente y llegar a más personas con información verificada.",
        author: "Elena Ruiz, Verificadora"
      }
    },
    {
      id: 6,
      title: 'Observatorio de Contrataciones',
      category: 'anticorruption',
      description: 'Monitoreo ciudadano de procesos de contratación pública con análisis de riesgos automatizado.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      results: {
        institutions: 18,
        contracts_monitored: 8900,
        reports: 45
      },
      year: '2024',
      location: 'Ciudad de Guatemala',
      status: 'En desarrollo',
      testimonial: {
        text: "El observatorio nos da la información necesaria para hacer un seguimiento efectivo de las contrataciones.",
        author: "Roberto Silva, Auditor Social"
      }
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Activo':
        return 'bg-primary text-white';
      case 'En desarrollo':
        return 'bg-primary text-white';
      case 'Piloto':
        return 'bg-primary text-white';
      default:
        return 'bg-gray-100 text-white';
    }
  };

  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proyectos y Resultados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce nuestros proyectos más impactantes y los resultados medibles que hemos logrado 
            en estos 14 años de trabajo
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar proyectos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeFilter === filter.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 flex-1">{project.title}</h3>
                  <button className="text-blue-600 hover:text-blue-700 ml-4">
                    <ExternalLink size={20} />
                  </button>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {project.year}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    {project.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Summary */}
        <div className="bg-gray-800 rounded-3xl p-8 text-white text-center">
          <div className="flex items-center justify-center mb-16 mt-8">
            <h3 className="text-2xl font-bold">Impacto Acumulado</h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div>
              <img src={impactIcon1} alt="" className="mx-auto mb-3 h-14 w-14" />
              <div className="text-4xl font-bold mb-2">156+</div>
              <div className="text-blue-100">Proyectos Completados</div>
            </div>
            <div>
              <img src={impactIcon2} alt="" className="mx-auto mb-3 h-14 w-14" />
              <div className="text-4xl font-bold mb-2">2.8M+</div>
              <div className="text-blue-100">Personas Beneficiadas</div>
            </div>
            <div>
              <img src={impactIcon3} alt="" className="mx-auto mb-3 h-14 w-14" />
              <div className="text-4xl font-bold mb-2">Q45M</div>
              <div className="text-blue-100">Ahorro al Estado</div>
            </div>
            <div>
              <img src={impactIcon4} alt="" className="mx-auto mb-3 h-14 w-14" />
              <div className="text-4xl font-bold mb-2">89%</div>
              <div className="text-blue-100">Satisfacción Promedio</div>
            </div>
          </div>

          <p className="text-blue-100 max-w-2xl mx-auto mb-16">
            Cada proyecto representa nuestro compromiso con la transformación de Guatemala. 
            Trabajamos con metodologías probadas y medimos nuestro impacto constantemente.
          </p>

          <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors duration-200 mb-8">
            Ver Todos los Proyectos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
