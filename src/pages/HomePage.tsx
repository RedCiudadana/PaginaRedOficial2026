import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import ExecutiveSummary from '../components/ExecutiveSummary';
import StrategicObjectives from '../components/StrategicObjectives';
import KPICounters from '../components/KPICounters';
import QuickAccess from '../components/QuickAccess';
import BlogPreview from '../components/BlogPreview';
import { PartyPopper, ArrowRight, Sparkles, TrendingUp, Users, Award } from 'lucide-react';
import homeHeroImage from '../assets/banner/01_SLIDER.png';

const HomePage = () => {
  const heroSlides = [
    {
      id: 'main',
      title: 'Impulsando la transparencia e innovación pública',
      subtitle: 'Transformando Guatemala',
      description: 'Fortalecemos la democracia guatemalteca a través de la participación ciudadana, el periodismo independiente y la colaboración con el gobierno para crear un país más transparente.',
      image: homeHeroImage,
      stats: [],
      cta: {
        primary: { text: 'Plan Estratégico 2024-2028', action: '/estrategia' },
        secondary: { text: 'Conocer Más', action: '/quienes-somos' }
      }
    }
  ];

  return (
    <div className="overflow-hidden">
      <HeroSlider slides={heroSlides} showStats={true} />

      {/* 15th Anniversary Celebration Banner */}
      <div className="relative overflow-hidden" style={{backgroundColor: 'rgb(35, 40, 48)'}}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                <PartyPopper size={48} className="text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={24} className="text-white" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    ¡Cumplimos 15 Años!
                  </h2>
                  <Sparkles size={24} className="text-white" />
                </div>
                <p className="text-white text-lg font-medium">
                  Celebra con nosotros 15 años de transformación e innovación en Guatemala
                </p>
              </div>
            </div>
            <Link
              to="/15-anos"
              className="flex-shrink-0 bg-white text-gray-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3 group"
            >
              <span>Ver Celebración</span>
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <ExecutiveSummary />
      <StrategicObjectives />
      <KPICounters />
      <QuickAccess />
      <BlogPreview />
    </div>
  );
};

export default HomePage;
