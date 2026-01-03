import React, { useState, useEffect } from 'react';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    campus: '',
    progress: ''
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Pendaftaran berhasil! (Simulasi)');
  };

  return (
    <section id="daftar" className="bg-[#f8f9fa] pb-20 pt-10 px-5 relative">
      {/* Date Info Badge */}
      <div className="max-w-xl mx-auto text-center mb-8 relative z-20">
        <div className="inline-block bg-[#0d47a1] text-white px-6 py-3 rounded-full shadow-lg border-2 border-white/20">
          <p className="font-bold flex items-center justify-center gap-2">
            <span>🗓️</span> 
            Pelaksanaan: Sabtu, 10 Januari 2026 | 14.00 WIB
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] border-4 border-[#1a73e8] shadow-2xl relative z-10">
        <h2 className="text-3xl font-extrabold text-center mb-2 text-[#202124]">
          Amankan Kursi Kamu Sekarang!
        </h2>
        
        {/* Countdown Timer */}
        <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-6 text-center">
          <p className="text-[#d93025] font-bold text-sm uppercase tracking-wide mb-1">Promo Berakhir Dalam</p>
          <div className="text-3xl md:text-4xl font-black text-[#d93025] font-mono tracking-wider">
            {formatTime(timeLeft)}
          </div>
        </div>
        
        <p className="text-center text-gray-600 mb-8 text-sm md:text-base bg-blue-50 p-4 rounded-xl">
          🛡️ <b>100% Money Back Guarantee:</b> Kalo dalam 60 menit pertama webinar kamu ngerasa nggak dapet manfaat apa-apa, uang pendaftaran kami kembalikan utuh! [22]
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">
              Nama Lengkap (Buat Sertifikat)
            </label>
            <input 
              type="text" 
              name="name"
              placeholder="Contoh: Budi Santoso"
              required
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a73e8] focus:border-[#1a73e8] outline-none transition-all text-lg"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">
              Email Utama (Link Zoom bakal dikirim ke sini)
            </label>
            <input 
              type="email" 
              name="email"
              placeholder="budi@kampus.ac.id"
              required
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a73e8] focus:border-[#1a73e8] outline-none transition-all text-lg"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">
              Asal Kampus
            </label>
            <input 
              type="text" 
              name="campus"
              placeholder="Contoh: Universitas Indonesia"
              required
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a73e8] focus:border-[#1a73e8] outline-none transition-all text-lg"
              value={formData.campus}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">
              Progres Skripsi Kamu Sekarang
            </label>
            <div className="relative">
              <select 
                name="progress"
                required
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1a73e8] focus:border-[#1a73e8] outline-none transition-all text-lg appearance-none bg-white"
                value={formData.progress}
                onChange={handleChange}
              >
                <option value="">-- Pilih Status --</option>
                <option value="ide">Masih Cari Ide / Judul</option>
                <option value="bab1">Lagi Ngerjain Bab 1-3</option>
                <option value="revisi">Stuck di Revisi Melulu</option>
                <option value="sidang">Otw Sidang / Pendadaran</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#f9ab00] text-white font-extrabold text-xl py-5 rounded-xl uppercase hover:bg-amber-500 transition-colors shadow-lg mt-4 animate-pulse"
          >
            DAFTAR SEKARANG
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;