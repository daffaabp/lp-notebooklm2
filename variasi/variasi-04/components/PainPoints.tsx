import React from 'react';
import { PainPoint } from '../types';

const painPoints: PainPoint[] = [
    {
        title: "Kepala Penuh, Tapi Buntu",
        description: "Folder penuh ratusan PDF, tapi otak rasanya 'macet'. Sulit merangkai benang merah dari tumpukan jurnal yang sudah dibaca berbulan-bulan.",
        citations: "" 
    },
    {
        title: "Momok Pertanyaan 'Novelty'",
        description: "Jantung berdebar saat dosen bertanya: 'Bedanya risetmu apa?'. Anda terdiam karena merasa semua topik sudah pernah diteliti orang lain.",
        citations: ""
    },
    {
        title: "Dilema Integritas vs Deadline",
        description: "Deadline mendesak tapi takut pakai AI sembarangan. Khawatir sitasinya 'ngawur' (halusinasi) dan justru menghancurkan reputasi akademik Anda.",
        citations: ""
    }
];

export const PainPoints: React.FC = () => {
    return (
        <section className="bg-slate-50 py-24 px-5">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        Mari Jujur, Apakah Ini yang Sedang <br/> Anda Rasakan Saat Ini?
                    </h2>
                    <p className="text-xl text-slate-600 max-w-4xl mx-auto font-medium leading-relaxed">
                        Jika Anda merasa skripsi, tesis, atau disertasi Anda berjalan di tempat, percayalah: Masalahnya bukan pada kemampuan intelektual Anda, melainkan pada <span className="text-primary font-bold">inefisiensi manajemen pengetahuan</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {painPoints.map((point, index) => (
                        <div key={index} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 relative group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                            {/* Icon Wrapper */}
                            <div className="w-16 h-16 bg-indigo-50 text-primary rounded-2xl flex items-center justify-center mb-6 text-3xl border border-indigo-100 shadow-inner">
                                {index === 0 ? '🤯' : index === 1 ? '😰' : '⚖️'}
                            </div>
                            
                            <h3 className="text-2xl font-bold mb-4 text-slate-900 leading-snug">
                                {point.title}
                            </h3>
                            
                            {/* Description with enforced minimum font size of 18px (text-lg) */}
                            <p className="text-lg text-slate-600 leading-relaxed font-normal">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};