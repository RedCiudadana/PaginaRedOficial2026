import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Eye, ArrowRight } from 'lucide-react';
import favicon from '../assets/logo/FAVICON.png';

const BlogPreview = () => {
  const featuredPosts = [
    {
      id: 1,
      title: 'El Futuro de la Transparencia Digital en Guatemala',
      excerpt: 'Análisis sobre las tendencias emergentes en gobierno digital y su impacto en la transparencia pública guatemalteca.',
      author: 'Ana García Morales',
      date: '15 Enero 2024',
      readTime: '8 min',
      views: 1240,
      category: 'Innovación',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Periodismo de Datos: Herramientas Esenciales 2024',
      excerpt: 'Guía completa de las mejores herramientas para periodistas que trabajan con análisis de datos.',
      author: 'Jorge Hernández',
      date: '12 Enero 2024',
      readTime: '12 min',
      views: 2340,
      category: 'Periodismo',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'IA en la Detección de Corrupción: Casos de Éxito',
      excerpt: 'Cómo los algoritmos de machine learning están revolucionando la identificación de patrones sospechosos.',
      author: 'María Ruiz',
      date: '10 Enero 2024',
      readTime: '10 min',
      views: 1890,
      category: 'Anticorrupción',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Innovación':
        return 'bg-primary text-white';
      case 'Periodismo':
        return 'bg-primary text-white';
      case 'Anticorrupción':
        return 'bg-primary text-white';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="pb-10 sm:pb-12 lg:pb-24 bg-gradient-to-br from-white via-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-16">
          <div className="inline-flex items-center bg-white text-gray-800 px-4 py-2 lg:px-6 lg:py-3 rounded-full mb-4 lg:mb-6">
            <img src={favicon} alt="" className="mr-2 w-10 h-10" />
            <span className="font-semibold">El Pulso Cívico</span>
          </div>
          
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-6">
            Últimas Perspectivas y Análisis
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Mantente informado con nuestros análisis expertos sobre transparencia, 
            innovación pública y democracia en Guatemala
          </p>
        </div>

        {/* Featured Post + Recent Posts Grid */}
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
          {/* Featured Post */}
          <div className="lg:row-span-2">
            <article className="bg-white rounded-xl lg:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
              <div className="relative">
                <img
                  src={featuredPosts[0].image}
                  alt={featuredPosts[0].title}
                  className="w-full h-40 sm:h-48 lg:h-80 object-cover"
                />
                <div className="absolute top-3 left-3 lg:top-4 lg:left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(featuredPosts[0].category)}`}>
                    {featuredPosts[0].category}
                  </span>
                </div>
                <div className="absolute top-3 right-3 lg:top-4 lg:right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                  Destacado
                </div>
              </div>
              
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-4 leading-tight">
                  {featuredPosts[0].title}
                </h3>
                
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 lg:mb-6 leading-relaxed">
                  {featuredPosts[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-2 lg:pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <User size={14} className="text-gray-400 mr-2" />
                    <span className="text-xs lg:text-sm text-gray-600">{featuredPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs lg:text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {featuredPosts[0].date}
                    </div>
                    <div className="flex items-center">
                      <Eye size={12} className="mr-1" />
                      {featuredPosts[0].views.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Recent Posts */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 mt-4 lg:mt-0">
            {featuredPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg lg:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="flex">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-20 sm:w-24 lg:w-32 h-16 sm:h-20 lg:h-24 object-cover flex-shrink-0"
                  />
                  
                  <div className="p-2 sm:p-3 lg:p-4 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-xs">
                        <Eye size={10} className="mr-1" />
                        {post.views.toLocaleString()}
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-gray-900 mb-1 lg:mb-2 text-xs sm:text-sm leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-xs mb-1 lg:mb-3 leading-relaxed hidden sm:block">
                      {post.excerpt.substring(0, 60)}...
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="truncate mr-2">{post.author.split(' ')[0]}</span>
                      <span className="text-xs">{post.date.split(' ')[0]} {post.date.split(' ')[1]}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;