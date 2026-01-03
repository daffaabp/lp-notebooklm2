import React from 'react';
import { Quote } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-brand-900 text-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Testimonial Column */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">Dipercaya Oleh Inovator Global</h2>
            <p className="text-blue-200 mb-10 text-lg leading-relaxed">
              "Perusahaan teknologi ternama seperti <strong className="text-white">Rivian</strong> telah menggunakan NotebookLM untuk mempercepat transisi dari dokumentasi teknis yang padat menuju perencanaan kreatif strategis."
            </p>
            
            <div className="relative p-8 bg-brand-800 rounded-2xl border-l-4 border-yellow-500 shadow-2xl">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-brand-700 opacity-50" />
              <p className="mb-6 text-lg italic text-gray-100 relative z-10">
                "NotebookLM bukan sekadar alat pembaca PDF, ia adalah mitra berpikir yang mengeliminasi kebingungan di tengah kekacauan data bisnis kami. Ini adalah game-changer untuk produktivitas tim."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-1 h-px bg-yellow-500 mr-4"></div>
                <span className="font-bold text-yellow-400">Direktur Operasional, Korporasi Teknologi</span>
              </div>
            </div>
          </div>

          {/* Speaker Column */}
          <div className="flex justify-center md:justify-end">
            <div className="bg-brand-800 p-8 rounded-3xl border border-brand-700 text-center shadow-2xl max-w-sm">
              <div className="w-40 h-40 bg-gray-600 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg relative overflow-hidden">
                 <img 
                    src="https://picsum.photos/400/400?grayscale" 
                    alt="Speaker Profile" 
                    className="w-full h-full object-cover"
                 />
              </div>
              <h3 className="text-2xl font-bold text-blue-400 mb-1">Pakar Strategi AI</h3>
              <p className="text-gray-300 font-medium mb-4 uppercase tracking-wide text-sm">Narasumber Utama</p>
              <div className="h-px w-20 bg-gray-700 mx-auto mb-4"></div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Telah membantu ratusan pemimpin bisnis di Indonesia mengintegrasikan teknologi AI untuk meningkatkan daya saing nasional dan efisiensi operasional.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialProof;