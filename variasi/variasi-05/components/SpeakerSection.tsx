import React from 'react';

const SpeakerSection: React.FC = () => {
  return (
    <section className="px-5 pb-20 md:pb-32">
      <div className="max-w-5xl mx-auto bg-white border border-gray-100 rounded-[2rem] p-10 md:p-16 shadow-xl flex flex-col md:flex-row items-center gap-10">
        <div className="w-48 h-48 md:w-60 md:h-60 rounded-3xl flex-shrink-0 overflow-hidden">
          <img 
            src="/speaker/arianto.avif" 
            alt="M. Arianto" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d47a1] mb-2">
            M. Arianto
          </h2>
          <p className="text-xl font-bold text-gray-800 mb-4">
            AI Engineer dan Researcher
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-4 italic">
            "Dengan pengalaman 10+ tahun dan 195+ proyek AI, saya siap membahas tips menguasai AI, teknik penulisan, dan research methodology sebagai AI Engineer, Researcher, dan Mentor profesional."
          </p>
          <p className="text-base text-[#0d47a1] font-semibold">
            kelasinovatif.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;