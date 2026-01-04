import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const faqs = [
    { q: "Apakah saya harus sudah punya data penelitian?", a: "Tidak perlu. Webinar ini justru membantu Anda sejak tahap pencarian ide dan studi literatur awal." },
    { q: "Apakah data saya aman di AI?", a: "Ya. Kami mengajarkan setting privasi di mana Google menjamin data riset tidak digunakan untuk melatih model publik." },
    { q: "Saya gaptek, apakah bisa ikut?", a: "Sangat bisa. Tools yang digunakan dirancang sesederhana chatting WhatsApp." }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">Pertanyaan Umum (FAQ)</h2>
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
              <button 
                onClick={() => toggleFaq(idx)}
                className="w-full flex justify-between items-center p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="font-bold text-slate-700">{item.q}</span>
                {faqOpen === idx ? <ChevronUp className="w-5 h-5 text-gray-500"/> : <ChevronDown className="w-5 h-5 text-gray-500"/>}
              </button>
              {faqOpen === idx && (
                <div className="p-5 bg-white text-slate-600 leading-relaxed border-t border-gray-200">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

