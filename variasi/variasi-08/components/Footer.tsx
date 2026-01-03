import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-blue-200 py-12 border-t border-blue-800">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center space-x-8 mb-8 font-medium">
          <a href="#" className="hover:text-white transition-colors duration-200">Syarat & Ketentuan</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Kebijakan Privasi</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Hubungi Kami</a>
        </div>
        <p className="text-sm opacity-60">
          &copy; {new Date().getFullYear()} Webinar NotebookLM Bisnis Strategis. Seluruh hak dilindungi undang-undang.
        </p>
      </div>
    </footer>
  );
};

export default Footer;