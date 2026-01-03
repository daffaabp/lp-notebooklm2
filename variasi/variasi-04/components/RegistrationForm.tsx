import React, { useState, useEffect } from 'react';
import { FormData } from '../types';

export const RegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        status: ''
    });

    // Countdown logic: 2 hours in seconds
    const [timeLeft, setTimeLeft] = useState(2 * 60 * 60);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send data to a backend
        alert(`Terima kasih, ${formData.name}! Pendaftaran Anda sedang diproses. Silakan cek email ${formData.email} untuk instruksi pembayaran.`);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="py-16 px-5" id="daftar">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
                
                {/* Speaker Profile */}
                <div className="flex-1 space-y-6 pt-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Profil Pembicara</h2>
                    <div className="flex items-start gap-4">
                        <div className="w-20 h-20 bg-slate-200 rounded-full flex-shrink-0 flex items-center justify-center text-4xl overflow-hidden border-2 border-primary">
                             🧑‍🏫
                        </div>
                        <div>
                            <p className="text-xl font-bold text-slate-900">Ahli Strategi Literasi Digital & AI Akademik</p>
                            <p className="text-slate-600 mt-2 leading-relaxed">
                                Berpengalaman membantu ratusan dosen dan peneliti dalam membangun infrastruktur manajemen pengetahuan yang efisien dan aman sesuai standar integritas publikasi internasional <span className="text-xs text-slate-400">[20, 21]</span>.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl">
                        <p className="text-sm text-orange-800 font-semibold flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.746 3.746 0 0121 12z" />
                            </svg>
                            Garansi 100% Uang Kembali
                        </p>
                        <p className="text-sm text-orange-700 mt-1 ml-7">
                            Jika Anda tidak mendapatkan <i>insight</i> baru dalam 60 menit pertama webinar.
                        </p>
                    </div>
                </div>

                {/* Form */}
                <div className="flex-1 w-full max-w-md mx-auto">
                    {/* Date Info */}
                    <div className="mb-4 bg-primary/5 border border-primary/20 rounded-2xl p-4 text-center">
                        <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">Jadwal Pelaksanaan</p>
                        <p className="text-lg font-extrabold text-slate-800">Sabtu, 10 Januari 2026</p>
                        <p className="text-slate-600 font-medium">14.00 - 16.00 WIB</p>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border-4 border-primary/10 relative z-10 overflow-hidden">
                         {/* Countdown Header */}
                        <div className="absolute top-0 left-0 w-full bg-red-50 py-2 border-b border-red-100 flex justify-center items-center gap-2">
                             <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                             <p className="text-xs font-bold text-red-600">Promo Berakhir Dalam: <span className="font-mono text-sm ml-1">{formatTime(timeLeft)}</span></p>
                        </div>

                        <div className="mt-8 text-center mb-6">
                            <h3 className="text-xl font-bold text-slate-900">Amankan Kursi Anda</h3>
                            <p className="text-sm text-slate-500">Slot terbatas untuk interaksi maksimal.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Nama Lengkap & Gelar</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Contoh: Dr. Andi Wijaya, M.T." 
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-slate-50"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Email (Link Zoom dikirim ke sini)</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="andi@kampus.ac.id" 
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-slate-50"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Status Saat Ini</label>
                                <select 
                                    name="status"
                                    required
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-slate-50"
                                >
                                    <option value="">Pilih Status</option>
                                    <option value="S2">Mahasiswa Magister (S2)</option>
                                    <option value="S3">Mahasiswa Doktor (S3)</option>
                                    <option value="Dosen">Dosen / Peneliti</option>
                                </select>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full bg-accent text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 hover:bg-orange-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mt-4 text-lg border-b-4 border-orange-700 flex flex-col items-center leading-tight"
                            >
                                <span>DAFTAR SEKARANG</span>
                                <span className="text-xs font-normal opacity-90 mt-1">Diskon 70% Hari Ini</span>
                            </button>
                            <p className="text-xs text-center text-slate-400 mt-2 flex items-center justify-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                                  <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                                </svg>
                                Data Anda aman dan terenkripsi.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};