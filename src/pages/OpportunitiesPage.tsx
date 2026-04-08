import React, { useState, useEffect } from 'react';
import { Search, Filter, TrendingUp, MapPin, Calendar, DollarSign, Award, Users, BookOpen, Briefcase, Zap, AlertCircle, Bell, ChevronRight, X } from 'lucide-react';
import { parseCSV } from '../lib/csvParser';
import { Link } from 'react-router-dom';

interface Opportunity {
  id: string;
  title: string;
  organization: string;
  type: string;
  category: string;
  description: string;
  deadline: string;
  location: string;
  amount: string;
  currency: string;
  regions: string[];
  topics: string[];
  application_url: string;
  status: string;
  featured: boolean;
  is_guatemala: boolean;
  is_closing_soon: boolean;
}

const OpportunitiesPage = () => {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [filteredOpportunities, setFilteredOpportunities] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('Todos');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [showFilters, setShowFilters] = useState(false);
  const [email, setEmail] = useState('');

  const types = ['Todos', 'grant', 'fellowship', 'consultancy', 'accelerator', 'award', 'hackathon', 'training', 'research'];
  const categories = ['Todos', 'funding', 'training', 'work', 'recognition', 'event', 'education'];

  useEffect(() => {
    fetchOpportunities();
  }, []);

  useEffect(() => {
    filterOpportunities();
  }, [opportunities, searchTerm, selectedType, selectedCategory]);

  const fetchOpportunities = async () => {
    try {
      setLoading(true);
      const data = await parseCSV('/data/opportunities.csv');
      setOpportunities(data);
    } catch (error) {
      console.error('Error fetching opportunities:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterOpportunities = () => {
    let filtered = opportunities.filter(opp => opp.status === 'open');

    if (searchTerm) {
      filtered = filtered.filter(opp =>
        opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedType !== 'Todos') {
      filtered = filtered.filter(opp => opp.type === selectedType);
    }

    if (selectedCategory !== 'Todos') {
      filtered = filtered.filter(opp => opp.category === selectedCategory);
    }

    setFilteredOpportunities(filtered);
  };

  const featuredOpportunities = opportunities.filter(opp => opp.featured && opp.status === 'open');
  const guatemalaOpportunities = opportunities.filter(opp => opp.is_guatemala && opp.status === 'open');
  const closingSoonOpportunities = opportunities.filter(opp => opp.is_closing_soon && opp.status === 'open');
  const civicTechOpportunities = opportunities.filter(opp =>
    opp.status === 'open' && (
      opp.topics.includes('Civic Tech') ||
      opp.topics.includes('Transparencia') ||
      opp.topics.includes('Datos Abiertos') ||
      opp.topics.includes('Innovación Pública')
    )
  );

  const formatDeadline = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-GT', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const getTypeLabel = (type: string) => {
    const labels: { [key: string]: string } = {
      grant: 'Grant',
      fellowship: 'Fellowship',
      consultancy: 'Consultoría',
      accelerator: 'Aceleradora',
      award: 'Premio',
      hackathon: 'Hackathon',
      training: 'Curso',
      research: 'Investigación'
    };
    return labels[type] || type;
  };

  const getTypeIcon = (type: string) => {
    const icons: { [key: string]: any } = {
      grant: DollarSign,
      fellowship: Award,
      consultancy: Briefcase,
      accelerator: Zap,
      award: Award,
      hackathon: Users,
      training: BookOpen,
      research: BookOpen
    };
    return icons[type] || AlertCircle;
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`¡Gracias! Te enviaremos alertas a ${email}`);
    setEmail('');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50">
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCAzOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full mb-8 border border-white/30 shadow-lg">
              <TrendingUp size={22} className="text-blue-200" />
              <span className="font-bold text-white">Radar de Oportunidades Cívicas</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Descubre Oportunidades para<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Transformar tu Comunidad</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
              Grants, becas, consultorías, premios y convocatorias para organizaciones, periodistas y emprendedores sociales en América Latina
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl p-6 shadow-xl hover:bg-white/20 transition">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="bg-white/25 p-2 rounded-lg">
                    <DollarSign size={24} className="text-white" />
                  </div>
                  <div className="text-3xl font-black text-white">{opportunities.filter(o => o.status === 'open').length}</div>
                </div>
                <div className="text-sm text-blue-100 font-semibold">Oportunidades Activas</div>
              </div>
              <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl p-6 shadow-xl hover:bg-white/20 transition">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="bg-white/25 p-2 rounded-lg">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div className="text-3xl font-black text-white">{guatemalaOpportunities.length}</div>
                </div>
                <div className="text-sm text-blue-100 font-semibold">Para Guatemala</div>
              </div>
              <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl p-6 shadow-xl hover:bg-white/20 transition">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="bg-white/25 p-2 rounded-lg">
                    <Calendar size={24} className="text-white" />
                  </div>
                  <div className="text-3xl font-black text-white">{closingSoonOpportunities.length}</div>
                </div>
                <div className="text-sm text-blue-100 font-semibold">Cierran Pronto</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200 sticky top-20 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={22} />
              <input
                type="text"
                placeholder="Buscar por título, organización, tema..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-md font-semibold"
            >
              <Filter size={20} />
              Filtros
              {(selectedType !== 'Todos' || selectedCategory !== 'Todos') && (
                <span className="bg-white text-blue-600 px-2 py-0.5 rounded-full text-xs font-bold">
                  {[selectedType !== 'Todos', selectedCategory !== 'Todos'].filter(Boolean).length}
                </span>
              )}
            </button>
          </div>

          {(showFilters || window.innerWidth >= 1024) && (
            <div className="mt-4 flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-bold text-gray-700 mb-2">Tipo</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
                >
                  {types.map(type => (
                    <option key={type} value={type}>{type === 'Todos' ? 'Todos los tipos' : getTypeLabel(type)}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-bold text-gray-700 mb-2">Categoría</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat === 'Todos' ? 'Todas las categorías' : cat}</option>
                  ))}
                </select>
              </div>
              {(selectedType !== 'Todos' || selectedCategory !== 'Todos') && (
                <button
                  onClick={() => {
                    setSelectedType('Todos');
                    setSelectedCategory('Todos');
                  }}
                  className="lg:self-end px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition font-semibold flex items-center gap-2"
                >
                  <X size={18} />
                  Limpiar
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {featuredOpportunities.length > 0 && !searchTerm && selectedType === 'Todos' && selectedCategory === 'Todos' && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="text-blue-600" size={28} />
              <h2 className="text-3xl font-bold text-gray-900">Oportunidades Destacadas</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredOpportunities.slice(0, 4).map(opp => {
                const TypeIcon = getTypeIcon(opp.type);
                return (
                  <Link
                    key={opp.id}
                    to={`/oportunidades/${opp.id}`}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group border-2 border-blue-100"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                            <TypeIcon size={20} />
                          </div>
                          <span className="text-sm font-semibold text-blue-600">{getTypeLabel(opp.type)}</span>
                        </div>
                        <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                          DESTACADO
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {opp.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{opp.description}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <MapPin size={16} />
                        <span>{opp.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                          <Calendar size={16} className="text-blue-600" />
                          <span>Cierra: {formatDeadline(opp.deadline)}</span>
                        </div>
                        {opp.amount !== '0' && (
                          <div className="text-sm font-bold text-green-600">
                            {opp.currency} {opp.amount}
                          </div>
                        )}
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {opp.topics.slice(0, 3).map(topic => (
                          <span key={topic} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {closingSoonOpportunities.length > 0 && !searchTerm && selectedType === 'Todos' && selectedCategory === 'Todos' && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <AlertCircle className="text-red-600" size={28} />
              <h2 className="text-3xl font-bold text-gray-900">Cierran Pronto</h2>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                ¡Aplica ya!
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {closingSoonOpportunities.slice(0, 3).map(opp => {
                const TypeIcon = getTypeIcon(opp.type);
                return (
                  <Link
                    key={opp.id}
                    to={`/oportunidades/${opp.id}`}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all group border-l-4 border-red-500"
                  >
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="bg-red-100 text-red-600 p-2 rounded-lg">
                          <TypeIcon size={18} />
                        </div>
                        <span className="text-sm font-semibold text-red-600">{getTypeLabel(opp.type)}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {opp.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">{opp.organization}</p>
                      <div className="flex items-center gap-2 text-sm font-semibold text-red-600">
                        <Calendar size={16} />
                        <span>{formatDeadline(opp.deadline)}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {guatemalaOpportunities.length > 0 && !searchTerm && selectedType === 'Todos' && selectedCategory === 'Todos' && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <MapPin className="text-green-600" size={28} />
              <h2 className="text-3xl font-bold text-gray-900">Oportunidades para Guatemala</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guatemalaOpportunities.slice(0, 6).map(opp => {
                const TypeIcon = getTypeIcon(opp.type);
                return (
                  <Link
                    key={opp.id}
                    to={`/oportunidades/${opp.id}`}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all group"
                  >
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                          <TypeIcon size={18} />
                        </div>
                        <span className="text-sm font-semibold text-green-600">{getTypeLabel(opp.type)}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {opp.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{opp.description}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <Calendar size={14} />
                        <span>{formatDeadline(opp.deadline)}</span>
                      </div>
                      {opp.amount !== '0' && (
                        <div className="text-sm font-bold text-green-600">
                          {opp.currency} {opp.amount}
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {civicTechOpportunities.length > 0 && !searchTerm && selectedType === 'Todos' && selectedCategory === 'Todos' && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <Zap className="text-purple-600" size={28} />
              <h2 className="text-3xl font-bold text-gray-900">Tecnología Cívica e Innovación Pública</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {civicTechOpportunities.slice(0, 6).map(opp => {
                const TypeIcon = getTypeIcon(opp.type);
                return (
                  <Link
                    key={opp.id}
                    to={`/oportunidades/${opp.id}`}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all group"
                  >
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="bg-purple-100 text-purple-600 p-2 rounded-lg">
                          <TypeIcon size={18} />
                        </div>
                        <span className="text-sm font-semibold text-purple-600">{getTypeLabel(opp.type)}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {opp.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{opp.description}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {opp.topics.filter(t => ['Civic Tech', 'Transparencia', 'Datos Abiertos', 'Innovación Pública'].includes(t)).slice(0, 2).map(topic => (
                          <span key={topic} className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">
                            {topic}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar size={14} />
                        <span>{formatDeadline(opp.deadline)}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              {searchTerm || selectedType !== 'Todos' || selectedCategory !== 'Todos'
                ? `Resultados (${filteredOpportunities.length})`
                : 'Todas las Oportunidades'}
            </h2>
          </div>

          {filteredOpportunities.length === 0 ? (
            <div className="text-center py-16">
              <AlertCircle className="mx-auto mb-4 text-gray-400" size={48} />
              <p className="text-gray-600 text-lg">No se encontraron oportunidades con los criterios seleccionados.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOpportunities.map(opp => {
                const TypeIcon = getTypeIcon(opp.type);
                return (
                  <Link
                    key={opp.id}
                    to={`/oportunidades/${opp.id}`}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all group"
                  >
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                            <TypeIcon size={18} />
                          </div>
                          <span className="text-sm font-semibold text-blue-600">{getTypeLabel(opp.type)}</span>
                        </div>
                        {opp.is_closing_soon && (
                          <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">
                            Urgente
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {opp.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">{opp.organization}</p>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{opp.description}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <MapPin size={14} />
                        <span>{opp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <Calendar size={14} />
                        <span>{formatDeadline(opp.deadline)}</span>
                      </div>
                      {opp.amount !== '0' && (
                        <div className="text-sm font-bold text-green-600 mb-3">
                          {opp.currency} {opp.amount}
                        </div>
                      )}
                      <div className="flex flex-wrap gap-1">
                        {opp.topics.slice(0, 3).map(topic => (
                          <span key={topic} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <Bell size={48} className="mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Recibe Alertas de Nuevas Oportunidades</h2>
            <p className="text-lg text-blue-100 mb-6">
              Suscríbete para recibir notificaciones semanales con las mejores oportunidades de financiamiento, capacitación y reconocimiento para tu organización o proyecto.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-8">
            <BookOpen size={48} className="mx-auto mb-4 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recursos y Consejos para Aplicar</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Aumenta tus probabilidades de éxito con estos recursos gratuitos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/oportunidades/recursos" className="group">
              <div className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-all">
                <BookOpen className="text-blue-600 mb-4" size={32} />
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  Guía de Aplicación
                </h3>
                <p className="text-gray-600 mb-4">
                  Paso a paso para escribir propuestas ganadoras y preparar tu aplicación.
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  Ver guía <ChevronRight size={16} />
                </div>
              </div>
            </Link>
            <Link to="/oportunidades/recursos" className="group">
              <div className="bg-green-50 rounded-xl p-6 hover:bg-green-100 transition-all">
                <Award className="text-green-600 mb-4" size={32} />
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600">
                  Casos de Éxito
                </h3>
                <p className="text-gray-600 mb-4">
                  Aprende de organizaciones que han obtenido financiamiento exitosamente.
                </p>
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  Ver casos <ChevronRight size={16} />
                </div>
              </div>
            </Link>
            <Link to="/oportunidades/recursos" className="group">
              <div className="bg-purple-50 rounded-xl p-6 hover:bg-purple-100 transition-all">
                <Users className="text-purple-600 mb-4" size={32} />
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600">
                  Plantillas y Herramientas
                </h3>
                <p className="text-gray-600 mb-4">
                  Descarga plantillas de presupuestos, cartas de intención y más.
                </p>
                <div className="flex items-center gap-2 text-purple-600 font-semibold">
                  Descargar <ChevronRight size={16} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesPage;
