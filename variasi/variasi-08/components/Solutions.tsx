import React from 'react';
import { Mic, PieChart, ShieldCheck } from 'lucide-react';

const Solutions: React.FC = () => {
  return (
    <section className="py-24 bg-blue-50/50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-100 blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-brand-900">
          Solusinya: Ekosistem Pengetahuan Berbasis <span className="text-blue-600 underline decoration-yellow-400 decoration-4 underline-offset-4">NotebookLM</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600 flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mic className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="font-bold text-xl mb-4 text-gray-900">Analisis Audio Interaktif</h3>
            <p className="text-gray-600 leading-relaxed italic">
              "Gunakan NotebookLM untuk mengubah laporan keuangan yang membosankan menjadi diskusi podcast yang bisa Anda interupsi untuk bertanya langsung."
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600 flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <PieChart className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="font-bold text-xl mb-4 text-gray-900">Visualisasi Data Instan</h3>
            <p className="text-gray-600 leading-relaxed italic">
              "Secara otomatis ciptakan peta pikiran (Mind Maps) dan slide presentasi yang akurat berdasarkan dokumen sumber internal Anda."
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600 flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="font-bold text-xl mb-4 text-gray-900">Keamanan Data Mutlak</h3>
            <p className="text-gray-600 leading-relaxed italic">
              "NotebookLM tidak menggunakan data Anda untuk melatih model publik. Informasi Anda tetap privat, aman, dan terlindungi sepenuhnya."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;