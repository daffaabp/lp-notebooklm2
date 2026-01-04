import React from 'react';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import ResultSection from './components/ResultSection';
import SolutionSection from './components/SolutionSection';
import FeaturesSection from './components/FeaturesSection';
import SpeakerSection from './components/SpeakerSection';
import FacilityBonusSection from './components/FacilityBonusSection';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import PricingSection from './components/PricingSection';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="antialiased text-gray-900 bg-white">
      <Hero />
      <PainSection />
      <ResultSection />
      <SolutionSection />
      <FeaturesSection />
      <SpeakerSection />
      <FacilityBonusSection />
      <Testimonials />
      <FAQ />
      <PricingSection />
      <RegistrationForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;