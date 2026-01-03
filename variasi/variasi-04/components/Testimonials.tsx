import React from 'react';

export const Testimonials: React.FC = () => {
    return (
        <section className="py-16 px-5">
             <div className="max-w-4xl mx-auto bg-slate-50 rounded-[2rem] p-8 md:p-16 text-center border border-slate-100 shadow-inner">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Social Proof & Testimonial</h2>
                
                <div className="bg-indigo-50 rounded-2xl p-8 mb-8 relative border border-indigo-100">
                    <svg className="absolute top-4 left-4 w-8 h-8 text-indigo-300 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.923 14.932 15.084C15.542 14.246 16.533 13.567 17.905 13.048L17.905 12C17.472 12.008 17.062 12 16.674 12C14.735 12 13.528 11.231 13.053 9.69199C12.578 8.15399 12.83 6.388 13.812 4.394L16.276 5.564C15.772 6.758 15.636 7.68 15.869 8.329C16.103 8.978 16.714 9.303 17.7 9.303L17.7 13.504C16.489 14.174 15.884 15.347 15.884 17.025L15.884 21L14.017 21ZM5.183 21L5.183 18C5.183 16.896 5.487 15.923 6.098 15.084C6.709 14.246 7.699 13.567 9.071 13.048L9.071 12C8.639 12.008 8.228 12 7.84 12C5.901 12 4.694 11.231 4.219 9.69199C3.744 8.15399 3.996 6.388 4.978 4.394L7.442 5.564C6.938 6.758 6.802 7.68 7.035 8.329C7.269 8.978 7.879 9.303 8.865 9.303L8.865 13.504C7.654 14.174 7.049 15.347 7.049 17.025L7.049 21L5.183 21Z" /></svg>
                    <p className="text-lg md:text-xl italic text-slate-700 leading-relaxed font-serif">
                        "Setelah menggunakan alur kerja 'Otak Kedua' dengan NotebookLM, saya berhasil memetakan perdebatan teori di Bab 2 hanya dalam satu sore. Pembimbing saya kaget karena kebaharuan riset saya jadi sangat tajam!"
                    </p>
                    <div className="mt-6">
                        <p className="font-bold text-primary">— Mahasiswa Doktoral S3</p>
                        <p className="text-sm text-slate-500">(Peserta Batch Sebelumnya)</p>
                    </div>
                </div>

                <p className="text-lg text-slate-600">
                    Bergabunglah dengan <b className="text-slate-900">1,000+ Akademisi</b> yang telah mentransformasi riset mereka menjadi lebih cerdas dan tenang <span className="text-xs align-top">[18, 19]</span>.
                </p>
             </div>
        </section>
    );
};