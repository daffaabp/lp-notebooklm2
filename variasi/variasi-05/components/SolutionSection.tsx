import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <section className="px-5 pb-20 pt-10">
      <div className="max-w-6xl mx-auto bg-[#e3f2fd] rounded-[3rem] p-10 md:p-20 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d47a1] mb-6">
          Solusi Intelektual: NotebookLM - Rekan Berpikir Cerdas Kamu
        </h2>
        
        <p className="text-lg md:text-xl text-[#202124] max-w-4xl mx-auto mb-12 leading-relaxed">
          NotebookLM bukan AI biasa yang suka berhalusinasi. Dia adalah asisten yang 100% patuh sama dokumen yang kamu kasih. Kamu tinggal kasih PDF-nya, dan dia bakal bantu kamu "ngobrol" sama isi jurnal itu, bikin peta pikiran visual, sampe nemuin celah riset yang bikin dospem kamu kaget!
        </p>
      </div>
    </section>
  );
};

export default SolutionSection;