import React from 'react';
import { Calendar, Clock, MapPin, Gift, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface HeaderProps {
  onRegisterClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRegisterClick }) => {
  return (
    <header className="bg-gradient-to-br from-primary to-secondary text-white pt-24 pb-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="container max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-block bg-highlight text-black px-4 py-2 rounded-full font-bold text-sm mb-6 animate-pulse">
          🔥 Hanya untuk 30 Pendaftar Pertama
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Data Riset Menumpuk, Tapi <br className="hidden md:block"/>
          <span className="text-violet-200 italic">Tulisan Tak Kunjung Jadi?</span>
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-highlight mb-6">
          NotebookLM Ubah Tumpukan PDF Jadi Draf Tulisan Terstruktur <span className="italic">Tanpa Pusing.</span>
        </p>
        <p className="text-lg md:text-xl text-violet-100 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          Berhenti membuang waktu <span className="italic text-white font-medium">menyalin kutipan satu per satu</span>. Biarkan AI menyatukan (<span className="font-bold text-white">sintesis</span>) puluhan jurnal menjadi argumen yang solid, sehingga Anda tinggal fokus <span className="font-bold text-white italic">memperajam analisis</span>, bukan terjebak teknis.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4">
          <Button onClick={onRegisterClick} variant="success" className="text-xl px-10 py-5 group">
            DAFTAR SEKARANG
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="flex items-center gap-2 text-highlight font-semibold animate-bounce mt-2">
            <Gift className="w-5 h-5" />
            Bonus Akun NotebookLM Pro senilai Rp. 309.000
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12 text-violet-100 text-sm md:text-base font-medium">
          <div className="flex items-center gap-2"><Calendar className="w-5 h-5" /> Sabtu, 10 Januari 2026</div>
          <div className="flex items-center gap-2"><Clock className="w-5 h-5" /> 14.00 - 16.00 WIB</div>
          <div className="flex items-center gap-2"><MapPin className="w-5 h-5" /> Zoom Meeting</div>
        </div>
      </div>
    </header>
  );
};

