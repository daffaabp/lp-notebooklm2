import React from 'react';
import { BadgeCheck } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="bg-slate-950 text-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto border-2 border-dashed border-yellow-500/30 bg-yellow-500/5 p-10 md:p-14 rounded-[2rem]">
        <div className="flex justify-center mb-6">
            <BadgeCheck className="w-16 h-16 text-yellow-500" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-yellow-400">
          Jaminan Kepuasan 100%
        </h3>
        <p className="text-lg text-slate-300 leading-relaxed">
          Kami sangat yakin dengan efektivitas sistem ini. Jika setelah mengikuti webinar Anda merasa metode yang diajarkan tidak memberikan nilai tambah nyata bagi tim HR Anda, kami akan mengembalikan investasi Anda sepenuhnya tanpa pertanyaan rumit.
        </p>
      </div>
    </section>
  );
};

export default Guarantee;