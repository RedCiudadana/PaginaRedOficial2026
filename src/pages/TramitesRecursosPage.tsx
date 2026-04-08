import { Link } from 'react-router-dom';
import { BookOpen, Lightbulb, FileText, HelpCircle, ExternalLink, CheckCircle2, AlertCircle, Briefcase, Building2 } from 'lucide-react';

export default function TramitesRecursosPage() {
  const guias = [
    {
      title: 'Cómo iniciar un negocio en Guatemala',
      description: 'Guía paso a paso con todos los trámites necesarios para emprender',
      icon: Briefcase,
      color: 'bg-purple-100 text-purple-700'
    },
    {
      title: 'Trámites digitales: Guía completa',
      description: 'Aprende a realizar trámites en línea de forma segura',
      icon: FileText,
      color: 'bg-green-100 text-green-700'
    },
    {
      title: 'Documentos personales esenciales',
      description: 'DPI, pasaporte y otros documentos de identidad',
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Trámites vehiculares',
      description: 'Registro, placas, licencias y más',
      icon: Building2,
      color: 'bg-teal-100 text-teal-700'
    }
  ];

  const consejos = [
    {
      title: 'Verifica los requisitos con anticipación',
      description: 'Consulta la lista completa antes de ir a la institución',
      icon: CheckCircle2
    },
    {
      title: 'Lleva copias certificadas cuando sea necesario',
      description: 'Muchos trámites requieren documentos autenticados',
      icon: FileText
    },
    {
      title: 'Confirma horarios de atención',
      description: 'Algunos trámites tienen horarios específicos',
      icon: AlertCircle
    },
    {
      title: 'Pregunta por la modalidad digital',
      description: 'Cada vez más trámites están disponibles en línea',
      icon: Lightbulb
    },
    {
      title: 'Guarda comprobantes',
      description: 'Conserva todos los recibos y documentos entregados',
      icon: FileText
    },
    {
      title: 'Consulta el tiempo estimado',
      description: 'Planifica con base en los tiempos de respuesta oficiales',
      icon: CheckCircle2
    }
  ];

  const faqs = [
    {
      question: '¿Qué es el Mapa de Trámites?',
      answer: 'Es una iniciativa de Red Ciudadana para centralizar información sobre trámites públicos en Guatemala, facilitando el acceso ciudadano a servicios del Estado con datos claros sobre requisitos, costos, tiempos y nivel de digitalización.'
    },
    {
      question: '¿La información está actualizada?',
      answer: 'Trabajamos constantemente para mantener la información actualizada, pero los procedimientos pueden cambiar. Te recomendamos verificar directamente con la institución correspondiente antes de iniciar tu trámite.'
    },
    {
      question: '¿Cómo reporto información incorrecta?',
      answer: 'Puedes reportar información desactualizada enviando un correo a info@redciudadana.org con el nombre del trámite y la corrección sugerida. Tu ayuda es valiosa para mantener este recurso útil.'
    },
    {
      question: '¿Puedo realizar los trámites digitales directamente aquí?',
      answer: 'No, este sitio es informativo. Te direccionamos a los sitios oficiales de cada institución donde puedes completar los trámites digitales de forma segura.'
    },
    {
      question: '¿Qué significa "100% Digital"?',
      answer: 'Indica que el trámite puede completarse completamente en línea, sin necesidad de acudir presencialmente a ninguna oficina.'
    },
    {
      question: '¿Por qué hay tan pocos trámites digitales?',
      answer: 'Guatemala está en proceso de transformación digital. Este mapa visibiliza el nivel actual de digitalización para impulsar mejoras y priorizar la modernización de servicios públicos.'
    }
  ];

  const instituciones = [
    {
      name: 'SAT - Superintendencia de Administración Tributaria',
      url: 'https://portal.sat.gob.gt/',
      description: 'NIT, facturas electrónicas, declaraciones'
    },
    {
      name: 'RENAP - Registro Nacional de las Personas',
      url: 'https://www.renap.gob.gt/',
      description: 'DPI, partidas de nacimiento, actas'
    },
    {
      name: 'Registro Mercantil',
      url: 'https://www.registromercantil.gob.gt/',
      description: 'Registro de empresas y sociedades'
    },
    {
      name: 'DGM - Dirección General de Migración',
      url: 'https://igm.gob.gt/',
      description: 'Pasaportes, visas, permisos de viaje'
    },
    {
      name: 'Ministerio de Economía',
      url: 'https://www.mineco.gob.gt/',
      description: 'Patentes de comercio, marcas, importaciones'
    },
    {
      name: 'MSPAS - Ministerio de Salud',
      url: 'https://www.mspas.gob.gt/',
      description: 'Licencias sanitarias, permisos de salud'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Recursos y Guías Prácticas</h1>
          <p className="text-teal-100 text-lg">
            Información útil para navegar el sistema de trámites públicos en Guatemala
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Guías Prácticas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guias.map((guia, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition border border-gray-100">
                <div className={`${guia.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <guia.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{guia.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{guia.description}</p>
                <button className="text-teal-600 hover:text-teal-700 font-semibold text-sm flex items-center gap-2">
                  Leer guía <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos Ciudadanos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consejos.map((consejo, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex items-start gap-4">
                  <consejo.icon className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{consejo.title}</h3>
                    <p className="text-sm text-gray-600">{consejo.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Preguntas Frecuentes</h2>
          <p className="text-gray-600 mb-8">Respuestas a las dudas más comunes sobre el Mapa de Trámites</p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-xl shadow-md border border-gray-100 group">
                <summary className="p-6 cursor-pointer hover:bg-gray-50 rounded-xl transition">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                    <h3 className="font-bold text-gray-900 flex-1">{faq.question}</h3>
                  </div>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-700 ml-10">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
          <div className="flex items-start gap-4 mb-6">
            <Briefcase className="h-8 w-8 text-purple-600 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Tips para Emprendedores</h2>
              <p className="text-gray-700 mb-4">
                Si estás iniciando un negocio, estos son los trámites esenciales en orden recomendado:
              </p>
            </div>
          </div>
          <div className="space-y-3 ml-12">
            <div className="flex items-start gap-3">
              <div className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
              <div>
                <div className="font-semibold text-gray-900">Registro de empresa (RTU) en SAT</div>
                <div className="text-sm text-gray-600">Obtén tu NIT empresarial</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
              <div>
                <div className="font-semibold text-gray-900">Registro Mercantil</div>
                <div className="text-sm text-gray-600">Inscribe tu empresa legalmente</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
              <div>
                <div className="font-semibold text-gray-900">Patente de comercio</div>
                <div className="text-sm text-gray-600">En la municipalidad correspondiente</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</div>
              <div>
                <div className="font-semibold text-gray-900">Licencias específicas</div>
                <div className="text-sm text-gray-600">Según tu actividad (sanitaria, ambiental, etc.)</div>
              </div>
            </div>
          </div>
          <div className="mt-6 ml-12">
            <Link to="/tramites/explorar?para_emprendedores=true" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition">
              Ver trámites para emprender
            </Link>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Enlaces a Instituciones Oficiales</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {instituciones.map((inst, index) => (
              <a
                key={index}
                href={inst.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition border border-gray-100 group"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <Building2 className="h-6 w-6 text-teal-600 flex-shrink-0" />
                    <h3 className="font-bold text-gray-900 group-hover:text-teal-600 transition">
                      {inst.name}
                    </h3>
                  </div>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-teal-600 transition flex-shrink-0" />
                </div>
                <p className="text-sm text-gray-600 ml-9">{inst.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Una iniciativa de Red Ciudadana</h2>
          <p className="text-lg text-teal-100 max-w-3xl mx-auto mb-8">
            Red Ciudadana trabaja por la transparencia, participación ciudadana y transformación digital del Estado.
            Este Mapa de Trámites es parte de nuestro compromiso por facilitar el acceso a información pública y
            mejorar la relación entre ciudadanía e instituciones.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/about" className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition">
              Conoce más sobre nosotros
            </Link>
            <Link to="/contact" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition">
              Contáctanos
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}