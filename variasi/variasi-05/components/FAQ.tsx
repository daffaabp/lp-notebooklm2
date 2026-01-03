import React from 'react';

const FAQ: React.FC = () => {
  return (
    <section className="bg-white py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#202124]">
          Tanya-Tanya Dulu (FAQ)
        </h2>
        
        <div className="space-y-8">
          <div className="border-b border-gray-100 pb-8">
            <h3 className="text-[#0d47a1] text-xl font-bold mb-3">
              Apakah asisten riset ini aman buat kerahasiaan draf skripsi aku?
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Sangat aman. Google menjamin data yang kamu unggah nggak bakal dipake buat ngelatih model AI publik mereka. Skripsi kamu tetep privat! [23, 24].
            </p>
          </div>

          <div className="border-b border-gray-100 pb-8">
            <h3 className="text-[#0d47a1] text-xl font-bold mb-3">
              Aku gaptek, apa bisa ikut?
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Bisa banget. Pake NotebookLM itu semudah kamu chatting sama temen di WhatsApp. Fokus webinar ini adalah strategi risetnya, bukan teknis koding yang ribet [25, 26].
            </p>
          </div>

          <div className="border-b border-gray-100 pb-8">
            <h3 className="text-[#0d47a1] text-xl font-bold mb-3">
              Kapan aku dapet bonus akun Pro-nya?
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Panduan aktivasi dan akses akun NotebookLM Pro senilai Rp 309rb bakal dibagikan secara eksklusif buat kamu yang hadir secara live di akhir sesi [27, 28].
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;