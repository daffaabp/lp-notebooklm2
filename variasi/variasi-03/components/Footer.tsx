import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-slate-400 py-16 text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="font-semibold text-white mb-6">
          &copy; 2026 Inovasi Riset Akademik Indonesia. Hak Cipta Dilindungi.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          <span className="text-slate-700">|</span>
          <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
        </div>
        
        <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Penafian: Keberhasilan publikasi tetap bergantung pada kualitas data riset primer dan kepatuhan terhadap etika penulisan ilmiah masing-masing institusi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;