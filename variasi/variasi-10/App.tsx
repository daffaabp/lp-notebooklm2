import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import Outcome from './components/Outcome';
import Speaker from './components/Speaker';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import RegistrationForm from './components/RegistrationForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Facilities from './components/Facilities';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      <main className="flex-grow">
        <Hero />
        <PainPoints />
        <Solution />
        <Outcome />
        <Facilities />
        <Speaker />
        <Testimonials />
        <Guarantee />
        <RegistrationForm />
        <FAQ />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;