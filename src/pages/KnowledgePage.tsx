import React from 'react';
import HeroSlider from '../components/HeroSlider';
import Knowledge from '../components/Knowledge';
import { BookOpen, FileText, Users, Eye } from 'lucide-react';
import knowldegeHeroImage from '../assets/banner/02_SLIDER.png';

const KnowledgePage = () => {
  const heroSlides = [
    {
      id: 'knowledge-main',
      title: 'Centro de Conocimiento',
      subtitle: 'Recursos especializados para la transformación',
      description: 'Accede a nuestras investigaciones, análisis, guías prácticas y recursos especializados para fortalecer la transparencia y la participación ciudadana en Guatemala.',
      image: knowldegeHeroImage,
      cta: {
        primary: { text: 'Explorar Repositorio', action: '#repositorio' },
        secondary: { text: 'Suscribirse al Blog', action: '#suscripcion' }
      }
    }
  ];

  return (
    <div className="">
      <HeroSlider slides={heroSlides} />
      <Knowledge />
    </div>
  );
};

export default KnowledgePage;
