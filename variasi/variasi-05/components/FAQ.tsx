import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-4 transition-all duration-300 hover:shadow-md bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left bg-white focus:outline-none"
      >
        <span className="text-[#0d47a1] font-bold text-lg md:text-xl">{question}</span>
        <svg
          className={`w-6 h-6 text-[#1a73e8] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-5 pt-0 text-gray-600 leading-relaxed text-base md:text-lg border-t border-gray-50">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Apakah asisten riset ini aman buat kerahasiaan draf skripsi aku?",
      answer: "Sangat aman. Google menjamin data yang kamu unggah nggak bakal dipake buat ngelatih model AI publik mereka. Skripsi kamu tetep privat!"
    },
    {
      question: "Aku gaptek, apa bisa ikut?",
      answer: "Bisa banget. Pake NotebookLM itu semudah kamu chatting sama temen di WhatsApp. Fokus webinar ini adalah strategi risetnya, bukan teknis koding yang ribet."
    },
    {
      question: "Kapan aku dapet bonus akun Pro-nya?",
      answer: "Panduan aktivasi dan akses akun NotebookLM Pro senilai Rp 309rb bakal dibagikan secara eksklusif buat kamu yang hadir secara live di akhir sesi."
    }
  ];

  return (
    <section className="bg-[#f8f9fa] py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#202124]">
          Tanya-Tanya Dulu (FAQ)
        </h2>
        
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;