import { useState, useEffect } from 'react';
import { Search, X, Building2, Clock, DollarSign, MapPin, ArrowRight, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fetchTramites, Tramite } from '../lib/tramitesData';

export default function TramitesComparadorPage() {
  const [tramites, setTramites] = useState<Tramite[]>([]);
  const [selectedTramites, setSelectedTramites] = useState<Tramite[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Tramite[]>([]);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    loadTramites();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const results = tramites.filter(t =>
        t.nombre.toLowerCase().includes(query) ||
        t.institucion.toLowerCase().includes(query)
      ).slice(0, 5);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, tramites]);

  const loadTramites = async () => {
    const data = await fetchTramites();
    const sortedData = data.sort((a, b) => b.vistas - a.vistas);
    setTramites(sortedData);
  };

  const addTramite = (tramite: Tramite) => {
    if (selectedTramites.length < 3 && !selectedTramites.find(t => t.id === tramite.id)) {
      setSelectedTramites([...selectedTramites, tramite]);
      setSearchQuery('');
      setShowSearch(false);
    }
  };

  const removeTramite = (id: string) => {
    setSelectedTramites(selectedTramites.filter(t => t.id !== id));
  };

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
          <h1 className="text-4xl font-bold mb-4">Comparador de Trámites</h1>
          <p className="text-teal-100 text-lg">
            Compara hasta 3 trámites lado a lado para tomar mejores decisiones
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {selectedTramites.length < 3 && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                <Plus className="h-5 w-5" />
                Agregar trámite ({selectedTramites.length}/3)
              </button>
              <p className="text-gray-600">
                {selectedTramites.length === 0
                  ? 'Selecciona trámites para comenzar a comparar'
                  : `${3 - selectedTramites.length} espacio${3 - selectedTramites.length !== 1 ? 's' : ''} disponible${3 - selectedTramites.length !== 1 ? 's' : ''}`
                }
              </p>
            </div>

            {showSearch && (
              <div className="mt-6">
                <div className="relative mb-4">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar trámite para comparar..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    autoFocus
                  />
                </div>

                {searchResults.length > 0 && (
                  <div className="space-y-2">
                    {searchResults.map(tramite => (
                      <button
                        key={tramite.id}
                        onClick={() => addTramite(tramite)}
                        className="w-full text-left p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition"
                      >
                        <div className="font-semibold text-gray-900 mb-1">{tramite.nombre}</div>
                        <div className="text-sm text-gray-600">{tramite.institucion}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {selectedTramites.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-md">
            <div className="max-w-md mx-auto">
              <div className="bg-teal-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Comienza a comparar</h3>
              <p className="text-gray-600 mb-6">
                Agrega hasta 3 trámites para compararlos lado a lado y encontrar la mejor opción para ti
              </p>
              <button
                onClick={() => setShowSearch(true)}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Agregar primer trámite
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left p-6 font-semibold text-gray-900 w-48">Característica</th>
                    {selectedTramites.map(tramite => (
                      <th key={tramite.id} className="p-6 w-80">
                        <div className="text-left">
                          <div className="flex items-start justify-between gap-2 mb-3">
                            <h3 className="font-bold text-gray-900">{tramite.nombre}</h3>
                            <button
                              onClick={() => removeTramite(tramite.id)}
                              className="text-gray-400 hover:text-red-600 transition flex-shrink-0"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                          <Link
                            to={`/tramites/${tramite.id}`}
                            className="text-teal-600 hover:text-teal-700 text-sm font-normal flex items-center gap-1"
                          >
                            Ver detalles <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="p-6 font-semibold text-gray-700">Nivel Digital</td>
                    {selectedTramites.map(tramite => (
                      <td key={tramite.id} className="p-6">
                        <span className={`text-xs px-3 py-1.5 rounded-full font-semibold ${getBadgeColor(tramite.nivel_digital)}`}>
                          {tramite.nivel_digital}
                        </span>
                      </td>
                    ))}
                  </tr>

                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="p-6 font-semibold text-gray-700">Institución</td>
                    {selectedTramites.map(tramite => (
                      <td key={tramite.id} className="p-6">
                        <div className="flex items-center gap-2 text-gray-900">
                          <Building2 className="h-4 w-4 text-gray-400 flex-shrink-0" />
                          {tramite.institucion}
                        </div>
                      </td>
                    ))}
                  </tr>

                  <tr className="border-b border-gray-100">
                    <td className="p-6 font-semibold text-gray-700">Categoría</td>
                    {selectedTramites.map(tramite => (
                      <td key={tramite.id} className="p-6 text-gray-900">{tramite.categoria}</td>
                    ))}
                  </tr>

                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="p-6 font-semibold text-gray-700">Modalidad</td>
                    {selectedTramites.map(tramite => (
                      <td key={tramite.id} className="p-6 text-gray-900">{tramite.modalidad}</td>
                    ))}
                  </tr>

                  <tr className="border-b border-gray-100">
                    <td className="p-6 font-semibold text-gray-700">Tiempo Estimado</td>
                    {selectedTramites.map(tramite => (
                      <td key={tramite.id} className="p-6">
                        <div className="flex items-center gap-2 text-gray-900">
                          <Clock className="h-4 w-4 text-gray-400" />
                          {tramite.tiempo_estimado}
                        </div>
                      </td>
                    ))}
                  </tr>

                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="p-6 font-semibold text-gray-700">Costo</td>
                    {selectedTramites.map(tramite => (
                      <td key={tramite.id} className="p-6">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-gray-400" />
                          <span className={`font-bold ${tramite.costo === 0 ? 'text-green-700' : 'text-gray-900'}`}>
                            {tramite.costo === 0 ? 'Gratuito' : `Q${tramite.costo.toFixed(2)}`}
                          </span>
                        </div>
                      </td>
                    ))}
                  </tr>

                  <tr className="border-b border-gray-100">
                    <td className="p-6 font-semibold text-gray-700">Ubicación</td>
                    {selectedTramites.map(tramite => (
                      <td key={tramite.id} className="p-6">
                        {tramite.ubicacion ? (
                          <div className="flex items-start gap-2 text-gray-900">
                            <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0 mt-0.5" />
                            <div>
                              <div className="text-sm">{tramite.ubicacion}</div>
                              <div className="text-xs text-gray-500">{tramite.departamento}</div>
                            </div>
                          </div>
                        ) : (
                          <span className="text-gray-500">-</span>
                        )}
                      </td>
                    ))}
                  </tr>

                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td className="p-6 font-semibold text-gray-700">Para Emprendedores</td>
                    {selectedTramites.map(tramite => (
                      <td key={tramite.id} className="p-6">
                        {tramite.para_emprendedores ? (
                          <span className="text-xs px-3 py-1.5 rounded-full font-semibold bg-purple-100 text-purple-800">
                            Sí
                          </span>
                        ) : (
                          <span className="text-gray-500">No</span>
                        )}
                      </td>
                    ))}
                  </tr>

                  <tr className="border-b border-gray-100">
                    <td className="p-6 font-semibold text-gray-700">Requisitos</td>
                    {selectedTramites.map(tramite => (
                      <td key={tramite.id} className="p-6">
                        <div className="text-sm text-gray-700">
                          {tramite.requisitos.length} documento{tramite.requisitos.length !== 1 ? 's' : ''}
                        </div>
                      </td>
                    ))}
                  </tr>

                  <tr className="bg-gray-50">
                    <td className="p-6 font-semibold text-gray-700">Pasos</td>
                    {selectedTramites.map(tramite => (
                      <td key={tramite.id} className="p-6">
                        <div className="text-sm text-gray-700">
                          {tramite.pasos.length} paso{tramite.pasos.length !== 1 ? 's' : ''}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="mt-8 bg-teal-50 rounded-xl p-6 border border-teal-200">
          <h3 className="font-bold text-gray-900 mb-2">¿Necesitas ayuda para decidir?</h3>
          <p className="text-gray-700 mb-4">
            Visita nuestra sección de recursos para obtener guías detalladas sobre cómo elegir
            el trámite adecuado según tu situación.
          </p>
          <Link
            to="/tramites/recursos"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold"
          >
            Ver recursos y guías <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}