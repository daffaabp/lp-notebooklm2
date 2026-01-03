import React, { useState, useEffect } from 'react';
import { ShieldCheck, User, Calendar, Clock, Timer } from 'lucide-react';

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
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Speaker Profile */}
          <div className="flex-1 lg:sticky lg:top-24">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-sm mb-6">
                PROFIL PEMBICARA
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Ahli Strategi Riset Digital</h2>
              <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
              
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Telah mendampingi ratusan kandidat Magister dan Doktor dalam mengintegrasikan teknologi AI untuk menembus jurnal bereputasi tinggi (Scopus Q1/Q2) dengan integritas akademik yang tetap terjaga [14, 15].
              </p>

              <div className="flex items-center gap-4 mt-8">
                 <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center">
                    <User size={32} className="text-slate-400"/>
                 </div>
                 <div>
                    <div className="font-bold text-slate-900">Coach Akademik</div>
                    <div className="text-slate-500 text-sm">Praktisi AI untuk Riset</div>
                 </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="flex-1 w-full">
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-primary/10 p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-blue-600 to-primary"></div>
              
              <h3 className="text-2xl font-bold text-center text-slate-900 mb-2">
                Pendaftaran Peserta
              </h3>
              
              {/* Countdown Banner */}
              <div className="flex justify-center mb-6">
                <div className="bg-red-50 text-danger border border-red-100 px-4 py-2 rounded-lg flex items-center gap-2 font-bold animate-pulse">
                  <Timer size={18} />
                  <span>Harga Promo Berakhir: {formatTime(timeLeft)}</span>
                </div>
              </div>

              {/* Webinar Schedule Info */}
              <div className="bg-blue-50 rounded-xl p-5 mb-8 border border-blue-100">
                <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                  <Calendar size={18} /> Jadwal Webinar
                </h4>
                <div className="space-y-2 text-sm text-slate-700">
                  <div className="flex justify-between items-center border-b border-blue-200 pb-2">
                    <span>Hari/Tanggal</span>
                    <span className="font-semibold">Sabtu, 10 Januari 2026</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span>Waktu</span>
                    <span className="font-semibold flex items-center gap-1">
                      <Clock size={14} /> 14.00 - 16.00 WIB
                    </span>
                  </div>
                </div>
              </div>

              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Pendaftaran Berhasil! (Simulasi)"); }}>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    placeholder="Masukkan nama dan gelar" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Link Zoom</label>
                  <input 
                    type="email" 
                    placeholder="contoh@kampus.ac.id" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Jenjang Studi</label>
                  <div className="relative">
                    <select 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all appearance-none bg-white"
                    >
                      <option value="">Pilih Jenjang</option>
                      <option value="S2">Magister (S2)</option>
                      <option value="S3">Doktor (S3)</option>
                      <option value="Dosen">Dosen / Peneliti</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-amber-600 text-white font-extrabold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 mt-4"
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
    </section>
  );
};

export default RegisterSection;