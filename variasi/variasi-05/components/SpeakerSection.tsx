import React from 'react';

const SpeakerSection: React.FC = () => {
  return (
    <section className="px-5 pb-20 md:pb-32">
      <div className="max-w-5xl mx-auto bg-white border border-gray-100 rounded-[2rem] p-10 md:p-16 shadow-xl flex flex-col md:flex-row items-center gap-10">
        <div className="w-48 h-48 md:w-60 md:h-60 bg-gray-200 rounded-3xl flex-shrink-0 bg-[url('https://picsum.photos/400/400')] bg-cover bg-center">
          {/* Placeholder Image using CSS background */}
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d47a1] mb-2">
            Narasumber Spesialis
          </h2>
          <p className="text-xl font-bold text-gray-800 mb-6">
            Ahli Strategi Riset Digital & AI Akademik
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Telah mendampingi ribuan mahasiswa dalam membangun sistem riset yang efisien, aman secara privasi, dan sesuai dengan etika integritas akademik kampus [20, 21].
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;