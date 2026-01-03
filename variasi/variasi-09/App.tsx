import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import MiddleCTA from './components/MiddleCTA';
import SocialProof from './components/SocialProof';
import FacilitiesAndBonus from './components/FacilitiesAndBonus';
import Guarantee from './components/Guarantee';
import RegistrationForm from './components/RegistrationForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <Hero />
        <PainPoints />
        <Solution />
        <MiddleCTA />
        <SocialProof />
        <FacilitiesAndBonus />
        <Guarantee />
        <RegistrationForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;