import React from 'react';
import { Award } from 'lucide-react';

export const Speaker: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 bg-slate-50 p-10 rounded-3xl border border-gray-100">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-full blur opacity-75"></div>
            <img
              src="/speaker/arianto.avif"
              alt="M. Arianto - AI Engineer dan Researcher"
              className="relative rounded-full w-40 h-40 md:w-56 md:h-56 object-cover border-4 border-white shadow-lg"
            />
            <div className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full border-4 border-white">
              <Award className="w-6 h-6" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">M. Arianto</h3>
            <p className="text-blue-600 font-bold mb-4 text-lg uppercase tracking-wide">AI Engineer dan Researcher</p>
            <p className="text-slate-600 mb-4 leading-relaxed italic">
              "Dengan pengalaman 10+ tahun dan 195+ proyek AI, saya siap membahas tips menguasai AI, teknik penulisan, dan research methodology sebagai AI Engineer, Researcher, dan Mentor profesional."
            </p>
            <a
              href="https://kelasinovatif.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary bg-white px-4 py-2 rounded-lg inline-block shadow-sm hover:bg-gray-50 transition-colors"
            >
              kelasinovatif.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

