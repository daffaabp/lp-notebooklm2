import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { Testimonials } from './components/Testimonials';
import { RegistrationForm } from './components/RegistrationForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { FacilitiesAndBonus } from './components/FacilitiesAndBonus';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <PainPoints />
      <Solution />
      <Testimonials />
      <FacilitiesAndBonus />
      <FAQ />
      <RegistrationForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;