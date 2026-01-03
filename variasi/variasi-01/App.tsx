import React, { useState, useEffect, Suspense } from 'react';
import Hero from './components/Hero';
import FacebookPixel from './components/FacebookPixel';
const PainPoints = React.lazy(() => import('./components/PainPoints'));
const Solution = React.lazy(() => import('./components/Solution'));
const MidCTA = React.lazy(() => import('./components/MidCTA'));
const Speaker = React.lazy(() => import('./components/Speaker'));
const Testimonials = React.lazy(() => import('./components/Testimonials'));
const BonusFasilitas = React.lazy(() => import('./components/BonusFasilitas'));
const RegistrationForm = React.lazy(() => import('./components/RegistrationForm'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const Footer = React.lazy(() => import('./components/Footer'));
const FooterLogos = React.lazy(() => import('./components/FooterLogos'));
const WhatsAppButton = React.lazy(() => import('./components/WhatsAppButton'));
const PrivacyPolicy = React.lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./components/TermsOfService'));
const ThankYouPage = React.lazy(() => import('./components/ThankYouPage'));

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');

    if (page === 'privacy-policy' || page === 'terms-of-service' || page === 'thank-you') {
      setCurrentPage(page);
    } else {
      setCurrentPage('home');
    }

    // Listen for popstate (back/forward button)
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page');
      if (pageParam === 'privacy-policy' || pageParam === 'terms-of-service' || pageParam === 'thank-you') {
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

  if (currentPage === 'thank-you') {
    return (
      <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
        <FacebookPixel />
        <ThankYouPage />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <FacebookPixel />
      <Hero />
      <Suspense fallback={<div className="py-20 text-center">Loading content...</div>}>
        <PainPoints />
        <Solution />
        <MidCTA />
        <Speaker />
        <Testimonials />
        <BonusFasilitas />
        <RegistrationForm />
        <FAQ />
        <FooterLogos />
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </div>
  );
};

export default App;