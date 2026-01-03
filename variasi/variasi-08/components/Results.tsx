import React from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';

const Results: React.FC = () => {
    const scrollToRegister = (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById('register');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-brand-900 uppercase tracking-tight">
          Hasil Akhir Setelah Mengikuti Webinar
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6 text-left bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white transition-colors duration-200">
            <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
            <div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">Efisiensi Radikal</h4>
                <p className="text-lg text-gray-600">Memangkas waktu riset teknis dari belasan jam menjadi hanya dalam hitungan menit, memungkinkan fokus pada strategi inti.</p>
            </div>
          </div>
          <div className="w-full h-px bg-gray-200"></div>
          <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white transition-colors duration-200">
            <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
            <div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">Keputusan Berbasis Bukti</h4>
                <p className="text-lg text-gray-600">Memiliki landasan data yang akurat dengan sitasi yang dapat langsung diverifikasi ke sumber aslinya, menghilangkan keraguan.</p>
            </div>
          </div>
          <div className="w-full h-px bg-gray-200"></div>
          <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white transition-colors duration-200">
            <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
            <div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">Otomatisasi Pelatihan</h4>
                <p className="text-lg text-gray-600">Membangun hub pengetahuan mandiri untuk melatih karyawan baru tanpa beban administratif tambahan bagi manajemen.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <button 
            onClick={scrollToRegister}
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded-full text-xl uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Daftar Sekarang
            <ChevronRight className="ml-2 w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Results;