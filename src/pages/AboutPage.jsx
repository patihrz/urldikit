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
      className="w-full max-w-5xl lg:max-w-6xl px-4" // Perlebar max-width container
    >
      {/* Judul Halaman bisa dibuat tidak center jika ingin mirip contoh */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center md:text-left mb-12 text-gray-800 dark:text-white">
        Tentang urlDikit
      </h1>

      {/* Container Utama untuk Gambar dan Teks (Flexbox) */}
      {/* HAPUS background, padding, shadow, border dari sini */}
      <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">

        {/* === KOLOM GAMBAR GIF (Lebar 1/2) === */}
        <div className="w-full md:w-1/2 order-1 md:order-1"> {/* Di mobile gambar duluan (default), di desktop tetap di kiri */}
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            src={yourGifPath} // <-- Path GIF Anda
            alt="Demonstrasi Cara Kerja urlDikit"
            className="w-full h-auto rounded-lg object-contain" // Hapus shadow
            style={{ maxHeight: '500px' }} // Batas tinggi max agar tidak terlalu dominan
          />
        </div>
        {/* ==================================== */}

        {/* === KOLOM TEKS DESKRIPSI (Lebar 1/2) === */}
        {/* HAPUS background, padding, shadow, border dari sini */}
        <div className="w-full md:w-1/2 order-2 md:order-2 text-center md:text-left"> {/* Tengahkan teks di mobile, ratakiri di desktop */}
           {/* Sesuaikan Teks & Ukuran agar mirip contoh */}
           <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4"
            >
               Jadikan alamat web Anda ringkas dan mudah diingat.
           </motion.h2>
           <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-6"
            >
                <strong>urlDikit</strong> adalah solusi cerdas untuk mengubah alamat web yang panjang dan rumit menjadi tautan pendek yang ringkas, mudah diingat, dan siap dibagikan di mana saja.
           </motion.p>
           {/* Tombol Call to Action (Contoh) */}
           <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.8 }}
           >
               <Link to="/" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-8 rounded-md transition duration-150 ease-in-out no-underline text-sm">
                   Coba Sekarang!
               </Link>
           </motion.div>
           {/* Hapus bagian Fitur dan Kontak dari kolom ini agar lebih mirip contoh */}
        </div>
         {/* ======================================= */}
      </div>

      {/* Bagian Fitur/Tech Stack bisa ditaruh di section terpisah di bawah jika masih ingin ditampilkan */}
      {/* <div className="mt-16 pt-10 border-t dark:border-gray-700"> ... Fitur/Tech Stack ... </div> */}

    </motion.div>
  );
}

export default AboutPage;
