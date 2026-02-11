import React from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';

const GuatemalaFlag = ({ className = "" }) => (
  <svg viewBox="0 0 900 600" className={className}>
    <rect width="900" height="600" fill="#4997D0"/>
    <rect x="300" y="0" width="300" height="600" fill="white"/>
  </svg>
);

const UKFlag = ({ className = "" }) => (
  <svg viewBox="0 0 60 30" className={className}>
    <clipPath id="s">
      <path d="M0,0 v30 h60 v-30 z"/>
    </clipPath>
    <clipPath id="t">
      <path d="M30,15 h30 v15 z v-15 h-30 z h-30 v15 z v-15 h30 z"/>
    </clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
);

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center bg-white space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 group"
      aria-label="Change language"
    >
      <div className="w-6 h-6 bg-white rounded overflow-hidden shadow-sm ring-1 ring-gray-200 group-hover:ring-gray-300 transition-all duration-200">
        {language === 'es' ? <GuatemalaFlag className="w-full h-full" /> : <UKFlag className="w-full h-full" />}
      </div>
      <span className="text-sm font-medium text-gray-700 group-hover:text-black hidden sm:inline">
        {language === 'es' ? 'ES' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
