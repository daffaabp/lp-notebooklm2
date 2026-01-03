import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NavbarProps {
  isVisible: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isVisible }) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-5xl">
        <div className="font-bold text-primary text-lg leading-tight hidden sm:block">
          Webinar Riset S2/S3
        </div>
        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          <div className="text-sm font-semibold text-slate-600 sm:hidden">
            Daftar Sekarang
          </div>
          <a
            href="#daftar"
            className="flex items-center gap-2 bg-accent hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-full transition-all shadow-md hover:shadow-lg text-sm uppercase tracking-wide"
          >
            Amankan Kursi
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;