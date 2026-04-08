import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Download, FileText, CheckCircle, Lightbulb, Users, Target, TrendingUp, Award, ShieldCheck, AlertCircle } from 'lucide-react';

const ProcurementResourcesPage = () => {
  const guides = [
    {
      title: 'Cómo registrarse en Guatecompras',
      description: 'Guía paso a paso para crear tu cuenta y registrar tu empresa como proveedor del Estado.',
      icon: FileText,
      color: 'blue'
    },
    {
      title: 'Entendiendo los tipos de procesos de compra',
      description: 'Conoce las diferencias entre cotización, licitación y compra directa.',
      icon: Target,
      color: 'green'
    },
    {
      title: 'Cómo preparar una oferta competitiva',
      description: 'Elementos clave para estructurar una propuesta técnica y económica ganadora.',
      icon: TrendingUp,
      color: 'purple'
    },
    {
      title: 'Garantías y fianzas en contratación pública',
      description: 'Todo lo que necesitas saber sobre garantías de participación y cumplimiento.',
      icon: ShieldCheck,
      color: 'yellow'
    }
  ];

  const tips = [
    {
      icon: CheckCircle,
      title: 'Lee todo el pliego de condiciones',
      description: 'Asegúrate de comprender todos los requisitos técnicos, económicos y legales antes de participar.'
    },
    {
      icon: Users,
      title: 'Mantén tu documentación actualizada',
      description: 'Ten al día tus certificaciones, patentes, solvencias fiscales y estados financieros.'
    },
    {
      icon: Lightbulb,
      title: 'Participa en procesos acordes a tu capacidad',
      description: 'Enfócate en oportunidades que coincidan con tu experiencia, tamaño y recursos.'
    },
    {
      icon: Target,
      title: 'Cumple estrictamente con plazos y formatos',
      description: 'Las ofertas fuera de tiempo o que no cumplen formatos son descalificadas automáticamente.'
    },
    {
      icon: TrendingUp,
      title: 'Analiza precios de referencia',
      description: 'Investiga precios de mercado y procesos anteriores para hacer ofertas competitivas y realistas.'
    },
    {
      icon: AlertCircle,
      title: 'Consulta dudas antes de ofertar',
      description: 'Usa los mecanismos oficiales de junta de aclaraciones para resolver cualquier duda.'
    }
  ];

  const faqs = [
    {
      question: '¿Qué es Guatecompras?',
      answer: 'Guatecompras es el Sistema de Información de Contrataciones y Adquisiciones del Estado de Guatemala. Es la plataforma oficial donde las entidades públicas publican sus procesos de compra y los proveedores pueden participar.'
    },
    {
      question: '¿Quién puede vender al Estado?',
      answer: 'Cualquier persona individual o jurídica debidamente registrada puede participar en procesos de contratación pública. Es necesario estar inscrito en Guatecompras y cumplir con los requisitos específicos de cada proceso.'
    },
    {
      question: '¿Cuáles son los tipos de procesos de compra?',
      answer: 'Los principales son: Licitación Pública (montos mayores), Cotización (montos intermedios), y Compra Directa (montos menores). Cada modalidad tiene requisitos y procedimientos específicos.'
    },
    {
      question: '¿Qué documentos necesito para participar?',
      answer: 'Generalmente necesitas: constancia de estar al día con obligaciones tributarias (RTU), declaración jurada de no estar inhabilitado, garantía de participación, propuesta técnica y económica, y otros documentos según el proceso específico.'
    },
    {
      question: '¿Las Mipymes tienen ventajas en compras públicas?',
      answer: 'Sí. La Ley de Compras y Contrataciones establece mecanismos para promover la participación de Mipymes, como procesos exclusivos, criterios de evaluación especiales y posibilidad de asociarse entre varias empresas pequeñas.'
    },
    {
      question: '¿Puedo participar en procesos de cualquier departamento?',
      answer: 'Sí, en general puedes participar en procesos de cualquier parte del país. Sin embargo, algunos procesos pueden requerir presencia local o establecer zonas de entrega específicas.'
    }
  ];

  const successTips = [
    'Comienza con procesos pequeños para ganar experiencia',
    'Forma alianzas con otras Mipymes para procesos más grandes',
    'Mantén buenos antecedentes de cumplimiento',
    'Especialízate en nichos donde tengas ventaja competitiva',
    'Participa en capacitaciones sobre contratación pública',
    'Monitorea constantemente nuevas oportunidades'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/radar-compras" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-4">
            <ArrowLeft size={20} />
            Volver al Radar
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen size={64} className="mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Recursos para Mipymes
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            Guías, consejos y herramientas para participar exitosamente en compras públicas
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Guías y Tutoriales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide, index) => {
              const Icon = guide.icon;
              const colorClasses = {
                blue: 'bg-blue-100 text-blue-600',
                green: 'bg-green-100 text-green-600',
                purple: 'bg-purple-100 text-purple-600',
                yellow: 'bg-yellow-100 text-yellow-600'
              };
              return (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
                  <div className={`${colorClasses[guide.color as keyof typeof colorClasses]} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.title}</h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2">
                    Leer guía <Download size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Consejos Clave</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-md p-6">
                  <Icon className="text-green-600 mb-4" size={32} />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Preguntas Frecuentes</h2>
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="pb-6 border-b border-gray-200 last:border-0 last:pb-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Tips para el Éxito</h2>
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {successTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center mb-16">
          <Users size={48} className="mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">¿Necesitas Asesoría Especializada?</h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            Red Ciudadana ofrece acompañamiento técnico para organizaciones y empresas que buscan fortalecer su participación en compras públicas y promover la transparencia en contrataciones del Estado.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors"
          >
            Solicitar asesoría
          </Link>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <FileText className="text-blue-600 flex-shrink-0" size={32} />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Enlaces Útiles</h2>
              <div className="space-y-3">
                <a
                  href="https://www.guatecompras.gt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-700 font-semibold"
                >
                  → Portal oficial Guatecompras
                </a>
                <a
                  href="https://www.guatecompras.gt/info/GuiaProveedores.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-700 font-semibold"
                >
                  → Guía para proveedores
                </a>
                <a
                  href="https://www.guatecompras.gt/concursos/consultaConcurso.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-700 font-semibold"
                >
                  → Consulta de procesos
                </a>
                <a
                  href="https://www.guatecompras.gt/proveedores/menuProveedores.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-700 font-semibold"
                >
                  → Registro de proveedores
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcurementResourcesPage;
