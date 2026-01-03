import React, { useState } from 'react';

const FAQ: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "Apakah data perusahaan saya aman di NotebookLM?",
            answer: "Sangat aman. Google menjamin bahwa data yang diunggah ke NotebookLM tidak digunakan untuk melatih model AI publik mereka. Khusus versi Enterprise, data tetap berada dalam kontrol residensi data organisasi Anda."
        },
        {
            question: "Apa bedanya dengan ChatGPT?",
            answer: "NotebookLM bersifat \"Berbasis Data Nyata\". Ia tidak akan berhalusinasi mencari data di internet liar, melainkan hanya menjawab berdasarkan sumber internal terpercaya yang ANDA berikan, lengkap dengan sistem sitasi footnote."
        },
        {
            question: "Apakah mendukung dokumen dalam Bahasa Indonesia?",
            answer: "Ya, NotebookLM mendukung penuh input dan output dalam lebih dari 80 bahasa, termasuk Bahasa Indonesia."
        }
    ];

    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-16 uppercase italic underline decoration-orange-500 underline-offset-8">Pertanyaan Umum (FAQ)</h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-2 border-slate-50 rounded-xl overflow-hidden hover:border-slate-100 transition-colors">
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full text-left p-6 bg-slate-50 flex justify-between items-center group cursor-pointer focus:outline-none"
                            >
                                <h4 className="font-black text-lg md:text-xl text-slate-900 group-hover:text-orange-500 transition-colors pr-8">
                                    {faq.question}
                                </h4>
                                <i className={`fas fa-chevron-down text-slate-400 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}></i>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="p-6 pt-0 bg-slate-50 text-slate-600 leading-relaxed text-sm md:text-base border-t border-slate-200/50">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
