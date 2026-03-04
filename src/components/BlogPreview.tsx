import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import favicon from '../assets/logo/FAVICON.png';
import { getAllBlogs, BlogPost } from '../lib/cmsBlogs';

const BlogPreview = () => {
  const allBlogs = getAllBlogs();
  const highlighted = allBlogs.filter((post) => post.highlight);
  const featuredPosts = (highlighted.length ? highlighted : allBlogs).slice(0, 4);

  if (featuredPosts.length === 0) {
    return null;
  }

  const formatDate = (value: string) => {
    const parsed = Date.parse(value);
    if (Number.isNaN(parsed)) return value;
    return new Date(parsed).toLocaleDateString('es-GT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const getExcerpt = (post: BlogPost, length: number) => {
    if (!post.description) return '';
    if (post.description.length <= length) return post.description;
    return `${post.description.slice(0, length).trim()}...`;
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
          <div className="mt-8 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-[#86c9b9] via-[#87becf] to-[#88b3e4] mb-4 lg:mb-6" />
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
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary text-white">
                    Destacado
                  </span>
                </div>
              </div>
              
              <div className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900 mb-2 lg:mb-4 leading-tight">
                  {featuredPosts[0].title}
                </h3>
                
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 lg:mb-6 leading-relaxed">
                  {getExcerpt(featuredPosts[0], 180)}
                </p>
                
                <div className="flex items-center justify-between pt-2 lg:pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <User size={14} className="text-gray-400 mr-2" />
                    <span className="text-xs lg:text-sm text-gray-600">{featuredPosts[0].autor}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs lg:text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {formatDate(featuredPosts[0].date)}
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Link
                    to={`/blog/${featuredPosts[0].slug}`}
                    className="inline-flex items-center text-primary font-semibold text-sm lg:text-base hover:underline"
                  >
                    Leer más <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* Recent Posts */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 mt-4 lg:mt-0">
            {featuredPosts.slice(1).map((post) => (
              <article key={post.slug} className="bg-white rounded-lg lg:rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <Link to={`/blog/${post.slug}`} className="flex h-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-20 sm:w-24 lg:w-32 h-16 sm:h-20 lg:h-24 object-cover flex-shrink-0"
                  />
                  
                  <div className="p-2 sm:p-3 lg:p-4 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 rounded text-xs font-medium bg-primary text-white">
                        Destacado
                      </span>
                      <div className="text-gray-500 text-xs">
                        {formatDate(post.date)}
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-gray-900 mb-1 lg:mb-2 text-xs sm:text-sm leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-xs mb-1 lg:mb-3 leading-relaxed hidden sm:block">
                      {getExcerpt(post, 70)}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="truncate mr-2">{post.autor}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary transition-colors"
          >
            Ver todos los artículos
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
