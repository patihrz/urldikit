// src/pages/AboutPage.jsx

import React from 'react';
import { motion } from 'framer-motion';

function AboutPage() {
  // Daftar teknologi bisa Anda simpan atau hapus jika tidak ingin ditampilkan
  // const techStack = ["React", "Vite", "Node.js", ...];

  // --- GANTI PATH INI DENGAN PATH KE FILE GIF ANDA DI FOLDER PUBLIC ---
  const yourGifPath = "/images/urldkt.gif"; // Contoh jika nama file Anda urldikit-demo.gif di public/images/
  // -----------------------------------------------------------------

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-4xl px-4" // Container utama
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Tentang urlDikit
      </h1>

      {/* Container untuk Gambar dan Teks (Pakai Flexbox) */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">

        {/* Kolom Gambar GIF */}
        <div className="w-full md:w-1/2 flex-shrink-0">
          <img
            src={yourGifPath} // <-- Gunakan path GIF Anda
            alt="Demonstrasi Cara Kerja urlDikit" // Deskripsi gambar
            //className="w-full h-auto rounded-lg object-contain shadow-md" // Styling gambar
        className="w-full h-auto rounded-lg mb-4 sm:mb-0 shadow-md"
          />
        </div>

        {/* Kolom Teks Deskripsi */}
        <div className="w-full md:w-1/2 text-gray-700 dark:text-gray-300 space-y-4">
          <p className="text-lg leading-relaxed">
            Selamat datang di <strong>urlDikit</strong>! Solusi cerdas Anda untuk mengubah alamat web yang panjang dan rumit menjadi tautan pendek yang **ringkas, mudah diingat, dan siap dibagikan**.
          </p>
          <p>
            Lupakan kerumitan URL panjang saat berbagi di media sosial, email, atau pesan. Dengan antarmuka yang bersih dan proses yang cepat, {`urlDikit`} membantu Anda fokus pada pesan yang ingin Anda sampaikan.
          </p>

          {/* Pindahkan Fitur ke bawah atau hapus jika terlalu teknis */}
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

            <p className="pt-4 border-t dark:border-gray-700 text-sm">
               Punya pertanyaan? <a href="/pages/contact" className="text-indigo-600 dark:text-indigo-400 hover:underline">Hubungi kami</a>.
           </p>
        </div>
      </div>

    </motion.div>
  );
}

export default AboutPage;
