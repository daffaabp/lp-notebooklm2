import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solutions from './components/Solutions';
import Results from './components/Results';
import FacilitiesAndBonus from './components/FacilitiesAndBonus';
import SocialProof from './components/SocialProof';
import Guarantee from './components/Guarantee';
import RegistrationForm from './components/RegistrationForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <PainPoints />
        <Solutions />
        <Results />
        <FacilitiesAndBonus />
        <SocialProof />
        <Guarantee />
        <RegistrationForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;