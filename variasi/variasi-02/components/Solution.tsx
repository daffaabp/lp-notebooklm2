import React from 'react';
import { Button } from './Button';
import ComparisonChart from './ComparisonChart';

interface SolutionProps {
  onRegisterClick: () => void;
}

export const Solution: React.FC<SolutionProps> = ({ onRegisterClick }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Kabar Baiknya: Riset Bisa Menyenangkan Lagi!</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Bayangkan Anda memiliki asisten riset jenius yang sudah membaca semua jurnal Anda, tidak pernah salah kutip, dan siap menjawab dalam hitungan detik.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
           {['Literasi Otomatis (60% Faster)', 'Temukan Celah Riset', 'Draf Publikasi Terarah', 'Mental Lebih Stabil'].map((item, idx) => (
             <div key={idx} className="bg-violet-50 text-primary font-bold p-6 rounded-xl text-center flex items-center justify-center border border-violet-100">
               {item}
             </div>
           ))}
        </div>

        <div className="flex flex-col items-center">
           <ComparisonChart />
        </div>

        <div className="text-center mt-12">
          <Button onClick={onRegisterClick}>DAFTAR SEKARANG</Button>
        </div>
      </div>
    </section>
  );
};

