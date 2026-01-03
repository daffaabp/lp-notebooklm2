import React from 'react';
import { HelpCircle } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
    <h4 className="font-bold text-lg mb-3 flex items-start text-brand-900">
      <HelpCircle className="w-5 h-5 mr-3 text-blue-500 mt-1 flex-shrink-0" />
      {question}
    </h4>
    <p className="text-gray-600 pl-8 leading-relaxed">{answer}</p>
  </div>
);

const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-brand-900 uppercase tracking-tight">
          Pertanyaan yang Sering Diajukan (FAQ)
        </h2>
        <div className="space-y-6">
          <FAQItem 
            question="Apakah data rahasia bisnis saya aman di NotebookLM?"
            answer="Ya. Google secara eksplisit menyatakan bahwa data yang diunggah ke NotebookLM tidak digunakan untuk melatih model AI publik mereka. Data Anda tetap berada di lingkungan privat perusahaan Anda."
          />
          <FAQItem 
            question="Apa bedanya NotebookLM dengan ChatGPT?"
            answer='ChatGPT adalah "generalis" yang mengambil informasi dari seluruh internet, seringkali tanpa sumber yang jelas. NotebookLM adalah "spesialis" yang jawabannya terbatas hanya pada dokumen tepercaya yang Anda unggah, dengan sitasi akurat.'
          />
          <FAQItem 
            question="Dapatkah NotebookLM memproses video YouTube?"
            answer="Sangat bisa. Sistem ini mampu menganalisis transkrip video YouTube untuk merangkum poin-poin utama secara otomatis, menghemat waktu Anda menonton video berdurasi panjang."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;