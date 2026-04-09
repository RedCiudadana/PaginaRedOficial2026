import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import OpportunitiesPage from './pages/OpportunitiesPage';
import OpportunityDetailPage from './pages/OpportunityDetailPage';
import OpportunitiesResourcesPage from './pages/OpportunitiesResourcesPage';
import PublicProcurementPage from './pages/PublicProcurementPage';
import ProcurementExplorerPage from './pages/ProcurementExplorerPage';
import ProcurementDetailPage from './pages/ProcurementDetailPage';
import ProcurementResourcesPage from './pages/ProcurementResourcesPage';
import TramitesHomePage from './pages/TramitesHomePage';
import TramitesExplorerPage from './pages/TramitesExplorerPage';
import TramiteDetailPage from './pages/TramiteDetailPage';
import TramitesRecursosPage from './pages/TramitesRecursosPage';
import TramitesComparadorPage from './pages/TramitesComparadorPage';
import Anniversary15Page from './pages/Anniversary15Page';
import PressRoomPage from './pages/PressRoomPage';
import GDPRBar from './components/GDPRBar';
import ConectaFuturoPopup from './components/ConectaFuturoPopup';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <LanguageProvider translations={translations}>
      <Router>
        <div className="min-h-screen bg-white">
          <ScrollToTop />
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
              <Route path="/oportunidades" element={<OpportunitiesPage />} />
              <Route path="/oportunidades/:id" element={<OpportunityDetailPage />} />
              <Route path="/oportunidades/recursos" element={<OpportunitiesResourcesPage />} />
              <Route path="/radar-compras" element={<PublicProcurementPage />} />
              <Route path="/radar-compras/explorar" element={<ProcurementExplorerPage />} />
              <Route path="/radar-compras/mipymes" element={<ProcurementExplorerPage />} />
              <Route path="/radar-compras/proceso/:id" element={<ProcurementDetailPage />} />
              <Route path="/radar-compras/recursos" element={<ProcurementResourcesPage />} />
              <Route path="/radar-compras/sector/:sector" element={<ProcurementExplorerPage />} />
              <Route path="/radar-compras/institucion/:institution" element={<ProcurementExplorerPage />} />
              <Route path="/tramites" element={<TramitesHomePage />} />
              <Route path="/tramites/explorar" element={<TramitesExplorerPage />} />
              <Route path="/tramites/:id" element={<TramiteDetailPage />} />
              <Route path="/tramites/recursos" element={<TramitesRecursosPage />} />
              <Route path="/tramites/comparar" element={<TramitesComparadorPage />} />
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
