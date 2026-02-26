import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Target, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  video?: string;
  cta: {
    primary: { text: string; action: string };
    secondary?: { text: string; action: string };
  };
  stats?: Array<{
    icon: React.ElementType;
    value: string;
    label: string;
    color: string;
  }>;
  badge?: {
    text: string;
    color: string;
  };
}

interface HeroSliderProps {
  slides: HeroSlide[];
  autoPlay?: boolean;
  interval?: number;
  showStats?: boolean;
}

const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  showStats = true
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentSlideData = slides[currentSlideIndex];

  useEffect(() => {
    if (videoRef.current && currentSlideData.video) {
      videoRef.current.play().catch(() => {
        setIsVideoPlaying(false);
      });
    }
  }, [currentSlideIndex, currentSlideData.video]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const getBadgeColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-primary text-blue-300 border-blue-400/20';
      case 'green':
        return 'bg-primary text-green-300 border-green-400/20';
      default:
        return 'bg-primary text-blue-300 border-blue-400/20';
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video or Image with Overlay */}
      <div className="absolute inset-0">
        {currentSlideData.video ? (
          <>
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              onLoadedData={() => setVideoLoaded(true)}
              poster={currentSlideData.image}
            >
              <source src={currentSlideData.video} type="video/mp4" />
            </video>
            {videoLoaded && (
              <div className="absolute bottom-8 right-8 flex gap-3 z-20">
                <button
                  onClick={togglePlayPause}
                  className="bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label={isVideoPlaying ? 'Pausar video' : 'Reproducir video'}
                >
                  {isVideoPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
                <button
                  onClick={toggleMute}
                  className="bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
              </div>
            )}
          </>
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-ken-burns"
            style={{ backgroundImage: `url(${currentSlideData.image})` }}
          />
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full z-10">
        <div className="max-w-4xl">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 text-white animate-fade-in-up font-['Sora']">
            {/* Badge */}
            {currentSlideData.badge && (
              <div
                className={`inline-flex items-center backdrop-blur-sm border px-4 py-2 lg:px-6 lg:py-3 rounded-full text-xs lg:text-sm font-semibold ${getBadgeColor(currentSlideData.badge.color)} transform hover:scale-105 transition-all duration-300 cursor-default`}
                style={{ animationDelay: '0.2s' }}
              >
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                {currentSlideData.badge.text}
              </div>
            )}

            {/* Title and Subtitle */}
            <div className="space-y-3 lg:space-y-4" style={{ animationDelay: '0.4s' }}>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-slide-in-left">
                {currentSlideData.title}
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-normal animate-slide-in-left" style={{ animationDelay: '0.5s' }}>
                {currentSlideData.subtitle}
              </p>

              <p className="text-base sm:text-lg lg:text-xl text-white font-normal leading-relaxed max-w-3xl animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
                {currentSlideData.description}
              </p>
            </div>

            {/* Stats */}
            {showStats && currentSlideData.stats && (
              <div className="flex flex-wrap gap-3 lg:gap-6 pt-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                {currentSlideData.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 lg:space-x-3 bg-white/10 backdrop-blur-md rounded-xl px-3 py-2 lg:px-4 lg:py-3 border border-white/30 hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-default"
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <div className={`w-8 h-8 lg:w-10 lg:h-10 ${stat.color} bg-white/20 rounded-lg flex items-center justify-center`}>
                      <stat.icon size={16} className="lg:w-5 lg:h-5" />
                    </div>
                    <div>
                      <div className="text-lg lg:text-2xl font-bold">{stat.value}</div>
                      <div className="text-blue-200 text-xs lg:text-sm">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-4 animate-fade-in" style={{ animationDelay: '1s' }}>
              <a
                href={currentSlideData.cta.primary.action.startsWith('/') ? currentSlideData.cta.primary.action : '#'}
                className="group bg-primary hover:bg-primary text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-medium flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl text-sm lg:text-base"
              >
                {currentSlideData.cta.primary.text}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
              </a>

              {currentSlideData.cta.secondary && (
                <a
                  href={currentSlideData.cta.secondary.action.startsWith('/') ? currentSlideData.cta.secondary.action : '#'}
                  className="group border-2 border-white/30 hover:border-white text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-medium flex items-center justify-center transition-all duration-300 hover:bg-white/10 backdrop-blur-md transform hover:scale-105 hover:-translate-y-1 text-sm lg:text-base"
                >
                  <Target className="mr-2" size={16} />
                  {currentSlideData.cta.secondary.text}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-0.5 h-2 lg:w-1 lg:h-3 bg-white rounded-full mt-1.5 lg:mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
