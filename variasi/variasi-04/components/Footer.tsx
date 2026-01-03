import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-gray-400 py-16 px-5 text-center">
            <div className="max-w-4xl mx-auto">
                <p className="font-bold text-white text-lg mb-4">© 2026 Inovasi Riset Akademik Indonesia. Hak Cipta Dilindungi.</p>
                <div className="flex justify-center gap-6 mb-8 text-sm">
                    <a href="#" className="hover:text-white transition-colors">Syarat Layanan</a>
                    <span className="text-gray-600">|</span>
                    <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
                </div>
                <p className="text-xs leading-relaxed max-w-2xl mx-auto opacity-60">
                    Penafian: Hasil riset tetap merupakan tanggung jawab penulis. Webinar ini berfokus pada efisiensi riset menggunakan alat bantu AI secara etis sesuai integritas akademik masing-masing institusi.
                </p>
            </div>
        </footer>
    );
};
