import React, { useState, useEffect } from 'react';
import { Calendar, User, Search, TrendingUp, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllBlogs, BlogPost } from '../lib/cmsBlogs';
import bannerHero from '../assets/banner/BANNER_01.png';

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [featuredPage, setFeaturedPage] = useState(1);
  const [regularPage, setRegularPage] = useState(1);
  const featuredPerPage = 4;
  const regularPerPage = 6;

  useEffect(() => {
    const allPosts = getAllBlogs();
    const featured = allPosts.filter(post => post.highlight);
    const regular = allPosts.filter(post => !post.highlight);

    setFeaturedPosts(featured);
    setPosts(regular);
    setLoading(false);
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });
  const featuredTotalPages = Math.max(1, Math.ceil(featuredPosts.length / featuredPerPage));
  const featuredSafePage = Math.min(featuredPage, featuredTotalPages);
  const featuredStart = (featuredSafePage - 1) * featuredPerPage;
  const featuredPaginated = featuredPosts.slice(featuredStart, featuredStart + featuredPerPage);

  const regularTotalPages = Math.max(1, Math.ceil(filteredPosts.length / regularPerPage));
  const regularSafePage = Math.min(regularPage, regularTotalPages);
  const regularStart = (regularSafePage - 1) * regularPerPage;
  const regularPaginated = filteredPosts.slice(regularStart, regularStart + regularPerPage);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-GT', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  useEffect(() => {
    setRegularPage(1);
  }, [searchTerm]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative text-white py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerHero})` }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Blog Red Ciudadana
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
              Noticias, análisis y reflexiones sobre transparencia, democracia e innovación en Guatemala
            </p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="text-blue-600" size={28} />
              <h2 className="text-3xl font-bold text-gray-900">Artículos Destacados</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPaginated.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group block"
                >
                  <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Destacado
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User size={16} />
                        <span>{post.autor}</span>
                      </div>
                      <span className="text-white font-semibold rounded p-2 hover:text-primary transition-colors">
                        Leer más →
                      </span>
                    </div>
                  </div>
                </article>
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 mt-10">
                <button
                  className={`h-10 w-10 rounded-lg border transition-all duration-200 flex items-center justify-center text-center leading-none ${
                    featuredSafePage === 1
                      ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                      : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setFeaturedPage(1)}
                  disabled={featuredSafePage === 1}
                  aria-label="Primera"
                >
                  <ChevronsLeft size={18} />
                </button>
                <button
                  className={`h-10 w-10 rounded-lg border transition-all duration-200 flex items-center justify-center text-center leading-none ${
                    featuredSafePage === 1
                      ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                      : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setFeaturedPage((page) => Math.max(1, page - 1))}
                  disabled={featuredSafePage === 1}
                  aria-label="Anterior"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  className="h-10 w-10 rounded-lg border border-primary bg-primary text-white transition-all duration-200 flex items-center justify-center text-center leading-none"
                  onClick={() => setFeaturedPage(featuredSafePage)}
                >
                  {featuredSafePage}
                </button>
                <button
                  className={`h-10 w-10 rounded-lg border transition-all duration-200 flex items-center justify-center text-center leading-none ${
                    featuredSafePage === featuredTotalPages
                      ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                      : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setFeaturedPage((page) => Math.min(featuredTotalPages, page + 1))}
                  disabled={featuredSafePage === featuredTotalPages}
                  aria-label="Siguiente"
                >
                  <ChevronRight size={18} />
                </button>
                <button
                  className={`h-10 w-10 rounded-lg border transition-all duration-200 flex items-center justify-center text-center leading-none ${
                    featuredSafePage === featuredTotalPages
                      ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                      : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setFeaturedPage(featuredTotalPages)}
                  disabled={featuredSafePage === featuredTotalPages}
                  aria-label="Última"
                >
                  <ChevronsRight size={18} />
                </button>
              </div>
          </div>
        )}

        {/* Regular Posts */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Todos los Artículos
          </h2>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No se encontraron artículos con los criterios seleccionados.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPaginated.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group block"
                >
                  <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <User size={14} />
                        <span>{post.autor}</span>
                      </div>
                      <span className="text-white font-semibold rounded p-2 hover:text-primary transition-colors">
                        Leer más →
                      </span>
                    </div>
                  </div>
                </article>
                </Link>
              ))}
            </div>
          )}
        </div>

        {filteredPosts.length > 0 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              className={`h-10 w-10 rounded-lg border transition-all duration-200 flex items-center justify-center text-center leading-none ${
                regularSafePage === 1
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setRegularPage(1)}
              disabled={regularSafePage === 1}
              aria-label="Primera"
            >
              <ChevronsLeft size={18} />
            </button>
            <button
              className={`h-10 w-10 rounded-lg border transition-all duration-200 flex items-center justify-center text-center leading-none ${
                regularSafePage === 1
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setRegularPage((page) => Math.max(1, page - 1))}
              disabled={regularSafePage === 1}
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              className="h-10 w-10 rounded-lg border border-primary bg-primary text-white transition-all duration-200 flex items-center justify-center text-center leading-none"
              onClick={() => setRegularPage(regularSafePage)}
            >
              {regularSafePage}
            </button>
            <button
              className={`h-10 w-10 rounded-lg border transition-all duration-200 flex items-center justify-center text-center leading-none ${
                regularSafePage === regularTotalPages
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setRegularPage((page) => Math.min(regularTotalPages, page + 1))}
              disabled={regularSafePage === regularTotalPages}
              aria-label="Siguiente"
            >
              <ChevronRight size={18} />
            </button>
            <button
              className={`h-10 w-10 rounded-lg border transition-all duration-200 flex items-center justify-center text-center leading-none ${
                regularSafePage === regularTotalPages
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-gray-300 text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setRegularPage(regularTotalPages)}
              disabled={regularSafePage === regularTotalPages}
              aria-label="Última"
            >
              <ChevronsRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
