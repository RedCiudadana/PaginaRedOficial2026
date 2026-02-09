import React from 'react';
import HeroSlider from '../components/HeroSlider';
import AboutUs from '../components/AboutUs';
import SistemaRC from '../components/SistemaRC';
import StrategicAllies from '../components/StrategicAllies';
import { Users, Target, Eye, Heart } from 'lucide-react';

const AboutPage = () => {
  const heroSlides = [
    {
      id: 'about-main',
      title: 'Quiénes Somos',
      subtitle: '15 años construyendo una Guatemala más transparente',
      description: 'Somos una organización comprometida con fortalecer la democracia guatemalteca a través de la transparencia, la innovación pública y la participación ciudadana informada.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      cta: {
        primary: { text: 'Conocer Nuestro Equipo', action: '#equipo' },
        secondary: { text: 'Ver Trayectoria', action: '#trayectoria' }
      },
      stats: []
    }
  ];

  return (
    <div className="pt-20">
      <HeroSlider slides={heroSlides} />
      <AboutUs />
      <SistemaRC />
      <StrategicAllies />
    </div>
  );
};

export default AboutPage;