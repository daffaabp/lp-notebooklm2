import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-br from-[#002147] to-[#33475b] text-white py-20 px-5 text-center">
      <div className="max-w-[1100px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Tumpukan Laporan Ratusan Halaman Menghambat Keputusan Anda? <br />
          <span className="text-[#c5a059] font-black underline decoration-yellow-400 underline-offset-4">
            NotebookLM solusinya.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 font-light">
          Miliki "Asisten Intelektual" Pribadi yang Menguasai Seluruh Data Perusahaan Anda. Taklukkan Ledakan Informasi dan Ambil Keputusan Strategis dengan Presisi Mutlak.
        </p>
        
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="text-3xl font-bold text-white mb-2">
            Hanya Rp 149.000 <span className="text-lg line-through text-gray-400 ml-2">Rp 499.000</span>
          </div>
        </div>
        
        <a 
          href="#register" 
          className="inline-block bg-[#c5a059] hover:bg-[#b08d4a] text-white py-4 px-10 text-xl font-bold rounded-lg shadow-lg transform transition hover:-translate-y-1 duration-300"
        >
          DAFTAR SEKARANG
        </a>
        
        <p className="mt-6 font-semibold text-yellow-300 text-sm md:text-base animate-pulse">
          🎁 BONUS KHUSUS: Akun NotebookLM Pro senilai Rp 309.000 untuk pendaftar hari ini!
        </p>
      </div>
    </header>
  );
};

export default Header;