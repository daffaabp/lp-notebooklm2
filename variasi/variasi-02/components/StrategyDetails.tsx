import React from 'react';
import { CheckCircle, PlayCircle } from 'lucide-react';

export const StrategyDetails: React.FC = () => {
  return (
    <section className="py-20 bg-emerald-50 border-l-8 border-success">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-success mb-8">Solusi Intelektual: Strategi "Otak Kedua"</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
             <div className="bg-white p-2 rounded-full h-fit shadow-sm"><CheckCircle className="text-success w-6 h-6" /></div>
             <div>
               <h4 className="font-bold text-lg">Analisis 300 Jurnal Sekaligus</h4>
               <p className="text-slate-600">Gabungkan PDF, YouTube, dan web menjadi satu pusat pengetahuan digital.</p>
             </div>
          </div>
          <div className="flex gap-4">
             <div className="bg-white p-2 rounded-full h-fit shadow-sm"><CheckCircle className="text-success w-6 h-6" /></div>
             <div>
               <h4 className="font-bold text-lg">Tanpa Halusinasi</h4>
               <p className="text-slate-600">AI menjawab hanya berdasarkan dokumen Anda, lengkap dengan sitasi nomor halaman.</p>
             </div>
          </div>
          <div className="flex gap-4">
             <div className="bg-white p-2 rounded-full h-fit shadow-sm"><PlayCircle className="text-success w-6 h-6" /></div>
             <div>
               <h4 className="font-bold text-lg">Ubah Teks Jadi Podcast</h4>
               <p className="text-slate-600">Dengarkan diskusi jurnal berat Anda saat di perjalanan.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

