import React from 'react';
import { FEATURES } from '../constants';

const Solution: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-black uppercase italic text-slate-900">
            Pemanfaatan <span className="text-blue-700">NotebookLM</span>: <br/>Solusi Intelektual untuk Anda
          </h2>
          <p className="text-slate-500 mt-6 text-xl">Webinar ini akan melatih Anda menguasai teknologi yang mampu melakukan:</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="text-center p-8 border border-slate-100 rounded-[2rem] hover:shadow-xl hover:border-blue-100 transition-all duration-300 group bg-white">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon size={40} />
                </div>
                <h3 className="font-bold text-xl mb-4 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solution;
