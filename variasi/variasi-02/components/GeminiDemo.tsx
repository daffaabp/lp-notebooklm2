import React, { useState } from 'react';
import { generateResearchGaps } from '../services/geminiService';
import { Sparkles, Loader2, BookOpen, Lightbulb } from 'lucide-react';
import { Button } from './Button';

export const GeminiDemo: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setHasSearched(true);
    const gaps = await generateResearchGaps(topic);
    setResults(gaps);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-2xl border border-violet-100 p-8 my-12 shadow-inner">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-4">
          <Sparkles className="w-6 h-6 text-violet-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800">Coba Demo "Research Gap" Finder</h3>
        <p className="text-slate-600 mt-2">
          Rasakan kecanggihan strategi yang akan kami ajarkan. Ketik topik tesis/disertasi Anda di bawah.
        </p>
      </div>

      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Contoh: Hukum Pidana Siber, Manajemen SDM Gen Z..."
          className="flex-1 p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none shadow-sm"
        />
        <Button type="submit" disabled={loading} className="shrink-0">
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Cari Novelty'}
        </Button>
      </form>

      {hasSearched && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 min-h-[150px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-full py-8 text-gray-500">
              <Loader2 className="w-8 h-8 animate-spin mb-2 text-primary" />
              <p>Sedang menganalisis literatur...</p>
            </div>
          ) : (
            <div>
               <h4 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
                 <Lightbulb className="w-5 h-5 text-accent" />
                 Ide Riset Potensial untuk: <span className="text-primary">"{topic}"</span>
               </h4>
               <ul className="space-y-3">
                 {results.map((res, idx) => (
                   <li key={idx} className="flex items-start gap-3 p-3 bg-violet-50/50 rounded-lg border border-violet-100">
                     <BookOpen className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                     <span className="text-slate-700 text-sm leading-relaxed font-medium">{res}</span>
                   </li>
                 ))}
               </ul>
               <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                 <p className="text-xs text-gray-500 italic">Ini hanyalah demo sederhana. Di webinar, Anda akan belajar cara melakukan ini dengan ribuan halaman referensi nyata.</p>
               </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};