import React from 'react';
import CounterpartLogo from '../assets/logo/COUNTERPART.png';
import EuLogo from '../assets/logo/EU.png';
import GizLogo from '../assets/logo/GIZ.png';
import HivosLogo from '../assets/logo/HIVOS.png';
import IndicoLogo from '../assets/logo/INDICO.png';
import IriLogo from '../assets/logo/IRI.png';
import KasLogo from '../assets/logo/KAS.png';
import NedLogo from '../assets/logo/NED.png';
import NimdLogo from '../assets/logo/NIMD.png';
import OeaLogo from '../assets/logo/OEA.png';
import OsfLogo from '../assets/logo/OSF.png';
import PnudLogo from '../assets/logo/PNUD.png';
import UkEmbLogo from '../assets/logo/UK EMBS.png';
import UsaidLogo from '../assets/logo/USAID.png';

const StrategicAllies = () => {
  const allies = [
    { name: 'UK Embassy', logo: UkEmbLogo },
    { name: 'Indico', logo: IndicoLogo },
    { name: 'Unión Europea', logo: EuLogo },
    { name: 'NED', logo: NedLogo },
    { name: 'PNUD', logo: PnudLogo },
    { name: 'IRI', logo: IriLogo },
    { name: 'USAID', logo: UsaidLogo },
    { name: 'Counterpart', logo: CounterpartLogo },
    { name: 'GIZ', logo: GizLogo },
    { name: 'HIVOS', logo: HivosLogo },
    { name: 'OEA', logo: OeaLogo },
    { name: 'NIMD', logo: NimdLogo },
    { name: 'Open Society Foundation', logo: OsfLogo },
    { name: 'KAS', logo: KasLogo }
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
              className="flex items-center justify-center p-6 bg-white rounded-xl hover:bg-gray-100 transition-colors duration-300 h-40"
            >
              <div className="text-center">
                <div className="w-full h-36 flex items-center justify-center mb-2">
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
