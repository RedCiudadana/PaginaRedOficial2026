import React, { useState, useEffect } from 'react';
import { Play, Pause, Calendar, Clock, Users, Tag, Headphones, Search, Radio } from 'lucide-react';
import { parseCSV } from '../lib/csvParser';
import bannerHero from '../assets/banner/BANNER_03.png';

interface PodcastEpisode {
  id: string;
  title: string;
  slug: string;
  description: string;
  episode_number: number;
  season: number;
  duration: string;
  audio_url: string;
  cover_image: string;
  published_date: string;
  hosts: string;
  guests: string | null;
  topics: string[];
  listen_count: number;
  featured: boolean;
}

const PodcastPage = () => {
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([]);
  const [featuredEpisodes, setFeaturedEpisodes] = useState<PodcastEpisode[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('Todos');
  const [playingEpisode, setPlayingEpisode] = useState<string | null>(null);

  const topics = ['Todos', 'Democracia', 'Transparencia', 'Tecnología', 'Periodismo', 'Anticorrupción', 'Innovación'];

  useEffect(() => {
    fetchEpisodes();
  }, []);

  const fetchEpisodes = async () => {
    try {
      setLoading(true);

      const allEpisodes = await parseCSV('/data/podcast-episodes.csv');


      const featured = allEpisodes.filter(ep => ep.featured) || [];
      const regular = allEpisodes.filter(ep => !ep.featured) || [];

      setFeaturedEpisodes(featured);
      setEpisodes(regular);
    } catch (error) {
      console.error('Error fetching episodes:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredEpisodes = episodes.filter(episode => {
    const matchesSearch = episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         episode.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTopic = selectedTopic === 'Todos' || episode.topics.includes(selectedTopic);
    return matchesSearch && matchesTopic;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-GT', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const handlePlayPause = (episodeId: string) => {
    if (playingEpisode === episodeId) {
      setPlayingEpisode(null);
    } else {
      setPlayingEpisode(episodeId);
    }
  };

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
            <div className="flex items-center justify-center gap-3 mb-6">
              <Radio size={48} />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Podcast Red Ciudadana
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Conversaciones sobre democracia, transparencia, innovación y tecnología cívica
            </p>
            <div className="mt-8 flex items-center justify-center gap-8 text-blue-100">
              <div className="flex items-center gap-2">
                <Headphones size={24} />
                <span className="text-lg">Nuevo episodio cada semana</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar episodios..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedTopic === topic
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Episodes */}
        {featuredEpisodes.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">

              <h2 className="text-3xl font-bold text-gray-900">Episodios Destacados</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredEpisodes.map((episode) => (
                <article
                  key={episode.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-48 h-48 flex-shrink-0">
                      <img
                        src={episode.cover_image}
                        alt={episode.title}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => handlePlayPause(episode.id)}
                        className="absolute inset-0 flex items-center justify-center bg-primary hover:bg-primary transition-all"
                      >
                        {playingEpisode === episode.id ? (
                          <Pause className="text-white" size={48} />
                        ) : (
                          <Play className="text-white" size={48} />
                        )}
                      </button>
                    </div>
                    <div className="p-6 flex-1">
                      <div className="flex items-center gap-2 text-xs text-purple-600 font-semibold mb-2">
                        <span className="bg-primary text-white px-2 py-1 rounded">DESTACADO</span>
                        <span className="text-primary">Episodio {episode.episode_number}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {episode.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{episode.description}</p>
                      <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {episode.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {formatDate(episode.published_date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Headphones size={14} />
                          {episode.listen_count} escuchas
                        </span>
                      </div>
                      {episode.guests && (
                        <div className="mt-3 flex items-start gap-1 text-xs text-gray-600">
                          <Users size={14} className="mt-0.5" />
                          <span>Invitado: {episode.guests}</span>
                        </div>
                      )}
                      <div className="mt-3 flex flex-wrap gap-1">
                        {episode.topics.map((topic) => (
                          <span key={topic} className="text-xs bg-primary text-white px-2 py-1 rounded">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Regular Episodes */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {selectedTopic === 'Todos' ? 'Todos los Episodios' : `Episodios sobre ${selectedTopic}`}
          </h2>

          {filteredEpisodes.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No se encontraron episodios con los criterios seleccionados.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredEpisodes.map((episode) => (
                <article
                  key={episode.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-40 h-40 flex-shrink-0">
                      <img
                        src={episode.cover_image}
                        alt={episode.title}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => handlePlayPause(episode.id)}
                        className="absolute inset-0 flex items-center justify-center bg-primary hover:bg-primary transition-all"
                      >
                        {playingEpisode === episode.id ? (
                          <Pause className="text-white" size={40} />
                        ) : (
                          <Play className="text-white" size={40} />
                        )}
                      </button>
                    </div>
                    <div className="p-5 flex-1">
                      <div className="flex items-center gap-2 text-xs text-primary font-semibold mb-2">
                        <span>Episodio {episode.episode_number}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">Temporada {episode.season}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {episode.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{episode.description}</p>
                      <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {episode.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {formatDate(episode.published_date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users size={14} />
                          {episode.hosts}
                        </span>
                      </div>
                      {episode.guests && (
                        <div className="mb-3 text-xs text-gray-600">
                          <span className="font-semibold">Invitado:</span> {episode.guests}
                        </div>
                      )}
                      <div className="flex flex-wrap gap-1">
                        {episode.topics.map((topic) => (
                          <span key={topic} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Subscribe Section */}
        <div
          className="relative mt-16 rounded-2xl p-8 md:p-12 text-white text-center bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${bannerHero})` }}
        >
          <div className="relative">
            <Radio size={48} className="mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Suscríbete a nuestro podcast</h2>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              No te pierdas ningún episodio. Disponible en todas las plataformas de podcast.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-primary x-6 py-3 rounded-lg font-semibold hover:bg-primary transition-colors">
                Apple Podcasts
              </button>
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary transition-colors">
                Spotify
              </button>
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary transition-colors">
                Google Podcasts
              </button>
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary transition-colors">
                RSS Feed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastPage;
