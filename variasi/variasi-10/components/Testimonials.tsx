import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">Telah Digunakan Oleh Jutaan Peneliti & Profesional</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-slate-50 p-10 rounded-3xl relative border border-slate-100">
              <Quote className="absolute top-8 left-8 text-blue-200 w-12 h-12" />
              <p className="relative z-10 text-lg italic text-slate-700 mb-6 leading-relaxed">"{t.quote}"</p>
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                <p className="font-bold text-blue-900">{t.author}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
            <p className="text-slate-400 font-bold tracking-[0.2em] uppercase text-sm">
                Dipercaya oleh Inovator Global seperti Rivian
            </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
