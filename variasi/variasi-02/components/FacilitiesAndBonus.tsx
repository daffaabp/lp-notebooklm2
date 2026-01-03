import React from 'react';
import { Gift, Video, Users, FileCheck, BookOpen, Sparkles } from 'lucide-react';

export const FacilitiesAndBonus: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-bgLight">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Apa yang Anda Dapatkan?</h2>
          <p className="text-slate-600">Investasi sekali, manfaat berkali-kali untuk karir akademik Anda.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Fasilitas Standard */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-violet-100 flex flex-col">
            <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <FileCheck className="w-6 h-6" />
              Fasilitas Peserta
            </h3>
            <ul className="space-y-6 flex-1">
              <li className="flex items-start gap-4">
                <div className="bg-violet-100 p-2 rounded-full text-primary">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-slate-800">E-Sertifikat 12 JP</strong>
                  <span className="text-sm text-slate-500">Bernilai kumulatif untuk portofolio akademik.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-violet-100 p-2 rounded-full text-primary">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-slate-800">Rekaman Video Full HD</strong>
                  <span className="text-sm text-slate-500">Akses seumur hidup, bisa diputar ulang kapan saja.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-violet-100 p-2 rounded-full text-primary">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-slate-800">Join Grup Eksklusif Peneliti</strong>
                  <span className="text-sm text-slate-500">Networking dengan ratusan mahasiswa pascasarjana se-Indonesia.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Bonus Spesial */}
          <div className="bg-amber-50 p-8 rounded-2xl shadow-lg border-2 border-accent relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 bg-accent text-white px-4 py-1 text-xs font-bold rounded-bl-xl uppercase tracking-wider">
              Limited Offer
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                <Gift className="w-6 h-6 text-accent" />
                BONUS SPESIAL
              </h3>
              <p className="text-accent font-bold mt-1">
                Senilai <span className="line-through text-slate-400 font-normal">Rp 799.000</span> (GRATIS)
              </p>
            </div>

            <ul className="space-y-6 flex-1">
              <li className="flex items-start gap-4 bg-white/60 p-4 rounded-xl border border-amber-100">
                <div className="bg-accent/20 p-2 rounded-full text-accentHover">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-slate-800">Ebook Prompting Karya Ilmiah</strong>
                  <span className="text-sm text-slate-600">Panduan copy-paste prompt untuk parafrase, mencari gap, & sitasi.</span>
                </div>
              </li>
              <li className="flex items-start gap-4 bg-white/60 p-4 rounded-xl border border-amber-100">
                <div className="bg-accent/20 p-2 rounded-full text-accentHover">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block text-slate-800">Akun Pro NotebookLM & Gemini</strong>
                  <span className="text-sm text-slate-600">Panduan akses fitur premium AI Google untuk analisis data mendalam.</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};