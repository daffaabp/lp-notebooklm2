import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

const Solution: React.FC = () => {
  const benefits = [
    "Argumentasi Anti-Gagal: Buktikan celah riset Anda secara ilmiah hanya dalam hitungan detik [8].",
    "Literasi Jurnal 10x Lebih Cepat: Pahami isi 300 jurnal sekaligus tanpa harus membaca satu per satu dari halaman awal [9].",
    "Asisten Pintar Pribadi: Jawaban riset yang 100% akurat karena hanya mengambil data dari dokumen tepercaya pilihan Anda [10].",
    "Mental Lebih Tenang: Selesaikan draf publikasi internasional tanpa harus mengorbankan waktu tidur [11]."
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              Hasil Nyata yang Akan Anda Dapatkan:
            </h2>
            <ul className="space-y-6">
              {benefits.map((benefit, index) => {
                 const [boldText, normalText] = benefit.split(': ');
                 return (
                  <li key={index} className="flex items-start gap-4 text-lg text-blue-50">
                    <CheckCircle2 className="flex-shrink-0 text-accent mt-1" size={24} />
                    <span>
                      <strong className="text-white font-bold">{boldText}:</strong> {normalText}
                    </span>
                  </li>
                 )
              })}
            </ul>
            <div className="mt-12">
              <a
                href="#daftar"
                className="inline-block bg-accent hover:bg-amber-500 text-white font-bold text-xl py-4 px-10 rounded-full shadow-lg transition-transform transform hover:-translate-y-1"
              >
                DAFTAR SEKARANG
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-accent/20 w-32 h-32 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="text-accent" size={32} />
                  <h3 className="text-2xl font-bold text-white">Mengapa NotebookLM?</h3>
                </div>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Berbeda dengan AI biasa yang sering mengarang jawaban (halusinasi), <strong className="text-accent">NotebookLM</strong> adalah asisten riset yang <b>hanya berbicara berdasarkan sumber Anda</b>. Setiap kalimat yang ia hasilkan dilengkapi bukti kutipan langsung ke halaman PDF aslinya [12, 13].
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solution;