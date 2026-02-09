import React from 'react';
import { Link } from 'react-router-dom';

const KPICounters = () => {

  return (
    <section id="kpi-counters" className="py-10 sm:py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
          <div className="text-center">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">
              Transformación Medible
            </h3>
            <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4 lg:mb-6">
              Cada logro representa vidas impactadas y una sociedad más informada.
              Nuestro compromiso se refleja en resultados concretos.
            </p>
            <Link
              to="/conocimiento"
              className="inline-block bg-black hover:bg-gray-800 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-lg font-medium transition-colors duration-300 text-sm lg:text-base"
            >
              Ver Informe de Impacto 2023
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KPICounters;