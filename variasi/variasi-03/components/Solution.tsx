import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

const Solution: React.FC = () => {
  const benefits = [
    "Paham Ratusan Jurnal dalam Hitungan Menit: Tidak perlu baca manual satu per satu, AI akan merangkum inti sari literatur untuk Anda.",
    "Menemukan Research Gap Valid: Otomatis mendeteksi celah penelitian yang belum disentuh orang lain untuk memperkuat novelty Anda.",
    "Kutip Sumber dengan Akurat: Referensi langsung ke halaman PDF asli, menghilangkan risiko 'halusinasi' AI yang sering terjadi.",
    "Percepat Kelulusan: Hemat waktu riset berbulan-bulan menjadi beberapa hari, sehingga Anda bisa fokus pada sidang dan publikasi."
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              Hasil Nyata yang Akan Anda Rasakan:
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
            
            {/* Middle CTA - Green */}
            <div className="mt-12 text-center lg:text-left">
              <a
                href="#daftar"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-xl py-4 px-12 rounded-full shadow-lg transition-transform transform hover:-translate-y-1"
              >
                DAFTAR SEKARANG
                <img
                  src="/assets/right-arrow.avif"
                  alt="Arrow"
                  className="w-6 h-6 arrow-blink"
                />
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
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
        .arrow-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
};

export default Solution;