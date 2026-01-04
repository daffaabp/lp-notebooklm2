import React, { useState, useEffect } from 'react';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: ''
  });

  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60); // 2 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h} : ${m} : ${s}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Pendaftaran berhasil! (Simulasi)');
  };

  return (
    <section id="daftar" className="bg-[#f8f9fa] pb-20 pt-5 px-5 relative">
      <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] border-4 border-[#1a73e8] shadow-2xl relative z-10">
        
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

        {/* Countdown Timer */}
        <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-6 text-center">
          <p className="text-[#d93025] font-bold text-sm uppercase tracking-wide mb-1">Promo Berakhir Dalam</p>
          <div className="text-3xl md:text-4xl font-black text-[#d93025] font-mono tracking-wider">
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Compact Title & CTA */}
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-extrabold text-[#202124] leading-tight mb-3">
            Cuma Seharga Kopi, Ilmu Kepake Seumur Hidup. <span className="text-[#d93025]">Rugi Kalau Kelewatan!</span>
          </h2>
          <p className="text-lg font-bold text-[#1a73e8] uppercase tracking-widest animate-pulse">
            👇 Daftar Sekarang Juga
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">
              Nama Lengkap
            </label>
            <input 
              type="text" 
              name="name"
              placeholder="Masukkan Nama Anda"
              required
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a73e8] focus:border-[#1a73e8] outline-none transition-all text-lg bg-white"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">
              Email Aktif
            </label>
            <input 
              type="email" 
              name="email"
              placeholder="Masukkan Email Anda"
              required
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a73e8] focus:border-[#1a73e8] outline-none transition-all text-lg bg-white"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">
              Nomor WhatsApp
            </label>
            <input 
              type="tel" 
              name="whatsapp"
              placeholder="08xxxxxxxxxx"
              required
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a73e8] focus:border-[#1a73e8] outline-none transition-all text-lg bg-white"
              value={formData.whatsapp}
              onChange={handleChange}
            />
          </div>

          <div className="mt-4">
            <button 
              type="submit" 
              className="w-full bg-[#16a34a] text-white font-extrabold text-xl py-5 rounded-xl uppercase hover:bg-green-700 transition-colors shadow-lg animate-pulse shadow-green-500/30"
            >
              DAFTAR SEKARANG
            </button>
            
            <div className="flex items-center justify-center gap-2 mt-4 text-gray-500 text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Pembayaran 100% Aman & Terjamin</span>
            </div>
          </div>
        </form>
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

export default RegistrationForm;