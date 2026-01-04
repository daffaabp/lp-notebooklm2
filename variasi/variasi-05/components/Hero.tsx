import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="bg-gradient-to-br from-[#0d47a1] to-[#1a73e8] text-white text-center py-20 px-5 md:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Hook / Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
          Baru Baca Judul Jurnal Aja Udah Ngantuk? <br className="hidden md:block" />
          Berhenti Nyiksa Diri Begadang Cuma Buat Rangkum PDF!
          <br className="my-4 block" />
          <span className="bg-[#f9ab00] text-[#202124] px-4 py-1 inline-block transform -rotate-1 rounded-lg shadow-lg mt-2">
            Pakai NotebookLM
          </span>
        </h1>
        
        {/* Sub-headline */}
        <p className="text-lg md:text-2xl opacity-90 max-w-5xl mx-auto mb-10 font-normal leading-relaxed text-white">
          Sulap tumpukan PDF jurnal jadi <span className="font-bold">Podcast Audio</span> yang enak didengar, rampungkan draf skripsi <span className="font-bold">10x lebih cepat</span> tanpa buntu ide, dan generate <span className="font-bold">Slide Presentasi Sidang</span> otomatis dalam hitungan detik. Ini asisten riset cerdas yang <span className="font-bold">anti-halusinasi</span>—semua jawaban pasti ada sumber aslinya!
        </p>
        
        {/* CTA Button */}
        <a 
          href="#daftar" 
          className="inline-block bg-[#16a34a] text-white py-5 px-10 md:py-6 md:px-20 rounded-full text-xl md:text-2xl font-extrabold uppercase shadow-[0_10px_25px_rgba(22,163,74,0.4)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 mb-8"
        >
          DAFTAR SEKARANG
        </a>

        {/* Bonus Badge */}
        <br />
        <div className="inline-block font-bold bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl border-2 border-dashed border-[#16a34a] text-sm md:text-lg">
          🎁 BONUS Akun NotebookLM Pro (Senilai Rp 309.000)
        </div>
      </div>
    </header>
  );
};

export default Hero;