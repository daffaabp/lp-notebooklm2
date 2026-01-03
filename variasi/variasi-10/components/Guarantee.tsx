import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white text-center px-6">
      <div className="container mx-auto max-w-2xl">
        <div className="flex justify-center mb-6">
            <ShieldCheck className="w-16 h-16 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white">Jaminan Investasi Aman (100% Kepuasan)</h3>
        <p className="opacity-80 leading-relaxed text-lg text-slate-300">
          Jika dalam 14 hari setelah mengikuti webinar ini Anda merasa metode yang diajarkan tidak memberikan nilai tambah nyata bagi produktivitas kerja Anda, kami akan mengembalikan investasi Anda sepenuhnya tanpa pertanyaan rumit.
        </p>
      </div>
    </section>
  );
};

export default Guarantee;
