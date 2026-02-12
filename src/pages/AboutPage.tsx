import React from 'react';
import HeroSlider from '../components/HeroSlider';
import AboutUs from '../components/AboutUs';
import SistemaRC from '../components/SistemaRC';
import StrategicAllies from '../components/StrategicAllies';
import { Users, Target, Eye, Heart } from 'lucide-react';
import Slider from '../assets/banner/02_SLIDER.png';

const AboutPage = () => {
  const heroSlides = [
    {
      id: 'about-main',
      title: 'Quiénes Somos',
      subtitle: '15 años construyendo una Guatemala más transparente',
      description: 'Somos una organización comprometida con fortalecer la democracia guatemalteca a través de la transparencia, la innovación pública y la participación ciudadana informada.',
      image: Slider,
      cta: {
        primary: { text: 'Conocer Nuestro Equipo', action: '#equipo' },
        secondary: { text: 'Ver Trayectoria', action: '#trayectoria' }
      },
      stats: []
    }
  ];

  return (
    <div className="">
      <HeroSlider slides={heroSlides} />
      <AboutUs />
      <SistemaRC />
      <StrategicAllies />
    </div>
  );
};

export default AboutPage;
