import React from 'react';
import { AlertTriangle, Clock, Database, Users } from 'lucide-react';

interface PainPointCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PainPointCard: React.FC<PainPointCardProps> = ({ icon, title, description }) => (
  <div className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-red-100 group">
    <div className="flex items-start">
      <div className="bg-red-100 p-3 rounded-lg mr-5 text-red-600 group-hover:bg-red-500 group-hover:text-white transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-xl mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const PainPoints: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-red-600 font-bold tracking-wider uppercase text-sm mb-2 block">Identifikasi Masalah</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Apakah Bisnis Anda Terjebak dalam Kendala Ini?</h2>
          <p className="text-gray-500 text-lg">Jangan biarkan inefisiensi menghambat pertumbuhan eksponensial perusahaan Anda.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PainPointCard 
            icon={<Database className="w-8 h-8" />}
            title="Kelelahan Mengolah Data"
            description="Tim Anda menghabiskan 2,5 jam per hari hanya untuk mencari dokumen yang berserakan di berbagai folder, menghambat inovasi nyata."
          />
          <PainPointCard 
            icon={<AlertTriangle className="w-8 h-8" />}
            title="AI Umum Sering Berhalusinasi"
            description="Menggunakan AI generik berisiko memberikan data fiktif hingga 40%, membahayakan reputasi dan akurasi keputusan bisnis Anda."
          />
          <PainPointCard 
            icon={<Clock className="w-8 h-8" />}
            title="Lambatnya Proses Onboarding"
            description="Manajer senior membuang waktu produktif yang berharga hanya untuk menjelaskan SOP yang berulang kepada karyawan baru."
          />
          <PainPointCard 
            icon={<Users className="w-8 h-8" />}
            title="Silo Informasi Antar Departemen"
            description="Pengetahuan penting terkunci dalam ingatan individu dan hilang begitu saja saat talenta terbaik meninggalkan perusahaan."
          />
        </div>
      </div>
    </section>
  );
};

export default PainPoints;