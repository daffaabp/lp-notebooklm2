import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-[#999] py-16 px-5 text-center">
      <div className="max-w-5xl mx-auto">
        <p className="font-bold text-white text-lg mb-6">
          © 2026 Inovasi Akademik Mahasiswa. Seluruh Hak Cipta Dilindungi.
        </p>
        
        <div className="flex justify-center gap-6 mb-10 text-sm font-medium">
          <a href="#" className="text-white hover:text-[#f9ab00] transition-colors">Term of Service</a>
          <span className="text-gray-600">|</span>
          <a href="#" className="text-white hover:text-[#f9ab00] transition-colors">Privacy Policy</a>
        </div>
        
        <p className="text-xs md:text-sm opacity-50 max-w-3xl mx-auto leading-relaxed">
          Penafian: Hasil riset tetap merupakan tanggung jawab penuh penulis. Webinar ini berfokus pada peningkatan produktivitas menggunakan alat AI secara etis sesuai standar integritas akademik masing-masing institusi [29, 30].
        </p>
      </div>
    </footer>
  );
};

export default Footer;