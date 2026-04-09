import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Building2, Clock, DollarSign, Sparkles, TrendingUp, Briefcase, MapPin, FileText, AlertCircle, ArrowRight, CheckCircle2, Users, Target, Zap, BarChart3, Layers, Info, MousePointerClick, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { fetchTramites, Tramite } from '../lib/tramitesData';

export default function TramitesHomePage() {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [stats, setStats] = useState({
    total: 0,
    digitales: 0,
    instituciones: 0,
    categorias: 0
  });
  const [topTramites, setTopTramites] = useState<Tramite[]>([]);
  const [digitalesTramites, setDigitalesTramites] = useState<Tramite[]>([]);
  const [emprendedoresTramites, setEmprendedoresTramites] = useState<Tramite[]>([]);
  const [reportFormVisible, setReportFormVisible] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const tramites = await fetchTramites();

    const uniqueInstituciones = new Set(tramites.map(t => t.institucion));
    const uniqueCategorias = new Set(tramites.map(t => t.categoria));

    setStats({
      total: tramites.length,
      digitales: tramites.filter(t => t.nivel_digital === '100% Digital').length,
      instituciones: uniqueInstituciones.size,
      categorias: uniqueCategorias.size
    });

    setTopTramites(tramites.sort((a, b) => b.vistas - a.vistas).slice(0, 6));
    setDigitalesTramites(tramites.filter(t => t.nivel_digital === '100% Digital').slice(0, 6));
    setEmprendedoresTramites(tramites.filter(t => t.para_emprendedores).slice(0, 6));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `/tramites/explorar?q=${encodeURIComponent(searchQuery)}`;
  };

  const categorias = [
    { name: 'Empresarial', icon: Briefcase, count: 12, color: 'bg-teal-100 text-teal-700' },
    { name: 'Personal', icon: FileText, count: 8, color: 'bg-blue-100 text-blue-700' },
    { name: 'Vehicular', icon: MapPin, count: 5, color: 'bg-purple-100 text-purple-700' },
    { name: 'Salud', icon: AlertCircle, count: 3, color: 'bg-red-100 text-red-700' }
  ];

  const instituciones = [
    'SAT (Superintendencia de Administración Tributaria)',
    'Registro Mercantil',
    'RENAP (Registro Nacional de las Personas)',
    'Ministerio de Economía',
    'Municipalidad de Guatemala',
    'MINECO',
    'DGM (Dirección General de Migración)',
    'MSPAS (Ministerio de Salud)'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mapa de Trámites y Ventanillas Inteligentes
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Encuentra información clara sobre trámites públicos, requisitos, tiempos y costos.
              Una iniciativa de Red Ciudadana para facilitar el acceso a servicios del Estado.
            </p>
          </div>

          <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar trámites... (ej: registro mercantil, DPI, patente)"
                className="w-full pl-14 pr-4 py-5 rounded-xl text-gray-900 text-lg shadow-2xl focus:outline-none focus:ring-4 focus:ring-teal-300"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Buscar
              </button>
            </div>
          </form>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-4xl font-bold mb-2">{stats.total}</div>
              <div className="text-teal-100">Trámites</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-4xl font-bold mb-2">{stats.digitales}</div>
              <div className="text-teal-100">100% Digitales</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-4xl font-bold mb-2">{stats.instituciones}</div>
              <div className="text-teal-100">Instituciones</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
              <div className="text-4xl font-bold mb-2">{stats.categorias}</div>
              <div className="text-teal-100">Categorías</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <div className="bg-gradient-to-br from-white to-teal-50 rounded-2xl shadow-xl border border-teal-100 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-teal-600 p-3 rounded-xl">
                  <Info className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">¿Cómo funciona el Mapa de Trámites?</h2>
              </div>

              <p className="text-lg text-gray-700 mb-8 max-w-3xl">
                Tu guía completa para navegar trámites públicos en Guatemala de forma simple y transparente.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition group">
                  <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4 group-hover:scale-110 transition">
                    <span className="text-3xl font-bold text-teal-600">1</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Search className="h-5 w-5 text-teal-600" />
                    <h3 className="font-bold text-gray-900">Busca tu trámite</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Usa nuestro buscador o explora por categoría, institución o tipo de usuario
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition group">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:scale-110 transition">
                    <span className="text-3xl font-bold text-blue-600">2</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Eye className="h-5 w-5 text-blue-600" />
                    <h3 className="font-bold text-gray-900">Consulta detalles</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Revisa requisitos, pasos, costos, tiempos y nivel de digitalización
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition group">
                  <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 group-hover:scale-110 transition">
                    <span className="text-3xl font-bold text-green-600">3</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <MousePointerClick className="h-5 w-5 text-green-600" />
                    <h3 className="font-bold text-gray-900">Realiza tu trámite</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Accede directo al sitio oficial o visita la ventanilla con toda la información
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  ¿Qué tipo de usuario eres?
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link
                    to="/tramites/explorar?categoria=Personal"
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/20 transition group"
                  >
                    <FileText className="h-8 w-8 mb-3 text-teal-200" />
                    <h4 className="font-bold mb-2 group-hover:underline">Ciudadano</h4>
                    <p className="text-sm text-teal-100">DPI, pasaporte, partidas, licencias personales</p>
                  </Link>

                  <Link
                    to="/tramites/explorar?para_emprendedores=true"
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/20 transition group"
                  >
                    <Briefcase className="h-8 w-8 mb-3 text-teal-200" />
                    <h4 className="font-bold mb-2 group-hover:underline">Emprendedor</h4>
                    <p className="text-sm text-teal-100">Registro mercantil, patentes, licencias de negocio</p>
                  </Link>

                  <Link
                    to="/tramites/explorar?categoria=Empresarial"
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/20 transition group"
                  >
                    <Building2 className="h-8 w-8 mb-3 text-teal-200" />
                    <h4 className="font-bold mb-2 group-hover:underline">Empresa</h4>
                    <p className="text-sm text-teal-100">Impuestos, permisos, certificaciones corporativas</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Dashboard de Transformación Digital</h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Visualiza el estado actual de la digitalización de servicios públicos en Guatemala
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-teal-600" />
                </div>
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stats.total}</div>
              <div className="text-sm text-gray-600">Trámites Mapeados</div>
              <div className="mt-3 bg-gray-100 rounded-full h-2 overflow-hidden">
                <div className="bg-teal-600 h-full rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Sparkles className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full">
                  {Math.round((stats.digitales / stats.total) * 100)}%
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stats.digitales}</div>
              <div className="text-sm text-gray-600">100% Digitales</div>
              <div className="mt-3 bg-gray-100 rounded-full h-2 overflow-hidden">
                <div className="bg-green-600 h-full rounded-full" style={{ width: `${(stats.digitales / stats.total) * 100}%` }}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <BarChart3 className="h-5 w-5 text-blue-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stats.instituciones}</div>
              <div className="text-sm text-gray-600">Instituciones</div>
              <div className="mt-3 bg-gray-100 rounded-full h-2 overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Layers className="h-6 w-6 text-purple-600" />
                </div>
                <Target className="h-5 w-5 text-purple-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stats.categorias}</div>
              <div className="text-sm text-gray-600">Categorías</div>
              <div className="mt-3 bg-gray-100 rounded-full h-2 overflow-hidden">
                <div className="bg-purple-600 h-full rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Nivel de Digitalización por Categoría</h3>
            <div className="space-y-4">
              {[
                { name: 'Empresarial', digital: 45, parcial: 30, analogo: 25, color: 'teal' },
                { name: 'Personal', digital: 30, parcial: 40, analogo: 30, color: 'blue' },
                { name: 'Vehicular', digital: 20, parcial: 30, analogo: 50, color: 'purple' },
                { name: 'Construcción', digital: 10, parcial: 20, analogo: 70, color: 'orange' }
              ].map(cat => (
                <div key={cat.name}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-700">{cat.name}</span>
                    <span className="text-sm text-gray-500">{cat.digital}% digital</span>
                  </div>
                  <div className="flex h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="bg-green-500"
                      style={{ width: `${cat.digital}%` }}
                      title={`${cat.digital}% Digital`}
                    ></div>
                    <div
                      className="bg-blue-400"
                      style={{ width: `${cat.parcial}%` }}
                      title={`${cat.parcial}% Parcial`}
                    ></div>
                    <div
                      className="bg-gray-300"
                      style={{ width: `${cat.analogo}%` }}
                      title={`${cat.analogo}% Análogo`}
                    ></div>
                  </div>
                  <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Digital
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      Parcial
                    </span>
                    <span className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      Análogo
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Trámites Más Consultados</h2>
              <p className="text-gray-600">Los trámites que más buscan los ciudadanos</p>
            </div>
            <Link to="/tramites/explorar" className="text-teal-600 hover:text-teal-700 font-semibold flex items-center gap-2">
              Ver todos <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topTramites.map(tramite => (
              <TramiteCard key={tramite.id} tramite={tramite} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-teal-600" />
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Trámites 100% Digitales</h2>
                <p className="text-gray-600">Completa estos trámites desde casa, sin filas</p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalesTramites.map(tramite => (
              <TramiteCard key={tramite.id} tramite={tramite} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Briefcase className="h-8 w-8 text-teal-600" />
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Para Emprender</h2>
                <p className="text-gray-600">Trámites esenciales para iniciar tu negocio</p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emprendedoresTramites.map(tramite => (
              <TramiteCard key={tramite.id} tramite={tramite} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Explora por Categoría</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categorias.map(cat => (
              <Link
                key={cat.name}
                to={`/tramites/explorar?categoria=${encodeURIComponent(cat.name)}`}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition border border-gray-100"
              >
                <div className={`${cat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <cat.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{cat.name}</h3>
                <p className="text-gray-600 text-sm">{cat.count} trámites</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Instituciones Participantes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {instituciones.map(inst => (
              <Link
                key={inst}
                to={`/tramites/explorar?institucion=${encodeURIComponent(inst)}`}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition border border-gray-100 flex items-center gap-3"
              >
                <Building2 className="h-5 w-5 text-teal-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">{inst}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-primary">Transformación Digital del Estado</h2>
            <p className="text-lg mb-8 text-gray-800">
              Red Ciudadana trabaja para mapear y visibilizar el nivel de digitalización de los servicios públicos en Guatemala,
              promoviendo la transparencia y facilitando el acceso ciudadano a información sobre trámites del Estado.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2 text-gray-800">{Math.round((stats.digitales / stats.total) * 100)}%</div>
                <div className="text-gray-800">Digitalizados</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2 text-gray-800">{stats.instituciones}</div>
                <div className="text-gray-800">Instituciones</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2 text-gray-800">{stats.categorias}</div>
                <div className="text-gray-800">Áreas</div>
              </div>
            </div>
            <Link to="/tramites/recursos" className="inline-block bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition">
              Ver Recursos y Guías
            </Link>
          </div>
        </section>

        <section className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3">¿Encontraste información desactualizada?</h3>
              <p className="text-gray-700 mb-4">
                Ayúdanos a mantener este recurso actualizado. Si identificas datos incorrectos o desactualizados,
                repórtalo y contribuye a mejorar el acceso ciudadano a información confiable.
              </p>
              <button
                onClick={() => setReportFormVisible(!reportFormVisible)}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-semibold transition"
              >
                Reportar Información
              </button>

              {reportFormVisible && (
                <div className="mt-6 bg-white rounded-lg p-6 shadow-md border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-4">Formulario de Reporte</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Por favor, envía un correo a <a href="mailto:info@redciudadana.org" className="text-teal-600 font-semibold">info@redciudadana.org</a> con
                    la siguiente información:
                  </p>
                  <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                    <li>Nombre del trámite afectado</li>
                    <li>Tipo de error (requisitos, costo, tiempo, ubicación, etc.)</li>
                    <li>Información correcta actualizada</li>
                    <li>Fuente o enlace oficial (opcional)</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
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
      className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition border border-gray-100 group"
    >
      <div className="flex items-start justify-between mb-3">
        <span className={`text-xs px-3 py-1 rounded-full font-semibold ${getBadgeColor(tramite.nivel_digital)}`}>
          {tramite.nivel_digital}
        </span>
        {tramite.para_emprendedores && (
          <span className="text-xs px-3 py-1 rounded-full font-semibold bg-purple-100 text-purple-800">
            Para Emprender
          </span>
        )}
      </div>

      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition line-clamp-2">
        {tramite.nombre}
      </h3>

      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{tramite.descripcion}</p>

      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2 text-gray-700">
          <Building2 className="h-4 w-4 text-gray-400" />
          <span className="truncate">{tramite.institucion}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <Clock className="h-4 w-4 text-gray-400" />
          <span>{tramite.tiempo_estimado}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <DollarSign className="h-4 w-4 text-gray-400" />
          <span>{tramite.costo === 0 ? 'Gratuito' : `Q${tramite.costo.toFixed(2)}`}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-3 transition-all">
          Ver detalles <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}