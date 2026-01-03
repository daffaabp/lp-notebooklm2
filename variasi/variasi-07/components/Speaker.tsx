import React from 'react';

const Speaker: React.FC = () => {
  return (
    <section className="py-20 px-5 bg-white border-t border-gray-100">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#002147] mb-10">Dibimbing Oleh Pakar</h2>
        
        <div className="relative inline-block mb-6">
           {/* Placeholder for Speaker Image */}
           <img 
            src="https://picsum.photos/200/200?grayscale" 
            alt="Andi Kurniawan" 
            className="w-40 h-40 rounded-full object-cover border-4 border-[#c5a059] shadow-xl mx-auto"
           />
           <div className="absolute bottom-0 right-0 bg-[#002147] text-white text-xs px-2 py-1 rounded-full border-2 border-white">
             Expert
           </div>
        </div>
        
        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">Andi Kurniawan, M.M., M.B.A.</h3>
        <p className="text-[#c5a059] font-bold uppercase tracking-wide text-sm mb-6">
          Pakar Manajemen Pengetahuan & Strategis AI
        </p>
        <p className="text-gray-600 leading-relaxed text-lg max-w-xl mx-auto">
          Telah membantu lebih dari 100 eksekutif mengadopsi teknologi AI untuk meningkatkan efisiensi operasional perusahaan.
        </p>
      </div>
    </section>
  );
};

export default Speaker;