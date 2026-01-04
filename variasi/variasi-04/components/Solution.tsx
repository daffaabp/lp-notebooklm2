import React from 'react';

export const Solution: React.FC = () => {
    return (
        <section className="py-20 px-5 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">
                        Hasil Akhir yang Akan Anda Peroleh:
                    </h2>
                    <ul className="space-y-6">
                        {[
                            { title: "Temukan Novelty Secara Presisi", text: "AI akan mencari kontradiksi antar pakar dalam 300 jurnal Anda sekaligus untuk membuktikan kebaruan riset Anda.", citation: "[6, 9]" },
                            { title: "Akurasi Sitasi Mutlak", text: "Jawaban asisten riset ini selalu menyertakan bukti kutipan yang menunjuk langsung ke halaman PDF asli Anda.", citation: "[10, 11]" },
                            { title: "Analisis Tanpa \"Halu\"", text: "Berbeda dengan ChatGPT, alat ini hanya bekerja berdasarkan sumber yang Anda pilih sendiri, sehingga data tetap valid dan ilmiah.", citation: "[12, 13]" },
                            { title: "Stres Akademik Berkurang Drastis", text: "Selesaikan tinjauan pustaka hingga 60% lebih cepat dan kembalikan waktu istirahat Anda.", citation: "[14, 15]" }
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start">
                                <span className="bg-emerald-100 text-emerald-600 rounded-full p-1 mr-4 mt-1 flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </span>
                                <div>
                                    <p className="text-lg text-slate-700">
                                        <strong className="text-slate-900">{item.title}:</strong> {item.text} <span className="text-xs text-slate-400">{item.citation}</span>
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-12 text-center">
                        <a href="#daftar" className="inline-block bg-green-600 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-green-200 hover:bg-green-700 hover:scale-105 transition-all duration-300 text-xl border-b-4 border-green-800">
                            DAFTAR SEKARANG
                        </a>
                    </div>
                </div>

                <div className="flex-1 w-full">
                    <div className="bg-indigo-50 p-8 md:p-10 rounded-3xl border border-indigo-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-200 rounded-full opacity-50 blur-2xl"></div>
                        <h3 className="text-2xl font-bold text-primary mb-4 relative z-10">Solusi Kita: NotebookLM</h3>
                        <p className="text-lg text-slate-700 leading-relaxed relative z-10">
                            Google NotebookLM adalah asisten berpikir yang <b>berlabuh pada sumber dokumen Anda</b>. 
                            Ia bukan sekadar perangkum, tapi rekan riset yang memahami konteks teknis dan akademis Anda secara utuh <span className="text-xs text-slate-500">[16, 17]</span>.
                        </p>
                        <div className="mt-6 p-4 bg-white rounded-xl shadow-sm border border-indigo-100 relative z-10">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 bg-slate-100 rounded w-3/4"></div>
                                <div className="h-2 bg-slate-100 rounded w-full"></div>
                                <div className="h-2 bg-slate-100 rounded w-5/6"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};