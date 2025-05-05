// src/pages/DonationPage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Coffee } from 'lucide-react'; // Ikon

function DonationPage() {
  const serviceName = "urlDikit";
  // Pastikan URL Saweria Anda benar
  const saweriaUrl = "https://saweria.co/urlDikit";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // Sesuaikan max-width agar konsisten
      className="w-full max-w-4xl px-4 text-center" // text-center untuk konten di dalamnya
    >
      {/* Judul */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
         Dukung {serviceName}
      </h1>

      {/* Paragraf Penjelasan */}
      <motion.p
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto"
      >
        Jika Anda merasa {serviceName} bermanfaat dan ingin mendukung pengembangan serta biaya operasional server agar tetap berjalan lancar dan gratis, Anda bisa memberikan donasi sukarela melalui Saweria. Setiap dukungan Anda sangat berarti!
      </motion.p>

      {/* Card Donasi */}
      <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          // Card dibuat full-width dalam container, tapi dibatasi max-w nya dan center
          className="w-full max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 text-center"
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 flex items-center justify-center">
          <Coffee className="h-5 w-5 mr-2 text-yellow-500" /> Donasi via Saweria
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Klik tombol di bawah ini untuk membuka halaman Saweria kami di tab baru. Terima kasih banyak atas dukungan Anda!
        </p>
        {/* Tombol Donasi */}
        <a
          href={saweriaUrl} // Menggunakan URL Saweria Anda
          target="_blank" // Buka di tab baru
          rel="noopener noreferrer" // Keamanan standar
           // Menggunakan gradient tema (Ungu/Indigo)
           className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-700 hover:from-purple-700 hover:via-indigo-700 hover:to-indigo-800 text-white font-bold rounded-lg shadow-md transition-all duration-150 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
        >
          <Gift className="h-5 w-5 mr-2"/> Lanjut ke Saweria
        </a>
         <p className="text-xs text-gray-500 dark:text-gray-400 mt-6">
             Anda akan diarahkan ke halaman aman Saweria.
         </p>
      </motion.div>

    </motion.div>
  );
}

export default DonationPage;