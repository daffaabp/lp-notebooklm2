import React from 'react';

export const Hero: React.FC = () => {
    return (
        <header className="bg-gradient-to-br from-slate-900 to-primary text-white pt-24 pb-20 px-5 text-center relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-400 rounded-full mix-blend-overlay filter blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full mix-blend-overlay filter blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                    Sudah menulis ratusan halaman tapi masih ditanya:{" "}
                    <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-accent font-extrabold">
                        "Kebaharuannya di mana?"
                    </span>
                    <br className="hidden md:block" />
                    <span className="block mt-4 text-accent text-2xl md:text-3xl lg:text-4xl font-black underline decoration-amber-300 underline-offset-4 tracking-tight lowercase">
                        notebooklm solusinya
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
                    Lupakan hari-hari melelahkan membaca ratusan PDF hanya untuk ditolak pembimbing.
                    Temukan <i>Research Gap</i> dan <i>Novelty</i> Anda secara otomatis dalam hitungan menit
                    menggunakan strategi "Asisten Riset Pribadi" dari Google.
                </p>

                <div className="bg-white/10 backdrop-blur-sm inline-block rounded-2xl p-6 mb-8 border border-white/20">
                    <div className="flex flex-col items-center">
                        <span className="text-indigo-200 line-through text-lg">Rp 499.000</span>
                        <span className="text-4xl md:text-5xl font-extrabold text-accent mt-1 block drop-shadow-sm">Hanya Rp 149.000</span>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <a
                        href="#daftar"
                        className="bg-accent text-white px-8 py-4 text-xl md:text-2xl rounded-xl font-extrabold shadow-lg shadow-orange-900/20 hover:scale-105 hover:bg-orange-500 hover:shadow-orange-500/40 transition-all duration-300 inline-block border-b-4 border-orange-700"
                    >
                        DAFTAR SEKARANG
                    </a>

                    <div className="mt-4 bg-indigo-900/40 border border-dashed border-indigo-300/30 px-6 py-3 rounded-lg backdrop-blur-md">
                        <span className="font-bold flex items-center gap-2 text-sm md:text-base text-indigo-50">
                            <span>🎁</span> BONUS: Akun NotebookLM Pro Senilai Rp 309.000 (Untuk Peserta Terpilih)
                        </span>
                    </div>

                    <p className="mt-8 text-indigo-100 font-medium text-sm md:text-base bg-white/5 inline-block px-4 py-1 rounded-full">
                        📅 Sabtu, 10 Januari 2026 | 🕒 14.00 - 16.00 WIB | 📍 Live via Zoom Meeting
                    </p>
                </div>
            </div>
        </header>
    );
};