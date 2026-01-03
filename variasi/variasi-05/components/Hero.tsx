import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="bg-gradient-to-br from-[#0d47a1] to-[#1a73e8] text-white text-center py-20 px-5 md:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Hook / Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
          Baru Baca Judul Jurnal Aja Udah Ngantuk? <br className="hidden md:block" />
          <span className="block mt-3 text-[#f9ab00]">
            Ubah ribuan halaman jurnal jadi ringkasan seru &amp; mudah dipahami dengan <span className="font-black underline decoration-white underline-offset-4">NotebookLM</span>!
          </span>
        </h1>
        
        {/* Sub-headline */}
        <p className="text-lg md:text-2xl opacity-90 max-w-4xl mx-auto mb-10 font-normal leading-relaxed">
          Ubah ratusan jurnal "berat" jadi obrolan podcast yang seru didengerin sambil rebahan. 
          Selesaikan draf skripsi 10x lebih cepat dengan bantuan asisten pintar yang nggak bakal ngarang jawaban!
        </p>
        
        {/* Price */}
        <div className="flex flex-col items-center justify-center gap-2 mb-10">
          <span className="text-xl md:text-2xl text-white/70 line-through decoration-red-400 decoration-2">
            Harga Normal Rp 499.000
          </span>
          <span className="text-5xl md:text-7xl font-extrabold text-[#f9ab00] drop-shadow-sm">
            Hanya Rp 99.000
          </span>
        </div>

        {/* CTA Button */}
        <a 
          href="#daftar" 
          className="inline-block bg-[#f9ab00] text-white py-5 px-10 md:py-6 md:px-20 rounded-full text-xl md:text-2xl font-extrabold uppercase shadow-[0_10px_25px_rgba(249,171,0,0.4)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 mb-8"
        >
          DAFTAR SEKARANG
        </a>

        {/* Bonus Badge */}
        <br />
        <div className="inline-block font-bold bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl border-2 border-dashed border-[#f9ab00] text-sm md:text-lg">
          🎁 BONUS LANGSUNG: Akun NotebookLM Pro (Senilai Rp 309.000)
        </div>
        
        {/* Event Details */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-lg font-semibold">
          <p>📅 10 Januari 2026</p>
          <span className="hidden md:inline">|</span>
          <p>🕒 14.00 - 16.00 WIB</p>
          <span className="hidden md:inline">|</span>
          <p>📍 Live via Zoom Meeting</p>
        </div>
      </div>
    </header>
  );
};

export default Hero;