import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

// TikTok icon component (since it's not in lucide-react)
const TikTokIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Secciones',
      links: [
        { label: 'Inicio', href: '/' },
        { label: 'Nosotros', href: '/quienes-somos' },
        { label: 'Proyectos', href: '/proyectos' },
        { label: 'Novedades', href: '/blog' },
        { label: 'Contacto', href: '/contacto' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/Redciudadanagt/', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/redxguate', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/redxguate/', label: 'Instagram' },
    { icon: TikTokIcon, href: 'http://tiktok.com/@redxguate', label: 'TikTok' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/2532725', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.youtube.com/c/RedciudadanaOrgGt', label: 'YouTube' }
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-3">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center mb-4 lg:mb-8">
              <img
                src="/logo_red_ciudadana_alterno.png"
                alt="Red Ciudadana"
                className="h-8 sm:h-9 lg:h-10 w-auto object-contain"
              />
            </div>

            <p className="text-gray-300 leading-relaxed text-sm lg:text-base max-w-sm">
              En Red Ciudadana trabajamos para fortalecer la transparencia,
              promover la participación activa y construir un futuro más
              justo e inclusivo para todos los guatemaltecos.
            </p>

            <div className="flex flex-wrap gap-3 mt-5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-all duration-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-3 lg:mb-4 text-white">
                {section.title}
              </h4>
              <ul className="space-y-2 lg:space-y-2.5">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-all duration-300 inline-block text-sm lg:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 3: Contact */}
          <div>
            <div className="space-y-3 text-gray-300 text-sm lg:text-base">
              <div>
                <p className="text-white font-semibold">Dirección:</p>
                <p>Zona 10, Ciudad de Guatemala, Guatemala</p>
              </div>
              <div>
                <p className="text-white font-semibold">Correo electrónico:</p>
                <a
                  href="mailto:info@redciudadana.org.gt"
                  className="hover:text-white transition-colors duration-300"
                >
                  info@redciudadana.org.gt
                </a>
              </div>
              <div>
                <p className="text-white font-semibold">Horario de atención:</p>
                <p>Lunes a viernes, 8:00 a.m. - 5:00 p.m.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <p className="text-gray-400 text-xs sm:text-sm text-center">
            © {currentYear} Red Ciudadana. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
