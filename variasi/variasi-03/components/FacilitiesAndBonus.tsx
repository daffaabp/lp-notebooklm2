import React from 'react';
import { Award, Video, Users, BookOpen, Zap, Gift } from 'lucide-react';

const FacilitiesAndBonus: React.FC = () => {
  const facilities = [
    { icon: <Award size={28} />, text: "E-Sertifikat 12 JP" },
    { icon: <Video size={28} />, text: "Rekaman Video" },
    { icon: <Users size={28} />, text: "Join Grup Eksklusif Peneliti" },
  ];

  const bonuses = [
    { icon: <BookOpen size={28} />, text: "Ebook Materi Prompting untuk Penulisan Karya Ilmiah" },
    { icon: <Zap size={28} />, text: "Akun Pro NotebookLM dan Gemini Pro" },
  ];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-12">
          Apa yang Anda Dapatkan?
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Facilities Card */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-3 border-b pb-4 border-slate-100">
              <span className="bg-primary/10 text-primary p-2 rounded-lg"><Award size={24} /></span>
              Fasilitas Peserta
            </h3>
            <ul className="space-y-6 flex-grow">
              {facilities.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="text-primary bg-blue-50 p-3 rounded-full flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-bold text-lg text-slate-700">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bonus Card */}
          <div className="relative bg-primary text-white p-8 md:p-10 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-full transform lg:scale-105 z-10 ring-4 ring-white">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mr-10 -mt-10 text-white/5">
              <Gift size={200} />
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-blue-400/30 pb-4 mb-8">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <span className="bg-accent text-white p-2 rounded-lg"><Gift size={24} /></span>
                  BONUS SPESIAL
                </h3>
                <div className="bg-danger text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg animate-pulse inline-block text-center">
                  Senilai Rp 799.000
                </div>
              </div>

              <ul className="space-y-6 flex-grow">
                {bonuses.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                    <div className="text-accent bg-white/10 p-3 rounded-full flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="font-bold text-lg text-blue-50">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-blue-400/30 text-center">
                <p className="text-sm text-blue-200 bg-blue-900/50 inline-block px-4 py-2 rounded-lg">
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