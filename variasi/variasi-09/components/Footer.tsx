import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-6 text-center border-t border-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 mb-10 font-semibold text-sm tracking-wide">
          <a href="#" className="hover:text-white transition duration-200 hover:underline underline-offset-4">Syarat Layanan</a>
          <a href="#" className="hover:text-white transition duration-200 hover:underline underline-offset-4">Kebijakan Privasi</a>
          <a href="#" className="hover:text-white transition duration-200 hover:underline underline-offset-4">Hubungi Kami</a>
        </div>
        <p className="text-sm opacity-60">
          &copy; {new Date().getFullYear()} Webinar Manajemen Pengetahuan HRD. Semua Hak Dilindungi Undang-Undang.
        </p>
      </div>
    </footer>
  );
};

export default Footer;