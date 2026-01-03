import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Outcome: React.FC = () => {
  const outcomes = [
    { title: "Efisiensi Radikal", desc: "Memangkas waktu riset manual dari 15 jam menjadi kurang dari 1 jam." },
    { title: "Akurasi Mutlak", desc: "Jawaban yang dihasilkan 100% berbasis referensi asli Anda, lengkap dengan sitasi." },
    { title: "Ketenangan Mental", desc: "Bekerja dengan 'Otak Kedua' mengurangi beban pikiran berlebih, membuat Anda lebih bertenaga." },
  ];

  return (
    <section className="py-24 px-6 bg-blue-900 text-white relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-800 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-950 rounded-full opacity-50 blur-3xl"></div>

        <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-16">Bayangkan Jika Anda Bisa Mencapai Hasil Ini:</h2>
            <div className="grid gap-6 text-left">
                {outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start bg-blue-800/50 p-6 rounded-2xl border border-blue-700/50 hover:bg-blue-800 transition">
                        <CheckCircle2 className="text-yellow-400 w-8 h-8 mr-4 flex-shrink-0 mt-1" />
                        <div>
                            <span className="block text-xl font-bold text-white mb-1">{outcome.title}</span>
                            <span className="text-blue-100 text-lg leading-relaxed">{outcome.desc}</span>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-16">
                 <h2 className="text-2xl font-bold mb-8 text-blue-100">Amankan Kursi Anda Sekarang! Slot Zoom Terbatas.</h2>
                <a href="#daftar" className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl text-xl font-bold shadow-lg shadow-blue-900/50 uppercase tracking-wide transition-all hover:scale-105">
                    Daftar Sekarang
                </a>
            </div>
        </div>
    </section>
  );
};

export default Outcome;
