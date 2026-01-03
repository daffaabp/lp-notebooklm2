import { FAQItem, Testimonial } from './types';
import { FileText, Mic, BarChart, Clock, ShieldCheck, Brain } from 'lucide-react';

export const WEBINAR_CONTEXT = `
Event: Webinar NotebookLM: Revolusi Produktivitas Staf Profesional
Headline: Ubah Gunung Dokumen Menjadi Draf Matang dalam Menit.
Harga: Rp149.000 (Diskon dari Rp499.000).
Waktu: Sabtu, 10 Januari 2026 | 14.00 - 16.00 WIB.
Lokasi: Zoom Meeting (Link dikirim setelah daftar).
Bonus: Akun NotebookLM Pro senilai Rp309.000 (Gratis).
Garansi: 14 hari uang kembali jika tidak puas.

Masalah yang diselesaikan:
1. Information Overload (terlalu banyak dokumen).
2. Pemborosan waktu riset (25% waktu kerja terbuang).
3. Kecemasan presentasi/sidang.

Solusi NotebookLM:
1. Penyimpulan Laporan Seketika (Ringkasan eksekutif dalam detik).
2. Siniar AI Interaktif (Belajar dokumen sambil bermobilitas).
3. Slide Presentasi Otomatis (Dari catatan ke visual).

Hasil yang dijanjikan:
- Efisiensi: Riset 15 jam jadi < 1 jam.
- Akurasi: 100% berbasis referensi asli (citasi).
- Ketenangan Mental: Mengurangi beban pikiran (Otak Kedua).

Narasumber: Pakar Strategi Inovasi Digital.
Testimoni: Digunakan oleh Analis Senior Keuangan dan Staf Strategis Korporasi.
Keamanan: Data institusi/Workspace aman, tidak dilatih untuk AI publik.
Perbedaan vs ChatGPT: NotebookLM adalah spesialis (sumber tertutup/grounded), ChatGPT adalah generalis.
Fitur Youtube: Bisa memproses transkrip video YouTube.
`;

export const FAQS: FAQItem[] = [
  {
    question: "Apakah data rahasia perusahaan saya aman di NotebookLM?",
    answer: "Sangat aman. Google menjamin bahwa data yang diunggah melalui akun institusi/Workspace tidak akan pernah ditinjau manusia atau digunakan untuk melatih model AI publik mereka."
  },
  {
    question: "Apa perbedaan NotebookLM dengan ChatGPT?",
    answer: "ChatGPT adalah 'generalis' yang mengambil informasi dari seluruh internet, sedangkan NotebookLM adalah 'spesialis' yang jawabannya hanya didasarkan pada dokumen tepercaya yang Anda berikan agar akurasi tetap 100%."
  },
  {
    question: "Dapatkah NotebookLM memproses video YouTube?",
    answer: "Sangat bisa. Anda cukup menempelkan tautan video YouTube publik, dan AI ini akan menyerap transkrip pembicaraannya untuk dijadikan bahan analisis atau laporan Anda."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "NotebookLM bukan sekadar AI; ia adalah rekan berpikir yang membantu saya melihat 'titik-titik' koneksi data yang selama ini tersembunyi dalam tumpukan laporan saya.",
    author: "Analis Senior, Sektor Keuangan"
  },
  {
    quote: "Dulu saya butuh semalaman untuk membuat laporan bulanan. Sekarang, berkat bantuan manajemen pengetahuan cerdas ini, draf awal saya selesai dalam hitungan menit!",
    author: "Staf Strategis Korporasi"
  }
];

export const FEATURES = [
  {
    icon: FileText,
    title: "Penyimpulan Laporan Seketika",
    description: "Ubah laporan ratusan halaman menjadi ringkasan eksekutif yang menonjolkan metrik penting dalam hitungan detik."
  },
  {
    icon: Mic,
    title: "Siniar AI Interaktif",
    description: "Pelajari dokumen Anda sambil bermobilitas lewat diskusi suara yang bisa Anda interupsi untuk bertanya langsung."
  },
  {
    icon: BarChart,
    title: "Slide Presentasi Otomatis",
    description: "Ubah catatan berantakan menjadi alur presentasi yang koheren, visual, dan siap ditampilkan kepada pimpinan."
  }
];

export const PAIN_POINTS = [
  {
    title: "Beban Informasi yang Berlebih",
    description: "Anda terjebak dalam puluhan tab peramban, PDF laporan yang belum terbaca, dan draf laporan yang tak kunjung selesai karena data yang tercecer."
  },
  {
    title: "Pemborosan Waktu yang Sia-sia",
    description: "Rata-rata staf profesional membuang 25% dari satu minggu kerja hanya untuk mencari informasi yang sebenarnya pernah mereka baca sebelumnya."
  },
  {
    title: "Kecemasan Menjelang Sidang",
    description: "Stres akibat membuat slide yang padat teks dan angka, sehingga berisiko gagal menyampaikan poin utama kepada manajer atau penguji."
  }
];
