// src/pages/AboutPage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// Import ikon (sekarang tidak perlu ikon fitur lagi)
import { Send } from 'lucide-react';

// Hapus array 'features' dan varian animasi kartu fitur

function AboutPage() {
  // Ganti dengan path GIF Anda
  const yourGifPath = "/images/urldkt.gif"; // Contoh
  const serviceName = "urlDikit";
  const contactPagePath = "/pages/contact";

  // Daftar teknologi (opsional, masih dikomentari)
  // const techStack = ["React", "Vite", "Node.js", ...];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-5xl lg:max-w-6xl px-4" // Container utama
    >
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Tentang {serviceName}
      </h1>

      {/* Container Utama untuk Gambar dan Teks */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12">

        {/* Kolom Gambar GIF */}
        <div className="w-full md:w-3/5 flex-shrink-0"> {/* Sesuaikan lebar jika perlu */}
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            src={yourGifPath}
            alt="Demonstrasi Cara Kerja urlDikit"
            className="w-full h-auto rounded-lg shadow-md" // Shadow ditambahkan kembali ke gambar? Atau hapus jika tetap tidak mau.
          />
        </div>

        {/* Kolom Teks Deskripsi (Fitur dimasukkan di sini) */}
        <div className="w-full md:w-2/5 text-gray-700 dark:text-gray-300 space-y-5"> {/* Beri space-y */}
          <motion.div // Animasikan teks juga
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white mb-4">
              Ringkas, Cepat, Efisien.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              <strong>{serviceName}</strong> hadir sebagai solusi modern untuk kebutuhan pemendekan URL Anda. Ubah link panjang yang sulit diingat menjadi pendek, rapi, dan siap dibagikan ke mana saja hanya dengan beberapa klik.
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Fokus pada pesan Anda, biarkan kami urus kerumitan linknya! Kami menyediakan fitur-fitur berikut:
            </p>
            {/* === DAFTAR FITUR (List Biasa) === */}
            <ul className="list-disc list-inside space-y-1 pl-5 mt-3 text-base text-gray-600 dark:text-gray-400">
              <li>Pemendekan URL instan dengan kode acak</li>
              <li>Opsi alias kustom (6-10 karakter)</li>
              <li>QR Code otomatis untuk setiap link</li>
              <li>Statistik jumlah klik dasar</li>
              <li>Fitur pelaporan link</li>
              {/* Tambahkan fitur lain jika ada */}
            </ul>
            {/* ================================= */}
          </motion.div>

          {/* Link Kontak */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.6 }} // Delay sedikit berbeda
             className="pt-5 border-t dark:border-gray-700" // Beri jarak dari list fitur
          >
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
               Punya pertanyaan lebih lanjut atau masukan?
            </p>
            <Link to={contactPagePath} className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-5 rounded-md transition duration-150 ease-in-out no-underline text-sm">
              <Send className="h-4 w-4 mr-2"/> Hubungi Kami
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Bagian Tech Stack (Opsional, masih dikomentari) */}
      {/* <section className="mt-16 pt-8 border-t dark:border-gray-700"> ... </section> */}

    </motion.div>
  );
}

export default AboutPage;
