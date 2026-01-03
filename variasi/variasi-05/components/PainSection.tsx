import React from 'react';

const PainSection: React.FC = () => {
  return (
    <section className="bg-[#f8f9fa] py-20 px-5 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#202124] mb-4 tracking-tight">
          Skripsi Bukan Soal Siapa Paling Rajin, <br className="hidden md:block" />
          Tapi Siapa Paling Cerdas Pake Sistem!
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Kami tahu apa yang kamu alami sekarang, karena 90% mahasiswa S1 ngerasain hal yang sama [1, 2]:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Card 1 */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border-t-8 border-[#d93025]">
            <h3 className="text-[#d93025] text-2xl font-bold mb-4">Alergi Baca PDF Jurnal</h3>
            <p className="text-gray-700 leading-relaxed">
              Udah download 50 jurnal tapi cuma jadi "hiasan" di folder laptop. Bahasanya dewa banget, baru baca dua paragraf udah mau meledak rasanya [3, 4].
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border-t-8 border-[#d93025]">
            <h3 className="text-[#d93025] text-2xl font-bold mb-4">Stress Dikejar Revisi</h3>
            <p className="text-gray-700 leading-relaxed">
              Deadline udah mepet tapi draf skripsi nggak jalan-jalan. Dospem nanya "novelty-nya mana?" tapi kamu sendiri nggak tau dapet celahnya dari mana [5, 6].
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border-t-8 border-[#d93025]">
            <h3 className="text-[#d93025] text-2xl font-bold mb-4">Takut Dituduh Plagiasi</h3>
            <p className="text-gray-700 leading-relaxed">
              Mau copy-paste tapi takut Turnitin merah. Mau nulis sendiri tapi bingung cara nyusun kalimat ilmiah yang bener dan akurat [7, 8].
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;