import React from 'react';

const ResultSection: React.FC = () => {
  return (
    <section className="py-20 px-5 text-center bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#202124] mb-12">
          Bayangin Kalo Skripsi Kamu Beres Pake Cara Ini:
        </h2>
        
        <div className="space-y-4">
          {[
            "Paham Isi 50 Jurnal Cuma Dalam 5 Menit (Nggak Perlu Baca Semua!) [9, 10]",
            "Cari Celah Penelitian (Novelty) Secara Otomatis [11, 12]",
            "Dapet Kutipan Valid Langsung Dari Halaman Aslinya (Anti-Ngawur) [13, 14]",
            "Belajar Sidang Skripsi Pake Kuis Interaktif AI [15, 16]"
          ].map((item, index) => (
            <div key={index} className="bg-[#e8f0fe] p-6 rounded-2xl text-[#0d47a1] text-lg md:text-xl font-bold flex items-start gap-3 text-left">
              <span className="flex-shrink-0">✅</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <a 
            href="#daftar" 
            className="inline-block bg-[#f9ab00] text-white py-5 px-12 rounded-full text-xl font-extrabold uppercase shadow-lg shadow-amber-500/40 hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >
            DAFTAR SEKARANG
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResultSection;