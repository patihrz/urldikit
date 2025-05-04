// src/pages/AboutPage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link jika belum ada

function AboutPage() {
  // Ganti dengan path GIF Anda di folder public
  const yourGifPath = "/images/urldkt.gif"; // Contoh: /images/nama-gif-anda.gif

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-6xl px-4" // Perlebar max-width container utama agar lebih leluasa
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Tentang urlDikit
      </h1>

      {/* Container Utama untuk Gambar dan Teks (Flexbox) */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12">

        {/* === KOLOM GAMBAR GIF (Tanpa Background Card/Shadow) === */}
        <div className="w-full md:w-2/5 lg:w-1/2 flex-shrink-0 px-4 md:px-0"> {/* Beri lebar, misal 40% atau 50% di layar md ke atas */}
          <img
            src={yourGifPath} // <-- Path GIF Anda
            alt="Demonstrasi Cara Kerja urlDikit"
            className="w-full h-auto rounded-lg" // Hapus shadow-md, object-contain bisa ditambah jika rasio aneh
          />
        </div>
        {/* ====================================================== */}

        {/* === KOLOM TEKS DESKRIPSI (Dengan Background Card/Shadow) === */}
        <div className="w-full md:w-3/5 lg:w-1/2"> {/* Lebar sisanya */}
           <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 space-y-4">
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
        </div>
         {/* ========================================================== */}

      </div>

      {/* Bagian Tech Stack (Opsional, masih dikomentari) */}
      {/* <div className="mt-10 pt-6 border-t dark:border-gray-700"> ... </div> */}

    </motion.div>
  );
}

export default AboutPage;
