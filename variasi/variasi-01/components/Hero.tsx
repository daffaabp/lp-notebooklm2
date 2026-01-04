import React from 'react';
import { ArrowRight, Calendar, Clock, Video } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="bg-gradient-to-br from-[#1a365d] to-[#2b6cb0] text-white py-16 px-4 text-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center pt-3" style={{ transform: 'translateY(-20px)' }}>
        {/* Pain-focused Hook & Localized Terminology - Semi Extreme */}
        {/* Masalah utama langsung ke solusi; to the point & relatable */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-sm">
        Dikejar deadline, baca ratusan jurnal, tapi poin utama sering terlewat? <span className="text-green-300">NotebookLM bantu Anda rangkum inti jurnal dalam hitungan menit.</span>
        </h1>
        
        <p className="text-xl md:text-2xl mt-6 text-blue-100 italic max-w-3xl mx-auto leading-relaxed">
          Mulai gunakan <strong>NotebookLM</strong> dan rasakan kemudahan menemukan insight penting dari jurnal tanpa keraguan. Percayakan proses rangkum otomatis ini untuk membantu Anda mempersiapkan tugas atau riset secara efisien.
        </p>

        {/* Webinar Details Card - Compact Version */}
        {/* <div className="mt-10 inline-block bg-white/10 backdrop-blur-md rounded-xl md:rounded-full px-6 py-4 border border-white/20 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-blue-50">
             <div className="flex items-center gap-2.5">
                <Calendar className="w-5 h-5 text-orange-400" />
                <span className="font-semibold text-white text-sm md:text-base">Sabtu, 10 Jan 2026</span>
             </div>
             
             <div className="hidden md:block w-px h-5 bg-white/20"></div>

             <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-orange-400" />
                <span className="font-semibold text-white text-sm md:text-base">14.00 - 16.00 WIB</span>
             </div>
             
             <div className="hidden md:block w-px h-5 bg-white/20"></div>

             <div className="flex items-center gap-2.5">
                <Video className="w-5 h-5 text-orange-400" />
                <span className="font-semibold text-white text-sm md:text-base">Live via Zoom Meeting</span>
             </div>
          </div>
        </div> */}

        {/* Bonus Badge - Above CTA Button */}
        <div className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border-2 border-yellow-400/50 text-yellow-200 px-4 py-2 rounded-full backdrop-blur-sm">
          <svg className="w-5 h-5 text-yellow-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
          <span className="text-sm md:text-base font-bold">Bonus: Akun Pro NotebookLM (Senilai Rp 309.000)</span>
        </div>

        {/* CTA Button */}
        <div className="mt-6 flex flex-col items-center w-full">
          <a 
            href="#register" 
            className="w-full md:w-auto group bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold py-5 px-12 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 flex justify-center items-center gap-3 border-b-4 border-orange-700"
          >
            DAFTAR SEKARANG
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-4 text-sm text-blue-200 bg-blue-900/40 px-4 py-2 rounded-lg backdrop-blur-sm border border-blue-500/30 flex items-center gap-2">
            🔥 Terbatas untuk 20 orang pendaftar pertama
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;