import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// TikTok icon component (since it's not in lucide-react)
const TikTokIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-.1z"/>
  </svg>
);

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: t('footer.programs'),
      links: [
        { label: t('footer.programs.innovation'), href: '/innovacion-gobierno' },
        { label: t('footer.programs.journalism'), href: '/fortalecimiento-periodismo' },
        { label: t('footer.programs.anticorruption'), href: '/anticorrupcion' },
        { label: t('footer.programs.digital'), href: '/transformacion-digital' }
      ]
    },
    {
      title: t('footer.resources'),
      links: [
        { label: t('footer.resources.blog'), href: '/blog' },
        { label: t('footer.resources.publications'), href: '/conocimiento' },
        { label: t('footer.resources.press'), href: '/sala-de-prensa' },
        { label: t('footer.resources.tools'), href: '/proyectos' }
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
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22footerGrid%22%20width%3D%2260%22%20height%3D%2260%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22M%2060%200%20L%200%200%200%2060%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%221%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22url(%23footerGrid)%22%20/%3E%3C/svg%3E')]"></div>
      </div>
      
      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center mb-4 lg:mb-8">
              <img
                src="/logo_red_ciudadana_alterno.png"
                alt="Red Ciudadana"
                className="h-12 sm:h-16 w-auto"
              />
            </div>

            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
              {t('footer.brand.description')}
            </p>
          </div>

          {/* Column 2 & 3: Links Columns */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-3 lg:mb-6 text-white">{section.title}</h4>
              <ul className="space-y-1 lg:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block text-xs sm:text-sm lg:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: Contact & Social */}
          <div>
            <div className="space-y-4 mb-6">
              <a href="mailto:info@redciudadana.org.gt" className="flex items-center group cursor-pointer">
                <Mail size={20} className="text-gray-400 mr-3" />
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-xs sm:text-sm lg:text-base">
                  info@redciudadana.org.gt
                </span>
              </a>

              <div className="flex items-start">
                <MapPin size={20} className="text-gray-400 mr-3 mt-1" />
                <div className="text-gray-300 text-xs sm:text-sm lg:text-base">
                  <p>{t('footer.contact.location')}</p>
                  <p>{t('footer.contact.country')}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-4 text-white">{t('footer.social')}</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex justify-center">
            <p className="text-gray-400 text-xs sm:text-sm text-center">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;