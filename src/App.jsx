import { HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Closing from './components/Closing';
import Footer from './components/Footer';
import PerformanceWidget from './components/PerformanceWidget';

function AppContent() {
  const { i18n } = useTranslation();
  return (
    <>
      <SEO lang={i18n.language} />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Closing />
        <Contact />
      </main>
      <Footer />
      <PerformanceWidget />
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <AppContent />
    </HelmetProvider>
  );
}
