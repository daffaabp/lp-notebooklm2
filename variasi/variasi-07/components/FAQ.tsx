import React from 'react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
  <div className="border-b border-gray-200 py-6 last:border-0">
    <h3 className="font-bold text-lg text-[#002147] mb-2">{question}</h3>
    <p className="text-gray-600">{answer}</p>
  </div>
);

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Apakah data perusahaan saya aman?",
      answer: "Ya. Pada akun Google Workspace, data Anda tetap privat, tidak ditinjau manusia, dan tidak digunakan untuk melatih AI [9, 11]."
    },
    {
      question: "Apakah saya perlu keahlian teknis?",
      answer: "Tidak. NotebookLM dirancang dengan antarmuka intuitif untuk profesional non-teknis agar bisa langsung bekerja dengan dokumen mereka [12]."
    },
    {
      question: "Apakah mendukung Bahasa Indonesia?",
      answer: "Tentu. Seluruh fitur analisis dan interaksi sudah mendukung penuh Bahasa Indonesia [13]."
    }
  ];

  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#002147] mb-12">Pertanyaan Umum</h2>
        <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;