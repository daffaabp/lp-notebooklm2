import React from 'react';

const Footer: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <footer className="py-16 business-gradient text-white border-t-8 border-orange-500 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logos Section Removed - Moved to FooterLogos */}
        <h3 className="text-2xl font-black mb-4 italic uppercase tracking-tighter text-blue-400">Kelas Inovatif</h3>
        <p className="text-slate-300 max-w-3xl mx-auto mb-6 text-sm md:text-base leading-relaxed">
          Platform pembelajaran Artificial Intelligence Nomor 1 di Indonesia bagi para peneliti akademik.
          Kami berkomitmen menyediakan edukasi berkualitas tinggi, bebas plagiasi, dan beretika untuk memajukan riset Indonesia.
        </p>
        <a href="https://kelasinovatif.com" target="_blank" rel="noopener noreferrer" className="inline-block mb-10 text-orange-400 font-bold hover:text-orange-300 border-b border-orange-400/50 hover:border-orange-300 transition-colors pb-1">
          kelasinovatif.com <i className="fas fa-external-link-alt ml-1 text-xs"></i>
        </a>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs font-bold text-slate-400 mb-10 uppercase tracking-widest">
          <a
            href="/terms-of-service"
            onClick={(e) => handleLinkClick(e, '/terms-of-service')}
            className="hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 pb-1 transition-all"
          >
            Terms of Service
          </a>
          <a
            href="/privacy-policy"
            onClick={(e) => handleLinkClick(e, '/privacy-policy')}
            className="hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 pb-1 transition-all"
          >
            Privacy Policy
          </a>
          <span className="cursor-default opacity-50">GDPR Compliance</span>
        </div>
        <p className="text-[10px] text-slate-600 max-w-2xl mx-auto leading-relaxed uppercase font-medium">
          &copy; 2025 Webinar Masterclass Intelijen Dokumen Digital. <br className="mb-2 block" />
          NotebookLM adalah merek dagang dari Google Labs. Program ini diselenggarakan secara independen oleh Kelas Inovatif.
        </p>
      </div>
    </footer>
  );
};

export default Footer;