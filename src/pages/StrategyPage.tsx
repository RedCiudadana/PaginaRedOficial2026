import React from 'react';
import HeroSlider from '../components/HeroSlider';
import Strategy from '../components/Strategy';
import { Target, TrendingUp, Cpu, Shield } from 'lucide-react';

const StrategyPage = () => {
  const heroSlides = [
    {
      id: 'strategy-main',
      title: 'Plan Estratégico 2024-2028',
      subtitle: 'Visión 2028: Referente Regional en Innovación Pública',
      description: 'Nuestra hoja de ruta para transformar Guatemala a través de cuatro objetivos estratégicos con metas ambiciosas y medibles que fortalecerán la democracia.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      cta: {
        primary: { text: 'Descargar Plan Completo', action: '#download' },
        secondary: { text: 'Ver Objetivos', action: '#objetivos' }
      },
      stats: [
        { icon: Target, value: '4', label: 'Objetivos', color: 'text-blue-600' },
        { icon: TrendingUp, value: '15', label: 'Metas', color: 'text-green-600' },
        { icon: Shield, value: '2028', label: 'Horizonte', color: 'text-purple-600' }
      ],
      badge: { text: 'Plan Estratégico 2024-2028', color: 'blue' }
    }
  ];

  return (
    <div className="">
      <HeroSlider slides={heroSlides} />
      <Strategy />
    </div>
  );
};

export default StrategyPage;
