import React from 'react';
import HeroSlider from '../components/HeroSlider';
import Knowledge from '../components/Knowledge';
import { BookOpen, FileText, Users, Eye } from 'lucide-react';

const KnowledgePage = () => {
  const heroSlides = [
    {
      id: 'knowledge-main',
      title: 'Centro de Conocimiento',
      subtitle: 'Recursos especializados para la transformación',
      description: 'Accede a nuestras investigaciones, análisis, guías prácticas y recursos especializados para fortalecer la transparencia y la participación ciudadana en Guatemala.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      cta: {
        primary: { text: 'Explorar Repositorio', action: '#repositorio' },
        secondary: { text: 'Suscribirse al Blog', action: '#suscripcion' }
      }
    }
  ];

  return (
    <div className="pt-20">
      <HeroSlider slides={heroSlides} />
      <Knowledge />
    </div>
  );
};

export default KnowledgePage;