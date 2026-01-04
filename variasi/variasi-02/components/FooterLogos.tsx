import React from 'react';

export const FooterLogos: React.FC = () => {
  return (
    <div className="py-8 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-6 md:gap-8">
        <img
          src="/assets/logo kelas inovatif.avif"
          alt="Kelas Inovatif"
          className="h-7 md:h-9 w-auto object-contain hover:opacity-80 transition-opacity"
        />
        <div className="h-8 w-px bg-gray-300"></div>
        <img
          src="/assets/notebook-logo.avif"
          alt="NotebookLM"
          className="h-5 md:h-6 w-auto object-contain"
        />
      </div>
    </div>
  );
};

