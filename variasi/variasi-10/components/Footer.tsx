import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6 border-t border-slate-800 text-center">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-wrap justify-center gap-8 mb-8 font-semibold text-white uppercase text-xs tracking-[0.2em]">
          <a href="#" className="hover:text-yellow-400 transition-colors">Syarat Layanan</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Kebijakan Privasi</a>
          <a href="#" className="hover:text-yellow-400 transition-colors">Hubungi Kami</a>
        </div>
        <p className="text-sm opacity-60 leading-loose">
          &copy; 2026 Webinar NotebookLM Indonesia. Seluruh hak intelektual dilindungi undang-undang. <br className="hidden md:block"/>
          NotebookLM adalah merek dagang terdaftar milik Google Labs.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
