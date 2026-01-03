import React from 'react';
import { Bot, ShieldCheck, Headphones, TrendingUp, TrendingDown, Zap } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-blue-950 text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight">
            BANGUN "PUSAT OTAK" TIM ANDA DENGAN <span className="text-yellow-400 italic">NOTEBOOKLM</span>
          </h2>
          <ul className="space-y-8">
            <li className="flex gap-5">
              <div className="bg-yellow-500 text-blue-950 rounded-xl w-12 h-12 flex items-center justify-center font-bold shrink-0 shadow-lg shadow-yellow-500/20">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-yellow-50">Pelatihan Interaktif</h3>
                <p className="text-slate-300 leading-relaxed">
                    AI ini tidak hanya merangkum, tapi bertindak sebagai "tutor pribadi" yang mengajak karyawan berpikir kritis melalui sesi tanya-jawab cerdas.
                </p>
              </div>
            </li>
            <li className="flex gap-5">
              <div className="bg-yellow-500 text-blue-950 rounded-xl w-12 h-12 flex items-center justify-center font-bold shrink-0 shadow-lg shadow-yellow-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-yellow-50">Keamanan Data Mutlak</h3>
                <p className="text-slate-300 leading-relaxed">
                    Berbeda dengan AI umum, data internal Anda tidak akan digunakan untuk melatih sistem publik. Privasi perusahaan Anda tetap terjaga sepenuhnya.
                </p>
              </div>
            </li>
            <li className="flex gap-5">
              <div className="bg-yellow-500 text-blue-950 rounded-xl w-12 h-12 flex items-center justify-center font-bold shrink-0 shadow-lg shadow-yellow-500/20">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-yellow-50">Siniar AI Khusus</h3>
                <p className="text-slate-300 leading-relaxed">
                    Ubah peraturan perusahaan yang membosankan menjadi rekaman audio diskusi (siniar) yang bisa didengar tim sambil beraktivitas atau dalam perjalanan.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex-1 w-full max-w-md">
            <div className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-3xl border border-white/20 backdrop-blur-xl shadow-2xl">
                <h4 className="text-xl font-bold mb-8 text-yellow-400 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Hasil Akhir yang Nyata:
                </h4>
                <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <span className="text-slate-200">Kecepatan Onboarding</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-bold bg-emerald-400/10 px-3 py-1 rounded-lg">
                            <TrendingUp className="w-4 h-4" />
                            +60% Faster
                        </div>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                        <span className="text-slate-200">Retensi Pengetahuan</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-bold bg-emerald-400/10 px-3 py-1 rounded-lg">
                            <TrendingUp className="w-4 h-4" />
                            +92% Retention
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-slate-200">Biaya Pelatihan</span>
                        <div className="flex items-center gap-2 text-emerald-400 font-bold bg-emerald-400/10 px-3 py-1 rounded-lg">
                            <TrendingDown className="w-4 h-4" />
                            -40% Costs
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;