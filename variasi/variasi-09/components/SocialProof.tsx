import React from 'react';
import { Quote } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Speaker */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-wider mb-4">Host Webinar</div>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Narasumber Ahli</h2>
            <div className="flex flex-col items-center lg:items-start group">
              <div className="w-56 h-56 bg-slate-200 rounded-3xl mb-8 shadow-2xl relative overflow-hidden">
                <img 
                    src="https://picsum.photos/400/400?grayscale" 
                    alt="Speaker Profile" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Pakar Strategi SDM Berbasis AI</h3>
              <p className="text-slate-500 mt-4 leading-relaxed max-w-md mx-auto lg:mx-0">
                Praktisi Manajemen Pengetahuan yang telah membantu puluhan korporasi mengintegrasikan NotebookLM untuk efisiensi operasional nasional [13].
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center lg:text-left">Apa Kata Rekan HR Lainnya?</h2>
            <div className="space-y-8">
              
              <div className="p-8 bg-slate-50 rounded-3xl shadow-sm border border-slate-100 relative">
                <Quote className="w-10 h-10 text-slate-200 absolute top-6 right-6" />
                <p className="italic text-slate-700 font-medium text-lg mb-6 relative z-10">
                  "Dulu karyawan baru selalu 'nge-ghosting' manajer dengan pertanyaan yang sama. Sekarang, mereka tanya ke sistem NotebookLM kami dulu. Revolusioner!"
                </p>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold text-sm">HR</div>
                    <div>
                        <p className="font-bold text-slate-900">HR Manager</p>
                        <p className="text-sm text-slate-500">Manufaktur Terkemuka</p>
                    </div>
                </div>
              </div>

              <div className="p-8 bg-blue-900 text-white rounded-3xl shadow-xl shadow-blue-900/10 relative transform lg:translate-x-8 border border-blue-800">
                <Quote className="w-10 h-10 text-blue-800 absolute top-6 right-6" />
                <p className="italic text-blue-100 font-medium text-lg mb-6 relative z-10">
                  "Fitur audio ringkasannya luar biasa. Tim lapangan saya bisa belajar SOP sambil berkendara. Retensi ilmu meningkat tajam [14]."
                </p>
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold text-sm">L&D</div>
                    <div>
                        <p className="font-bold text-white">L&D Specialist</p>
                        <p className="text-sm text-blue-300">Sektor Publik</p>
                    </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialProof;