import React from 'react';

export const FacilitiesAndBonus: React.FC = () => {
    return (
        <section className="py-16 px-5 bg-white border-y border-slate-100">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                        Investasi Sekali, Manfaat Berkali-kali
                    </h2>
                    <p className="text-slate-600 mt-3">Semua yang Anda butuhkan untuk percepatan studi ada di sini.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {/* Fasilitas Column */}
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.746 3.746 0 0121 12z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800">Fasilitas Peserta</h3>
                        </div>
                        <ul className="space-y-4 flex-1">
                            {[
                                "E-Sertifikat 12 JP (Bernilai Akademik)",
                                "Rekaman Video Webinar Full HD",
                                "Akses Seumur Hidup ke Materi PDF",
                                "Join Grup WhatsApp Eksklusif Peneliti"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center text-slate-700 font-medium">
                                    <svg className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Bonus Column */}
                    <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border-2 border-orange-200 shadow-md relative overflow-hidden flex flex-col">
                        <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            LIMITED OFFER
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-3 bg-orange-100 rounded-lg text-accent">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H4.5a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800">BONUS SPESIAL</h3>
                        </div>
                        <div className="mb-6 ml-1">
                            <span className="bg-orange-100 text-orange-700 text-sm font-bold px-2 py-1 rounded">
                                Senilai Rp 799.000
                            </span>
                        </div>
                        <ul className="space-y-4 flex-1">
                            <li className="flex items-start">
                                <span className="text-2xl mr-3">📚</span>
                                <div>
                                    <p className="font-bold text-slate-800">Ebook "Perfect Prompt"</p>
                                    <p className="text-sm text-slate-600">Panduan Copy-Paste Prompting untuk Penulisan Karya Ilmiah</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-2xl mr-3">🤖</span>
                                <div>
                                    <p className="font-bold text-slate-800">Akun Pro NotebookLM & Gemini</p>
                                    <p className="text-sm text-slate-600">Panduan akses fitur premium untuk analisis data mendalam</p>
                                </div>
                            </li>
                        </ul>
                        <div className="mt-6 pt-4 border-t border-orange-100 text-center">
                            <p className="text-xs text-orange-600 italic">*Bonus hanya tersedia untuk pendaftaran hari ini</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};