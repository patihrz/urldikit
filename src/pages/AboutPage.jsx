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
      className="w-full max-w-4xl lg:max-w-5xl px-4" // Mungkin perlebar sedikit max-width
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Tentang urlDikit
      </h1>

      {/* Container Card Utama (Tetap ada background/border/shadow) */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">

        {/* === KOLOM GAMBAR GIF (Lebih Lebar) === */}
        {/* Ubah dari md:w-1/2 menjadi md:w-3/5 atau sesuai selera */}
        <div className="w-full md:w-3/5 flex-shrink-0">
          <img
            src={yourGifPath}
            alt="Demonstrasi Cara Kerja urlDikit"
            // Hapus shadow-md dari sini, biarkan w-full h-auto rounded-lg
            className="w-full h-auto rounded-lg"
          />
        </div>
        {/* ==================================== */}

        {/* === KOLOM TEKS DESKRIPSI (Lebih Sempit) === */}
        {/* Ubah dari md:w-1/2 menjadi md:w-2/5 atau sesuai selera */}
        <div className="w-full md:w-2/5 text-gray-700 dark:text-gray-300 space-y-4">
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
         {/* ========================================== */}
      </div>

    </motion.div>
  );
}

export default AboutPage;
