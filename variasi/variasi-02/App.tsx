import React from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Solution } from './components/Solution';
import { StrategyDetails } from './components/StrategyDetails';
import { Speaker } from './components/Speaker';
import { FacilitiesAndBonus } from './components/FacilitiesAndBonus';
import { RegistrationForm } from './components/RegistrationForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  const scrollToRegister = () => {
    const element = document.getElementById('daftar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Hero onRegisterClick={scrollToRegister} />
      <PainPoints />
      <Solution onRegisterClick={scrollToRegister} />
      <StrategyDetails />
      <Speaker />
      <FacilitiesAndBonus />
      <RegistrationForm />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;