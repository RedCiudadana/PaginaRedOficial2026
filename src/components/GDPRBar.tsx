import React, { useState, useEffect } from 'react';
import { X, Shield, Cookie, Eye } from 'lucide-react';

const GDPRBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gdpr-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gdpr-consent', 'accepted');
    localStorage.setItem('gdpr-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('gdpr-consent', 'rejected');
    localStorage.setItem('gdpr-consent-date', new Date().toISOString());
    setIsVisible(false);
  };

  const handleCustomize = () => {
    setShowDetails(!showDetails);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!showDetails ? (
          // Main GDPR Notice
          <div className="py-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex items-start lg:items-center gap-3 flex-1">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1 lg:mt-0">
                  <Shield className="text-blue-600" size={16} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Protección de Datos Personales
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Utilizamos cookies y tecnologías similares para mejorar tu experiencia, 
                    analizar el tráfico del sitio y personalizar el contenido. Al continuar navegando, 
                    aceptas nuestra <a href="/contacto" className="text-blue-600 hover:underline">Política de Privacidad</a> y 
                    el tratamiento de tus datos conforme a la normativa guatemalteca de protección de datos.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 lg:flex-shrink-0">
                <button
                  onClick={handleCustomize}
                  className="px-4 py-2 text-sm font-medium bg-white text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Personalizar
                </button>
                <button
                  onClick={handleReject}
                  className="px-4 py-2 text-sm font-medium bg-white text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Rechazar
                </button>
                <button
                  onClick={handleAccept}
                  className="px-6 py-2 text-sm font-medium text-white bg-primary hover:bg-primary rounded-lg transition-colors duration-200"
                >
                  Aceptar Todo
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Detailed Settings
          <div className="py-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Configuración de Privacidad
              </h3>
              <button
                onClick={() => setShowDetails(false)}
                className="p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {/* Essential Cookies */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Shield className="text-green-600 mr-2" size={16} />
                  <h4 className="font-medium text-gray-900">Cookies Esenciales</h4>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Necesarias para el funcionamiento básico del sitio web.
                </p>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled={true}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-500">Siempre activas</span>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Eye className="text-blue-600 mr-2" size={16} />
                  <h4 className="font-medium text-gray-900">Cookies de Análisis</h4>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Nos ayudan a entender cómo interactúas con nuestro sitio.
                </p>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    defaultChecked={true}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">Permitir</span>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Cookie className="text-orange-600 mr-2" size={16} />
                  <h4 className="font-medium text-gray-900">Cookies de Marketing</h4>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Para personalizar contenido y mostrar anuncios relevantes.
                </p>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    defaultChecked={false}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-700">Permitir</span>
                </div>
              </div>
            </div>

            <div className="bg-primary rounded-lg p-4 mb-4">
              <h4 className="font-medium text-gray-900 mb-2">Tus Derechos</h4>
              <p className="text-sm text-gray-600 mb-2">
                Conforme a la Ley de Protección de Datos Personales de Guatemala, tienes derecho a:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Acceder a tus datos personales</li>
                <li>• Rectificar información incorrecta</li>
                <li>• Cancelar el tratamiento de tus datos</li>
                <li>• Oponerte al tratamiento para fines específicos</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 justify-end">
              <button
                onClick={handleReject}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Rechazar Todo
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2 text-sm font-medium text-white bg-primary hover:bg-primary rounded-lg transition-colors duration-200"
              >
                Guardar Preferencias
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GDPRBar;