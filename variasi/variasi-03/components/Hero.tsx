import React from 'react';
import { Tag } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative bg-primary text-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1434031213662-89319739f36b?auto=format&fit=crop&q=80"
          alt="Library Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/95"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-20 max-w-5xl text-center">
        
        {/* Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 tracking-tight">
          Sudah Begadang Berbulan-bulan Tapi Riset Masih <span className="text-red-400 underline decoration-4 underline-offset-4">Stuck Cari Ide</span>? Gunakan <span className="text-accent">NotebookLM</span> untuk Perkuat Novelty & Bedah Alur Pikir Referensi!
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
          Inilah asisten riset yang Anda butuhkan. Sanggup <strong>membaca 300 jurnal PDF dalam 1 menit</strong>, otomatis menemukan celah riset, <strong>membedah struktur berpikir penulis</strong>, dan langsung menunjukkan halaman aslinya sebagai bukti. Tulisan jadi valid, dosen senang, wisuda tenang.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center justify-center gap-6">
          <a
            href="#daftar"
            className="inline-block bg-green-600 hover:bg-green-700 text-white text-xl md:text-2xl font-bold py-4 px-10 md:px-16 rounded-full shadow-[0_10px_30px_rgba(22,163,74,0.4)] hover:shadow-[0_15px_40px_rgba(22,163,74,0.5)] transition-all transform hover:-translate-y-1 active:scale-95"
          >
            DAFTAR SEKARANG
          </a>

          {/* Bonus Tag Moved Below CTA */}
          <div className="inline-flex items-center gap-2 bg-white/10 text-yellow-300 px-4 py-2 rounded-lg font-semibold text-sm md:text-base border border-white/10">
            <Tag size={18} />
            BONUS: AKUN NOTEBOOKLM PRO SENILAI RP 309.000
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;