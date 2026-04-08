import { Link } from 'react-router-dom';
import { AlertCircle, Search, FileText, Briefcase, Clock, Eye, Building2 } from 'lucide-react';

export default function TramitesHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mapa de Trámites</h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Esta sección aún no está disponible con datos CSV. Se necesita un archivo de trámites en
              <code className="bg-white/10 rounded px-1 py-0.5">public/data/tramites.csv</code> para que funcione sin backend.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar trámites..."
                disabled
                className="w-full pl-14 pr-4 py-5 rounded-xl text-gray-400 text-lg shadow-2xl bg-white/20 border border-white/30"
              />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 max-w-4xl mx-auto border border-white/20">
            <div className="flex items-start gap-4">
              <div className="text-teal-600 mt-1">
                <AlertCircle className="h-10 w-10" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Trámites no disponibles por CSV</h2>
                <p className="text-teal-100 mb-4">
                  Esta sección depende de datos de trámites que no están incluidos en este repositorio.
                  Sin el CSV correspondiente, no es posible cargar la lista, detalles o comparador.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <Link
                    to="/tramites/recursos"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 px-6 py-4 text-white hover:bg-white/20 transition-all duration-200 hover:scale-105"
                  >
                    <FileText className="h-5 w-5" /> Ver recursos
                  </Link>
                  <Link
                    to="/oportunidades"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-teal-700 font-semibold hover:bg-teal-50 transition-all duration-200 hover:scale-105"
                  >
                    <Briefcase className="h-5 w-5" /> Ir a oportunidades
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-7 w-7 text-teal-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Sección de trámites</h3>
                    <p className="text-sm text-gray-600">Requiere datos en CSV para explorar trámites.</p>
                  </div>
                </div>
                <p className="text-gray-600">Puedes seguir usando las secciones de oportunidades y compras públicas mientras se añade el archivo de datos.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-7 w-7 text-teal-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Estado actual</h3>
                    <p className="text-sm text-gray-600">Sin datos CSV disponibles.</p>
                  </div>
                </div>
                <p className="text-gray-600">La aplicación no puede cargar trámites sin un origen de datos local.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="h-7 w-7 text-teal-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Próximos pasos</h3>
                    <p className="text-sm text-gray-600">Agregar un CSV de trámites para habilitar búsqueda y detalle.</p>
                  </div>
                </div>
                <p className="text-gray-600">Esto permitirá implementar el explorador, los detalles y el comparador con datos locales.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
