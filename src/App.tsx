import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { translations } from './translations';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import StrategyPage from './pages/StrategyPage';
import ProjectsPage from './pages/ProjectsPage';
import InnovationGovernmentPage from './pages/InnovationGovernmentPage';
import JournalismStrengtheningPage from './pages/JournalismStrengtheningPage';
import AnticorruptionPage from './pages/AnticorruptionPage';
import DigitalTransformationPage from './pages/DigitalTransformationPage';
import KnowledgePage from './pages/KnowledgePage';
import ContactPage from './pages/ContactPage';
import BusinessPage from './pages/BusinessPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import PodcastPage from './pages/PodcastPage';
import Anniversary15Page from './pages/Anniversary15Page';
import PressRoomPage from './pages/PressRoomPage';
import GDPRBar from './components/GDPRBar';
import ConectaFuturoPopup from './components/ConectaFuturoPopup';

function App() {
  return (
    <LanguageProvider translations={translations}>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/quienes-somos" element={<AboutPage />} />
              <Route path="/estrategia" element={<StrategyPage />} />
              <Route path="/proyectos" element={<ProjectsPage />} />
              <Route path="/innovacion-gobierno" element={<InnovationGovernmentPage />} />
              <Route path="/fortalecimiento-periodismo" element={<JournalismStrengtheningPage />} />
              <Route path="/anticorrupcion" element={<AnticorruptionPage />} />
              <Route path="/transformacion-digital" element={<DigitalTransformationPage />} />
              <Route path="/conocimiento" element={<KnowledgePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogDetailPage />} />
              <Route path="/podcast" element={<PodcastPage />} />
              <Route path="/15-anos" element={<Anniversary15Page />} />
              <Route path="/sala-de-prensa" element={<PressRoomPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="/business" element={<BusinessPage />} />
            </Routes>
          </main>
          <Footer />
          <GDPRBar />
          <ConectaFuturoPopup />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
