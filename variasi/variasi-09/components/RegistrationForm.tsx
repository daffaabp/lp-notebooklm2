import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Calendar, Clock, AlertTriangle } from 'lucide-react';

const RegistrationForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  // Initial 2 hours in seconds
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')} : ${m.toString().padStart(2, '0')} : ${s.toString().padStart(2, '0')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
        setSubmitted(true);
    }, 500);
  };

  if (submitted) {
      return (
        <section id="form-registrasi" className="py-24 px-6 bg-slate-50">
            <div className="max-w-lg mx-auto bg-white p-12 rounded-[2rem] shadow-2xl border border-green-100 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">Terima Kasih!</h2>
                <p className="text-slate-600 mb-8">Pendaftaran Anda telah berhasil. Silakan cek email Anda untuk detail akses webinar.</p>
                <button 
                    onClick={() => setSubmitted(false)}
                    className="text-blue-600 font-bold hover:underline"
                >
                    Daftar peserta lain
                </button>
            </div>
        </section>
      )
  }

  return (
    <section id="form-registrasi" className="py-24 px-6 bg-slate-50 relative">
      <div className="max-w-lg mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-200 relative z-10">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Formulir Pendaftaran</h2>
            
            {/* Date Info */}
            <div className="inline-flex items-center gap-2 bg-blue-50 px-5 py-2 rounded-full border border-blue-100 mb-6">
                <Calendar className="w-5 h-5 text-blue-700" />
                <span className="font-bold text-blue-900">Sabtu, 10 Januari 2026 | 14.00 - 16.00 WIB</span>
            </div>

            {/* Countdown Timer */}
            <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex flex-col items-center animate-pulse">
                <div className="flex items-center gap-2 text-red-600 font-bold mb-1 text-sm uppercase tracking-wide">
                    <AlertTriangle className="w-4 h-4" />
                    Harga Promo Berakhir Dalam:
                </div>
                <div className="text-4xl font-black text-red-600 font-mono tracking-wider">
                    {formatTime(timeLeft)}
                </div>
            </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="sr-only">Nama Lengkap & Gelar</label>
            <input 
                required
                type="text" 
                id="name"
                placeholder="Nama Lengkap & Gelar" 
                className="w-full p-5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email Perusahaan</label>
            <input 
                required
                type="email" 
                id="email"
                placeholder="Email Perusahaan" 
                className="w-full p-5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400"
            />
          </div>
          <div>
            <label htmlFor="job" className="sr-only">Jabatan di Perusahaan</label>
            <input 
                required
                type="text" 
                id="job"
                placeholder="Jabatan di Perusahaan" 
                className="w-full p-5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all font-medium text-slate-800 placeholder:text-slate-400"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white py-5 rounded-2xl text-xl font-bold hover:shadow-lg hover:shadow-blue-900/30 hover:scale-[1.02] transition-all duration-300 uppercase flex items-center justify-center gap-3"
          >
            Daftar Sekarang
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
        <p className="text-xs text-center mt-8 text-slate-400">
          Data Anda aman sesuai Kebijakan Privasi & Syarat Ketentuan kami.
        </p>
      </div>
    </section>
  );
};

export default RegistrationForm;