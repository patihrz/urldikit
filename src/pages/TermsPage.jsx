import React from 'react';
import { motion } from 'framer-motion';

function TermsPage() {
  // Anda bisa ganti tanggal ini
  const lastUpdated = "1 Mei 2025";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // Gunakan prose untuk styling teks otomatis (perlu plugin @tailwindcss/typography jika belum ada)
      // atau style manual dengan class Tailwind lain
      className="w-full max-w-4xl px-4 prose dark:prose-invert prose-indigo"
      // Alternatif tanpa @tailwindcss/typography:
      // className="w-full max-w-4xl px-4 text-gray-700 dark:text-gray-300"
    >
      {/* Judul Halaman */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        Terms of Service
      </h1>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8">
        Last updated: {lastUpdated}
      </p>

      {/* === AWAL KONTEN PLACEHOLDER === */}
      {/* GANTI SEMUA TEKS DI BAWAH INI DENGAN KETENTUAN LAYANAN ANDA YANG SEBENARNYA */}

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">1. Pendahuluan</h2>
        <p className="mb-3">
          Selamat datang di urlDikit (selanjutnya disebut "Layanan"), layanan pemendek URL yang disediakan oleh [Nama Anda/Perusahaan Anda]. Dengan mengakses atau menggunakan Layanan kami, Anda setuju untuk terikat oleh Ketentuan Layanan ini ("Ketentuan"). Jika Anda tidak setuju dengan bagian mana pun dari ketentuan ini, Anda tidak diizinkan untuk menggunakan Layanan.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">2. Penggunaan Layanan</h2>
        <p className="mb-3">
          Anda setuju untuk menggunakan Layanan hanya untuk tujuan yang sah dan sesuai dengan Ketentuan ini. Anda bertanggung jawab penuh atas URL asli yang Anda pendekkan dan konten yang terkait dengannya.
        </p>
        <p>
          Anda setuju untuk tidak menggunakan Layanan untuk:
        </p>
        <ul className="list-disc list-inside mb-3 space-y-1 pl-4">
          <li>Memendekkan URL yang mengarah ke konten ilegal, berbahaya, menipu, memfitnah, cabul, atau tidak pantas.</li>
          <li>Memendekkan URL yang melanggar hak kekayaan intelektual pihak lain.</li>
          <li>Memendekkan URL yang berisi malware, virus, atau kode berbahaya lainnya.</li>
          <li>Mengirim spam atau lalu lintas yang tidak diminta menggunakan URL pendek kami.</li>
          <li>Mengganggu atau mencoba mengganggu fungsi Layanan.</li>
        </ul>
      </section>

       <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">3. Konten dan Tautan Pihak Ketiga</h2>
        <p className="mb-3">
          Layanan kami hanya memendekkan URL yang Anda berikan. Kami tidak mengontrol, mendukung, atau bertanggung jawab atas konten situs web pihak ketiga yang ditautkan melalui Layanan kami. Anda mengakses tautan tersebut atas risiko Anda sendiri.
        </p>
      </section>

       <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">4. Pelaporan Penyalahgunaan</h2>
        <p className="mb-3">
          Kami menyediakan mekanisme bagi pengguna untuk melaporkan URL pendek yang diduga berbahaya atau melanggar Ketentuan ini. Kami akan meninjau laporan tersebut dan mengambil tindakan yang sesuai, termasuk kemungkinan menonaktifkan atau menghapus URL pendek yang melanggar.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">5. Batasan Tanggung Jawab</h2>
        <p className="mb-3">
          Layanan disediakan "sebagaimana adanya" tanpa jaminan apa pun. [Nama Anda/Perusahaan Anda] tidak akan bertanggung jawab atas kerugian atau kerusakan apa pun yang timbul dari penggunaan Anda atas Layanan.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">6. Perubahan Ketentuan</h2>
        <p className="mb-3">
          Kami berhak untuk memodifikasi atau mengganti Ketentuan ini kapan saja atas kebijakan kami sendiri. Kami akan memberi tahu Anda tentang perubahan materi dengan memposting ketentuan baru di situs ini. Penggunaan Anda yang berkelanjutan atas Layanan setelah perubahan tersebut merupakan penerimaan Anda terhadap Ketentuan baru.
        </p>
      </section>

      {/* === AKHIR KONTEN PLACEHOLDER === */}

    </motion.div>
  );
}

export default TermsPage;