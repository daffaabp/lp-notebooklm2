import React, { useState } from 'react';
import { Calendar, Clock, Shield } from 'lucide-react';
import { Button } from './Button';
import { CountdownTimer } from './CountdownTimer';

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="daftar" className="py-20 bg-primary/5">
      <div className="container max-w-2xl mx-auto px-4">
        
        {/* Webinar Date Info Block WITH PRICE */}
        <div className="bg-white rounded-t-3xl border-x border-t border-primary/20 p-6 shadow-lg transform translate-y-2 z-0 relative">
          <div className="text-center mb-6">
            <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Investasi Cerdas Karir Anda</h3>
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-slate-400 line-through text-lg">Rp 499.000</span>
              <span className="text-4xl font-extrabold text-slate-800">Rp 149.000</span>
              <span className="text-success font-bold text-sm bg-success/10 px-3 py-1 rounded-full">Diskon 70%</span>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-4 text-center">Jadwal Pelaksanaan</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent" />
                <span>Sabtu, 10 Januari 2026</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                <span>14.00 - 16.00 WIB (Live Zoom)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-primary relative z-10">
          <h2 className="text-3xl font-bold text-center text-primary mb-2">Daftar Sekarang Juga</h2>
          <p className="text-center text-slate-500 mb-6 text-sm">
            🛡️ Garansi 100% Uang Kembali jika tidak puas dalam 60 menit pertama.
          </p>

          {/* Countdown Timer */}
          <CountdownTimer />
          
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Nama Lengkap</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" 
                placeholder="Masukkan nama Anda" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email Aktif</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" 
                placeholder="Masukkan email Anda" 
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Nomor WhatsApp</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none" 
                placeholder="08xxxxxxxxxx" 
                required 
              />
            </div>
            
            <Button fullWidth variant="success" className="mt-6 text-xl" type="submit">DAFTAR SEKARANG</Button>
            
            {/* Payment Security */}
            <div className="mt-4">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Pembayaran 100% Aman & Terjamin</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

