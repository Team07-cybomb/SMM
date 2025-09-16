import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { PricingPage } from './components/PricingPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <HomePage setCurrentPage={setCurrentPage} />; // Services are on home page
      case 'case-studies':
        return <HomePage setCurrentPage={setCurrentPage} />; // Case studies are on home page
      case 'pricing':
        return <PricingPage setCurrentPage={setCurrentPage} />;
      case 'blog':
        return <ContactPage />; // Blog page redirects to contact for now
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}