import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter, X, Building2, Clock, DollarSign, MapPin, Sparkles, ArrowRight, Briefcase, Target, Calendar, ChevronDown } from 'lucide-react';
import { fetchTramites, Tramite } from '../lib/tramitesData';

export default function TramitesExplorerPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tramites, setTramites] = useState<Tramite[]>([]);
  const [filteredTramites, setFilteredTramites] = useState<Tramite[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedCategoria, setSelectedCategoria] = useState(searchParams.get('categoria') || '');
  const [selectedInstitucion, setSelectedInstitucion] = useState(searchParams.get('institucion') || '');
  const [selectedModalidad, setSelectedModalidad] = useState('');
  const [selectedNivelDigital, setSelectedNivelDigital] = useState('');
  const [soloGratuitos, setSoloGratuitos] = useState(false);
  const [soloEmprendedores, setSoloEmprendedores] = useState(false);

  useEffect(() => {
    loadTramites();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [tramites, searchQuery, selectedCategoria, selectedInstitucion, selectedModalidad, selectedNivelDigital, soloGratuitos, soloEmprendedores]);

  const loadTramites = async () => {
    setLoading(true);
    const data = await fetchTramites();
    const sortedData = data.sort((a, b) => b.vistas - a.vistas);
    setTramites(sortedData);
    setLoading(false);
  };

  const applyFilters = () => {
    let filtered = [...tramites];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(t =>
        t.nombre.toLowerCase().includes(query) ||
        t.descripcion.toLowerCase().includes(query) ||
        t.institucion.toLowerCase().includes(query) ||
        t.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    if (selectedCategoria) {
      filtered = filtered.filter(t => t.categoria === selectedCategoria);
    }

    if (selectedInstitucion) {
      filtered = filtered.filter(t => t.institucion === selectedInstitucion);
    }

    if (selectedModalidad) {
      filtered = filtered.filter(t => t.modalidad === selectedModalidad);
    }

    if (selectedNivelDigital) {
      filtered = filtered.filter(t => t.nivel_digital === selectedNivelDigital);
    }

    if (soloGratuitos) {
      filtered = filtered.filter(t => t.costo === 0);
    }

    if (soloEmprendedores) {
      filtered = filtered.filter(t => t.para_emprendedores);
    }

    setFilteredTramites(filtered);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategoria('');
    setSelectedInstitucion('');
    setSelectedModalidad('');
    setSelectedNivelDigital('');
    setSoloGratuitos(false);
    setSoloEmprendedores(false);
    setSearchParams({});
  };

  const activeFiltersCount = [
    searchQuery,
    selectedCategoria,
    selectedInstitucion,
    selectedModalidad,
    selectedNivelDigital,
    soloGratuitos,
    soloEmprendedores
  ].filter(Boolean).length;

  const categorias = [...new Set(tramites.map(t => t.categoria))];
  const instituciones = [...new Set(tramites.map(t => t.institucion))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-gray-50">
      <div className="relative bg-gradient-to-br from-teal-600 via-teal-700 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCAzOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full mb-6 border border-white/30 shadow-lg">
              <Sparkles size={22} className="text-teal-200" />
              <span className="font-bold text-white">Mapa de Trámites</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              Explorar Trámites Públicos
            </h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto mb-8">
              Encuentra información clara sobre requisitos, tiempos y costos de servicios del Estado
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl p-4 shadow-xl text-center">
              <div className="text-3xl font-black text-white mb-1">{tramites.length}</div>
              <div className="text-xs text-teal-100 font-semibold">Trámites</div>
            </div>
            <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl p-4 shadow-xl text-center">
              <div className="text-3xl font-black text-white mb-1">
                {tramites.filter(t => t.nivel_digital === '100% Digital').length}
              </div>
              <div className="text-xs text-teal-100 font-semibold">Digitales</div>
            </div>
            <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl p-4 shadow-xl text-center">
              <div className="text-3xl font-black text-white mb-1">
                {tramites.filter(t => t.costo === 0).length}
              </div>
              <div className="text-xs text-teal-100 font-semibold">Gratuitos</div>
            </div>
            <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl p-4 shadow-xl text-center">
              <div className="text-3xl font-black text-white mb-1">
                {tramites.filter(t => t.para_emprendedores).length}
              </div>
              <div className="text-xs text-teal-100 font-semibold">Emprendedores</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 mb-8 border-2 border-teal-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por nombre, institución o palabra clave..."
                className="w-full pl-14 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition text-lg shadow-sm"
              />
            </div>
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-6 py-4 bg-red-500 hover:bg-red-600 rounded-xl text-white font-bold transition shadow-lg"
              >
                <X className="h-5 w-5" />
                Limpiar ({activeFiltersCount})
              </button>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">Categoría</label>
              <select
                value={selectedCategoria}
                onChange={(e) => setSelectedCategoria(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white shadow-sm font-semibold"
              >
                <option value="">Todas las categorías</option>
                {categorias.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">Institución</label>
              <select
                value={selectedInstitucion}
                onChange={(e) => setSelectedInstitucion(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white shadow-sm font-semibold"
              >
                <option value="">Todas las instituciones</option>
                {instituciones.map(inst => (
                  <option key={inst} value={inst}>{inst}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">Modalidad</label>
              <select
                value={selectedModalidad}
                onChange={(e) => setSelectedModalidad(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white shadow-sm font-semibold"
              >
                <option value="">Todas las modalidades</option>
                <option value="Presencial">Presencial</option>
                <option value="En línea">En línea</option>
                <option value="Mixto">Mixto</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wide">Digitalización</label>
              <select
                value={selectedNivelDigital}
                onChange={(e) => setSelectedNivelDigital(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 bg-white shadow-sm font-semibold"
              >
                <option value="">Todos los niveles</option>
                <option value="100% Digital">100% Digital</option>
                <option value="Parcialmente Digital">Parcialmente Digital</option>
                <option value="Análogo">Análogo</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <label className="flex items-center gap-3 cursor-pointer bg-teal-50 px-4 py-3 rounded-xl border-2 border-teal-200 hover:bg-teal-100 transition">
              <input
                type="checkbox"
                checked={soloGratuitos}
                onChange={(e) => setSoloGratuitos(e.target.checked)}
                className="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
              />
              <span className="text-teal-900 font-bold">💰 Solo gratuitos</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer bg-purple-50 px-4 py-3 rounded-xl border-2 border-purple-200 hover:bg-purple-100 transition">
              <input
                type="checkbox"
                checked={soloEmprendedores}
                onChange={(e) => setSoloEmprendedores(e.target.checked)}
                className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <span className="text-purple-900 font-bold">🚀 Para emprendedores</span>
            </label>
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between bg-gradient-to-r from-teal-50 to-blue-50 px-6 py-4 rounded-xl border border-teal-200">
          <p className="text-gray-700 font-semibold">
            Mostrando <span className="font-black text-2xl text-teal-600">{filteredTramites.length}</span> de{' '}
            <span className="font-black text-2xl text-gray-900">{tramites.length}</span> trámites
          </p>
          {activeFiltersCount > 0 && (
            <div className="flex items-center gap-2 text-sm">
              <span className="bg-teal-600 text-white px-3 py-1.5 rounded-full font-bold">
                {activeFiltersCount} filtro{activeFiltersCount !== 1 ? 's' : ''} activo{activeFiltersCount !== 1 ? 's' : ''}
              </span>
            </div>
          )}
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
          </div>
        ) : filteredTramites.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-md">
            <Filter className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No se encontraron trámites</h3>
            <p className="text-gray-600 mb-4">Intenta ajustar los filtros de búsqueda</p>
            <button
              onClick={clearFilters}
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTramites.map(tramite => (
              <TramiteCard key={tramite.id} tramite={tramite} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function TramiteCard({ tramite }: { tramite: Tramite }) {
  const getBadgeColor = (nivel: string) => {
    switch (nivel) {
      case '100% Digital': return 'bg-green-100 text-green-800';
      case 'Parcialmente Digital': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Link
      to={`/tramites/${tramite.id}`}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-teal-300 group"
    >
      <div className="flex items-start justify-between mb-4 gap-2 flex-wrap">
        <span className={`text-xs px-3 py-1.5 rounded-full font-bold shadow-sm ${getBadgeColor(tramite.nivel_digital)}`}>
          {tramite.nivel_digital === '100% Digital' && '✨ '}
          {tramite.nivel_digital}
        </span>
        {tramite.para_emprendedores && (
          <span className="text-xs px-3 py-1.5 rounded-full font-bold bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-md flex items-center gap-1">
            <Briefcase className="h-3 w-3" />
            Emprendedor
          </span>
        )}
      </div>

      <div className="mb-4">
        <span className="text-xs px-3 py-1 bg-gradient-to-r from-teal-50 to-teal-100 text-teal-800 rounded-full font-bold border border-teal-200">
          {tramite.categoria}
        </span>
      </div>

      <h3 className="font-black text-lg text-gray-900 mb-3 group-hover:text-teal-600 transition line-clamp-2 leading-tight">
        {tramite.nombre}
      </h3>

      <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">{tramite.descripcion}</p>

      <div className="space-y-2.5 text-sm mb-5">
        <div className="flex items-center gap-2 text-gray-700 bg-gray-50 px-3 py-2 rounded-lg">
          <Building2 className="h-4 w-4 text-teal-600 flex-shrink-0" />
          <span className="truncate font-semibold">{tramite.institucion}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Clock className="h-4 w-4 text-blue-600 flex-shrink-0" />
          <span className="font-semibold">{tramite.tiempo_estimado}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <DollarSign className="h-4 w-4 text-green-600 flex-shrink-0" />
          <span className="font-bold text-green-600">
            {tramite.costo === 0 ? '🎉 Gratuito' : `Q${tramite.costo.toFixed(2)}`}
          </span>
        </div>
        {tramite.ubicacion && (
          <div className="flex items-center gap-2 text-gray-700">
            <MapPin className="h-4 w-4 text-red-500 flex-shrink-0" />
            <span className="truncate text-xs">{tramite.ubicacion}</span>
          </div>
        )}
      </div>

      <div className="pt-4 border-t-2 border-gray-100">
        <div className="flex items-center justify-between">
          <span className="text-teal-600 font-black group-hover:text-teal-700 transition flex items-center gap-2">
            Ver detalles
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </span>
          {tramite.nivel_digital === '100% Digital' && (
            <Sparkles className="h-5 w-5 text-green-500 animate-pulse" />
          )}
        </div>
      </div>
    </Link>
  );
}