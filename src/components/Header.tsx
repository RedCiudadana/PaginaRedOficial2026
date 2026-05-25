import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronDown, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import LogoChiquito from '../assets/logo/FAVICON.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const { t } = useLanguage();

  const menuItems = [
    { label: t('header.menu.home'), href: '/', type: 'link' },
    { label: t('header.menu.about'), href: '/quienes-somos', type: 'link' },
    { label: t('header.menu.projects'), href: '/proyectos', type: 'link' },
    { label: t('header.menu.publications'), href: '/conocimiento', type: 'link' },
    { label: t('header.menu.blog'), href: '/blog', type: 'link' },
    { label: t('header.menu.podcast'), href: '/podcast', type: 'link' },
    { label: t('header.menu.contact'), href: '/contacto', type: 'link' }
  ];

  const isActiveLink = (href) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      {/* Top Header */}
      <div className="bg-black2 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="md:flex items-center gap-2 sm:gap-4">
            <img
              src={LogoChiquito}
              alt="Red Ciudadana"
              width="25px"
              style={{ filter: 'invert(1) hue-rotate(180deg) contrast(1.2) brightness(1.1)' }}
            />
            <p className="text-sm">
              Sitio oficial de la Asociacion Civil Red Ciudadana
            </p>
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="https://www.facebook.com/Redciudadanagt/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-200 transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/redxguate/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-200 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/2532725"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-200 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.youtube.com/c/RedciudadanaOrgGt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-200 transition-colors"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src="/logo_red_ciudadana.png"
                  alt="Red Ciudadana"
                  className="h-8 sm:h-12 lg:h-12 w-auto hover:opacity-90 transition-opacity duration-300 cursor-pointer"
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-1 xl:space-x-2">
              {menuItems.map((item) => (
                <li key={item.label} className="relative">
                  {item.type === 'dropdown' ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className={`flex items-center px-3 xl:px-4 py-2 rounded-lg text-gray-700 hover:text-black hover:bg-gray-100 transition-all duration-200 font-medium text-sm xl:text-base ${
                        activeDropdown === item.label ? 'text-black bg-gray-100' : ''
                      }`}>
                        {item.label}
                        <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`} />
                      </button>

                      {activeDropdown === item.label && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-in slide-in-from-top-2 duration-200">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="block px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-100 transition-colors duration-200 font-medium"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-3 xl:px-4 py-2 rounded-lg transition-all duration-200 font-medium text-sm xl:text-base ${
                        item.highlight
                          ? 'bg-primary text-white hover:bg-gray-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
                          : isActiveLink(item.href)
                            ? 'text-black bg-gray-100'
                            : 'text-gray-700 hover:text-black hover:bg-gray-100'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Search, Language Switcher and Mobile Menu */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            <LanguageSwitcher />

            <button className="p-2 lg:p-3 text-gray-600 hover:text-black bg-white hover:bg-gray-100 rounded-lg transition-all duration-200 hidden sm:block">
              <Search size={18} />
            </button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-1.5 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 animate-in slide-in-from-top-2 duration-300 max-h-screen overflow-y-auto">
            <nav className="py-3">
              <ul className="space-y-1">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    {item.type === 'dropdown' ? (
                      <div>
                        <div className="px-4 py-2 text-gray-900 font-semibold text-xs uppercase tracking-wide">
                          {item.label}
                        </div>
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block px-6 py-2 text-gray-700 hover:bg-gray-100 hover:text-black transition-colors duration-200 text-sm"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`block px-4 py-3 rounded-lg mx-2 transition-colors duration-200 ${
                          item.highlight
                            ? 'bg-primary text-white font-semibold text-sm'
                            : isActiveLink(item.href)
                              ? 'bg-gray-100 text-black font-semibold text-sm'
                              : 'text-gray-700 hover:bg-gray-100 hover:text-black text-sm'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
    </>
  );
};

export default Header;
