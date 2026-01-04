import React, { useState, useEffect, Suspense } from 'react';
import { Header } from './components/Header';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { StrategyDetails } from './components/StrategyDetails';
import { MidCTA } from './components/MidCTA';
import { Speaker } from './components/Speaker';
import Testimonials from './components/Testimonials';
import { FacilitiesAndBonus } from './components/FacilitiesAndBonus';
import { FAQ } from './components/FAQ';
import { RegistrationForm } from './components/RegistrationForm';
import { FooterLogos } from './components/FooterLogos';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

const PrivacyPolicy = React.lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./components/TermsOfService'));

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');

    if (page === 'privacy-policy' || page === 'terms-of-service') {
      setCurrentPage(page);
    } else {
      setCurrentPage('home');
    }

    // Listen for popstate (back/forward button)
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page');
      if (pageParam === 'privacy-policy' || pageParam === 'terms-of-service') {
        setCurrentPage(pageParam);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle navigation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="?page="]');
      if (link) {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href) {
          const page = href.split('=')[1];
          window.history.pushState({}, '', href);
          setCurrentPage(page);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const scrollToRegister = () => {
    const element = document.getElementById('daftar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Render based on current page
  if (currentPage === 'privacy-policy') {
    return (
      <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
        <PrivacyPolicy />
      </Suspense>
    );
  }

  if (currentPage === 'terms-of-service') {
    return (
      <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
        <TermsOfService />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header onRegisterClick={scrollToRegister} />
      <PainPoints />
      <Solution onRegisterClick={scrollToRegister} />
      <MidCTA onRegisterClick={scrollToRegister} />
      <StrategyDetails />
      <Speaker />
      <Testimonials />
      <FacilitiesAndBonus />
      <FAQ />
      <RegistrationForm />
      <FooterLogos />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
