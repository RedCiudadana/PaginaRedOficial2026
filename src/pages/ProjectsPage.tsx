import React from 'react';
import HeroSlider from '../components/HeroSlider';
import Projects from '../components/Projects';
import projectsHeroImage from '../assets/banner/03_SLIDER.png';

const ProjectsPage = () => {
  const heroSlides = [
    {
      id: 'projects-main',
      title: 'Proyectos y Resultados',
      subtitle: 'Impacto medible en 14 años de trabajo',
      description: 'Conoce nuestros proyectos más impactantes y los resultados concretos que hemos logrado transformando Guatemala a través de la innovación y la transparencia.',
      image: projectsHeroImage,
      cta: {
        primary: { text: 'Explorar Todos los Proyectos', action: '#proyectos' },
        secondary: { text: 'Ver Casos de Éxito', action: '#casos' }
      }
    }
  ];

  return (
    <div className="">
      <HeroSlider slides={heroSlides} />
      <Projects />
    </div>
  );
};

export default ProjectsPage;
