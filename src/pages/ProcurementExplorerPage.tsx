import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Calendar, DollarSign, MapPin, Building2, Target, X, ChevronDown } from 'lucide-react';
import { parseCSV } from '../lib/csvParser';

interface Procurement {
  id: string;
  title: string;
  institution: string;
  institution_type: string;
  description: string;
  amount: string;
  currency: string;
  publication_date: string;
  deadline_date: string;
  location: string;
  sector: string;
  category: string;
  process_type: string;
  status: string;
  suitable_for_mipymes: boolean;
  requirements_summary: string;
  official_url: string;
  tags: string[];
  department: string;
}

const ProcurementExplorerPage = () => {
  const [procurements, setProcurements] = useState<Procurement[]>([]);
  const [filtered, setFiltered] = useState<Procurement[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('Todos');
  const [selectedInstitutionType, setSelectedInstitutionType] = useState('Todos');
  const [selectedProcessType, setSelectedProcessType] = useState('Todos');
  const [selectedDepartment, setSelectedDepartment] = useState('Todos');
  const [onlyMipymes, setOnlyMipymes] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');

  useEffect(() => {
    fetchProcurements();
  }, []);

  useEffect(() => {
    filterProcurements();
  }, [procurements, searchTerm, selectedSector, selectedInstitutionType, selectedProcessType, selectedDepartment, onlyMipymes, minAmount, maxAmount]);

  const fetchProcurements = async () => {
    try {
      setLoading(true);
      const data = await parseCSV('/data/public-procurement.csv');
      setProcurements(data.filter((p: Procurement) => p.status === 'abierto'));
    } catch (error) {
      console.error('Error fetching procurements:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterProcurements = () => {
    let result = procurements;

    if (searchTerm) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedSector !== 'Todos') {
      result = result.filter(p => p.sector === selectedSector);
    }

    if (selectedInstitutionType !== 'Todos') {
      result = result.filter(p => p.institution_type === selectedInstitutionType);
    }

    if (selectedProcessType !== 'Todos') {
      result = result.filter(p => p.process_type === selectedProcessType);
    }

    if (selectedDepartment !== 'Todos') {
      result = result.filter(p => p.department === selectedDepartment);
    }

    if (onlyMipymes) {
      result = result.filter(p => p.suitable_for_mipymes);
    }

    if (minAmount) {
      result = result.filter(p => parseFloat(p.amount) >= parseFloat(minAmount));
    }

    if (maxAmount) {
      result = result.filter(p => parseFloat(p.amount) <= parseFloat(maxAmount));
    }

    setFiltered(result);
  };

  const formatAmount = (amount: string, currency: string) => {
    const num = parseFloat(amount);
    return `${currency} ${num.toLocaleString()}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-GT', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const getDaysUntilDeadline = (dateString: string) => {
    const deadline = new Date(dateString);
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const sectors = ['Todos', ...Array.from(new Set(procurements.map(p => p.sector)))];
  const institutionTypes = ['Todos', ...Array.from(new Set(procurements.map(p => p.institution_type)))];
  const processTypes = ['Todos', ...Array.from(new Set(procurements.map(p => p.process_type)))];
  const departments = ['Todos', ...Array.from(new Set(procurements.map(p => p.department)))];

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedSector('Todos');
    setSelectedInstitutionType('Todos');
    setSelectedProcessType('Todos');
    setSelectedDepartment('Todos');
    setOnlyMipymes(false);
    setMinAmount('');
    setMaxAmount('');
  };

  const activeFiltersCount = [
    searchTerm,
    selectedSector !== 'Todos',
    selectedInstitutionType !== 'Todos',
    selectedProcessType !== 'Todos',
    selectedDepartment !== 'Todos',
    onlyMipymes,
    minAmount,
    maxAmount
  ].filter(Boolean).length;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-gray-50">
      <div className="relative bg-gradient-to-br from-green-600 via-teal-600 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCAzOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full mb-6 border border-white/30 shadow-lg">
              <Target size={22} className="text-green-200" />
              <span className="font-bold text-white">Radar de Compras Públicas</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              Oportunidades de Compra Pública
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
              Conecta tu empresa con licitaciones y procesos de adquisición del Estado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl p-6 shadow-xl">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="bg-white/25 p-2 rounded-lg">
                  <Building2 size={24} className="text-white" />
                </div>
                <div className="text-3xl font-black text-white">{filtered.length}</div>
              </div>
              <div className="text-sm text-green-100 font-semibold">Procesos Abiertos</div>
            </div>
            <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl p-6 shadow-xl">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="bg-white/25 p-2 rounded-lg">
                  <DollarSign size={24} className="text-white" />
                </div>
                <div className="text-3xl font-black text-white">
                  {procurements.filter(p => p.suitable_for_mipymes).length}
                </div>
              </div>
              <div className="text-sm text-green-100 font-semibold">Para Mipymes</div>
            </div>
            <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl p-6 shadow-xl">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="bg-white/25 p-2 rounded-lg">
                  <Calendar size={24} className="text-white" />
                </div>
                <div className="text-3xl font-black text-white">
                  {procurements.filter(p => getDaysUntilDeadline(p.deadline_date) <= 7).length}
                </div>
              </div>
              <div className="text-sm text-green-100 font-semibold">Cierran Esta Semana</div>
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
                placeholder="Buscar por institución, sector, palabra clave..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition shadow-sm"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl hover:from-green-700 hover:to-teal-700 transition-all shadow-lg font-bold relative"
            >
              <Filter size={20} />
              Filtros Avanzados
              {activeFiltersCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white w-7 h-7 rounded-full text-xs flex items-center justify-center font-bold shadow-lg">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>

          {showFilters && (
            <div className="mt-6 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-black text-xl text-gray-900 flex items-center gap-2">
                  <Filter size={22} className="text-green-600" />
                  Filtros Avanzados
                </h3>
                {activeFiltersCount > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-bold flex items-center gap-2 shadow-md transition"
                  >
                    <X size={16} />
                    Limpiar ({activeFiltersCount})
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <Building2 size={16} className="text-green-600" />
                    Sector
                  </label>
                  <select
                    value={selectedSector}
                    onChange={(e) => setSelectedSector(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition bg-white shadow-sm"
                  >
                    {sectors.map(sector => (
                      <option key={sector} value={sector}>{sector}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <Target size={16} className="text-teal-600" />
                    Tipo de Institución
                  </label>
                  <select
                    value={selectedInstitutionType}
                    onChange={(e) => setSelectedInstitutionType(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition bg-white shadow-sm"
                  >
                    {institutionTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <ChevronDown size={16} className="text-blue-600" />
                    Tipo de Proceso
                  </label>
                  <select
                    value={selectedProcessType}
                    onChange={(e) => setSelectedProcessType(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition bg-white shadow-sm"
                  >
                    {processTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <MapPin size={16} className="text-red-600" />
                    Departamento
                  </label>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition bg-white shadow-sm"
                  >
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <DollarSign size={16} className="text-green-600" />
                    Monto Mínimo (GTQ)
                  </label>
                  <input
                    type="number"
                    value={minAmount}
                    onChange={(e) => setMinAmount(e.target.value)}
                    placeholder="0"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <DollarSign size={16} className="text-green-600" />
                    Monto Máximo (GTQ)
                  </label>
                  <input
                    type="number"
                    value={maxAmount}
                    onChange={(e) => setMaxAmount(e.target.value)}
                    placeholder="999999999"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition shadow-sm"
                  />
                </div>

                <div className="flex items-end">
                  <label className="flex items-center gap-3 cursor-pointer bg-green-50 px-4 py-3 rounded-xl border-2 border-green-200 hover:bg-green-100 transition w-full">
                    <input
                      type="checkbox"
                      checked={onlyMipymes}
                      onChange={(e) => setOnlyMipymes(e.target.checked)}
                      className="w-5 h-5 text-green-600 rounded focus:ring-2 focus:ring-green-500"
                    />
                    <span className="text-sm font-bold text-green-800">Solo para Mipymes</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <Target className="mx-auto mb-4 text-gray-400" size={64} />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No se encontraron procesos</h3>
            <p className="text-gray-600 mb-6">Intenta ajustar tus criterios de búsqueda o filtros</p>
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Limpiar todos los filtros
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(proc => {
              const daysLeft = getDaysUntilDeadline(proc.deadline_date);
              const isUrgent = daysLeft <= 7;

              return (
                <Link
                  key={proc.id}
                  to={`/radar-compras/proceso/${proc.id}`}
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all group border-2 ${isUrgent ? 'border-red-400' : 'border-gray-100 hover:border-green-300'} overflow-hidden`}
                >
                  {isUrgent && (
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1.5 text-xs font-bold text-center">
                      ⚠️ URGENTE - Cierra en {daysLeft} día{daysLeft !== 1 ? 's' : ''}
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4 gap-2 flex-wrap">
                      <span className="text-xs font-bold text-teal-700 bg-gradient-to-r from-teal-50 to-green-50 px-3 py-1.5 rounded-full border border-teal-200">
                        {proc.process_type}
                      </span>
                      {proc.suitable_for_mipymes && (
                        <span className="text-xs font-black text-white bg-gradient-to-r from-green-500 to-green-600 px-3 py-1.5 rounded-full shadow-md">
                          ✓ Mipyme
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-black text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2 leading-tight">
                      {proc.title}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3 bg-gray-50 px-3 py-2 rounded-lg">
                      <Building2 size={16} className="text-green-600 flex-shrink-0" />
                      <span className="line-clamp-1 font-semibold">{proc.institution}</span>
                    </div>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{proc.description}</p>

                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <MapPin size={14} className="text-gray-400" />
                      <span>{proc.location}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-bold">{proc.sector}</span>
                      <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-semibold">{proc.category}</span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar size={16} className={isUrgent ? 'text-red-600' : 'text-gray-600'} />
                        <span className={isUrgent ? 'text-red-600 font-black' : 'text-gray-600 font-semibold'}>
                          {isUrgent ? `${daysLeft} días` : formatDate(proc.deadline_date)}
                        </span>
                      </div>
                      <div className="font-black text-lg text-green-600">
                        {formatAmount(proc.amount, proc.currency)}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcurementExplorerPage;
