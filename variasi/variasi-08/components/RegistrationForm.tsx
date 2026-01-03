import React, { useState, useEffect } from 'react';
import { CreditCard, Wallet, QrCode, Lock } from 'lucide-react';

const RegistrationForm: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Terima kasih! Pendaftaran Anda sedang diproses.');
  };

  return (
    <section id="register" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
          
          {/* Header */}
          <div className="bg-brand-900 p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-2">Amankan Kursi Anda</h2>
            <div className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                Sisa Waktu: {formatTime(timeLeft)}
            </div>
            <p className="text-blue-200 mt-2 text-sm">Harga Early Bird berakhir segera.</p>
          </div>

          <div className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Nama Lengkap</label>
                <input 
                  type="text" 
                  required
                  placeholder="Contoh: Budi Santoso" 
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email Perusahaan</label>
                <input 
                  type="email" 
                  required
                  placeholder="email@perusahaan.com" 
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Jabatan / Departemen</label>
                <div className="relative">
                    <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                        <option>CEO / Pemilik Bisnis</option>
                        <option>Manajer HRD / L&D</option>
                        <option>Manajer Operasional / IT</option>
                        <option>Staf Profesional</option>
                        <option>Lainnya</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-5 rounded-xl text-xl uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex justify-center items-center"
                >
                  <Lock className="w-5 h-5 mr-2" />
                  Daftar & Bayar Sekarang
                </button>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-center text-xs text-gray-400 mb-4 uppercase tracking-widest">Metode Pembayaran Aman</p>
                <div className="flex justify-center items-center space-x-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
                    <div className="flex items-center space-x-1"><CreditCard className="w-6 h-6"/> <span className="font-bold">VISA</span></div>
                    <div className="flex items-center space-x-1"><Wallet className="w-6 h-6"/> <span className="font-bold">GOPAY</span></div>
                    <div className="flex items-center space-x-1"><QrCode className="w-6 h-6"/> <span className="font-bold">QRIS</span></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;