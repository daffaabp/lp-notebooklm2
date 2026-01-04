import React from 'react';
import { AlertCircle, FileX, SearchX } from 'lucide-react';

const PainPoints: React.FC = () => {
  const points = [
    {
      icon: <FileX size={40} className="text-danger" />,
      title: "Naskah Selalu Ditolak",
      description: "Lelah menerima email penolakan dengan alasan klise: 'kurang novelty' atau 'referensi sudah usang', padahal Anda sudah berusaha maksimal."
    },
    {
      icon: <SearchX size={40} className="text-danger" />,
      title: "Bingung Mulai Darimana",
      description: "Terlalu banyak PDF jurnal yang harus dibaca. Anda tersesat dalam banjir informasi dan bingung memilah mana yang relevan untuk penelitian Anda."
    },
    {
      icon: <AlertCircle size={40} className="text-danger" />,
      title: "Revisi Dosen Tak Berujung",
      description: "Feedback pembimbing sering berubah-ubah dan abstrak. Progres Tesis/Disertasi macet berbulan-bulan tanpa kepastian acc."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6">
            Mengapa Riset Terasa Sangat Berat?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Mayoritas mahasiswa S2/S3 mengalami kemacetan akademik bukan karena kurang pintar, tapi karena **salah strategi** dalam memproses ribuan literatur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="mb-6 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-danger mb-4">{point.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;