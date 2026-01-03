import React from 'react';
import { Calendar, Clock, MapPin, Tag } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative bg-primary text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1434031213662-89319739f36b?auto=format&fit=crop&q=80"
          alt="Library Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/95"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-24 max-w-5xl text-center">
        {/* Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
          Sudah Begadang Berbulan-bulan Tapi Naskah Jurnal Masih <span className="text-red-400 underline decoration-4 underline-offset-4">Ditolak</span> Karena Referensi Dianggap Lemah?
          <br />
          <span className="text-accent font-black underline decoration-amber-300 underline-offset-4">NotebookLM solusinya.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
          Jangan biarkan tesis atau disertasi Anda tertahan di meja reviewer. Temukan cara instan memetakan ratusan jurnal dunia untuk membangun argumentasi sekuat baja yang mustahil ditolak!
        </p>

        {/* Pricing */}
        <div className="mb-10 flex flex-col items-center justify-center gap-2">
          <span className="text-blue-300 line-through text-xl font-medium">Rp 499.000</span>
          <span className="text-5xl md:text-6xl font-extrabold text-accent tracking-tight drop-shadow-sm">
            Cuma Rp 149.000
          </span>
        </div>

        {/* CTA Button */}
        <div className="mb-4">
          <a
            href="#daftar"
            className="inline-block bg-accent hover:bg-amber-500 text-white text-xl md:text-2xl font-bold py-4 px-10 md:px-16 rounded-full shadow-[0_10px_30px_rgba(245,158,11,0.4)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.5)] transition-all transform hover:-translate-y-1 active:scale-95"
          >
            DAFTAR SEKARANG
          </a>
        </div>

        {/* Bonus Tag */}
        <div className="inline-flex items-center gap-2 bg-danger text-white px-4 py-2 rounded-lg font-bold text-sm md:text-base mb-8 shadow-lg animate-pulse-fast transform hover:scale-105 transition-transform duration-300">
          <Tag size={18} className="text-yellow-200" />
          BONUS: AKUN NOTEBOOKLM PRO SENILAI RP 309.000
        </div>

        {/* Event Details */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-blue-100 font-medium text-sm md:text-base bg-white/10 p-4 rounded-2xl backdrop-blur-sm inline-flex">
          <div className="flex items-center gap-2">
            <Calendar className="text-accent" size={20} />
            <span>Sabtu, 10 Januari 2026</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-blue-400/50"></div>
          <div className="flex items-center gap-2">
            <Clock className="text-accent" size={20} />
            <span>14.00 - 16.00 WIB</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-blue-400/50"></div>
          <div className="flex items-center gap-2">
            <MapPin className="text-accent" size={20} />
            <span>Zoom Meeting</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;