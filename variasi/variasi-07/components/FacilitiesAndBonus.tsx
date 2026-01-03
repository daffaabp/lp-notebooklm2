import React from 'react';

const FacilitiesAndBonus: React.FC = () => {
  return (
    <section className="py-24 px-5 bg-white border-b border-gray-100">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Kolom Fasilitas */}
        <div>
          <div className="inline-block bg-blue-100 text-[#002147] font-bold px-4 py-1 rounded-full text-sm mb-4">
            APA YANG ANDA DAPATKAN
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-8">
            Fasilitas Lengkap untuk Mendukung Pembelajaran Anda
          </h2>
          <ul className="space-y-6">
            <li className="flex items-center p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl mr-5 flex-shrink-0">
                📜
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1a1a1a]">E-Sertifikat 12 JP</h3>
                <p className="text-gray-600 text-sm">Bukti kompetensi profesional Anda.</p>
              </div>
            </li>
            <li className="flex items-center p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-2xl mr-5 flex-shrink-0">
                🎥
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1a1a1a]">Rekaman Video Webinar</h3>
                <p className="text-gray-600 text-sm">Akses seumur hidup untuk dipelajari ulang.</p>
              </div>
            </li>
            <li className="flex items-center p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl mr-5 flex-shrink-0">
                👥
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#1a1a1a]">Join Grup Eksklusif Peneliti</h3>
                <p className="text-gray-600 text-sm">Jejaring dengan praktisi dan peneliti lain.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Kolom Bonus Spesial */}
        <div className="relative mt-8 md:mt-0">
          {/* Decorative background element */}
          <div className="absolute inset-0 bg-[#c5a059] transform rotate-3 rounded-2xl opacity-30 translate-x-2 translate-y-2"></div>
          
          <div className="relative bg-[#002147] text-white p-8 md:p-10 rounded-2xl shadow-2xl overflow-hidden">
            {/* Ribbons */}
            <div className="absolute top-6 -right-12 bg-[#c5a059] text-[#002147] font-bold py-1 px-12 transform rotate-45 shadow-md text-sm border-2 border-white">
              LIMITED
            </div>

            <h3 className="text-[#c5a059] font-bold tracking-widest text-sm uppercase mb-2">Hanya Untuk Pendaftar Hari Ini</h3>
            <h2 className="text-3xl font-bold mb-1">BONUS SPESIAL</h2>
            <p className="text-blue-200 mb-8 text-lg font-light">Total Nilai <span className="line-through decoration-red-500 decoration-2">Rp 799.000</span> (GRATIS)</p>
            
            <div className="space-y-6">
              <div className="flex items-start bg-[#33475b] bg-opacity-40 p-4 rounded-lg border border-blue-800">
                <span className="text-3xl mr-4 mt-1">📘</span>
                <div>
                  <h4 className="font-bold text-lg text-white mb-1">Ebook Materi Prompting</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">Panduan lengkap teknik prompting khusus untuk Penulisan Karya Ilmiah yang efektif.</p>
                </div>
              </div>

              <div className="flex items-start bg-[#33475b] bg-opacity-40 p-4 rounded-lg border border-blue-800">
                <span className="text-3xl mr-4 mt-1">🤖</span>
                <div>
                  <h4 className="font-bold text-lg text-white mb-1">Akun Pro NotebookLM & Gemini Pro</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">Akses ke fitur AI premium Google untuk analisis data tanpa batas.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xs text-blue-200 italic mb-2">*Ketersediaan bonus terbatas untuk kuota tertentu</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FacilitiesAndBonus;