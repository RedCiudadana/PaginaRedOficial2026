import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, Building2, Calendar, DollarSign, Filter, AlertCircle, Bell, FileText, Users, Award, Briefcase, ShoppingCart, ChevronRight, Clock, MapPin, Target } from 'lucide-react';
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

const PublicProcurementPage = () => {
  const [procurements, setProcurements] = useState<Procurement[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetchProcurements();
  }, []);

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

  const formatAmount = (amount: string, currency: string) => {
    const num = parseFloat(amount);
    if (num >= 1000000) {
      return `${currency} ${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${currency} ${(num / 1000).toFixed(0)}K`;
    }
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

  const mipymeOpportunities = procurements.filter(p => p.suitable_for_mipymes);
  const closingSoon = procurements
    .filter(p => getDaysUntilDeadline(p.deadline_date) <= 14)
    .sort((a, b) => getDaysUntilDeadline(a.deadline_date) - getDaysUntilDeadline(b.deadline_date));

  const recentOpportunities = procurements
    .sort((a, b) => new Date(b.publication_date).getTime() - new Date(a.publication_date).getTime())
    .slice(0, 6);

  const sectors = [...new Set(procurements.map(p => p.sector))];
  const sectorCounts = sectors.map(sector => ({
    name: sector,
    count: procurements.filter(p => p.sector === sector).length
  })).sort((a, b) => b.count - a.count);

  const topInstitutions = [...new Set(procurements.map(p => p.institution))]
    .map(institution => ({
      name: institution,
      count: procurements.filter(p => p.institution === institution).length,
      type: procurements.find(p => p.institution === institution)?.institution_type || ''
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  const totalAmount = procurements.reduce((sum, p) => sum + parseFloat(p.amount), 0);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`¡Gracias! Te enviaremos alertas de oportunidades a ${email}`);
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
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <ShoppingCart size={20} />
              <span className="font-semibold">Una iniciativa de Red Ciudadana</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Radar de Compras Públicas para Mipymes
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
              Encuentra oportunidades de contratación pública, monitorea tendencias de compra del Estado y accede a información útil para participar mejor en los mercados públicos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/radar-compras/explorar"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Search size={20} />
                Explorar Oportunidades
              </Link>
              <Link
                to="/radar-compras/mipymes"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all flex items-center gap-2"
              >
                <Target size={20} />
                Oportunidades para Mipymes
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">{procurements.length}</div>
                <div className="text-blue-100 text-sm">Procesos Abiertos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">{mipymeOpportunities.length}</div>
                <div className="text-blue-100 text-sm">Aptas para Mipymes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">{closingSoon.length}</div>
                <div className="text-blue-100 text-sm">Cierran Pronto</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold mb-1">GTQ {(totalAmount / 1000000).toFixed(1)}M</div>
                <div className="text-blue-100 text-sm">Monto Total</div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="p-2 sm:p-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
                  <input
                    type="text"
                    placeholder="Buscar por institución, sector, palabra clave..."
                    className="w-full pl-14 pr-4 py-4 text-lg border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {closingSoon.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-red-100 p-3 rounded-lg">
                  <AlertCircle className="text-red-600" size={28} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Procesos que Cierran Pronto</h2>
                  <p className="text-gray-600">Oportunidades con fecha límite próxima</p>
                </div>
              </div>
              <Link to="/radar-compras/explorar" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
                Ver todas <ChevronRight size={20} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {closingSoon.slice(0, 6).map(proc => {
                const daysLeft = getDaysUntilDeadline(proc.deadline_date);
                return (
                  <Link
                    key={proc.id}
                    to={`/radar-compras/proceso/${proc.id}`}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all group border-l-4 border-red-500"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">
                          {proc.process_type}
                        </span>
                        {proc.suitable_for_mipymes && (
                          <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-1 rounded">
                            Mipyme
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {proc.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">{proc.institution}</p>
                      <div className="flex items-center gap-2 text-sm text-red-600 font-semibold mb-3">
                        <Clock size={16} />
                        <span>Cierra en {daysLeft} {daysLeft === 1 ? 'día' : 'días'}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="text-gray-600">{formatDate(proc.deadline_date)}</div>
                        <div className="font-bold text-green-600">{formatAmount(proc.amount, proc.currency)}</div>
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
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-3 rounded-lg">
                <Target className="text-green-600" size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Oportunidades para Mipymes</h2>
                <p className="text-gray-600">Procesos más accesibles para pequeñas y medianas empresas</p>
              </div>
            </div>
            <Link to="/radar-compras/mipymes" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
              Ver todas <ChevronRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mipymeOpportunities.slice(0, 6).map(proc => (
              <Link
                key={proc.id}
                to={`/radar-compras/proceso/${proc.id}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      {proc.process_type}
                    </span>
                    <span className="text-xs font-bold text-green-700 bg-green-100 px-3 py-1.5 rounded-lg">
                      ✓ Apto Mipyme
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {proc.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{proc.institution}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <MapPin size={14} />
                    <span>{proc.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">{proc.sector}</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{proc.category}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-gray-600">
                      <Calendar size={14} />
                      <span>{formatDate(proc.deadline_date)}</span>
                    </div>
                    <div className="font-bold text-green-600">{formatAmount(proc.amount, proc.currency)}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-lg">
                <FileText className="text-blue-600" size={28} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Licitaciones y Concursos Recientes</h2>
                <p className="text-gray-600">Procesos publicados recientemente</p>
              </div>
            </div>
            <Link to="/radar-compras/explorar" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2">
              Ver todas <ChevronRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentOpportunities.map(proc => (
              <Link
                key={proc.id}
                to={`/radar-compras/proceso/${proc.id}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all group"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {proc.process_type}
                      </span>
                      <span className="text-xs text-gray-500">{proc.institution_type}</span>
                    </div>
                    {proc.suitable_for_mipymes && (
                      <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-1 rounded">
                        Mipyme
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {proc.title}
                  </h3>
                  <p className="text-sm font-semibold text-gray-700 mb-3">{proc.institution}</p>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{proc.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">{proc.sector}</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{proc.category}</span>
                    <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{proc.department}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar size={14} />
                      <span>Cierra: {formatDate(proc.deadline_date)}</span>
                    </div>
                    <div className="font-bold text-green-600 text-lg">{formatAmount(proc.amount, proc.currency)}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-100 p-3 rounded-lg">
                <TrendingUp className="text-purple-600" size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Compras por Sector</h2>
                <p className="text-gray-600">Oportunidades organizadas por área</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="space-y-4">
                {sectorCounts.slice(0, 6).map(sector => (
                  <Link
                    key={sector.name}
                    to={`/radar-compras/sector/${sector.name}`}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                        <Briefcase className="text-blue-600" size={20} />
                      </div>
                      <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {sector.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
                        {sector.count}
                      </span>
                      <ChevronRight className="text-gray-400 group-hover:text-blue-600 transition-colors" size={20} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Building2 className="text-orange-600" size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Compras por Institución</h2>
                <p className="text-gray-600">Entidades con más procesos activos</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="space-y-4">
                {topInstitutions.map(inst => (
                  <Link
                    key={inst.name}
                    to={`/radar-compras/institucion/${encodeURIComponent(inst.name)}`}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors group"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="bg-orange-100 p-2 rounded-lg group-hover:bg-orange-200 transition-colors">
                        <Building2 className="text-orange-600" size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-1">
                          {inst.name}
                        </div>
                        <div className="text-xs text-gray-500">{inst.type}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">
                        {inst.count}
                      </span>
                      <ChevronRight className="text-gray-400 group-hover:text-orange-600 transition-colors" size={20} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <Bell size={48} className="mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Recibe Alertas de Nuevas Oportunidades</h2>
            <p className="text-lg text-blue-100 mb-6">
              Suscríbete para recibir notificaciones de procesos de contratación relevantes para tu empresa según sector, institución y monto de interés
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@empresa.com"
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

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <Users size={48} className="mx-auto mb-4 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Cómo Funciona?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              El Radar de Compras Públicas te ayuda a identificar y aprovechar oportunidades de negocio con el Estado
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Explora</h3>
              <p className="text-gray-600">
                Busca procesos de contratación por sector, institución, monto o ubicación que se ajusten a tu perfil empresarial
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Identifica</h3>
              <p className="text-gray-600">
                Revisa detalles, requisitos y fechas límite de cada oportunidad. Filtra por procesos aptos para Mipymes
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Participa</h3>
              <p className="text-gray-600">
                Accede al proceso oficial en Guatecompras y presenta tu oferta cumpliendo con los requisitos establecidos
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <FileText className="text-blue-600 flex-shrink-0" size={32} />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre esta Iniciativa</h2>
                <p className="text-gray-700 mb-4">
                  <strong>El Radar de Compras Públicas para Mipymes</strong> es una iniciativa de <strong>Red Ciudadana</strong> para acercar la información de compras públicas a más empresas, emprendimientos y ciudadanía, promoviendo mercados públicos más abiertos, transparentes y accesibles.
                </p>
                <p className="text-gray-700 mb-4">
                  Transformamos datos públicos de contrataciones del Estado en información clara, útil y accionable para que micro, pequeñas y medianas empresas puedan identificar oportunidades de negocio, conocer tendencias de compra y participar de forma más informada en procesos de contratación pública.
                </p>
                <p className="text-gray-700">
                  Esta plataforma forma parte del compromiso de Red Ciudadana con la transparencia, la innovación pública, el gobierno abierto y la inclusión económica en Guatemala.
                </p>
              </div>
            </div>
            <Link
              to="/radar-compras/recursos"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Recursos para Mipymes <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicProcurementPage;
