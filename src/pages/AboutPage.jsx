// src/pages/AboutPage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function AboutPage() {
  // Ganti dengan path GIF Anda di folder public
  const yourGifPath = "/images/urldkt.gif"; // Contoh

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-4xl lg:max-w-5xl px-4" // Container utama
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Tentang urlDikit
      </h1>

      {/* Container Card Utama */}
      {/* === PERUBAHAN: items-start -> items-center === */}
      <div className="flex flex-col md:flex-row md:items-center gap-8 lg:gap-12 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">

        {/* === KOLOM GAMBAR GIF (Lebar 3/5) === */}
        <div className="w-full md:w-3/5 flex-shrink-0"> {/* <-- LEBAR DIUBAH ke 3/5 */}
          <img
            src={yourGifPath}
            alt="Demonstrasi Cara Kerja urlDikit"
            className="w-full h-auto rounded-lg" // Shadow sudah dihapus
          />
        </div>
        {/* ==================================== */}

        {/* === KOLOM TEKS DESKRIPSI (Lebar 2/5) === */}
        <div className="w-full md:w-2/5 text-gray-700 dark:text-gray-300 space-y-4"> {/* <-- LEBAR DIUBAH ke 2/5 */}
          <p className="text-lg leading-relaxed">
            Selamat datang di <strong>urlDikit</strong>! Solusi cerdas Anda untuk mengubah alamat web yang panjang dan rumit menjadi tautan pendek yang **ringkas, mudah diingat, dan siap dibagikan**.
          </p>
          <p>
            Lupakan kerumitan URL panjang saat berbagi di media sosial, email, atau pesan. Dengan antarmuka yang bersih dan proses yang cepat, {`urlDikit`} membantu Anda fokus pada pesan yang ingin Anda sampaikan.
          </p>

          {/* Fitur Andalan */}
          <div className="pt-4 border-t dark:border-gray-600">
             <h2 className="text-xl font-semibold mb-2">Fitur Andalan:</h2>
             <ul className="list-disc list-inside space-y-1 pl-4 text-sm">
               <li>Pemendekan URL Instan</li>
               <li>Alias Kustom (6-10 Karakter)</li>
               <li>QR Code Otomatis</li>
               <li>Statistik Klik Dasar</li>
               <li>Pelaporan Link</li>
             </ul>
          </div>

           {/* Link Kontak */}
           <p className="pt-4 border-t dark:border-gray-700 text-sm">
              Punya pertanyaan? <Link to="/pages/contact" className="text-indigo-600 dark:text-indigo-400 hover:underline">Hubungi kami</Link>.
           </p>
        </div>
         {/* ======================================= */}
      </div>

    </motion.div>
  );
}

export default AboutPage;
