import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, Award, Heart, Lightbulb, Globe, ArrowRight, Video, Target, Rocket } from 'lucide-react';
import { parseCSV } from '../lib/csvParser';

interface AnniversaryEvent {
  id: string;
  title: string;
  slug: string;
  description: string;
  event_type: string;
  event_date: string;
  event_end_date: string | null;
  location: string;
  is_virtual: boolean;
  registration_url: string | null;
  image_url: string;
  max_attendees: number | null;
  current_attendees: number;
  tags: string[];
  featured: boolean;
  status: string;
}

const Anniversary15Page = () => {
  const [featuredEvents, setFeaturedEvents] = useState<AnniversaryEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);

      const data = await parseCSV('/data/anniversary-events.csv');

      const filteredEvents = data.filter(event =>
        event.status === 'upcoming' && event.featured
      );

      setFeaturedEvents(filteredEvents || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-GT', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const milestones = [
    { year: 2011, title: 'Fundación de Red Ciudadana', description: 'Inicio de nuestra misión de fortalecer la democracia a través de la tecnología' },
    { year: 2013, title: 'Primera Plataforma de Participación Ciudadana', description: 'Lanzamiento de herramientas para la participación ciudadana con tecnología' },
    { year: 2015, title: 'Programa de Fortalecimiento de Espacios Cívicos', description: 'Capacitación de líderes comunitarios en incidencia política y movilización social' },
    { year: 2017, title: 'Primer portal de datos abiertos', description: 'Colaboraciones con instituciones de gobierno en Guatemala para promover iniciativas de datos abiertos.' },
    { year: 2020, title: 'Transformación Digital durante COVID-19', description: 'Apoyo a instituciones públicas en su digitalización' },
    { year: 2025, title: 'Programa de Innovación Gubernamental', description: 'Implementación de IA y automatización en el sector público' },
    { year: 2026, title: '15 Años Transformando Guatemala', description: 'Celebramos nuestro aniversario y miramos hacia el futuro' }
  ];

  const futureGoals = [
    { icon: Target, title: 'Alcanzar 100,000 ciudadanos', description: 'Duplicar nuestro impacto en la participación ciudadana digital' },
    { icon: Globe, title: 'Expandir a 10 países', description: 'Llevar nuestras soluciones a más naciones de América Latina' },
    { icon: Lightbulb, title: 'Innovación con IA', description: 'Integrar inteligencia artificial en todas nuestras plataformas' },
    { icon: Heart, title: 'Red de 200+ aliados', description: 'Fortalecer el ecosistema de transformación digital' }
  ];

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'webinar': return Video;
      case 'conference': return Users;
      case 'workshop': return Lightbulb;
      case 'panel': return Users;
      case 'celebration': return Award;
      default: return Calendar;
    }
  };

  const getEventTypeLabel = (type: string) => {
    const labels = {
      webinar: 'Webinar',
      conference: 'Conferencia',
      workshop: 'Taller',
      panel: 'Panel',
      celebration: 'Celebración'
    };
    return labels[type as keyof typeof labels] || type;
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
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-lg mb-8 animate-bounce">
              <Award size={24} />
              <span>Celebrando 15 Años</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              15 Años Transformando
              <span className="block text-yellow-400">Guatemala</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Desde 2010, hemos trabajado incansablemente para fortalecer la democracia, la transparencia y la innovación cívica en Guatemala
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg">
                Ver Eventos de Celebración
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all">
                Conoce Nuestro Impacto
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestra Trayectoria
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              15 años de logros, innovación y transformación social
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-yellow-400 hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                      <div className="text-blue-600 font-bold text-2xl mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="hidden lg:block">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Events */}
      {featuredEvents.length > 0 && (
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Eventos de Celebración
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Únete a nosotros en estos eventos especiales para celebrar 15 años de impacto
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {featuredEvents.map((event) => {
                const EventIcon = getEventTypeIcon(event.event_type);
                return (
                  <article key={event.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all group">
                    <div className="relative h-64">
                      <img src={event.image_url} alt={event.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2">
                          <Award size={16} />
                          Evento Destacado
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 text-white mb-2">
                          <EventIcon size={20} />
                          <span className="font-semibold">{getEventTypeLabel(event.event_type)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>

                      <div className="space-y-2 mb-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-blue-600" />
                          <span>{formatDate(event.event_date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-blue-600" />
                          <span>{event.location}</span>
                        </div>
                        {event.max_attendees && (
                          <div className="flex items-center gap-2">
                            <Users size={16} className="text-blue-600" />
                            <span>{event.current_attendees} / {event.max_attendees} inscritos</span>
                          </div>
                        )}
                      </div>

                      {event.registration_url && (
                        <a
                          href={event.registration_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                        >
                          Registrarse Ahora
                          <ArrowRight size={20} />
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Future Vision */}
      <div className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Rocket size={64} className="mx-auto mb-6 text-yellow-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Visión hacia el Futuro
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Los próximos 15 años: metas ambiciosas para transformar Guatemala y América Latina
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {futureGoals.map((goal, index) => {
              const Icon = goal.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                  <div className="bg-yellow-400 text-gray-900 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{goal.title}</h3>
                  <p className="text-blue-100">{goal.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart size={64} className="mx-auto mb-6 text-red-500" />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Sé Parte de Nuestra Historia
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Únete a nosotros en esta celebración y ayúdanos a construir los próximos 15 años de transformación social
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
              Conviértete en Aliado
            </button>
            <button className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-all">
              Conoce Más Sobre Nosotros
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anniversary15Page;
