import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { NuqsAdapter } from 'nuqs/adapters/react-router/v6';
import Providers from './components/layout/Providers';
import { useEffect } from 'react';
import { ActiveRouteProvider } from './components/context/ActiveRouteContext/ActiveRouteContext';
import { forceChakraDarkTheme } from './utils/utils';

import AnnouncementModal from './components/common/AnnouncementModal/AnnouncementModal';
import SidebarLayout from './components/layout/SidebarLayout';
import LandingPage from './pages/LandingPage';
import CategoryPage from './pages/CategoryPage';
import ShowcasePage from './pages/ShowcasePage';
import FavoritesPage from './pages/FavoritesPage';
import SponsorsPage from './pages/SponsorsPage';
import ToolsPage from './pages/ToolsPage';
import Acquisition from './Acquisition';

// Clicom Pages
import Accueil from './pages/accueil';
import CreationSiteWebDesign from './pages/creation-site-web-design';
import DigitalisationCommerceLocal from './pages/digitalisation-commerce-local';
import PerformanceWebSEO from './pages/performance-web-seo';
import AutomatisationIAPME from './pages/automatisation-ia-pme';
import ConformiteRGPDAccessibilite from './pages/conformite-rgpd-accessibilite';
import Contact from './pages/contact';

function AppContent() {
  return (
    <>
      <Providers>
        <Acquisition />
        <Routes>
          {/* Clicom Routes */}
          <Route exact path="/accueil" element={<Accueil />} />
          <Route exact path="/creation-site-web-design" element={<CreationSiteWebDesign />} />
          <Route exact path="/digitalisation-commerce-local" element={<DigitalisationCommerceLocal />} />
          <Route exact path="/performance-web-seo" element={<PerformanceWebSEO />} />
          <Route exact path="/automatisation-ia-pme" element={<AutomatisationIAPME />} />
          <Route exact path="/conformite-rgpd-accessibilite" element={<ConformiteRGPDAccessibilite />} />
          <Route exact path="/contact" element={<Contact />} />
          
          {/* Original Routes */}
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/showcase" element={<ShowcasePage />} />
          <Route exact path="/sponsors" element={<SponsorsPage />} />
          <Route path="/tools/:toolId?" element={<ToolsPage />} />
          <Route
            path="/:category/:subcategory"
            element={
              <SidebarLayout>
                <CategoryPage />
              </SidebarLayout>
            }
          />

          <Route
            path="/favorites"
            element={
              <SidebarLayout>
                <FavoritesPage />
              </SidebarLayout>
            }
          />
        </Routes>
      </Providers>
    </>
  );
}

export default function App() {
  useEffect(() => {
    forceChakraDarkTheme();
  }, []);

  return (
    <Router>
      <NuqsAdapter>
        <ActiveRouteProvider>
          <AppContent />
          <AnnouncementModal />
        </ActiveRouteProvider>
      </NuqsAdapter>
    </Router>
  );
}
