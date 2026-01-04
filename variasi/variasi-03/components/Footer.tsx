import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-slate-400 py-16 text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <p className="font-semibold text-white mb-4 text-lg">
          Platform pembelajaran Artificial Intelligence Nomor 1 di Indonesia bagi para peneliti akademik.
        </p>
        
        <p className="text-slate-400 mb-6">
          © 2026 kelasinovatif.com
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-slate-500">
          <a href="?page=privacy-policy" className="hover:text-white transition-colors">Kebijakan Privasi</a>
          <a href="?page=terms-of-service" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;