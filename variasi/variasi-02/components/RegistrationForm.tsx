import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Button } from './Button';
import { CountdownTimer } from './CountdownTimer';

export const RegistrationForm: React.FC = () => {
  return (
    <section id="daftar" className="py-20 bg-primary/5">
      <div className="container max-w-2xl mx-auto px-4">
        
        {/* Webinar Date Info Block */}
        <div className="bg-white rounded-t-3xl border-x border-t border-primary/20 p-6 text-center shadow-lg transform translate-y-2 z-0 relative">
           <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Jadwal Pelaksanaan</h3>
           <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-slate-700 font-medium">
             <div className="flex items-center gap-2">
               <Calendar className="w-5 h-5 text-accent" />
               <span>Sabtu, 10 Januari 2026</span>
             </div>
             <div className="hidden md:block w-px h-6 bg-gray-300"></div>
             <div className="flex items-center gap-2">
               <Clock className="w-5 h-5 text-accent" />
               <span>14.00 - 16.00 WIB</span>
             </div>
           </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-primary relative z-10">
          <h2 className="text-3xl font-bold text-center text-primary mb-2">Amankan Kursi Anda</h2>
          <p className="text-center text-slate-500 mb-6 text-sm">
            🛡️ Garansi 100% Uang Kembali jika tidak puas dalam 60 menit pertama.
          </p>

          {/* Countdown Timer */}
          <CountdownTimer />
          
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Nama Lengkap</label>
              <input type="text" className="w-full p-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Andi Wijaya" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email Utama</label>
              <input type="email" className="w-full p-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" placeholder="andi@email.com" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Program Studi & Kampus</label>
              <input type="text" className="w-full p-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" placeholder="Magister Hukum UNED" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Target Lulus</label>
              <select className="w-full p-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none bg-white">
                <option>Tahun 2025</option>
                <option>Tahun 2026</option>
                <option>Saya Dosen/Peneliti</option>
              </select>
            </div>
            <Button fullWidth className="mt-4">DAFTAR SEKARANG - Rp 149.000</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

