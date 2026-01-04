import React, { useState } from 'react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
    {
        question: "Apakah nanti hasilnya akan terdeteksi Plagiasi atau AI Checker?",
        answer: "TIDAK, jika mengikuti metode kami. Kami mengajarkan penggunaan AI sebagai 'mitra dialektika' untuk menemukan pola dan celah riset, bukan mesin 'generate text' untuk copy-paste. Tulisan akhir tetaplah hasil sintesis pemikiran Anda sendiri yang orisinil dan lolos uji Turnitin."
    },
    {
        question: "Apakah aman mengunggah draft Disertasi/Tesis yang belum publik?",
        answer: "SANGAT AMAN. NotebookLM memiliki fitur privasi di mana data yang Anda unggah terisolasi (siloed) di akun pribadi Anda. Data tersebut TIDAK digunakan Google untuk melatih model publik mereka, berbeda dengan ChatGPT versi gratis."
    },
    {
        question: "Bidang ilmu saya sangat spesifik (Hukum/Teknik/Sastra), apakah relevan?",
        answer: "Logika penemuan 'Novelty' bersifat universal. Selama riset Anda berbasis referensi teks (jurnal, buku, putusan pengadilan, laporan lab), strategi ini 100% relevan untuk memangkas waktu tinjauan pustaka Anda secara drastis."
    },
    {
        question: "Saya Dosen/Mahasiswa yang 'Gaptek', apakah sulit diikuti?",
        answer: "Kami mendesain kurikulum ini khusus untuk 'Non-Tech Person'. Tanpa coding, tanpa instalasi software rumit. Jika Anda bisa menggunakan Google Search dan Email, Anda bisa menguasai strategi ini dalam 15 menit."
    }
];

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 px-5 bg-slate-50 border-t border-slate-200">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Pertanyaan Kunci</h2>
                    <p className="text-slate-600">Hal-hal krusial yang perlu Anda ketahui sebelum bergabung.</p>
                </div>
                
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
                            <button 
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors focus:outline-none"
                            >
                                <span className={`text-lg font-bold ${openIndex === index ? 'text-primary' : 'text-slate-800'}`}>
                                    {faq.question}
                                </span>
                                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-accent">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </button>
                            <div 
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2 text-base">
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