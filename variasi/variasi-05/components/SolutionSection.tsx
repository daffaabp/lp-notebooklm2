import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <section className="px-5 pb-20 pt-10">
      <div className="max-w-6xl mx-auto bg-[#e3f2fd] rounded-[3rem] p-10 md:p-20 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d47a1] mb-6">
          Solusi Intelektual: NotebookLM - Rekan Berpikir Cerdas Kamu
        </h2>
        
        <p className="text-lg md:text-xl text-[#202124] max-w-4xl mx-auto mb-12 leading-relaxed">
          NotebookLM bukan AI biasa yang suka berhalusinasi. Dia adalah asisten yang 100% patuh sama dokumen yang kamu kasih [17, 18]. Kamu tinggal kasih PDF-nya, dan dia bakal bantu kamu "ngobrol" sama isi jurnal itu, bikin peta pikiran visual, sampe nemuin celah riset yang bikin dospem kamu kaget! [11, 19].
        </p>

        <div className="bg-white border-l-8 border-[#1a73e8] p-8 md:p-10 text-left rounded-r-xl shadow-sm">
          <p className="text-gray-600 text-lg md:text-xl italic leading-relaxed mb-6">
            "Sumpah, ini hacks paling gila buat mahasiswa! Dulu aku butuh waktu berminggu-minggu cuma buat bikin Bab 2. Pake cara ini, aku beresin tinjauan pustaka 30 jurnal cuma dalam satu sore. Skripsi aku jadi jauh lebih ilmiah dan valid!"
          </p>
          <p className="font-extrabold text-[#1a73e8] text-base md:text-lg">
            — Mahasiswa S1 Tingkat Akhir (Alumni Batch Sebelumnya)
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;