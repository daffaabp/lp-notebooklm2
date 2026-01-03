import React from 'react';
import { Award, Video, Users, BookOpen, Sparkles, Gift } from 'lucide-react';

const Facilities: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 uppercase tracking-tight">Fasilitas & Bonus Eksklusif</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Facilities Column */}
          <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                <div className="p-4 bg-blue-50 text-blue-700 rounded-2xl">
                    <Award size={32} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-slate-800">Fasilitas Peserta</h3>
                    <p className="text-slate-500">Apa yang Anda dapatkan di webinar ini</p>
                </div>
            </div>
            
            <ul className="space-y-6 flex-1">
                <li className="flex items-start gap-4 p-2 hover:bg-slate-50 rounded-xl transition-colors">
                    <div className="mt-1 bg-green-100 p-2 rounded-lg text-green-600 shadow-sm"><Award size={20} /></div>
                    <div>
                        <h4 className="font-bold text-lg text-slate-700">E-Sertifikat 12 JP</h4>
                        <p className="text-slate-500 text-sm">Sertifikat resmi bernilai angka kredit untuk portofolio.</p>
                    </div>
                </li>
                <li className="flex items-start gap-4 p-2 hover:bg-slate-50 rounded-xl transition-colors">
                    <div className="mt-1 bg-blue-100 p-2 rounded-lg text-blue-600 shadow-sm"><Video size={20} /></div>
                    <div>
                        <h4 className="font-bold text-lg text-slate-700">Rekaman Video Full HD</h4>
                        <p className="text-slate-500 text-sm">Akses ulang materi kapan saja tanpa batas waktu.</p>
                    </div>
                </li>
                <li className="flex items-start gap-4 p-2 hover:bg-slate-50 rounded-xl transition-colors">
                    <div className="mt-1 bg-purple-100 p-2 rounded-lg text-purple-600 shadow-sm"><Users size={20} /></div>
                    <div>
                        <h4 className="font-bold text-lg text-slate-700">Join Grup Eksklusif Peneliti</h4>
                        <p className="text-slate-500 text-sm">Jejaring diskusi seumur hidup dengan para ahli.</p>
                    </div>
                </li>
            </ul>
          </div>

          {/* Bonus Column */}
          <div className="relative bg-gradient-to-br from-slate-900 to-blue-900 p-1 rounded-[2rem] shadow-2xl transform md:scale-105 z-10">
             {/* Glowing Border Effect */}
             <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 rounded-[2rem] opacity-75 blur-sm -z-10 animate-pulse"></div>
             
             <div className="bg-slate-900 rounded-[1.9rem] p-8 h-full flex flex-col text-white relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 p-3 bg-yellow-400 text-blue-900 font-black text-xs uppercase tracking-widest rounded-bl-2xl shadow-lg z-20">
                    Limited Offer
                </div>
                
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10 relative z-10">
                    <div className="p-4 bg-gradient-to-br from-yellow-400 to-orange-500 text-blue-900 rounded-2xl shadow-lg">
                        <Gift size={32} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-yellow-400 uppercase italic">BONUS SPESIAL</h3>
                        <p className="text-blue-200 text-sm">Total Nilai <span className="line-through decoration-red-400 decoration-2 opacity-80 mx-1">Rp 799.000</span> (GRATIS)</p>
                    </div>
                </div>

                <ul className="space-y-6 flex-1 relative z-10">
                    <li className="flex items-start gap-4">
                        <div className="mt-1 bg-white/10 p-2 rounded-lg text-yellow-400 border border-white/5"><BookOpen size={20} /></div>
                        <div>
                            <h4 className="font-bold text-lg text-white">Ebook: Prompting Karya Ilmiah</h4>
                            <p className="text-slate-300 text-sm">Panduan *copy-paste* prompt akademik siap pakai.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="mt-1 bg-white/10 p-2 rounded-lg text-yellow-400 border border-white/5"><Sparkles size={20} /></div>
                        <div>
                            <h4 className="font-bold text-lg text-white">Akun Pro NotebookLM & Gemini</h4>
                            <p className="text-slate-300 text-sm">Akses fitur AI premium untuk analisis data mendalam.</p>
                        </div>
                    </li>
                </ul>
                
                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-xs text-slate-400 uppercase tracking-widest">Hanya untuk 50 Pendaftar Pertama</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;