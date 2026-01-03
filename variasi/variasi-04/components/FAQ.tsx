import React from 'react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
    {
        question: "Apakah saya harus sudah punya naskah lengkap untuk ikut?",
        answer: "Tidak perlu. Webinar ini justru akan membimbing Anda dari tahap pencarian ide dan studi literatur awal agar tidak salah langkah [22]."
    },
    {
        question: "Apakah data riset saya aman jika diunggah ke NotebookLM?",
        answer: "Sangat aman. Melalui akun yang tepat, data Anda tidak akan digunakan oleh Google untuk melatih model AI publik dan tetap bersifat pribadi [23, 24]."
    },
    {
        question: "Kapan saya mendapatkan bonus akun Pro-nya?",
        answer: "Seluruh panduan aktivasi bonus NotebookLM Pro senilai 309rb akan dibagikan bagi peserta yang hadir secara live hingga akhir sesi."
    }
];

export const FAQ: React.FC = () => {
    return (
        <section className="py-20 px-5 bg-white">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-12">Pertanyaan Umum (FAQ)</h2>
                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-colors">
                            <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-start">
                                <span className="text-primary mr-2">Q:</span> {faq.question}
                            </h3>
                            <p className="text-slate-600 ml-7">
                                <span className="font-semibold text-slate-800">A:</span> {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};