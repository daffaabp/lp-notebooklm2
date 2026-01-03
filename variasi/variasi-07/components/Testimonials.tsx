import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-5 bg-[#002147] text-white text-center">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl font-bold mb-4">Dipercaya oleh Inovator Global</h2>
        <p className="text-blue-200 mb-12 max-w-2xl mx-auto">
          Perusahaan seperti Rivian menggunakan NotebookLM untuk mempercepat transisi dari dokumentasi teknis ke perencanaan kreatif dalam hitungan menit [10].
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-[#33475b] bg-opacity-50 p-8 rounded-xl backdrop-blur-sm border border-blue-900/30">
            <p className="text-lg italic text-gray-100 mb-6">"NotebookLM mengubah cara saya meninjau laporan mingguan. Keputusan jadi lebih jernih."</p>
            <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white mr-3">D</div>
                <div>
                    <strong className="block text-[#c5a059]">Direktur Operasional</strong>
                </div>
            </div>
          </div>

          <div className="bg-[#33475b] bg-opacity-50 p-8 rounded-xl backdrop-blur-sm border border-blue-900/30">
            <p className="text-lg italic text-gray-100 mb-6">"Fitur Audio Overview-nya menyelamatkan waktu saya di tengah kemacetan."</p>
            <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center font-bold text-white mr-3">C</div>
                <div>
                    <strong className="block text-[#c5a059]">CEO Startup</strong>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;