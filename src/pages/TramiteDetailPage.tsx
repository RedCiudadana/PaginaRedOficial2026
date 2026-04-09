import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Building2, Clock, DollarSign, MapPin, ExternalLink, CheckCircle2, AlertCircle, ArrowRight, Sparkles, FileText, Briefcase } from 'lucide-react';
import { fetchTramiteById, fetchTramites, Tramite } from '../lib/tramitesData';

export default function TramiteDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [tramite, setTramite] = useState<Tramite | null>(null);
  const [relatedTramites, setRelatedTramites] = useState<Tramite[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadTramite(id);
    }
  }, [id]);

  const loadTramite = async (tramiteId: string) => {
    setLoading(true);

    const tramiteData = await fetchTramiteById(tramiteId);

    if (tramiteData) {
      setTramite(tramiteData);

      const allTramites = await fetchTramites();
      const related = allTramites
        .filter(t => t.categoria === tramiteData.categoria && t.id !== tramiteId)
        .slice(0, 3);

      setRelatedTramites(related);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  if (!tramite) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Trámite no encontrado</h2>
          <Link to="/tramites" className="text-teal-600 hover:text-teal-700 font-semibold">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const getBadgeColor = (nivel: string) => {
    switch (nivel) {
      case '100% Digital': return 'bg-green-100 text-green-800';
      case 'Parcialmente Digital': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-teal-100 mb-4 text-sm">
            <Link to="/tramites" className="hover:text-white transition">Trámites</Link>
            <span>/</span>
            <Link to="/tramites/explorar" className="hover:text-white transition">Explorar</Link>
            <span>/</span>
            <span>{tramite.nombre}</span>
          </div>

          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className={`text-sm px-4 py-1.5 rounded-full font-semibold ${getBadgeColor(tramite.nivel_digital)}`}>
                  {tramite.nivel_digital}
                </span>
                <span className="text-sm px-4 py-1.5 rounded-full font-semibold bg-white/20 backdrop-blur-sm border border-white/30">
                  {tramite.categoria}
                </span>
                {tramite.para_emprendedores && (
                  <span className="text-sm px-4 py-1.5 rounded-full font-semibold bg-purple-500/20 backdrop-blur-sm border border-purple-300/30 flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    Para Emprender
                  </span>
                )}
              </div>

              <h1 className="text-4xl font-bold mb-4">{tramite.nombre}</h1>
              <p className="text-xl text-teal-100">{tramite.descripcion}</p>
            </div>

            {tramite.nivel_digital === '100% Digital' && (
              <Sparkles className="h-12 w-12 text-teal-200 flex-shrink-0" />
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Información General</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Building2 className="h-6 w-6 text-teal-700" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Institución</div>
                    <div className="font-semibold text-gray-900">{tramite.institucion}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Tiempo estimado</div>
                    <div className="font-semibold text-gray-900">{tramite.tiempo_estimado}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <DollarSign className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Costo</div>
                    <div className="font-semibold text-gray-900">
                      {tramite.costo === 0 ? 'Gratuito' : `Q${tramite.costo.toFixed(2)}`}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-purple-700" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Modalidad</div>
                    <div className="font-semibold text-gray-900">{tramite.modalidad}</div>
                  </div>
                </div>
              </div>

              {tramite.ubicacion && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <div>
                      <div className="text-sm text-gray-600">Ubicación</div>
                      <div className="font-medium">{tramite.ubicacion}</div>
                      <div className="text-sm text-gray-500">{tramite.departamento}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {tramite.nivel_digital === '100% Digital' && (
              <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl shadow-md p-8 border border-green-200">
                <div className="flex items-start gap-4">
                  <Sparkles className="h-8 w-8 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Trámite 100% Digital</h3>
                    <p className="text-gray-700 mb-4">
                      Este trámite puede completarse completamente en línea, sin necesidad de acudir presencialmente.
                      Ahorra tiempo y evita filas realizándolo desde la comodidad de tu hogar.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-2 text-sm text-green-800 bg-green-100 px-3 py-1.5 rounded-lg">
                        <CheckCircle2 className="h-4 w-4" />
                        Sin filas
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green-800 bg-green-100 px-3 py-1.5 rounded-lg">
                        <CheckCircle2 className="h-4 w-4" />
                        Disponible 24/7
                      </div>
                      <div className="flex items-center gap-2 text-sm text-green-800 bg-green-100 px-3 py-1.5 rounded-lg">
                        <CheckCircle2 className="h-4 w-4" />
                        Desde casa
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {tramite.para_emprendedores && (
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-md p-8 border border-purple-200">
                <div className="flex items-start gap-4">
                  <Briefcase className="h-8 w-8 text-purple-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Esencial para Emprendedores</h3>
                    <p className="text-gray-700">
                      Este trámite es fundamental para iniciar o formalizar tu emprendimiento en Guatemala.
                      Forma parte de los pasos necesarios para establecer tu negocio legalmente.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Requisitos</h2>
              <div className="space-y-3">
                {tramite.requisitos.map((req, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Pasos a Seguir</h2>
              <div className="space-y-4">
                {tramite.pasos.map((paso, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-gray-700">{paso}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Información sujeta a cambios</h3>
                  <p className="text-gray-700 text-sm">
                    Los requisitos, costos y procedimientos pueden variar. Te recomendamos verificar la información
                    actualizada directamente con la institución antes de iniciar el trámite.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {tramite.url_oficial && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-gray-900 mb-4">Sitio Oficial</h3>
                <a
                  href={tramite.url_oficial}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Ir al sitio web
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            )}

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-gray-900 mb-4">Acciones</h3>
              <div className="space-y-3">
                <Link
                  to="/tramites/comparar"
                  className="flex items-center justify-center gap-2 w-full bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold transition"
                >
                  Comparar trámites
                </Link>
                <Link
                  to="/tramites/recursos"
                  className="flex items-center justify-center gap-2 w-full bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold transition"
                >
                  Ver guías y recursos
                </Link>
              </div>
            </div>

            {tramite.tags.length > 0 && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-gray-900 mb-4">Etiquetas</h3>
                <div className="flex flex-wrap gap-2">
                  {tramite.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 bg-teal-50 text-teal-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {relatedTramites.length > 0 && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-gray-900 mb-4">Trámites Relacionados</h3>
                <div className="space-y-3">
                  {relatedTramites.map(related => (
                    <Link
                      key={related.id}
                      to={`/tramites/${related.id}`}
                      className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition group"
                    >
                      <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-teal-600 transition line-clamp-2">
                        {related.nombre}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        {related.tiempo_estimado}
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
}