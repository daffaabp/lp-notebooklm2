import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-[#1a365d] to-[#2b6cb0] text-white">
      <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Pricing Section */}
        <div className="mt-8 text-center">
           <div className="flex items-center justify-center gap-3">
              <span className="text-gray-300 text-lg md:text-xl line-through decoration-red-500/80 decoration-2">Rp 499.000</span>
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded uppercase">Hemat 75%</span>
           </div>
           <div className="text-5xl md:text-6xl font-extrabold text-white mt-1 tracking-tight drop-shadow-lg">
              Rp 149.000
           </div>
           {/* Bonus Badge */}
           <div className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border-2 border-yellow-400/50 text-yellow-200 px-4 py-2 rounded-full backdrop-blur-sm">
             <svg className="w-5 h-5 text-yellow-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
             </svg>
             <span className="text-sm md:text-base font-bold">Bonus: Akun Pro NotebookLM (Senilai Rp 309.000)</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

