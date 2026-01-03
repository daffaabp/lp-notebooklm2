import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-slate-800 pr-8">{question}</span>
        {isOpen ? <ChevronUp className="text-primary flex-shrink-0" /> : <ChevronDown className="text-slate-400 flex-shrink-0" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Apakah saya harus paham IT untuk menggunakan NotebookLM?",
      a: "Tidak perlu. Penggunaannya sangat mudah, seperti mengobrol biasa dengan teman. Fokus webinar ini adalah strategi risetnya [16]."
    },
    {
      q: "Apakah aman mengunggah naskah rahasia saya ke sini?",
      a: "Sangat aman. Melalui akun yang benar, data Anda tidak akan digunakan oleh Google untuk melatih model AI mereka dan tetap bersifat privat [17, 18]."
    },
    {
      q: "Bagaimana cara mendapatkan bonus akun Pro-nya?",
      a: "Bonus akan diberikan langsung kepada seluruh peserta yang hadir secara live saat sesi webinar berakhir."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 mb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-extrabold text-center text-slate-800 mb-12">
          Tanya Jawab (FAQ)
        </h2>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 px-6 md:px-10">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;