import React from 'react';
import { Award, Video, Users, BookOpen, Zap, Gift } from 'lucide-react';

const FacilitiesAndBonus: React.FC = () => {
  const facilities = [
    { icon: <Award size={20} />, text: "E-Sertifikat 12 JP" },
    { icon: <Video size={20} />, text: "Rekaman Video" },
    { icon: <Users size={20} />, text: "Join Grup Eksklusif" },
  ];

  const bonuses = [
    { icon: <BookOpen size={24} />, text: "Ebook Materi Prompting untuk Penulisan Karya Ilmiah" },
    { icon: <Zap size={24} />, text: "Akun Pro NotebookLM dan Gemini Pro" },
  ];

  return (
    <section className="py-16 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-10">
          Apa yang Anda Dapatkan?
        </h2>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          
          {/* Facilities Card - More Compact Design */}
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-slate-800 mb-5 flex items-center gap-2 border-b pb-3 border-slate-100">
              <span className="bg-primary/10 text-primary p-1.5 rounded-lg"><Award size={18} /></span>
              Fasilitas Peserta
            </h3>
            {/* Grid layout for more compact display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
              {facilities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 hover:bg-blue-50 transition-colors">
                  <div className="text-primary bg-white p-1.5 rounded-full flex-shrink-0 shadow-sm border border-slate-100">
                    {item.icon}
                  </div>
                  <span className="font-bold text-slate-700 text-sm leading-tight">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bonus Card */}
          <div className="relative bg-primary text-white p-8 rounded-3xl shadow-2xl overflow-hidden flex flex-col justify-center transform lg:scale-105 z-10 ring-4 ring-white">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mr-10 -mt-10 text-white/5">
              <Gift size={200} />
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-blue-400/30 pb-4 mb-6">
                <h3 className="text-xl font-bold flex items-center gap-3">
                  <span className="bg-accent text-white p-2 rounded-lg"><Gift size={20} /></span>
                  BONUS SPESIAL
                </h3>
                {/* Highlighted FREE Bonus Badge */}
                <div className="bg-yellow-300 text-red-700 px-4 py-1.5 rounded-full text-sm font-black shadow-lg animate-pulse inline-block text-center ring-2 ring-yellow-100 transform rotate-1">
                  GRATIS SENILAI Rp 799.000
                </div>
              </div>

              <ul className="space-y-4">
                {bonuses.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                    <div className="text-accent bg-white/10 p-2 rounded-full flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="font-bold text-blue-50 text-sm md:text-base leading-snug">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-4 border-t border-blue-400/30 text-center">
                <p className="text-xs text-blue-200 bg-blue-900/50 inline-block px-3 py-1.5 rounded-lg">
                  🎁 Bonus ini otomatis hangus jika kuota webinar penuh.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FacilitiesAndBonus;