import React from 'react';
import { Layers, BrainCircuit, FileWarning } from 'lucide-react';

export const PainPoints: React.FC = () => {
  return (
    <section className="py-20 bg-bgLight border-l-8 border-danger">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-danger mb-4">Masalah yang Sering Bikin Tesis Macet</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Jangan-jangan skripsi, tesis, atau disertasi Anda mandek gara-gara 3 hal ini:</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="bg-rose-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <Layers className="text-danger w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Cuma Tumpuk File PDF</h3>
            <p className="text-slate-600 leading-relaxed">
              Rajin download jurnal sampai laptop penuh, tapi males banget bacanya. Akhirnya cuma jadi koleksi digital tanpa pernah dibuka.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-rose-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <BrainCircuit className="text-danger w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Bingung Merangkum Intinya</h3>
            <p className="text-slate-600 leading-relaxed">
              Sudah coba baca, tapi pusing sendiri. Susah nemu mana poin pentingnya, mana yang cuma basa-basi. Habis waktu buat baca doang.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-rose-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <FileWarning className="text-danger w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Takut Judul Ditolak Dosen</h3>
            <p className="text-slate-600 leading-relaxed">
              Khawatir dibilang "ini sudah pernah diteliti". Bingung cari celah atau bedanya penelitian Anda sama yang lain biar dianggap baru.
            </p>
          </div>
        </div>
        
        <p className="text-center font-bold text-slate-700 mt-12 bg-white inline-block px-6 py-3 rounded-full mx-auto shadow-sm border border-slate-200">
          Tenang, Anda tidak sendirian. Ini masalah teknis yang ada solusinya.
        </p>
      </div>
    </section>
  );
};

