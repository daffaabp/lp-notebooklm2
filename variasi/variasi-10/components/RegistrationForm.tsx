import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const RegistrationForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  // Initial state: 2 hours, 0 minutes, 0 seconds
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => setSubmitted(true), 1000);
  };

  if (submitted) {
    return (
      <section id="daftar" className="py-24 px-6 bg-blue-50">
        <div className="container mx-auto max-w-lg bg-white p-12 rounded-3xl shadow-2xl border border-blue-100 text-center animate-in zoom-in duration-300">
           <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
             <span className="text-4xl">✔</span>
           </div>
           <h2 className="text-3xl font-black text-slate-900 mb-4">Pendaftaran Berhasil!</h2>
           <p className="text-slate-600 text-lg">Terima kasih telah mendaftar. Link Zoom dan detail acara telah dikirim ke email Anda.</p>
           <button onClick={() => setSubmitted(false)} className="mt-8 text-blue-600 font-bold hover:underline">Daftar peserta lain</button>
        </div>
      </section>
    )
  }

  return (
    <section id="daftar" className="py-24 px-6 bg-blue-50">
      <div className="container mx-auto max-w-lg bg-white p-10 md:p-12 rounded-3xl shadow-2xl border border-blue-100 relative overflow-hidden">
        
        {/* Countdown Timer Banner */}
        <div className="bg-red-50 border border-red-100 rounded-2xl p-4 mb-8 flex flex-col items-center justify-center text-red-700 animate-pulse relative z-10">
            <div className="flex items-center gap-2 mb-1">
                <Clock className="w-4 h-4" />
                <p className="text-xs font-bold uppercase tracking-widest">Harga Promo Berakhir Dalam:</p>
            </div>
            <div className="text-4xl font-black font-mono tracking-wider tabular-nums">
                {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </div>
        </div>

        <h2 className="text-3xl font-black text-center mb-2 uppercase text-slate-900">Formulir Pendaftaran</h2>
        <p className="text-center text-slate-500 mb-10 font-medium">Sabtu, 10 Januari 2026 | 14.00 - 16.00 WIB</p>
        
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div>
            <label className="block text-sm font-bold mb-2 uppercase text-slate-700 tracking-wider">Nama Lengkap</label>
            <input 
                required
                type="text" 
                placeholder="Contoh: Andi Wijaya, S.T." 
                className="w-full p-4 border border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 uppercase text-slate-700 tracking-wider">Email Aktif</label>
            <input 
                required
                type="email" 
                placeholder="email@kantor.com" 
                className="w-full p-4 border border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400"
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2 uppercase text-slate-700 tracking-wider">Bidang Pekerjaan</label>
            <div className="relative">
                <select className="w-full p-4 border border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none bg-white appearance-none text-slate-700">
                    <option>Administrasi / Operasional</option>
                    <option>Pemasaran / Penjualan</option>
                    <option>Analis / Riset</option>
                    <option>Teknologi / IT</option>
                    <option>Manajemen / Eksekutif</option>
                    <option>Lainnya</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-700 text-white font-black py-5 rounded-xl text-xl hover:bg-blue-800 shadow-xl shadow-blue-700/20 uppercase transition-all hover:-translate-y-1">
            DAFTAR SEKARANG
          </button>
        </form>
        <p className="text-center text-xs text-slate-400 mt-8 font-medium italic">Link Zoom Meeting akan dikirimkan ke email segera setelah pendaftaran selesai.</p>
      </div>
    </section>
  );
};

export default RegistrationForm;