import React from 'react';
import { PainPoint } from '../types';

const painPoints: PainPoint[] = [
    {
        title: "Labirin Jurnal",
        description: "Wajib mengelola minimal 60 rujukan jurnal dunia, tapi Anda tenggelam dalam lautan PDF dan lupa apa yang sudah Anda baca.",
        citations: "[3, 4]"
    },
    {
        title: "Kekejaman 'Novelty'",
        description: "Sangat stres memetakan celah penelitian agar disertasi Anda tidak dianggap sekadar pengulangan penelitian lama.",
        citations: "[5, 6]"
    },
    {
        title: "Reviewer yang Galak",
        description: "Ketakutan ditolak jurnal internasional Scopus karena sitasi tidak akurat atau argumentasi yang lemah.",
        citations: "[7, 8]"
    }
];

export const PainPoints: React.FC = () => {
    return (
        <section className="bg-slate-50 py-20 px-5">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Kami Tahu Mengapa Anda Terhambat...</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Mahasiswa S2, S3, dan Dosen sering mengalami krisis kepercayaan diri dan kelelahan mental bukan karena kurang pintar, tapi karena beban informasi yang tidak manusiawi <span className="text-xs text-slate-400 align-top">[1, 2]</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {painPoints.map((point, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-danger relative group">
                            <div className="absolute top-4 right-4 text-xs text-slate-300 group-hover:text-slate-400 transition-colors">{point.citations}</div>
                            <div className="w-12 h-12 bg-rose-50 text-danger rounded-full flex items-center justify-center mb-6 text-2xl">
                                {index === 0 ? '😵‍💫' : index === 1 ? '🔍' : '📝'}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-800">{point.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};