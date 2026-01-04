import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <section className="bg-[#f8f9fa] pt-16 px-5 text-center">
        <div className="max-w-4xl mx-auto">
            {/* Event Schedule Box */}
            <div className="bg-white border-2 border-[#1a73e8] rounded-2xl shadow-lg p-6 md:p-8 mb-12 transform hover:scale-[1.01] transition-transform duration-300">
              <h3 className="text-xl md:text-2xl font-extrabold text-[#0d47a1] mb-6 uppercase tracking-wider">
                🗓️ Jadwal Pelaksanaan Live
              </h3>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-gray-800">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-3 rounded-full text-[#1a73e8]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 font-bold uppercase">Tanggal</p>
                    <p className="font-bold text-lg">Sabtu, 10 Januari 2026</p>
                  </div>
                </div>

                <div className="hidden md:block w-px h-12 bg-gray-200"></div>

                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-3 rounded-full text-[#1a73e8]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 font-bold uppercase">Waktu</p>
                    <p className="font-bold text-lg">14.00 - 16.00 WIB</p>
                  </div>
                </div>

                <div className="hidden md:block w-px h-12 bg-gray-200"></div>

                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-3 rounded-full text-[#1a73e8]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500 font-bold uppercase">Lokasi</p>
                    <p className="font-bold text-lg">Zoom Meeting</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emotional Hook */}
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#202124] mb-4 leading-tight">
                Mau Sampai Kapan Skripsi Kamu <br className="hidden md:block" />
                <span className="text-[#d93025] underline decoration-4 decoration-[#f9ab00]">Stuck Di Situ-Situ Aja?</span>
              </h2>
            </div>

            {/* Pricing Details */}
            <div className="flex flex-col items-center justify-center gap-2 mb-4">
                <div className="bg-red-100 text-red-600 font-bold px-4 py-1 rounded-full mb-2 text-sm uppercase tracking-wide animate-pulse">
                  Hemat 80% • Slot Terbatas
                </div>
                <span className="text-xl md:text-2xl text-gray-500 line-through decoration-red-400 decoration-2">
                    Harga Normal Rp 499.000
                </span>
                <span className="text-5xl md:text-6xl font-extrabold text-[#16a34a] drop-shadow-sm tracking-tight">
                    Hanya Rp 99.000
                </span>
            </div>
        </div>
    </section>
  );
};

export default PricingSection;