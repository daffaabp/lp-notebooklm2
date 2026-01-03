import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 px-6 relative overflow-hidden">
      {/* Abstract background element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight">
          Stres Bikin Laporan Tiap Akhir Pekan? Ubah Ratusan Dokumen Menjadi Draf Matang dalam Menit Menggunakan <span className="text-yellow-400">NotebookLM</span>.
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
          Rebut kembali 2,5 jam waktu kerja Anda setiap hari. Jadikan AI sebagai "Asisten Intelektual" yang memberikan jawaban setia pada data Anda, bukan sekadar menebak informasi dari internet.
        </p>
        
        <div className="mb-10 inline-flex flex-col md:flex-row items-center justify-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
          <div className="text-center md:text-left">
            <p className="text-sm uppercase tracking-widest opacity-80 mb-1">Investasi Pengetahuan</p>
            <div className="flex items-center gap-4">
              <span className="text-2xl line-through text-red-400 font-medium">Rp499.000</span>
              <span className="text-4xl md:text-5xl font-black text-yellow-400">Rp149.000</span>
            </div>
          </div>
          <div className="hidden md:block w-px h-16 bg-white/20 mx-4"></div>
           <div className="text-center md:text-left">
              <p className="text-lg font-bold">🎁 Bonus Spesial Hari Ini:</p>
              <p className="text-md">Akun <span className="text-yellow-400 font-bold uppercase">NotebookLM Pro</span> Senilai Rp309.000</p>
          </div>
        </div>

        <div className="flex justify-center">
            <a href="#daftar" className="group relative inline-flex items-center justify-center bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-12 py-5 rounded-xl text-2xl font-black transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(234,179,8,0.3)] uppercase tracking-wide">
                DAFTAR SEKARANG
                <span className="absolute inset-0 rounded-xl ring-4 ring-yellow-400/30 group-hover:ring-yellow-400/50 transition-all"></span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
