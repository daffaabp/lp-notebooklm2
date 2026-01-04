import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Timer, MapPin } from 'lucide-react';

const Pricing: React.FC = () => {
  // Countdown Timer Logic (2 Hours)
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60); // 2 hours in seconds

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
    return `${h.toString().padStart(2, '0')} : ${m.toString().padStart(2, '0')} : ${s.toString().padStart(2, '0')}`;
  };

  return (
    <section className="py-16 bg-white border-t border-b border-slate-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 text-center">
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-8">
            Investasi Terbaik untuk Masa Depan Akademik Anda
          </h2>

          {/* Pricing Display */}
          <div className="flex flex-col items-center justify-center gap-2 mb-10">
            <span className="text-slate-400 line-through text-xl font-medium">Rp 499.000</span>
            <span className="text-5xl md:text-6xl font-extrabold text-primary tracking-tight">
              Rp 149.000
            </span>
            <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full mt-2">
              Hemat 70% Hari Ini
            </span>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center mb-10">
            <div className="bg-red-50 text-danger border border-red-100 px-6 py-3 rounded-xl flex items-center gap-3 font-bold text-lg animate-pulse shadow-sm">
              <Timer size={24} />
              <span>Harga Promo Berakhir: {formatTime(timeLeft)}</span>
            </div>
          </div>

          {/* Schedule Detail */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex flex-col items-center gap-2 text-slate-700">
              <Calendar className="text-accent" size={28} />
              <div className="font-bold">Sabtu, 10 Jan 2026</div>
            </div>
            <div className="flex flex-col items-center gap-2 text-slate-700 md:border-l md:border-r border-slate-100">
              <Clock className="text-accent" size={28} />
              <div className="font-bold">14.00 - 16.00 WIB</div>
            </div>
            <div className="flex flex-col items-center gap-2 text-slate-700">
              <MapPin className="text-accent" size={28} />
              <div className="font-bold">Zoom Meeting</div>
            </div>
          </div>

          <p className="mt-8 text-slate-500 italic">
            *Link Zoom akan dikirimkan melalui WhatsApp & Email setelah pendaftaran berhasil.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Pricing;