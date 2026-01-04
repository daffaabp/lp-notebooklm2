import React from 'react';

const FacilityBonusSection: React.FC = () => {
  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-[#202124]">
          Apa Saja Yang Bakal Kamu Dapetin?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Facilities Column */}
          <div className="bg-[#f8f9fa] rounded-3xl p-8 md:p-12 border-2 border-gray-100 shadow-sm flex flex-col">
            <h3 className="text-2xl font-extrabold text-[#0d47a1] mb-8 flex items-center gap-3">
              <span className="bg-[#e8f0fe] p-2 rounded-lg text-2xl">🎓</span> 
              Fasilitas Peserta
            </h3>
            
            <ul className="space-y-6 flex-1">
              <li className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-[#1a73e8]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-gray-700">E-Sertifikat 12 JP</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-[#1a73e8]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-gray-700">Rekaman Video Full HD</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm text-[#1a73e8]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-gray-700">Join Grup Eksklusif Peneliti</span>
              </li>
            </ul>
          </div>

          {/* Bonus Column */}
          <div className="bg-gradient-to-br from-[#fff8e1] to-[#fff3cd] rounded-3xl p-8 md:p-12 border-2 border-[#ffc107] shadow-lg relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 bg-[#d93025] text-white text-xs font-bold px-4 py-2 rounded-bl-xl uppercase tracking-wider">
              Limited Offer
            </div>
            
            <h3 className="text-2xl font-extrabold text-[#b45309] mb-2 flex items-center gap-3">
              <span className="text-3xl">🎁</span> 
              BONUS SPESIAL
            </h3>
            <p className="text-[#b45309] font-bold opacity-80 mb-8 ml-10">Senilai Rp 799.000</p>
            
            <ul className="space-y-6 flex-1">
              <li className="bg-white/60 p-4 rounded-xl flex items-start gap-4">
                <span className="text-2xl">📘</span>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Ebook Materi Prompting</h4>
                  <p className="text-sm text-gray-700">Panduan copy-paste prompt khusus untuk penulisan karya ilmiah & jurnal.</p>
                </div>
              </li>
              <li className="bg-white/60 p-4 rounded-xl flex items-start gap-4">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Akun Pro NotebookLM & Gemini Pro</h4>
                  <p className="text-sm text-gray-700">Akses fitur premium untuk analisis dokumen tanpa batas.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="bg-[#e3f2fd] border border-blue-200 rounded-2xl p-6 text-center max-w-3xl mx-auto">
          <p className="text-[#0d47a1] text-sm md:text-base leading-relaxed">
            🛡️ <b>100% Money Back Guarantee:</b> Kalo dalam 60 menit pertama webinar kamu ngerasa nggak dapet manfaat apa-apa, uang pendaftaran kami kembalikan utuh!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FacilityBonusSection;