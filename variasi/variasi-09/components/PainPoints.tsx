import React from 'react';
import { Clock, BookOpen, Building2 } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
          Kendala Kronis yang Menguras <br className="hidden md:block"/> Produktivitas HRD
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          
          <div className="p-8 border rounded-3xl bg-slate-50 border-slate-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="font-bold text-xl mb-4 text-slate-900">Pemborosan Waktu Manajer</h3>
            <p className="text-slate-600 leading-relaxed">
              Manajer senior kehilangan hingga 2,5 jam per hari hanya untuk menjawab pertanyaan teknis karyawan yang sebenarnya sudah ada di dokumen internal [3].
            </p>
          </div>

          <div className="p-8 border rounded-3xl bg-slate-50 border-slate-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-xl mb-4 text-slate-900">Tumpukan Data Tak Terbaca</h3>
            <p className="text-slate-600 leading-relaxed">
              Karyawan sering mengalami <em>information overload</em> karena harus mencari manual di antara ratusan PDF, transkrip rapat, dan folder Drive yang berantakan [4].
            </p>
          </div>

          <div className="p-8 border rounded-3xl bg-slate-50 border-slate-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <Building2 className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-bold text-xl mb-4 text-slate-900">Silo Pengetahuan</h3>
            <p className="text-slate-600 leading-relaxed">
              Saat karyawan kunci resign, pengetahuan berharga seringkali ikut hilang karena tidak terdokumentasi secara cerdas dan interaktif [5, 6].
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PainPoints;