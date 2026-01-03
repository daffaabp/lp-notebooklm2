import React, { useState, useEffect, Suspense } from 'react';
import Header from './components/Header';
import FacebookPixel from './components/FacebookPixel';

const PainPoints = React.lazy(() => import('./components/PainPoints').then(module => ({ default: module.default || module.PainPoints })));
const Solution = React.lazy(() => import('./components/Solution').then(module => ({ default: module.default || module.Solution })));
const NotebookLMResults = React.lazy(() => import('./components/NotebookLMResults').then(module => ({ default: module.default || module.NotebookLMResults })));
const Speaker = React.lazy(() => import('./components/Speaker').then(module => ({ default: module.default || module.Speaker })));
const BonusFasilitas = React.lazy(() => import('./components/BonusFasilitas').then(module => ({ default: module.BonusFasilitas })));
const Guarantee = React.lazy(() => import('./components/Guarantee').then(module => ({ default: module.default || module.Guarantee })));
const Registration = React.lazy(() => import('./components/Registration').then(module => ({ default: module.default || module.Registration })));
const Footer = React.lazy(() => import('./components/Footer').then(module => ({ default: module.default || module.Footer })));
const FAQ = React.lazy(() => import('./components/FAQ'));
const FooterLogos = React.lazy(() => import('./components/FooterLogos'));
const WhatsAppButton = React.lazy(() => import('./components/WhatsAppButton').then(module => ({ default: module.default || module.WhatsAppButton })));
const PrivacyPolicy = React.lazy(() => import('./components/PrivacyPolicy').then(module => ({ default: module.PrivacyPolicy })));
const TermsOfService = React.lazy(() => import('./components/TermsOfService').then(module => ({ default: module.TermsOfService })));
const Testimonials = React.lazy(() => import('./components/Testimonials').then(module => ({ default: module.default || module.Testimonials })));
const ThankYouPage = React.lazy(() => import('./components/ThankYouPage'));

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (currentPath === '/privacy-policy') {
    return (
      <div className="bg-slate-50 font-sans text-slate-900 min-h-screen">
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
          <PrivacyPolicy />
        </Suspense>
      </div>
    );
  }

  if (currentPath === '/terms-of-service') {
    return (
      <div className="bg-slate-50 font-sans text-slate-900 min-h-screen">
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
          <TermsOfService />
        </Suspense>
      </div>
    );
  }

  if (currentPath === '/thank-you' || window.location.search.includes('page=thank-you')) {
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
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<div className="py-20 text-center">Loading content...</div>}>
          <PainPoints />
          <Solution />
          <NotebookLMResults />
          <Speaker />
          <BonusFasilitas />
          <Guarantee />
          <Testimonials />
          <Registration />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <FAQ />
        <FooterLogos />
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </div>
  );
};

export default App;