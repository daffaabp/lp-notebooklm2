import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4 sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-brand-900 tracking-tight italic">
          Notebook<span className="text-blue-600">LM</span> Business
        </div>
        <div className="hidden md:flex items-center space-x-6 text-sm font-semibold text-gray-600 bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
          <div className="flex items-center text-blue-800">
            <Calendar className="w-4 h-4 mr-2 text-blue-600" />
            <span>Sabtu, 10 Januari 2026</span>
          </div>
          <div className="h-4 w-px bg-gray-300 mx-2"></div>
          <div className="flex items-center text-blue-800">
            <Clock className="w-4 h-4 mr-2 text-blue-600" />
            <span>14.00 - 16.00 WIB</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;