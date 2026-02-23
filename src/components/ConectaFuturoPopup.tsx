import React, { useState, useEffect } from 'react';
import { X, GraduationCap, ArrowRight } from 'lucide-react';

const ConectaFuturoPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const hasClosedPopup = localStorage.getItem('conectaFuturoPopupClosed');
    const lastShown = localStorage.getItem('conectaFuturoPopupLastShown');
    const now = new Date().getTime();
    const oneDayInMs = 24 * 60 * 60 * 1000;

    if (!hasClosedPopup || (lastShown && now - parseInt(lastShown) > oneDayInMs)) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem('conectaFuturoPopupClosed', 'true');
      localStorage.setItem('conectaFuturoPopupLastShown', new Date().getTime().toString());
    }, 300);
  };

  const handleClick = () => {
    window.open('https://escuela.redciudadana.org/', '_blank', 'noopener,noreferrer');
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${
        isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
      style={{ maxWidth: '360px' }}
    >
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-green-500">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-md z-10"
          aria-label="Cerrar"
        >
          <X size={16} className="text-gray-600" />
        </button>

        <div className="bg-primary p-6 pb-4">
          <div className="flex items-center mb-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-3">
              <GraduationCap className="text-white" size={28} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg leading-tight">
                Escuela Conecta Futuro
              </h3>
              <p className="text-green-100 text-xs font-medium">
                Capacitación Gratuita
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 pt-4">
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            Fortalece tus habilidades en liderazgo, incidencia política y activismo digital.
            <span className="font-semibold text-primary"> Cursos 100% gratuitos</span> con certificación.
          </p>

          <button
            onClick={handleClick}
            className="w-full bg-primary hover:from-green-700 hover:to-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center group shadow-md hover:shadow-lg"
          >
            Explorar Cursos
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </button>

          <div className="mt-3 flex items-center justify-center text-xs text-gray-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-1.5"></span>
                Certificación oficial
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-1.5"></span>
                100% en línea
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConectaFuturoPopup;
