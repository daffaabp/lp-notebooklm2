import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Button } from './Button';

interface HeroProps {
  onRegisterClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
    <header className="bg-gradient-to-br from-primary to-secondary text-white pt-24 pb-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="container max-w-5xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Tesis/Disertasi Sering Bikin <span className="text-amber-300 bg-white/30 px-2 rounded font-black">Buntu dan Frustasi?</span> <br className="hidden md:block"/>
          <span className="text-white font-black underline decoration-amber-300 underline-offset-4">NotebookLM</span> adalah Jawaban Cerdas untuk Peneliti Modern!
        </h1>
        <p className="text-lg md:text-xl text-violet-100 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          Lupakan kebingungan berkepanjangan di depan tumpukan jurnal. Dengan <span className="font-bold text-amber-200 bg-white/20 px-1 rounded">NotebookLM</span>, Anda bisa memetakan ratusan jurnal, menemukan <span className="italic font-semibold mx-1 text-white">(novelty)</span> riset, dan menyelesaikan draf artikel ilmiah <span className="font-bold text-amber-200 bg-white/20 px-1 rounded">10x lebih efisien</span>—semua tanpa risiko halusinasi AI.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-2 mb-10">
           <span className="text-violet-200 line-through text-xl">Rp 499.000</span>
           <span className="text-4xl md:text-5xl font-extrabold text-highlight drop-shadow-md">Cuma Rp 149.000</span>
        </div>
        
        <div className="flex justify-center">
          <Button onClick={onRegisterClick} className="text-xl px-10 py-5">
            DAFTAR SEKARANG
          </Button>
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

