import React, { useState } from 'react';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    job: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Terima kasih telah mendaftar! (Simulasi)");
  };

  return (
    <section id="register" className="py-24 px-5 bg-[#f4f7f9]">
      <div className="max-w-[600px] mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-[#002147] mb-2">Amankan Kursi Anda</h2>
        <p className="text-center text-gray-600 mb-8">
          Sabtu, 10 Januari 2026 <br /> 
          <span className="font-semibold text-[#002147]">14.00 - 16.00 WIB</span> | Live via Zoom Meeting
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">Nama Lengkap</label>
            <input 
              type="text" 
              name="name"
              id="name"
              placeholder="Nama Lengkap" 
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002147] transition"
            />
          </div>
          <div>
             <label htmlFor="email" className="sr-only">Email Kantor</label>
            <input 
              type="email" 
              name="email"
              id="email"
              placeholder="Email Kantor" 
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002147] transition"
            />
          </div>
          <div>
            <label htmlFor="job" className="sr-only">Jabatan / Perusahaan</label>
            <input 
              type="text" 
              name="job"
              id="job"
              placeholder="Jabatan / Perusahaan" 
              required
              value={formData.job}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002147] transition"
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-[#c5a059] hover:bg-[#b08d4a] text-white font-bold py-4 rounded-lg shadow-lg transform transition hover:-translate-y-1 duration-200 text-lg"
          >
            DAFTAR SEKARANG
          </button>
        </form>

        <div className="mt-8 flex items-start p-4 bg-blue-50 rounded-lg border border-blue-100">
          <span className="text-2xl mr-3">🛡️</span>
          <p className="text-sm text-gray-700">
            <strong>100% Money Back Guarantee:</strong> Jika materi tidak memberikan nilai nyata bagi kepemimpinan Anda, investasi Anda kami kembalikan penuh tanpa syarat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;