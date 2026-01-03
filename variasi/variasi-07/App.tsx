import React from 'react';
import Header from './components/Header';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import Speaker from './components/Speaker';
import Testimonials from './components/Testimonials';
import FacilitiesAndBonus from './components/FacilitiesAndBonus';
import RegistrationForm from './components/RegistrationForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      <Header />
      <PainPoints />
      <Solution />
      <Speaker />
      <Testimonials />
      <FacilitiesAndBonus />
      <RegistrationForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;