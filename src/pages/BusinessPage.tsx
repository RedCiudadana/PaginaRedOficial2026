import React, { useState } from 'react';
import { Building2, Shield, Users, Award, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Target, TrendingUp, Eye, Heart, Lightbulb, FileText, Globe, MessageSquare, Clock } from 'lucide-react';

const BusinessPage = () => {
  const [diagnosticAnswers, setDiagnosticAnswers] = useState({});
  const [diagnosticResult, setDiagnosticResult] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const whyRedCiudadana = [
    {
      icon: Award,
      title: 'Experiencia de +14 años',
      description: 'Líderes en transparencia y anticorrupción en Guatemala',
      color: 'text-blue-600',
      bgColor: 'bg-primary'
    },
    {
      icon: Target,
      title: 'Enfoque técnico e independiente',
      description: 'Soluciones basadas en evidencia y mejores prácticas internacionales',
      color: 'text-green-600',
      bgColor: 'bg-primary'
    },
    {
      icon: Building2,
      title: 'Adaptado a todo tamaño',
      description: 'Desde startups hasta corporaciones multinacionales',
      color: 'text-purple-600',
      bgColor: 'bg-primary'
    },
    {
      icon: Globe,
      title: 'Estándares internacionales',
      description: 'Cumplimiento con ESG, OCDE, OGP y marcos globales',
      color: 'text-orange-600',
      bgColor: 'bg-primary'
    },
    {
      icon: Users,
      title: 'Red de expertos',
      description: 'Alianzas con especialistas legales, digitales y sociales',
      color: 'text-indigo-600',
      bgColor: 'bg-primary'
    }
  ];

  const services = [
    {
      id: 'ethics',
      title: 'Ética y Compliance',
      icon: Shield,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-primary',
      textColor: 'text-blue-600',
      description: 'Fortalecemos la cultura ética y el cumplimiento normativo en tu organización.',
      features: [
        'Códigos de ética personalizados',
        'Capacitaciones especializadas',
        'Programas de integridad corporativa',
        'Evaluación de riesgos éticos'
      ]
    },
    {
      id: 'complaints',
      title: 'Mecanismos de Quejas y Consultas (MQC)',
      icon: MessageSquare,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-primary',
      textColor: 'text-green-600',
      description: 'Implementamos canales seguros y efectivos para la gestión de denuncias.',
      features: [
        'Canales de denuncia confidenciales',
        'Software SaaS especializado',
        'Protocolos de investigación',
        'Formación en recepción de casos'
      ]
    },
    {
      id: 'digital',
      title: 'Gobernanza Digital y Datos',
      icon: TrendingUp,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-primary',
      textColor: 'text-purple-600',
      description: 'Modernizamos tus procesos de gobernanza con tecnología avanzada.',
      features: [
        'Diagnóstico digital empresarial',
        'Sistemas de interoperabilidad',
        'Estrategias de datos abiertos',
        'Dashboards de transparencia'
      ]
    },
    {
      id: 'reputation',
      title: 'Reputación y Medios',
      icon: Eye,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-primary',
      textColor: 'text-orange-600',
      description: 'Protegemos y fortalecemos la reputación corporativa de tu empresa.',
      features: [
        'Media training ejecutivo',
        'Estrategias de transparencia proactiva',
        'Gestión de crisis reputacionales',
        'Comunicación de sostenibilidad'
      ]
    },
    {
      id: 'investment',
      title: 'Inversión Social Estratégica',
      icon: Heart,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-primary',
      textColor: 'text-red-600',
      description: 'Diseñamos programas de impacto social alineados con tu estrategia de negocio.',
      features: [
        'Co-creación con comunidades',
        'Evaluación de impacto social',
        'Programas de sostenibilidad',
        'Reportes de valor compartido'
      ]
    }
  ];

  const diagnosticQuestions = [
    {
      question: '¿Tu empresa tiene un código de ética vigente y conocido?',
      options: [
        'No tenemos código de ética',
        'Tenemos uno básico pero no se conoce bien',
        'Tenemos uno conocido parcialmente',
        'Tenemos uno bien conocido y aplicado',
        'Tenemos uno excelente, conocido y vivido por todos'
      ]
    },
    {
      question: '¿Existen canales confidenciales para reportar irregularidades?',
      options: [
        'No existen canales formales',
        'Solo canales informales (supervisor directo)',
        'Canal formal básico (email o teléfono)',
        'Canal formal con garantías de confidencialidad',
        'Múltiples canales seguros y bien promocionados'
      ]
    },
    {
      question: '¿Han capacitado al personal en temas de ética e integridad?',
      options: [
        'No hemos dado capacitaciones',
        'Capacitaciones muy básicas o esporádicas',
        'Capacitaciones regulares para algunos roles',
        'Capacitaciones sistemáticas para la mayoría',
        'Programa integral de formación ética continua'
      ]
    },
    {
      question: '¿Los reportes de irregularidades son gestionados con protocolos claros?',
      options: [
        'No tenemos protocolos definidos',
        'Protocolos muy básicos e informales',
        'Protocolos definidos pero no siempre seguidos',
        'Protocolos claros y generalmente seguidos',
        'Protocolos robustos, documentados y siempre aplicados'
      ]
    },
    {
      question: '¿Cuentan con responsables de cumplimiento o integridad?',
      options: [
        'No hay responsables designados',
        'Responsabilidad asignada informalmente',
        'Una persona con responsabilidad parcial',
        'Responsable designado con funciones claras',
        'Equipo especializado en compliance e integridad'
      ]
    },
    {
      question: '¿Protegen adecuadamente la identidad de denunciantes?',
      options: [
        'No hay protección específica',
        'Protección básica e informal',
        'Algunas medidas de protección',
        'Protección formal y documentada',
        'Protección integral con políticas anti-represalias'
      ]
    },
    {
      question: '¿Se reportan avances de ética al comité directivo?',
      options: [
        'No se reporta a la dirección',
        'Reportes muy esporádicos',
        'Reportes ocasionales cuando hay problemas',
        'Reportes regulares al comité directivo',
        'Reportes sistemáticos con métricas y planes de acción'
      ]
    },
    {
      question: '¿Tienen protocolos para denuncias falsas o acoso?',
      options: [
        'No tenemos protocolos específicos',
        'Protocolos muy básicos',
        'Protocolos definidos pero poco conocidos',
        'Protocolos claros y conocidos',
        'Protocolos integrales con prevención y respuesta'
      ]
    },
    {
      question: '¿Miden la cultura ética o clima de confianza regularmente?',
      options: [
        'No realizamos mediciones',
        'Mediciones muy esporádicas',
        'Mediciones ocasionales sin seguimiento',
        'Mediciones regulares con algunos ajustes',
        'Mediciones sistemáticas con planes de mejora'
      ]
    },
    {
      question: '¿La alta dirección promueve activamente una cultura ética?',
      options: [
        'No hay promoción activa',
        'Promoción muy limitada',
        'Promoción ocasional en eventos específicos',
        'Promoción regular con ejemplo y comunicación',
        'Liderazgo ético ejemplar y comunicación constante'
      ]
    }
  ];

  const successCases = [
    {
      company: 'Empresa Manufacturera',
      sector: 'Industria',
      result: 'Reducción del 78% en incidentes éticos',
      testimonial: 'Red Ciudadana nos ayudó a implementar un sistema robusto de compliance que transformó nuestra cultura organizacional.',
      metrics: ['78% menos incidentes', '95% satisfacción empleados', '100% casos resueltos']
    },
    {
      company: 'Grupo Financiero',
      sector: 'Servicios Financieros',
      result: 'Certificación internacional en gobernanza',
      testimonial: 'Su enfoque técnico y experiencia nos permitió obtener certificaciones internacionales y mejorar nuestra reputación.',
      metrics: ['Certificación ESG', '89% confianza stakeholders', '45% mejora reputacional']
    },
    {
      company: 'Corporación de Retail',
      sector: 'Comercio',
      result: 'Canal de denuncias 24/7 implementado',
      testimonial: 'El sistema de MQC que desarrollaron es intuitivo, seguro y ha mejorado significativamente nuestro ambiente laboral.',
      metrics: ['24/7 disponibilidad', '156 casos gestionados', '92% resolución efectiva']
    }
  ];

  const handleDiagnosticSubmit = () => {
    if (!userEmail) {
      setShowEmailForm(true);
      return;
    }

    const totalScore = Object.values(diagnosticAnswers).reduce((sum, value) => sum + (parseInt(value) + 1), 0);
    const maxScore = diagnosticQuestions.length * 5;
    const percentage = (totalScore / maxScore) * 100;

    let result;
    if (percentage <= 40) {
      result = {
        level: 'Básico',
        color: 'text-red-600',
        bgColor: 'bg-primary',
        chartColor: '#dc2626',
        percentage: Math.round(percentage),
        description: 'No hay mecanismos formales de ética empresarial.',
        recommendations: [
          'Desarrollar código de ética empresarial',
          'Implementar capacitaciones básicas',
          'Establecer canal de denuncias',
          'Designar responsable de compliance'
        ],
        priority: 'Alta',
        timeframe: '3-6 meses'
      };
    } else if (percentage <= 70) {
      result = {
        level: 'Intermedio',
        color: 'text-yellow-600',
        bgColor: 'bg-primary',
        chartColor: '#d97706',
        percentage: Math.round(percentage),
        description: 'Bases sólidas pero con riesgo reputacional.',
        recommendations: [
          'Fortalecer protocolos existentes',
          'Ampliar formación en MQC',
          'Mejorar gobernanza ética',
          'Implementar métricas de seguimiento'
        ],
        priority: 'Media',
        timeframe: '6-12 meses'
      };
    } else {
      result = {
        level: 'Avanzado',
        color: 'text-green-600',
        bgColor: 'bg-primary',
        chartColor: '#16a34a',
        percentage: Math.round(percentage),
        description: 'Madurez ética sólida y bien estructurada.',
        recommendations: [
          'Consolidar reputación ética',
          'Ampliar auditoría ética',
          'Fortalecer sostenibilidad',
          'Liderar mejores prácticas sectoriales'
        ],
        priority: 'Baja',
        timeframe: '12+ meses'
      };
    }

    // Calcular puntuaciones por área
    const areaScores = {
      'Códigos y Políticas': Math.round(((parseInt(diagnosticAnswers[0] || 0) + 1) / 5) * 100),
      'Canales de Denuncia': Math.round(((parseInt(diagnosticAnswers[1] || 0) + 1 + parseInt(diagnosticAnswers[5] || 0) + 1) / 10) * 100),
      'Capacitación': Math.round(((parseInt(diagnosticAnswers[2] || 0) + 1) / 5) * 100),
      'Gestión de Casos': Math.round(((parseInt(diagnosticAnswers[3] || 0) + 1 + parseInt(diagnosticAnswers[7] || 0) + 1) / 10) * 100),
      'Gobernanza': Math.round(((parseInt(diagnosticAnswers[4] || 0) + 1 + parseInt(diagnosticAnswers[6] || 0) + 1) / 10) * 100),
      'Cultura y Medición': Math.round(((parseInt(diagnosticAnswers[8] || 0) + 1 + parseInt(diagnosticAnswers[9] || 0) + 1) / 10) * 100)
    };

    result.areaScores = areaScores;
    setDiagnosticResult(result);
    setShowEmailForm(false);
  };

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setIsAnimating(true);
    setDiagnosticAnswers({
      ...diagnosticAnswers,
      [questionIndex]: answerIndex
    });
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  const nextQuestion = () => {
    if (currentQuestion < diagnosticQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const goToQuestion = (index) => {
    setCurrentQuestion(index);
  };

  const getProgressPercentage = () => {
    return ((Object.keys(diagnosticAnswers).length) / diagnosticQuestions.length) * 100;
  };

  const isQuestionAnswered = (index) => {
    return diagnosticAnswers.hasOwnProperty(index);
  };

  const CircularProgress = ({ percentage, color, size = 120 }) => {
    const radius = (size - 10) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-900">{percentage}%</span>
        </div>
      </div>
    );
  };

  const BarChart = ({ data, color }) => {
    const maxValue = Math.max(...Object.values(data));
    
    return (
      <div className="space-y-4">
        {Object.entries(data).map(([area, value]) => (
          <div key={area} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">{area}</span>
              <span className="text-sm font-bold text-gray-900">{value}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="h-3 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${value}%`,
                  backgroundColor: color
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-primary text-blue-300 px-6 py-3 rounded-full mb-6">
              <Building2 className="mr-2" size={20} />
              <span className="font-semibold">Servicios Empresariales</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Gobernanza ética para empresas con propósito
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 font-light leading-relaxed">
              Acompañamos a empresas a construir confianza, prevenir riesgos y fortalecer su reputación
            </p>

            <button className="bg-primary hover:bg-primary text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 text-lg">
              Realiza tu diagnóstico gratuito
            </button>
          </div>
        </div>
      </section>

      {/* Why Red Ciudadana */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              ¿Por qué Red Ciudadana?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos el aliado estratégico que tu empresa necesita para construir una cultura ética sólida
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {whyRedCiudadana.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className={item.color} size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Servicios para Empresas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluciones integrales adaptadas a las necesidades específicas de tu organización
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                      <service.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-white/90">{service.description}</p>
                </div>

                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className={`${service.textColor} mr-3 mt-0.5 flex-shrink-0`} size={16} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200`}>
                    Solicita una propuesta
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic Section */}
      <section id="diagnostico" className="py-12 lg:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full mb-6 shadow-lg">
              <Shield className="mr-2" size={20} />
              <span className="font-semibold">Diagnóstico Gratuito</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Diagnóstico de Madurez Ética Empresarial
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Completa este diagnóstico gratuito y recibe un informe profesional con el nivel de madurez ética 
              de tu empresa y recomendaciones personalizadas.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Clock className="text-blue-600" size={20} />
                </div>
                <div className="text-sm font-bold text-gray-900">5 minutos</div>
                <div className="text-xs text-gray-600">Tiempo estimado</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                  <FileText className="text-green-600" size={20} />
                </div>
                <div className="text-sm font-bold text-gray-900">Informe PDF</div>
                <div className="text-xs text-gray-600">Resultados detallados</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Target className="text-purple-600" size={20} />
                </div>
                <div className="text-sm font-bold text-gray-900">Plan de Acción</div>
                <div className="text-xs text-gray-600">Recomendaciones específicas</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8 border border-gray-200">
            {!diagnosticResult ? (
              <>
                {showEmailForm ? (
                  <div className="text-center space-y-6">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        ¡Excelente! Has completado el diagnóstico
                      </h3>
                      <p className="text-gray-600 max-w-xl mx-auto">
                        Para enviarte el informe completo con análisis detallado y recomendaciones personalizadas, 
                        necesitamos tu correo electrónico profesional.
                      </p>
                    </div>
                    
                    <div className="max-w-md mx-auto space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Tu informe incluirá:</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center">
                            <CheckCircle className="text-green-600 mr-2" size={16} />
                            <span>Nivel de madurez ética</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="text-green-600 mr-2" size={16} />
                            <span>Análisis por áreas</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="text-green-600 mr-2" size={16} />
                            <span>Plan de acción</span>
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="text-green-600 mr-2" size={16} />
                            <span>Benchmarking sectorial</span>
                          </div>
                        </div>
                      </div>
                      
                      <input
                        type="email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder="director@tuempresa.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() => setShowEmailForm(false)}
                          className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                          ← Volver al Diagnóstico
                        </button>
                        <button
                          onClick={handleDiagnosticSubmit}
                          disabled={!userEmail}
                          className="flex-1 bg-primary hover:bg-primary disabled:bg-gray-300 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200"
                        >
                          Generar Mi Informe →
                        </button>
                      </div>
                      
                      <p className="text-xs text-gray-500 text-center">
                        🔒 Tus datos están protegidos. No compartimos información con terceros.
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Progress Bar */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold text-gray-900">
                          Progreso del Diagnóstico
                        </span>
                        <span className="font-bold text-blue-600">
                          {Object.keys(diagnosticAnswers).length} de {diagnosticQuestions.length}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-primary h-3 rounded-full transition-all duration-500"
                          style={{ width: `${getProgressPercentage()}%` }}
                        ></div>
                      </div>
                      <div className="text-center mt-2">
                        <span className="text-sm text-gray-600">
                          {Math.round(getProgressPercentage())}% completado
                        </span>
                      </div>
                    </div>

                    {/* Question Navigation */}
                    <div className="mb-8">
                      <div className="flex flex-wrap gap-2 justify-center max-w-md mx-auto">
                        {diagnosticQuestions.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToQuestion(index)}
                            className={`w-8 h-8 rounded-lg text-sm font-bold transition-all duration-200 ${
                              index === currentQuestion
                                ? 'bg-primary text-white'
                                : isQuestionAnswered(index)
                                  ? 'bg-primary text-white'
                                  : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
                            }`}
                          >
                            {index + 1}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Current Question */}
                    <div className={`transition-opacity duration-200 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center bg-primary text-blue-800 px-4 py-2 rounded-full mb-4">
                          <span className="font-bold">
                            Pregunta {currentQuestion + 1} de {diagnosticQuestions.length}
                          </span>
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                          {diagnosticQuestions[currentQuestion].question}
                        </h3>
                      </div>

                      <div className="space-y-3 mb-8">
                        {diagnosticQuestions[currentQuestion].options.map((option, optionIndex) => (
                          <button
                            key={optionIndex}
                            onClick={() => handleAnswerSelect(currentQuestion, optionIndex)}
                            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                              diagnosticAnswers[currentQuestion] == optionIndex
                                ? 'border-blue-500 bg-primary'
                                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex items-start">
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 ${
                                diagnosticAnswers[currentQuestion] == optionIndex
                                  ? 'border-blue-500 bg-primary'
                                  : 'border-gray-300'
                              }`}>
                                {diagnosticAnswers[currentQuestion] == optionIndex && (
                                  <div className="w-2 h-2 bg-white rounded-full"></div>
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center mb-2">
                                  <span className="text-xs font-bold text-white bg-gray-500 px-2 py-1 rounded-full mr-2">
                                    Nivel {optionIndex + 1}
                                  </span>
                                </div>
                                <span className="text-gray-700 leading-relaxed">
                                  {option}
                                </span>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* Navigation Buttons */}
                      <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                        <button
                          onClick={prevQuestion}
                          disabled={currentQuestion === 0}
                          className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                        >
                          ← Anterior
                        </button>

                        <div className="text-center">
                          {isQuestionAnswered(currentQuestion) && (
                            <div className="inline-flex items-center text-green-700 bg-primary px-3 py-1 rounded-full text-sm font-semibold">
                              <CheckCircle size={16} className="mr-1" />
                              Respondida
                            </div>
                          )}
                        </div>

                        {currentQuestion < diagnosticQuestions.length - 1 ? (
                          <button
                            onClick={nextQuestion}
                            disabled={!isQuestionAnswered(currentQuestion)}
                            className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 font-semibold"
                          >
                            Siguiente →
                          </button>
                        ) : (
                          <button
                            onClick={handleDiagnosticSubmit}
                            disabled={Object.keys(diagnosticAnswers).length < diagnosticQuestions.length}
                            className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 font-semibold"
                          >
                            Finalizar Diagnóstico
                          </button>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : (

              <div className="space-y-6">
                {/* Header de Resultados */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="text-green-600" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Resultados de tu Diagnóstico
                  </h3>
                  <p className="text-gray-600">
                    Hemos enviado un reporte detallado a <strong>{userEmail}</strong>
                  </p>
                </div>

                {/* Puntuación General */}
                <div className={`${diagnosticResult.bgColor} rounded-xl p-6`}>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="text-center">
                      <CircularProgress 
                        percentage={diagnosticResult.percentage} 
                        color={diagnosticResult.chartColor}
                        size={120}
                      />
                      <div className={`text-xl font-bold ${diagnosticResult.color} mt-3`}>
                        Nivel {diagnosticResult.level}
                      </div>
                      <p className="text-gray-700 mt-2 text-sm">{diagnosticResult.description}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg text-sm">
                        <span className="font-medium text-gray-700">Prioridad de Acción:</span>
                        <span className={`font-bold ${
                          diagnosticResult.priority === 'Alta' ? 'text-red-600' :
                          diagnosticResult.priority === 'Media' ? 'text-yellow-600' : 'text-green-600'
                        }`}>
                          {diagnosticResult.priority}
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg text-sm">
                        <span className="font-medium text-gray-700">Tiempo Estimado:</span>
                        <span className="font-bold text-gray-900">{diagnosticResult.timeframe}</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg text-sm">
                        <span className="font-medium text-gray-700">Puntuación General:</span>
                        <span className="font-bold text-gray-900">{diagnosticResult.percentage}/100</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Puntuación por Áreas */}
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
                    Puntuación por Áreas de Evaluación
                  </h4>
                  <BarChart data={diagnosticResult.areaScores} color={diagnosticResult.chartColor} />
                </div>

                {/* Recomendaciones */}
                <div className="bg-gray-50 rounded-xl p-5">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Recomendaciones Prioritarias</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {diagnosticResult.recommendations.map((rec, index) => (
                      <div key={index} className="flex items-start bg-white rounded-lg p-3">
                        <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                          <span className="text-blue-600 font-bold text-xs">{index + 1}</span>
                        </div>
                        <span className="text-gray-700 text-sm">{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="bg-primary rounded-xl p-6 text-white text-center">
                  <h4 className="text-xl font-bold mb-3">¿Listo para el siguiente paso?</h4>
                  <p className="text-blue-100 mb-4 max-w-xl mx-auto text-sm">
                    Nuestros expertos pueden ayudarte a implementar las mejoras necesarias 
                    para fortalecer la ética y gobernanza de tu empresa.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary transition-colors duration-200">
                      Solicitar Consultoría Personalizada
                    </button>
                    <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
                      Descargar Reporte Completo
                    </button>
                  </div>
                </div>

                {/* Botón para nuevo diagnóstico */}
                <div className="text-center pt-2">
                  <button
                    onClick={() => {
                      setDiagnosticResult(null);
                      setDiagnosticAnswers({});
                      setUserEmail('');
                      setShowEmailForm(false);
                      setCurrentQuestion(0);
                    }}
                    className="text-blue-600 hover:text-blue-700 text-sm transition-colors duration-200"
                  >
                    ← Realizar nuevo diagnóstico
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Casos de Éxito
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empresas que han transformado su cultura ética con nuestro acompañamiento
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successCases.map((case_, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mr-4">
                    <Building2 className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{case_.company}</h3>
                    <p className="text-gray-600 text-sm">{case_.sector}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-green-600 mb-2">{case_.result}</div>
                  <p className="text-gray-700 italic">"{case_.testimonial}"</p>
                </div>

                <div className="space-y-2">
                  {case_.metrics.map((metric, metricIndex) => (
                    <div key={index} className="border-b border-gray-100 pb-6">
                      <Star className="text-yellow-500 mr-2" size={16} />
                      <span className="text-gray-700 text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Lightbulb className="mr-3" size={32} />
              <h2 className="text-3xl lg:text-4xl font-bold">Academia de Gobernanza Empresarial</h2>
            </div>
            
            <p className="text-xl text-blue-100 mb-8">
              Plataforma de formación especializada para empresas aliadas con cursos, certificaciones 
              y recursos exclusivos en ética, compliance y gobernanza corporativa.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-blue-100">Cursos Especializados</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Ejecutivos Certificados</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-blue-100">Satisfacción</div>
              </div>
            </div>

            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary transition-colors duration-200">
              Acceder a la Academia
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Contáctanos
            </h2>
            <p className="text-xl text-gray-600">
              Solicita una propuesta personalizada para tu empresa
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cargo *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu cargo en la empresa"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+502 0000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="tu@empresa.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Servicios de interés
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <label key={service.id} className="flex items-center">
                      <input type="checkbox" className="mr-3" />
                      <span className="text-gray-700">{service.title}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comentario adicional
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Cuéntanos más sobre tus necesidades específicas..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
                >
                  Solicitar propuesta personalizada
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessPage;