import React from 'react';
import { PAIN_POINTS } from '../constants';

const PainPoints: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900">
          Apakah Anda Merasakan "Krisis Kognitif" Ini dalam Pekerjaan?
        </h2>
        <div className="space-y-8">
          {PAIN_POINTS.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 border-l-[6px] border-l-yellow-400 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-blue-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
