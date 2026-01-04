import React from 'react';

interface NavbarProps {
  isVisible: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isVisible }) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } h-16`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-5xl h-full">
        {/* Empty Navbar content as requested */}
      </div>
    </div>
  );
};

export default Navbar;