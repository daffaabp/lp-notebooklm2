import React from 'react';
import { Award, Video, Users, Gift, BookOpen, Zap } from 'lucide-react';

const FacilitiesAndBonus: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-brand-900 uppercase tracking-tight">
          Fasilitas & Bonus Eksklusif
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Fasilitas Column */}
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
            <div className="mb-8 pb-4 border-b border-gray-100">
               <h3 className="text-2xl font-extrabold text-brand-900 flex items-center">
                 <div className="bg-blue-100 p-2 rounded-lg mr-3">
                   <Award className="w-6 h-6 text-blue-600" />
                 </div>
                 Fasilitas Peserta
               </h3>
               <p className="mt-2 text-gray-500 text-sm">Apa yang Anda dapatkan dalam program ini.</p>
            </div>
            <ul className="space-y-6 flex-grow">
              <li className="flex items-start group">
                <div className="bg-gray-100 group-hover:bg-blue-100 p-3 rounded-full mr-4 text-gray-600 group-hover:text-blue-600 transition-colors">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">E-Sertifikat 12 JP</h4>
                  <p className="text-gray-600 text-sm mt-1">Sertifikat resmi bernilai kredit akademik untuk portofolio Anda.</p>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="bg-gray-100 group-hover:bg-blue-100 p-3 rounded-full mr-4 text-gray-600 group-hover:text-blue-600 transition-colors">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Rekaman Video Materi</h4>
                  <p className="text-gray-600 text-sm mt-1">Akses ulang materi webinar kapan saja tanpa batas waktu.</p>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="bg-gray-100 group-hover:bg-blue-100 p-3 rounded-full mr-4 text-gray-600 group-hover:text-blue-600 transition-colors">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">Join Grup Eksklusif Peneliti</h4>
                  <p className="text-gray-600 text-sm mt-1">Jejaring dengan praktisi dan peneliti senior untuk kolaborasi.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Bonus Column */}
          <div className="relative bg-gradient-to-br from-brand-900 to-blue-900 text-white p-8 rounded-3xl shadow-2xl border border-blue-700/50 flex flex-col h-full transform md:-translate-y-4 md:scale-105 z-10 overflow-hidden group">
            
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

            <div className="relative z-10 mb-8 pb-4 border-b border-white/10">
               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                 <h3 className="text-2xl font-extrabold text-white flex items-center">
                   <div className="bg-yellow-500 p-2 rounded-lg mr-3 shadow-lg shadow-yellow-500/20">
                     <Gift className="w-6 h-6 text-brand-900" />
                   </div>
                   BONUS SPESIAL
                 </h3>
                 <span className="inline-block bg-yellow-400 text-brand-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                   Senilai Rp 799.000
                 </span>
               </div>
               <p className="mt-2 text-blue-200 text-sm">Tambahan value eksklusif hanya untuk Anda.</p>
            </div>

            <ul className="space-y-6 flex-grow relative z-10">
              <li className="flex items-start bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="bg-brand-800 p-2 rounded-lg mr-4 text-yellow-400 shadow-inner">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-yellow-50">Ebook Materi Prompting</h4>
                  <p className="text-blue-200 text-sm mt-1">Panduan praktis teknik prompting khusus untuk penulisan karya ilmiah yang presisi.</p>
                </div>
              </li>
              <li className="flex items-start bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="bg-brand-800 p-2 rounded-lg mr-4 text-yellow-400 shadow-inner">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-yellow-50">Akun Pro NotebookLM & Gemini</h4>
                  <p className="text-blue-200 text-sm mt-1">Akses akun premium siap pakai untuk memaksimalkan produktivitas riset Anda.</p>
                </div>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-white/10 text-center relative z-10">
              <p className="text-yellow-400 font-bold italic text-sm animate-pulse">
                ⚡ Penawaran ini bisa berakhir sewaktu-waktu!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesAndBonus;