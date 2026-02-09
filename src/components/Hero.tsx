import React from 'react';
import { Play, ArrowRight, TrendingUp, Users, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const quickStats = [
    { icon: TrendingUp, value: '156+', label: t('hero.stats.projects'), color: 'text-gray-700' },
    { icon: Users, value: '2,840', label: t('hero.stats.journalists'), color: 'text-gray-700' },
    { icon: Award, value: '14', label: t('hero.stats.years'), color: 'text-gray-700' }
  ];

  return (
    <section id="inicio" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%221%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22url(%23grid)%22%20/%3E%3C/svg%3E')]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-white/20 text-white px-6 py-3 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/20 hover:bg-white/30 transition-all duration-300 cursor-pointer">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                {t('hero.badge')}
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                {t('hero.title.part1')}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white animate-pulse">{t('hero.title.transparency')}</span>
                {t('hero.title.part2')}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 animate-pulse">{t('hero.title.innovation')}</span>
                {t('hero.title.part3')}
              </h1>

              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl font-light">
                {t('hero.description')}
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                {quickStats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className={`w-10 h-10 ${stat.color} bg-white/20 rounded-lg flex items-center justify-center text-white`}>
                      <stat.icon size={20} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button className="group bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl">
                {t('hero.cta.strategy')}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>

              <button className="group border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all duration-300 hover:bg-white/10 backdrop-blur-sm">
                <Play className="mr-2" size={20} />
                {t('hero.cta.video')}
              </button>
            </div>
          </div>

          {/* Video/Image Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-black/20 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center group cursor-pointer hover:bg-black/30 transition-all duration-500 shadow-2xl hover:shadow-3xl overflow-hidden">
              {/* Video Thumbnail Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-gray-600/20"></div>
              
              <div className="relative w-24 h-24 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-500 group-hover:scale-110 shadow-xl">
                <Play className="text-white ml-1" size={32} />
              </div>
              
              {/* Ripple Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-white/30 animate-ping group-hover:animate-none"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-white text-black px-6 py-3 rounded-xl text-sm font-semibold shadow-xl animate-bounce">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></div>
                {t('hero.video.duration')}
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-black text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-xl border border-white/20">
              <div className="flex items-center">
                <Award className="mr-2" size={16} />
                {t('hero.badge.recognition')}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;