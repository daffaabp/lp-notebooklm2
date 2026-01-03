import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-12 text-center text-sm px-5">
      <div className="max-w-[1100px] mx-auto">
        <p className="mb-4">&copy; 2026 Webinar NotebookLM Bisnis. Seluruh Hak Cipta Dilindungi.</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;