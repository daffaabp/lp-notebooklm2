import React from 'react';
import { Shield } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-yellow-50 border-y border-yellow-200">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
            <Shield className="w-12 h-12 text-yellow-600" />
        </div>
        <h2 className="text-2xl font-bold text-yellow-800 mb-4 uppercase tracking-wide">Jaminan Kepuasan 100% (Tanpa Risiko)</h2>
        <p className="text-yellow-900/80 max-w-3xl mx-auto text-lg leading-relaxed">
          Kami sangat yakin dengan efektivitas <span className="font-bold text-yellow-900">NotebookLM</span>. Jika setelah mengikuti webinar ini Anda merasa tidak mendapatkan nilai tambah pada produktivitas tim Anda, kami akan mengembalikan investasi Anda sepenuhnya tanpa pertanyaan rumit.
        </p>
      </div>
    </section>
  );
};

export default Guarantee;