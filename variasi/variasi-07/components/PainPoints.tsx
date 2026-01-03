import React from 'react';

const PainPoints: React.FC = () => {
  const points = [
    {
      title: "Ledakan Informasi",
      desc: "Otak Anda dibombardir data yang tersebar di PDF, email, dan video. Hasilnya? Kelelahan mental yang melumpuhkan [2]."
    },
    {
      title: "Decision Fatigue",
      desc: "Kualitas keputusan menurun drastis di akhir hari karena energi mental terkuras hanya untuk memilah data yang tidak relevan [3]."
    },
    {
      title: "Silo Pengetahuan",
      desc: "Wawasan berharga sering terkunci dalam dokumen yang tidak terindeks, membuat Anda kehilangan gambaran besar [4]."
    }
  ];

  return (
    <section className="py-20 bg-[#f4f7f9] text-center px-5">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#002147] mb-4">Krisis Kognitif Pemimpin Modern</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Manajer perusahaan besar rata-rata membuang 530.000 hari per tahun karena proses pengambilan keputusan yang tidak efektif [1]. Apakah Anda salah satunya?
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#002147]">
              <h3 className="text-xl font-bold text-[#002147] mb-4">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;