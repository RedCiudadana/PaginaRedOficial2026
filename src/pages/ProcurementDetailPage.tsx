import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, DollarSign, Building2, MapPin, FileText, ExternalLink, Share2, Bookmark, Clock, Tag, CheckCircle, AlertCircle, Download } from 'lucide-react';
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

const ProcurementDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [procurement, setProcurement] = useState<Procurement | null>(null);
  const [related, setRelated] = useState<Procurement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProcurement();
  }, [id]);

  const fetchProcurement = async () => {
    try {
      setLoading(true);
      const data = await parseCSV('/data/public-procurement.csv');
      const proc = data.find((p: Procurement) => p.id === id);
      setProcurement(proc || null);

      if (proc) {
        const relatedProcs = data.filter((p: Procurement) =>
          p.id !== id &&
          p.status === 'abierto' &&
          (p.sector === proc.sector || p.institution === proc.institution)
        ).slice(0, 3);
        setRelated(relatedProcs);
      }
    } catch (error) {
      console.error('Error fetching procurement:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatAmount = (amount: string, currency: string) => {
    const num = parseFloat(amount);
    return `${currency} ${num.toLocaleString()}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-GT', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const getDaysUntilDeadline = (dateString: string) => {
    const deadline = new Date(dateString);
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!procurement) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Proceso no encontrado</h2>
          <Link to="/radar-compras/explorar" className="text-blue-600 hover:text-blue-700 font-semibold">
            Volver a explorar oportunidades
          </Link>
        </div>
      </div>
    );
  }

  const daysLeft = getDaysUntilDeadline(procurement.deadline_date);
  const isUrgent = daysLeft <= 7;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/radar-compras/explorar" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-4">
            <ArrowLeft size={20} />
            Volver a explorar oportunidades
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold text-sm">
                      {procurement.process_type}
                    </span>
                    {procurement.suitable_for_mipymes && (
                      <span className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-bold text-sm">
                        ✓ Apto para Mipymes
                      </span>
                    )}
                    {isUrgent && (
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">
                        CIERRA PRONTO
                      </span>
                    )}
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">{procurement.title}</h1>
                </div>
                <div className="flex gap-2">
                  <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    <Bookmark size={20} className="text-gray-600" />
                  </button>
                  <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                    <Share2 size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-start gap-3">
                  <Building2 className="text-blue-600 mt-1" size={24} />
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Institución compradora</div>
                    <div className="font-bold text-gray-900">{procurement.institution}</div>
                    <div className="text-sm text-gray-600">{procurement.institution_type}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <DollarSign className="text-green-600 mt-1" size={24} />
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Monto estimado</div>
                    <div className="font-bold text-green-600 text-2xl">
                      {formatAmount(procurement.amount, procurement.currency)}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="text-blue-600 mt-1" size={24} />
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Fecha límite</div>
                    <div className="font-bold text-gray-900">{formatDate(procurement.deadline_date)}</div>
                    <div className={`text-sm mt-1 ${isUrgent ? 'text-red-600 font-semibold' : 'text-gray-600'}`}>
                      {daysLeft > 0 ? `Faltan ${daysLeft} días` : 'Plazo vencido'}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-600 mt-1" size={24} />
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Ubicación</div>
                    <div className="font-bold text-gray-900">{procurement.location}</div>
                    <div className="text-sm text-gray-600">{procurement.department}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileText className="text-blue-600 mt-1" size={24} />
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Sector</div>
                    <div className="font-bold text-gray-900">{procurement.sector}</div>
                    <div className="text-sm text-gray-600">{procurement.category}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="text-blue-600 mt-1" size={24} />
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Fecha de publicación</div>
                    <div className="font-bold text-gray-900">{formatDate(procurement.publication_date)}</div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción del Proceso</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{procurement.description}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Requisitos Generales</h2>
                <div className="bg-blue-50 rounded-xl p-6">
                  <p className="text-gray-700 leading-relaxed">{procurement.requirements_summary}</p>
                </div>
              </div>

              {procurement.suitable_for_mipymes && (
                <div className="mb-8">
                  <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={24} />
                      <div>
                        <h3 className="font-bold text-green-900 mb-2">Oportunidad Apta para Mipymes</h3>
                        <p className="text-green-800">
                          Este proceso ha sido identificado como accesible para micro, pequeñas y medianas empresas debido a su monto, complejidad y tipo de adquisición. Te recomendamos revisar cuidadosamente los requisitos y plazos antes de participar.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Etiquetas</h2>
                <div className="flex flex-wrap gap-3">
                  {procurement.tags.map(tag => (
                    <span key={tag} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Documentos Disponibles</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <FileText className="text-blue-600" size={20} />
                      <span className="font-medium text-gray-900">Bases de licitación</span>
                    </div>
                    <Download className="text-gray-400" size={20} />
                  </button>
                  <button className="w-full flex items-center justify-between p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <FileText className="text-blue-600" size={20} />
                      <span className="font-medium text-gray-900">Especificaciones técnicas</span>
                    </div>
                    <Download className="text-gray-400" size={20} />
                  </button>
                  <button className="w-full flex items-center justify-between p-4 bg-white rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <FileText className="text-blue-600" size={20} />
                      <span className="font-medium text-gray-900">Formularios de participación</span>
                    </div>
                    <Download className="text-gray-400" size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white mb-8 sticky top-24">
              <div className="text-center mb-6">
                <Clock size={48} className="mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{daysLeft > 0 ? daysLeft : 0}</div>
                <div className="text-blue-100">días restantes para participar</div>
              </div>
              <a
                href={procurement.official_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-yellow-400 text-gray-900 px-6 py-4 rounded-xl font-bold text-center hover:bg-yellow-300 transition-all transform hover:scale-105 mb-4"
              >
                Ver en Guatecompras
                <ExternalLink className="inline ml-2" size={20} />
              </a>
              <button className="w-full bg-white/10 backdrop-blur-sm text-white border-2 border-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all mb-3">
                Guardar oportunidad
              </button>
              <button className="w-full bg-white/10 backdrop-blur-sm text-white border-2 border-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all">
                Recibir alertas similares
              </button>
            </div>

            {related.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Procesos Relacionados</h3>
                <div className="space-y-4">
                  {related.map(proc => (
                    <Link
                      key={proc.id}
                      to={`/radar-compras/proceso/${proc.id}`}
                      className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                    >
                      <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 line-clamp-2">
                        {proc.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">{proc.institution}</p>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1 text-gray-500">
                          <Calendar size={12} />
                          <span>{formatDate(proc.deadline_date)}</span>
                        </div>
                        <div className="font-semibold text-green-600">
                          {formatAmount(proc.amount, proc.currency)}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcurementDetailPage;
