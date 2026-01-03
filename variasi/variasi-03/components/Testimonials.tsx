import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-light">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-extrabold text-slate-800 mb-12">Apa Kata Mereka?</h2>
        
        <div className="relative bg-white rounded-3xl p-10 md:p-14 shadow-xl border border-slate-100">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-white p-4 rounded-full shadow-lg">
            <Quote size={32} fill="currentColor" />
          </div>
          
          <blockquote className="text-xl md:text-2xl text-slate-700 italic font-medium leading-relaxed mt-4">
            "NotebookLM adalah penyelamat disertasi saya. Saya bisa memetakan perdebatan antar ahli dalam satu sore, sesuatu yang sebelumnya butuh waktu berminggu-minggu secara manual."
          </blockquote>
          
          <div className="mt-8 pt-8 border-t border-slate-100">
             <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div className="text-left">
                  <p className="font-bold text-slate-900 text-lg">Dr. Ahmad</p>
                  <p className="text-slate-500 text-sm">Peneliti Senior</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;