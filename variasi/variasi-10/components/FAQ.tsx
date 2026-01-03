import React from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">Pertanyaan yang Sering Diajukan</h2>
        <div className="space-y-6">
          {FAQS.map((faq, idx) => (
            <details key={idx} className="bg-slate-50 p-6 rounded-2xl cursor-pointer group border border-transparent hover:border-blue-100 transition-all">
              <summary className="font-bold text-lg list-none flex justify-between items-center text-slate-800 group-open:text-blue-700">
                {faq.question}
                <span className="text-2xl transition-transform duration-300 group-open:rotate-180 text-blue-400 group-open:text-blue-700">+</span>
              </summary>
              <div className="overflow-hidden h-0 group-open:h-auto transition-all">
                  <p className="mt-4 text-slate-600 leading-relaxed pb-2 border-t border-slate-200 pt-4">
                    {faq.answer}
                  </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
