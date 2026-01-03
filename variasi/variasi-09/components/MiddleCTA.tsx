import React from 'react';
import { MousePointerClick } from 'lucide-react';

const MiddleCTA: React.FC = () => {
  return (
    <section className="py-16 bg-yellow-400 text-center px-6 relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-blue-950 mb-8 uppercase tracking-tight">
          Amankan Kursi Anda Sebelum Slot Ditutup!
        </h2>
        <a 
          href="#form-registrasi" 
          className="inline-flex items-center gap-3 bg-blue-950 text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-blue-900 hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-900/20"
        >
          DAFTAR SEKARANG
          <MousePointerClick className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default MiddleCTA;