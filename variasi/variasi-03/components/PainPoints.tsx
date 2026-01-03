import React from 'react';
import { AlertCircle, FileX, RotateCw } from 'lucide-react';

const PainPoints: React.FC = () => {
  const points = [
    {
      icon: <FileX size={40} className="text-danger" />,
      title: "Trauma 'Rejected'",
      description: "Naskah dikembalikan oleh editor Scopus/Sinta hanya dalam 24 jam karena dianggap tidak memiliki kebaruan (novelty) yang kuat [3]."
    },
    {
      icon: <AlertCircle size={40} className="text-danger" />,
      title: "Labirin Referensi",
      description: "Membaca 60+ jurnal utama terasa mustahil di tengah beban kerja dan keluarga. Anda kehilangan arah dalam tumpukan PDF yang berantakan [4, 5]."
    },
    {
      icon: <RotateCw size={40} className="text-danger" />,
      title: "Siklus Revisi Abadi",
      description: "Dosen pembimbing meminta revisi terus-menerus tanpa memberikan arahan yang jelas. Anda merasa jalan di tempat sementara biaya semesteran terus berjalan [6, 7]."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6">
            Mengapa Riset S2/S3 Terasa Seperti Siksaan Tanpa Akhir?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Berdasarkan data akademik, 90% mahasiswa pascasarjana kesulitan menyusun kerangka teori dan 80% stres karena bahasa akademik yang dianggap tidak standar oleh reviewer [1, 2]. Apakah Anda salah satunya?
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