import React from 'react';
import HeroSlider from '../components/HeroSlider';
import Projects from '../components/Projects';
import projectsHeroImage from '../assets/banner/03_SLIDER.png';

const ProjectsPage = () => {
  const heroSlides = [
    {
      id: 'projects-main',
      title: 'Proyectos y Resultados',
      description: 'Conoce nuestros proyectos más impactantes y los resultados concretos que hemos logrado transformando Guatemala a través de la innovación y la transparencia.',
      image: projectsHeroImage,
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
