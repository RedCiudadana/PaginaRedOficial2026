import React from 'react';
import HeroSlider from '../components/HeroSlider';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  const heroSlides = [
    {
      id: 'projects-main',
      title: 'Proyectos y Resultados',
      subtitle: 'Impacto medible en 14 años de trabajo',
      description: 'Conoce nuestros proyectos más impactantes y los resultados concretos que hemos logrado transformando Guatemala a través de la innovación y la transparencia.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      cta: {
        primary: { text: 'Explorar Todos los Proyectos', action: '#proyectos' },
        secondary: { text: 'Ver Casos de Éxito', action: '#casos' }
      }
    }
  ];

  return (
    <div className="pt-20">
      <HeroSlider slides={heroSlides} />
      <Projects />
    </div>
  );
};

export default ProjectsPage;