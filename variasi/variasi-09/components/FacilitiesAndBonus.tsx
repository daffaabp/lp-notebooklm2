import React from 'react';
import { FileCheck, Video, Users, Gift, Sparkles, BookOpenCheck } from 'lucide-react';

const FacilitiesAndBonus: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-800/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-[100px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Apa yang Akan Anda Dapatkan?
        </h2>

        {/* Fasilitas Section */}
        <div className="mb-16">
            <h3 className="text-xl font-semibold text-blue-200 mb-8 text-center uppercase tracking-widest">Fasilitas Eksklusif</h3>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-slate-800 transition duration-300">
                    <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6 text-blue-300">
                        <FileCheck className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">E-Sertifikat 12 JP</h4>
                    <p className="text-slate-400">Bukti kompetensi resmi untuk portofolio profesional Anda.</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-slate-800 transition duration-300">
                    <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6 text-blue-300">
                        <Video className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Rekaman Video</h4>
                    <p className="text-slate-400">Akses seumur hidup ke rekaman materi untuk dipelajari ulang kapan saja.</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl flex flex-col items-center text-center hover:bg-slate-800 transition duration-300">
                    <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6 text-blue-300">
                        <Users className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Grup Eksklusif</h4>
                    <p className="text-slate-400">Jejaring dengan sesama peneliti dan praktisi HRD di grup tertutup.</p>
                </div>
            </div>
        </div>

        {/* Bonus Section */}
        <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl blur opacity-30"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-yellow-500/50 rounded-3xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-yellow-500/30">
                            <Gift className="w-4 h-4" />
                            BONUS SPESIAL
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Total Bonus Senilai <span className="text-yellow-400">Rp 799.000</span></h3>
                        <p className="text-slate-300 text-lg">Dapatkan akses premium ke alat dan materi yang akan mempercepat implementasi Anda secara instan.</p>
                    </div>
                    
                    <div className="flex-1 w-full space-y-4">
                        <div className="flex items-start gap-4 p-4 bg-slate-950/50 rounded-xl border border-slate-700/50">
                            <div className="bg-yellow-500/10 p-3 rounded-lg text-yellow-400 shrink-0">
                                <BookOpenCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-white">Ebook Materi Prompting</h4>
                                <p className="text-sm text-slate-400">Panduan lengkap *copy-paste* prompt untuk penulisan karya ilmiah dan SOP.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-slate-950/50 rounded-xl border border-slate-700/50">
                            <div className="bg-yellow-500/10 p-3 rounded-lg text-yellow-400 shrink-0">
                                <Sparkles className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg text-white">Akun Pro NotebookLM & Gemini Pro</h4>
                                <p className="text-sm text-slate-400">Akses akun premium siap pakai untuk praktik langsung saat webinar.</p>
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

export default FacilitiesAndBonus;