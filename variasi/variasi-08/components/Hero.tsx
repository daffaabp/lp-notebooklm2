import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 to-brand-800 text-white py-20 lg:py-28">
      {/* Abstract Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-blue-600 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center bg-blue-800/50 rounded-full px-4 py-1.5 mb-8 text-blue-200 text-sm font-medium border border-blue-700/50 animate-fade-in-down">
          <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
          <span>Webinar Eksklusif Bisnis & Strategi AI</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight max-w-5xl mx-auto">
          Laporan menumpuk? Keputusan lambat, bisnis <span className="text-red-400 font-black italic">bisa tamat</span>.<br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white underline decoration-blue-500/30 decoration-4 underline-offset-8">NotebookLM</span> solusinya!
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
          Ubah gunung data dan tumpukan laporan menjadi keputusan strategis dalam hitungan detik. Jadikan kecerdasan buatan sebagai rekan berpikir yang setia pada data internal Anda.
        </p>
        
        <div className="flex flex-col items-center justify-center mb-10 space-y-2">
          <div className="flex items-center space-x-4">
            <span className="text-2xl line-through text-blue-300 decoration-red-500 decoration-2">Rp499.000</span>
            <span className="text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg">Rp149.000</span>
          </div>
          <span className="text-sm text-blue-200 uppercase tracking-widest font-semibold">Harga Early Bird</span>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <button 
            onClick={scrollToRegister}
            className="group relative bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-extrabold py-5 px-12 rounded-full text-xl md:text-2xl uppercase tracking-wide transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl shadow-lg hover:shadow-yellow-500/20 flex items-center"
          >
            Daftar Sekarang
            <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-lg font-medium bg-white/10 backdrop-blur-sm px-6 py-2 rounded-lg border border-white/10">
            🎁 Bonus Spesial: Akun <span className="font-bold text-white">NotebookLM Pro Guide</span> Senilai Rp309.000 (Terbatas!)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;