import React, { useEffect, useMemo, useState } from 'react';
import { Search, Calendar, ExternalLink, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import impactIcon1 from '../assets/iconos/11_ICON.png';
import impactIcon2 from '../assets/iconos/12_ICON.png';
import impactIcon3 from '../assets/iconos/13_ICON.png';
import impactIcon4 from '../assets/iconos/14_ICON.png';
import { getAllProjects, Project } from '../lib/cmsProyectos';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    setProjects(getAllProjects());
    setLoading(false);
  }, []);

  const slugify = (value: string) => value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  const filters = useMemo(() => {
    const programSet = new Set(projects.map((project) => project.programa).filter(Boolean));
    const programFilters = Array.from(programSet).map((programa) => ({
      id: slugify(programa),
      label: programa,
    }));

    return [
      { id: 'all', label: 'Todos los Proyectos' },
      ...programFilters,
    ];
  }, [projects]);

  const filteredProjects = projects.filter((project) => {
    const projectFilter = project.programa ? slugify(project.programa) : 'sin-programa';
    const matchesFilter = activeFilter === 'all' || projectFilter === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.descripcion.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / itemsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const pageStart = (safePage - 1) * itemsPerPage;
  const paginatedProjects = filteredProjects.slice(pageStart, pageStart + itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, searchTerm]);

  if (loading) {
    return (
      <section id="proyectos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[240px] flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </section>
    );
  }

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
          {paginatedProjects.map((project) => (
            <div key={project.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                {project.enlace ? (
                  <a
                    href={project.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {project.foto ? (
                      <img
                        src={project.foto}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                        Imagen no disponible
                      </div>
                    )}
                  </a>
                ) : (
                  <>
                    {project.foto ? (
                      <img
                        src={project.foto}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                        Imagen no disponible
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  {project.enlace ? (
                    <a
                      href={project.enlace}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-gray-900 flex-1 hover:text-primary transition-colors"
                    >
                      {project.title}
                    </a>
                  ) : (
                    <h3 className="text-xl font-bold text-gray-900 flex-1">{project.title}</h3>
                  )}
                  {project.enlace && (
                    <a
                      href={project.enlace}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 ml-4"
                      aria-label={`Abrir ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>

                {project.programa && (
                  <div className="text-xs font-semibold text-primary mb-3">
                    {project.programa}
                  </div>
                )}

                {project.enlace ? (
                  <a
                    href={project.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 mb-6 leading-relaxed block hover:text-gray-800 transition-colors"
                  >
                    {project.descripcion}
                  </a>
                ) : (
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.descripcion}
                  </p>
                )}

                {/* Meta Info */}
                {project.ano && (
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {project.ano}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length > 0 && (
          <div className="flex items-center justify-center gap-2 mb-16">
            <button
              className={`h-10 w-10 rounded-lg border transition-all duration-200 flex items-center justify-center text-center leading-none ${
                safePage === 1
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setCurrentPage(1)}
              disabled={safePage === 1}
              aria-label="Primera"
            >
              <ChevronsLeft size={18} />
            </button>
            <button
              className={`h-10 w-10 rounded-lg border transition-all duration-200 flex items-center justify-center text-center leading-none ${
                safePage === 1
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={safePage === 1}
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className="h-10 w-10 rounded-lg border border-primary bg-primary text-white transition-all duration-200 flex items-center justify-center text-center leading-none"
              onClick={() => setCurrentPage(safePage)}
            >
              {safePage}
            </button>
            <button
              className={`h-10 w-10 rounded-lg border transition-all duration-200 flex items-center justify-center text-center leading-none ${
                safePage === totalPages
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              disabled={safePage === totalPages}
              aria-label="Siguiente"
            >
              <ChevronRight size={18} />
            </button>
            <button
              className={`h-10 w-10 rounded-lg border transition-all duration-200 flex items-center justify-center text-center leading-none ${
                safePage === totalPages
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setCurrentPage(totalPages)}
              disabled={safePage === totalPages}
              aria-label="Última"
            >
              <ChevronsRight size={18} />
            </button>
          </div>
        )}

        {/* Impact Summary */}
        <div className="bg-gray-800 rounded-3xl p-8 text-white text-center">
          <div className="flex items-center justify-center mb-16 mt-8">
            <h3 className="text-2xl font-bold">Impacto Acumulado</h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div>
              <img src={impactIcon1} alt="" className="mx-auto mb-3 h-14 w-14" />
              <div className="text-4xl font-bold mb-2">156+</div>
              <div className="text-white">Proyectos Completados</div>
            </div>
            <div>
              <img src={impactIcon2} alt="" className="mx-auto mb-3 h-14 w-14" />
              <div className="text-4xl font-bold mb-2">2.8M+</div>
              <div className="text-white">Personas Beneficiadas</div>
            </div>
            <div>
              <img src={impactIcon3} alt="" className="mx-auto mb-3 h-14 w-14" />
              <div className="text-4xl font-bold mb-2">Q45M</div>
              <div className="text-white">Ahorro al Estado</div>
            </div>
            <div>
              <img src={impactIcon4} alt="" className="mx-auto mb-3 h-14 w-14" />
              <div className="text-4xl font-bold mb-2">89%</div>
              <div className="text-white">Satisfacción Promedio</div>
            </div>
          </div>

          <p className="text-white max-w-2xl mx-auto mb-16">
            Cada proyecto representa nuestro compromiso con la transformación de Guatemala. 
            Trabajamos con metodologías probadas y medimos nuestro impacto constantemente.
          </p>

          {/* <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors duration-200 mb-8">
            Ver Todos los Proyectos
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
