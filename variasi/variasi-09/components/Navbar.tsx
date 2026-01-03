import React from 'react';
import { Calendar } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 py-4 border-b border-slate-100">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-extrabold text-blue-950 tracking-tight">
          SDM<span className="text-yellow-500 underline decoration-2 underline-offset-4">PINTAR</span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-600 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
          <Calendar className="w-4 h-4 text-blue-900" />
          <span>Sabtu, 10 Januari 2026 | 14.00 - 16.00 WIB</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;