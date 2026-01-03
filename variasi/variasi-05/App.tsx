import React from 'react';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import ResultSection from './components/ResultSection';
import SolutionSection from './components/SolutionSection';
import SpeakerSection from './components/SpeakerSection';
import FacilityBonusSection from './components/FacilityBonusSection';
import RegistrationForm from './components/RegistrationForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased text-gray-900 bg-white">
      <Hero />
      <PainSection />
      <ResultSection />
      <SolutionSection />
      <SpeakerSection />
      <FacilityBonusSection />
      <RegistrationForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;