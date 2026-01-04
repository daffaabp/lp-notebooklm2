import React from 'react';

export const Hero: React.FC = () => {
    return (
        <header className="bg-gradient-to-br from-slate-900 to-primary text-white pt-32 pb-24 px-5 text-center relative overflow-hidden">
             {/* Decorative Background Elements */}
             <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-400 rounded-full mix-blend-overlay filter blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full mix-blend-overlay filter blur-3xl"></div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Main Headline - The Hook */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8">
                    Sudah Menulis Ratusan Halaman, <br className="hidden md:block" /> 
                    Tapi Masih Ditanya: <span className="text-accent text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-accent">"Novelty-nya Di Mana?"</span>
                </h1>
                
                {/* Explicit Solution Badge */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full p-2 pr-6 backdrop-blur-md shadow-lg transition-transform hover:scale-105 duration-300 cursor-default">
                        <span className="bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                            Solusinya
                        </span>
                        <span className="text-lg md:text-xl font-bold text-white tracking-wide">
                            Google NotebookLM
                        </span>
                    </div>
                </div>
                
                {/* Description */}
                <p className="text-lg md:text-xl text-indigo-50 mb-10 max-w-3xl mx-auto font-normal leading-relaxed opacity-90">
                    Ini bukan salah Anda. Mencari kebaruan di antara ratusan jurnal secara manual itu mustahil. 
                    Gunakan <strong>NotebookLM</strong> untuk membedah ratusan PDF sekaligus, 
                    menemukan <em>Research Gap</em> dan <em>Novelty</em> secara otomatis, dan membuktikan argumen kebaruan Anda valid di mata penguji.
                </p>

                <div className="flex flex-col items-center gap-6">
                    <a 
                        href="#daftar" 
                        className="bg-green-600 text-white px-10 py-4 text-xl md:text-2xl rounded-xl font-extrabold shadow-xl shadow-green-900/30 hover:scale-105 hover:bg-green-500 hover:shadow-green-500/40 transition-all duration-300 inline-block border-b-4 border-green-800 ring-2 ring-green-400/20"
                    >
                        DAFTAR SEKARANG
                    </a>
                    
                    <div className="mt-6 bg-indigo-900/60 border border-indigo-500/30 px-6 py-3 rounded-lg backdrop-blur-md">
                        <span className="font-bold flex items-center gap-2 text-sm md:text-base text-indigo-100">
                            <span>🎁</span> BONUS PESERTA: Akun NotebookLM Pro (Senilai Rp 309.000)
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};