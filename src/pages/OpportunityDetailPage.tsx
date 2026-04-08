import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, DollarSign, Building, Globe, Tag, ExternalLink, ArrowLeft, Share2, Bookmark, Clock, Users, CheckCircle } from 'lucide-react';
import { parseCSV } from '../lib/csvParser';

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

const OpportunityDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [opportunity, setOpportunity] = useState<Opportunity | null>(null);
  const [relatedOpportunities, setRelatedOpportunities] = useState<Opportunity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOpportunity();
  }, [id]);

  const fetchOpportunity = async () => {
    try {
      setLoading(true);
      const data = await parseCSV('/data/opportunities.csv');
      const opp = data.find((o: Opportunity) => o.id === id);
      setOpportunity(opp || null);

      if (opp) {
        const related = data.filter((o: Opportunity) =>
          o.id !== id &&
          o.status === 'open' &&
          (o.type === opp.type || o.topics.some(t => opp.topics.includes(t)))
        ).slice(0, 3);
        setRelatedOpportunities(related);
      }
    } catch (error) {
      console.error('Error fetching opportunity:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDeadline = (dateString: string) => {
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

  const getTypeLabel = (type: string) => {
    const labels: { [key: string]: string } = {
      grant: 'Grant / Financiamiento',
      fellowship: 'Fellowship / Beca',
      consultancy: 'Consultoría',
      accelerator: 'Aceleradora',
      award: 'Premio',
      hackathon: 'Hackathon',
      training: 'Curso / Capacitación',
      research: 'Investigación'
    };
    return labels[type] || type;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!opportunity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Oportunidad no encontrada</h2>
          <Link to="/oportunidades" className="text-blue-600 hover:text-blue-700 font-semibold">
            Volver a oportunidades
          </Link>
        </div>
      </div>
    );
  }

  const daysLeft = getDaysUntilDeadline(opportunity.deadline);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/oportunidades" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-4">
            <ArrowLeft size={20} />
            Volver a oportunidades
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
                      {getTypeLabel(opportunity.type)}
                    </span>
                    {opportunity.featured && (
                      <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                        DESTACADO
                      </span>
                    )}
                    {opportunity.is_closing_soon && (
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">
                        CIERRA PRONTO
                      </span>
                    )}
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">{opportunity.title}</h1>
                  <div className="flex items-center gap-2 text-lg text-gray-600 mb-4">
                    <Building size={20} />
                    <span>{opportunity.organization}</span>
                  </div>
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
                  <Calendar className="text-blue-600 mt-1" size={24} />
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Fecha límite</div>
                    <div className="font-bold text-gray-900">{formatDeadline(opportunity.deadline)}</div>
                    <div className={`text-sm mt-1 ${daysLeft <= 7 ? 'text-red-600 font-semibold' : 'text-gray-600'}`}>
                      {daysLeft > 0 ? `Faltan ${daysLeft} días` : 'Plazo vencido'}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-600 mt-1" size={24} />
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Ubicación</div>
                    <div className="font-bold text-gray-900">{opportunity.location}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      {opportunity.regions.join(', ')}
                    </div>
                  </div>
                </div>

                {opportunity.amount !== '0' && (
                  <div className="flex items-start gap-3">
                    <DollarSign className="text-green-600 mt-1" size={24} />
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Monto</div>
                      <div className="font-bold text-green-600 text-xl">
                        {opportunity.currency} {opportunity.amount}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <Globe className="text-blue-600 mt-1" size={24} />
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Categoría</div>
                    <div className="font-bold text-gray-900 capitalize">{opportunity.category}</div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Descripción</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{opportunity.description}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Temas</h2>
                <div className="flex flex-wrap gap-3">
                  {opportunity.topics.map(topic => (
                    <span key={topic} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Requisitos generales</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Organización legalmente constituida o persona natural según tipo de oportunidad</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Proyecto alineado con los temas y regiones especificadas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Cumplir con la fecha límite de aplicación</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-gray-700">Documentación completa según los requerimientos del convocante</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white mb-8 sticky top-24">
              <div className="text-center mb-6">
                <Clock size={48} className="mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{daysLeft > 0 ? daysLeft : 0}</div>
                <div className="text-blue-100">días restantes para aplicar</div>
              </div>
              <a
                href={opportunity.application_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-yellow-400 text-gray-900 px-6 py-4 rounded-xl font-bold text-center hover:bg-yellow-300 transition-all transform hover:scale-105 mb-4"
              >
                Aplicar Ahora
                <ExternalLink className="inline ml-2" size={20} />
              </a>
              <button className="w-full bg-white/10 backdrop-blur-sm text-white border-2 border-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all">
                Guardar oportunidad
              </button>
            </div>

            {relatedOpportunities.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Oportunidades relacionadas</h3>
                <div className="space-y-4">
                  {relatedOpportunities.map(opp => (
                    <Link
                      key={opp.id}
                      to={`/oportunidades/${opp.id}`}
                      className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                    >
                      <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 line-clamp-2">
                        {opp.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">{opp.organization}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar size={14} />
                        <span>{formatDeadline(opp.deadline)}</span>
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

export default OpportunityDetailPage;
