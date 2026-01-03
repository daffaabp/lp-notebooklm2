import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.92), rgba(10, 25, 47, 0.95)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto py-24 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-800/50 border border-blue-700 text-blue-200 text-sm font-medium mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span>Webinar Eksklusif HRD 2026</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight">
          Anda Lelah Mengulang Penjelasan SOP? Otomatisasikan Onboarding Karyawan dengan <span className="text-yellow-400 inline-block decoration-wavy underline decoration-yellow-600/50 underline-offset-8">NotebookLM</span>.
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Ubah tumpukan buku panduan (<em>handbook</em>) dan dokumen kebijakan yang membosankan menjadi "Asisten Virtual Pintar" yang siap menjawab pertanyaan karyawan baru 24/7.
        </p>
        
        <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md inline-block mb-10 border border-white/10 shadow-2xl">
          <p className="text-lg mb-3 text-slate-300 font-medium">Investasi Terbatas:</p>
          <div className="flex items-baseline justify-center gap-4">
            <span className="text-3xl line-through text-slate-500 decoration-red-500/50 decoration-2">Rp499.000</span>
            <span className="text-5xl font-bold text-yellow-400 drop-shadow-sm">Rp149.000</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <a 
            href="#form-registrasi" 
            className="group bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-blue-950 px-12 py-5 rounded-full text-2xl font-black transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-yellow-500/20 flex items-center gap-3"
          >
            DAFTAR SEKARANG
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <p className="text-yellow-400 font-bold italic bg-yellow-400/10 px-6 py-2 rounded-lg border border-yellow-400/20">
            🔥 BONUS: Akun NotebookLM Pro Senilai Rp309.000 Khusus Pendaftar Hari Ini!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;