import React from 'react';
import { BrainCircuit, AlertTriangle, FileText } from 'lucide-react';

export const PainPoints: React.FC = () => {
  return (
    <section className="py-20 bg-bgLight border-l-8 border-danger">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-danger mb-4">Akui Saja, Anda Berada di Titik Jenuh.</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Penelitian S2 dan S3 di Indonesia bukan hanya soal otak, tapi soal ketahanan mental.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-rose-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <BrainCircuit className="text-danger w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Otak Serasa Mau Meledak</h3>
            <p className="text-slate-600 leading-relaxed">
              Wajib membaca minimal 40-60 jurnal. Anda punya tumpukan PDF tapi bingung mulai dari mana. Informasi berlebihan membuat cemas.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-rose-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
               <AlertTriangle className="text-danger w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Terjebak Tanpa 'Novelty'</h3>
            <p className="text-slate-600 leading-relaxed">
              Takut riset dianggap pengulangan. Stres mencari <i>research gap</i> yang benar-benar orisinal agar bisa lulus sidang tertutup.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
             <div className="bg-rose-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
               <FileText className="text-danger w-6 h-6" />
             </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Drama Publikasi</h3>
            <p className="text-slate-600 leading-relaxed">
              Tekanan wajib publikasi di Scopus atau Sinta yang prosesnya melelahkan, ditambah revisi dosen yang tak kunjung usai.
            </p>
          </div>
        </div>
        
        <p className="text-center font-bold text-slate-700 mt-12 bg-white inline-block px-6 py-3 rounded-full mx-auto shadow-sm border border-slate-200">
          Hasilnya? Insomnia, kelelahan fisik, hingga rasa putus asa.
        </p>
      </div>
    </section>
  );
};

