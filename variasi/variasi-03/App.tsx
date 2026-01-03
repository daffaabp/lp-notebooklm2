import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import FacilitiesAndBonus from './components/FacilitiesAndBonus';
import Testimonials from './components/Testimonials';
import RegisterSection from './components/RegisterSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function App() {
  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyNav(true);
      } else {
        setShowStickyNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar isVisible={showStickyNav} />
      
      <main className="flex-grow">
        <Hero />
        <PainPoints />
        <Solution />
        <FacilitiesAndBonus />
        <Testimonials />
        <RegisterSection />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}