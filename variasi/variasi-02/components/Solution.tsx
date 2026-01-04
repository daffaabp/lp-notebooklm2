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
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Stop Membaca Manual! Biarkan AI "Melahap" Ratusan Jurnal Anda.
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            NotebookLM membantu Anda menemukan <span className="italic font-semibold">Novelty</span> dan <span className="italic font-semibold">Research Gap</span> yang tersembunyi. Dapatkan poin-poin utama dari ratusan jurnal secara instan, mengubah kebingungan menjadi struktur riset yang kokoh tanpa harus membaca satu per satu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {['Sintesis Otomatis', 'Temukan Gap Riset', 'Podcast dari Jurnal', 'Bebas Halusinasi'].map((item, idx) => (
            <div key={idx} className="bg-violet-50 text-primary font-bold p-6 rounded-xl text-center flex items-center justify-center border border-violet-100">
              {item}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <ComparisonChart />
        </div>
      </div>
    </section>
  );
};

