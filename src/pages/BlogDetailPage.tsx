import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { marked } from 'marked';
import { getBlogBySlug } from '../lib/cmsBlogs';

marked.setOptions({ breaks: true });

const BlogDetailPage = () => {
  const { slug } = useParams();
  const post = slug ? getBlogBySlug(slug) : undefined;

  const contentHtml = useMemo(() => {
    if (!post) return '';
    return marked.parse(post.content) as string;
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-10 text-center max-w-lg">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Artículo no encontrado</h1>
          <p className="text-gray-600 mb-6">El artículo que buscas no está disponible.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-white font-semibold"
          >
            <ArrowLeft size={18} />
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString('es-GT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[50vh] min-h-[360px] bg-gray-900 text-white">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative h-full flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-white mb-6">
              <ArrowLeft size={16} />
              Volver al blog
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-white mb-6">{post.description}</p>
            <div className="flex flex-wrap items-center gap-6 text-sm text-white">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {formattedDate}
              </span>
              {post.autor && (
                <span className="flex items-center gap-2">
                  <User size={16} />
                  {post.autor}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 blog-content"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </div>
  );
};

export default BlogDetailPage;
