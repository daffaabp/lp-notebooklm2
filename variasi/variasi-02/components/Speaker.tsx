import React from 'react';

const SPEAKER_IMG = "https://picsum.photos/300/300";

export const Speaker: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 bg-slate-50 p-10 rounded-3xl border border-gray-100">
          <img src={SPEAKER_IMG} alt="Speaker" className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white" />
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Pembicara: Dr. (Cand.) Riset Strategis</h3>
            <p className="text-slate-600 mb-4">
              Ahli strategi pembelajaran berbasis AI. Telah membantu ratusan mahasiswa pascasarjana membangun sistem riset digital yang efisien dan menembus jurnal bereputasi.
            </p>
            <div className="text-sm font-semibold text-primary bg-white px-4 py-2 rounded-lg inline-block shadow-sm">
              Ex. Reviewer Jurnal Sinta 2
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center italic text-slate-600 border-t pt-8">
          <p className="text-lg">"Dulu saya hampir menyerah dengan disertasi saya. Membaca jurnal terasa siksaan. Setelah mencoba alur kerja ini, saya bisa memetakan 50 jurnal dalam satu sore."</p>
          <strong className="block mt-4 text-slate-800">— Dr. Budi Santoso, Alumni Peserta (S3 Kedokteran)</strong>
        </div>
      </div>
    </section>
  );
};

