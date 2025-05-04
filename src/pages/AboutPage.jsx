import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Send } from 'lucide-react'; // Ikon untuk tombol kontak

function AboutPage() {
  // Ganti dengan path GIF Anda di folder public
  const yourGifPath = "/images/urldkt.gif"; // Contoh: /images/nama-gif-anda.gif
  const serviceName = "urlDikit";
  const contactPagePath = "/pages/contact";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-5xl lg:max-w-6xl px-4" // Container halaman utama
    >
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Tentang {serviceName}
      </h1>

      {/* Container Flex Utama untuk Gambar & Kolom Teks Card */}
      <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">

        {/* === KOLOM GAMBAR GIF (Urutan diperbaiki) === */}
        {/* order-1 (default, untuk mobile), md:order-1 (untuk md ke atas, tetap kiri) */}
        <div className="w-full md:w-3/5 order-1 md:order-1"> {/* <-- PERBAIKAN ORDER */}
          <motion.img
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            src={yourGifPath}
            alt="Demo urlDikit"
            className="w-full h-auto rounded-lg" // Tanpa shadow
          />
        </div>
        {/* ========================================== */}

        {/* === KOLOM TEKS (Urutan diperbaiki) === */}
        {/* order-2 (default, untuk mobile), md:order-2 (untuk md ke atas, tetap kanan) */}
        <div className="w-full md:w-2/5 order-2 md:order-2"> {/* <-- PERBAIKAN ORDER */}
          <motion.div
             initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
             className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 space-y-4 h-full"
          >
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white mb-3">
              Ringkas, Cepat, Efisien.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              <strong>{serviceName}</strong> hadir sebagai solusi modern untuk kebutuhan pemendekan URL Anda... (dst)
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Fokus pada pesan Anda... Kami menyediakan fitur-fitur berikut:
            </p>
            {/* Fitur Andalan */}
            <div className="pt-4 border-t dark:border-gray-600">
               <h3 className="text-lg font-semibold mb-2">Fitur Andalan:</h3>
               <ul className="list-disc list-inside space-y-1 pl-4 text-sm">
                 <li>Pemendekan URL Instan</li>
                 <li>Alias Kustom (6-10 Karakter)</li>
                 <li>QR Code Otomatis</li>
                 <li>Statistik Klik Dasar</li>
                 <li>Pelaporan Link</li>
               </ul>
            </div>
             {/* Link Kontak */}
             <div className="pt-4 border-t dark:border-gray-700">
                 <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Punya pertanyaan atau masukan?
                 </p>
                 <Link to={contactPagePath} className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-5 rounded-md transition duration-150 ease-in-out no-underline text-sm">
                    <Send className="h-4 w-4 mr-2"/> Hubungi Kami
                 </Link>
             </div>
          </motion.div> {/* Akhir Card Teks */}
        </div>
        {/* ================================== */}

      </div>
    </motion.div> // Akhir Container Halaman
  );
}

export default AboutPage;
