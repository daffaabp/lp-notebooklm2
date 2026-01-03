import React from 'react';
import { User } from 'lucide-react';

const Speaker: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 uppercase text-center text-slate-900 tracking-wide">Narasumber Utama</h2>
        <div className="flex flex-col md:flex-row items-center gap-10 text-left bg-white p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-white">
          <div className="w-48 h-48 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center shrink-0 shadow-inner">
            <User className="w-24 h-24 text-slate-400" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900 italic decoration-yellow-400 decoration-4 underline underline-offset-4 mb-6">
              Pakar Strategi Inovasi Digital
            </h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              Seorang praktisi yang telah membantu ratusan eksekutif dan staf profesional dalam mengintegrasikan sistem manajemen pengetahuan cerdas guna meningkatkan daya saing di era digital. Beliau berfokus pada mitigasi stres kerja melalui otomasi teknologi yang manusiawi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speaker;
