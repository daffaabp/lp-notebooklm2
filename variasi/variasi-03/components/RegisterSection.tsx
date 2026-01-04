import React, { useState, useEffect } from 'react';
import { ShieldCheck, User, Calendar, Clock, Timer, MapPin } from 'lucide-react';

const RegisterSection: React.FC = () => {
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
    <section id="daftar" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12 items-start">
          
          {/* Left Column: Speaker Profile + Pricing Info */}
          <div className="flex-1 w-full lg:sticky lg:top-24 space-y-8">
            {/* Speaker Profile */}
            <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm mb-6">
                PROFIL PEMBICARA
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">M. Arianto</h2>
              <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                "Dengan pengalaman 10+ tahun dan 195+ proyek AI, saya siap membahas tips menguasai AI, teknik penulisan, dan research methodology sebagai AI Engineer, Researcher, dan Mentor profesional."
              </p>

              <div className="flex items-center gap-4 mt-8">
                 <img
                   src="/speaker/arianto.avif"
                   alt="M. Arianto"
                   className="w-16 h-16 rounded-full object-cover"
                 />
                 <div>
                    <div className="font-bold text-slate-900">M. Arianto</div>
                    <div className="text-slate-500 text-sm">AI Engineer dan Researcher</div>
                    <div className="text-slate-400 text-xs mt-1">kelasinovatif.com</div>
                 </div>
              </div>
            </div>

            {/* Pricing & Schedule Info (Moved here) */}
            <div className="bg-slate-50 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 text-center">
              <h2 className="text-2xl font-extrabold text-slate-800 mb-6 leading-tight">
                Rugi Besar Jika Melewatkan Kesempatan Ini!
              </h2>

              {/* Pricing Display */}
              <div className="flex flex-col items-center justify-center gap-2 mb-6">
                <span className="text-slate-400 line-through text-lg font-medium">Rp 499.000</span>
                <span className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
                  Rp 149.000
                </span>
                <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full mt-2">
                  Hemat 70% Hari Ini
                </span>
              </div>

              {/* Countdown Timer */}
              <div className="flex justify-center mb-6">
                <div className="bg-red-50 text-danger border border-red-100 px-4 py-2 rounded-xl flex items-center gap-2 font-bold text-base animate-pulse shadow-sm">
                  <Timer size={20} />
                  <span>Sisa Waktu: {formatTime(timeLeft)}</span>
                </div>
              </div>

              {/* Schedule Detail */}
              <div className="space-y-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-left">
                <div className="flex items-center gap-3 text-slate-700">
                  <Calendar className="text-accent flex-shrink-0" size={24} />
                  <div>
                    <div className="text-xs text-slate-500">Tanggal</div>
                    <div className="font-bold">Sabtu, 10 Jan 2026</div>
                  </div>
                </div>
                <div className="w-full h-px bg-slate-50"></div>
                <div className="flex items-center gap-3 text-slate-700">
                  <Clock className="text-accent flex-shrink-0" size={24} />
                  <div>
                    <div className="text-xs text-slate-500">Waktu</div>
                    <div className="font-bold">14.00 - 16.00 WIB</div>
                  </div>
                </div>
                <div className="w-full h-px bg-slate-50"></div>
                <div className="flex items-center gap-3 text-slate-700">
                  <MapPin className="text-accent flex-shrink-0" size={24} />
                  <div>
                    <div className="text-xs text-slate-500">Tempat</div>
                    <div className="font-bold">Zoom Meeting</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="flex-1 w-full">
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-primary/10 p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-blue-600 to-primary"></div>
              
              {/* 3 Arrow Down with Blink Animation */}
              <div className="flex justify-center items-center gap-2 mb-4 -mt-4">
                <img
                  src="/assets/right-arrow.avif"
                  alt="Arrow down"
                  className="w-10 h-7 md:w-14 md:h-9 arrow-blink rotate-90"
                />
                <img
                  src="/assets/right-arrow.avif"
                  alt="Arrow down"
                  className="w-10 h-7 md:w-14 md:h-9 arrow-blink rotate-90"
                />
                <img
                  src="/assets/right-arrow.avif"
                  alt="Arrow down"
                  className="w-10 h-7 md:w-14 md:h-9 arrow-blink rotate-90"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-center text-slate-900 mb-8 mt-2">
                Ambil Diskon Sekarang
              </h3>

              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Pendaftaran Berhasil! (Simulasi)"); }}>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    placeholder="Masukkan nama Anda" 
                    required
                    className="w-full px-4 py-3 bg-white text-slate-900 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Aktif</label>
                  <input 
                    type="email" 
                    placeholder="Masukkan email Anda" 
                    required
                    className="w-full px-4 py-3 bg-white text-slate-900 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nomor WhatsApp</label>
                  <input 
                    type="tel" 
                    placeholder="08xxxxxxxxxx" 
                    required
                    className="w-full px-4 py-3 bg-white text-slate-900 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-slate-400"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 mt-4"
                >
                  DAFTAR SEKARANG
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-start gap-3">
                <ShieldCheck className="text-green-500 flex-shrink-0" size={24} />
                <p className="text-sm text-slate-500 leading-snug">
                  <strong>Money Back Guarantee:</strong> Jika Anda tidak mendapatkan strategi baru untuk riset Anda, kami kembalikan uang Anda 100% tanpa potongan.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
        .arrow-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
};

export default RegisterSection;