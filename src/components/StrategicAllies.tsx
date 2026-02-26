import React from 'react';

const StrategicAllies = () => {
  const allies = [
    { name: 'UK Embassy', logo: '/logos/uk-embassy.png' },
    { name: 'Indico', logo: '/logos/indico.png' },
    { name: 'Unión Europea', logo: '/logos/union-europea.png' },
    { name: 'NED', logo: '/logos/ned.png' },
    { name: 'PNUD', logo: '/logos/pnud.png' },
    { name: 'IRI', logo: '/logos/iri.png' },
    { name: 'USAID', logo: '/logos/usaid.png' },
    { name: 'Counterpart', logo: '/logos/counterpart.png' },
    { name: 'GIZ', logo: '/logos/giz.png' },
    { name: 'HIVOS', logo: '/logos/hivos.png' },
    { name: 'OEA', logo: '/logos/oea.png' },
    { name: 'NIMD', logo: '/logos/nimd.png' },
    { name: 'Open Society Foundation', logo: '/logos/open-society.png' },
    { name: 'KAS', logo: '/logos/kas.png' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Aliados Estratégicos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Organizaciones que confían en nosotros y apoyan nuestra misión de transformar Guatemala
          </p>
          <div className=" mt-8 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-[#86c9b9] via-[#87becf] to-[#88b3e4]" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center">
          {allies.map((ally, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300 h-32"
            >
              <div className="text-center">
                <div className="w-full h-16 flex items-center justify-center mb-2">
                  <img
                    src={ally.logo}
                    alt={`${ally.name} logo`}
                    className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && parent.nextSibling) {
                        (parent.nextSibling as HTMLElement).style.display = 'block';
                      }
                    }}
                  />
                </div>
                <span className="text-sm font-semibold text-gray-700 hidden">
                  {ally.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Trabajamos en colaboración con organizaciones nacionales e internacionales para amplificar nuestro impacto
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrategicAllies;
