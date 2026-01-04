import React, { useState, useEffect } from 'react';

const FeaturesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const features = [
    {
      image: "/result/slide presentasi.avif",
      title: "Slide Presentasi",
      desc: "Generate draft slide presentasi sidang langsung dari bab skripsi kamu dalam hitungan detik."
    },
    {
      image: "/result/laporan.avif",
      title: "Laporan",
      desc: "Buat laporan penelitian yang lengkap dan terstruktur dengan mudah dari berbagai sumber referensi."
    },
    {
      image: "/result/infografis.avif",
      title: "Infografis",
      desc: "Visualisasi data dan temuan penelitian dalam bentuk infografis yang menarik dan mudah dipahami."
    },
    {
      image: "/result/ringakasan video.avif",
      title: "Ringkasan Video",
      desc: "Ringkas konten video menjadi teks yang mudah dipahami untuk referensi penelitian kamu."
    },
    {
      image: "/result/peta pikiran.avif",
      title: "Peta Pikiran",
      desc: "Buat peta pikiran visual untuk memahami hubungan antar konsep dalam penelitian secara sistematis."
    },
    {
      image: "/result/kuis.avif",
      title: "Kuis",
      desc: "Uji pemahaman materi skripsi lewat kuis interaktif biar siap saat bimbingan dan sidang."
    },
    {
      image: "/result/flash card.avif",
      title: "Flash Card",
      desc: "Buat flash card untuk belajar konsep penting dengan metode spaced repetition yang efektif."
    },
    {
      image: "/result/tabel.avif",
      title: "Tabel",
      desc: "Bandingkan sumber (novelty) dengan membandingkan pendapat berbagai jurnal dalam bentuk tabel yang rapi."
    },
    {
      image: "/result/ringkasan audio.avif",
      title: "Ringkasan Audio",
      desc: "Ubah 50 jurnal PDF jadi obrolan podcast seru. Dengerin materi skripsi sambil rebahan."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-5 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#202124] mb-4 leading-tight">
            Hasil Sekeren Ini yang Akan<br />Kamu Dapetin Pakai NotebookLM
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Intip sedikit bagaimana AI mengubah tumpukan kertas menjadi visual yang mudah dimengerti.
          </p>
        </div>

        <div className="relative group">
          {/* Main Carousel Viewport */}
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-200 bg-white">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {features.map((feature, index) => (
                <div key={index} className="min-w-full flex flex-col md:flex-row h-full">
                  {/* Image Area (Dominant) */}
                  <div className="w-full md:w-2/3 bg-gray-100 relative h-64 md:h-[400px]">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/5 md:hidden"></div> {/* Mobile Overlay */}
                  </div>
                  
                  {/* Text Area */}
                  <div className="w-full md:w-1/3 p-8 md:p-10 flex flex-col justify-center bg-white border-l border-gray-100">
                    <div className="mb-4 text-[#1a73e8] font-bold tracking-widest text-sm uppercase">
                      Fitur #{index + 1}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-[#202124] mb-4 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 focus:outline-none hidden md:block"
            aria-label="Previous Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 focus:outline-none hidden md:block"
            aria-label="Next Slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-10 bg-[#1a73e8]' : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;