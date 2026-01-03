import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 text-center">
      <div className="container mx-auto px-4">
        <p className="font-bold text-white mb-4">&copy; 2026 Inovasi Akademik Digital Indonesia.</p>
        <div className="flex justify-center gap-6 mb-8 text-sm">
          <a href="#" className="hover:text-white transition-colors">Syarat Layanan</a>
          <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
        </div>
        <p className="text-xs max-w-2xl mx-auto opacity-50 leading-relaxed">
          Disclaimer: Hasil yang didapatkan setiap peserta mungkin berbeda tergantung pada kedalaman sumber data dan konsistensi penerapan strategi. Webinar ini mendorong penggunaan AI secara etis sesuai integritas akademik.
        </p>
      </div>
    </footer>
  );
};

