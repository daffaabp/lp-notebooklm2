import React from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    return (
        <details className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900">
                <h3 className="text-lg font-bold leading-tight">{question}</h3>
                <div className="white-bg p-1.5 rounded-full border border-slate-100 group-open:bg-slate-50 transition">
                    <ChevronDown className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180 text-slate-500" />
                </div>
            </summary>
            <div className="px-6 pb-6 pt-0">
                <p className="leading-relaxed text-slate-600 border-t border-slate-100 pt-4">
                    {answer}
                </p>
            </div>
        </details>
    );
}

const FAQ: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">
                Pertanyaan yang Sering Diajukan
            </h2>
        </div>
        
        <div className="space-y-4">
          <FAQItem 
            question="Apakah data sensitif perusahaan akan aman di NotebookLM?"
            answer="Sangat aman. Google menjamin bahwa data yang diunggah melalui akun Workspace/Bisnis tidak akan pernah ditinjau manusia atau digunakan untuk melatih model AI publik mereka [9, 15]."
          />
          <FAQItem 
            question="Apakah sistem ini sulit dipelajari oleh staf non-teknis?"
            answer="Tidak. Antarmuka NotebookLM dirancang sangat sederhana—cukup unggah dokumen dan Anda bisa langsung bertanya seperti mengobrol biasa [16, 17]."
          />
          <FAQItem 
            question="Apa bedanya dengan mencari file di Google Drive biasa?"
            answer="Pencarian biasa hanya menemukan dokumen. NotebookLM *memahami* isi dokumen Anda, membuat koneksi antar-file, dan menjawab pertanyaan lintas dokumen secara instan [18, 19]."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;