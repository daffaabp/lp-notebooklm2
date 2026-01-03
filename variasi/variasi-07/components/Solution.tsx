import React from 'react';

const Solution: React.FC = () => {
  const features = [
    {
      icon: "🎙️",
      title: "Audio Overview: Pahami Laporan Sambil Berkendara",
      desc: "Ubah dokumen teknis yang membosankan menjadi diskusi podcast antara dua host AI yang cerdas. Sangat efektif untuk menyerap konsep sulit melalui analogi manusiawi [6]."
    },
    {
      icon: "📊",
      title: "Otomasi Laporan Eksekutif",
      desc: "Menghasilkan Ringkasan Eksekutif, tabel perbandingan biaya, hingga peta pikiran strategis hanya dalam satu klik [6, 7]."
    },
    {
      icon: "🛡️",
      title: "Keamanan Data Tingkat Korporat",
      desc: "Data Anda bersifat privat. Tidak ada peninjauan manusia dan data Anda tidak digunakan untuk melatih model AI publik Google [8, 9]."
    }
  ];

  return (
    <section className="py-24 px-5 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#002147] text-center mb-4">
          NotebookLM: Mitra Berpikir Berbasis Data Internal Anda
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto italic">
          Berbeda dengan AI biasa, NotebookLM bekerja dengan akurasi berbasis sumber primer—hanya menggunakan dokumen yang Anda berikan [5].
        </p>

        <div className="space-y-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="text-5xl flex-shrink-0 bg-blue-50 w-24 h-24 flex items-center justify-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#002147] mb-3">{feature.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="#register" 
            className="inline-block bg-[#c5a059] hover:bg-[#b08d4a] text-white py-4 px-12 text-lg font-bold rounded-lg shadow-md transform transition hover:-translate-y-1"
          >
            DAFTAR SEKARANG
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solution;