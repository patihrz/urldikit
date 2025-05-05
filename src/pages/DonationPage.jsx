// src/pages/DonationPage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Coffee } from 'lucide-react';

function DonationPage() {
  const serviceName = "urlDikit";
  // --- URL SAWERIA ANDA DIMASUKKAN DI SINI ---
  const saweriaUrl = "https://saweria.co/urlDikit";
  // -----------------------------------------

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-3xl px-4 text-center" // Container halaman
    >
      {/* Judul */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
         Dukung {serviceName}
      </h1>

      {/* Paragraf Penjelasan */}
      <motion.p
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed"
      >
        Jika Anda merasa {serviceName} bermanfaat dan ingin mendukung pengembangan serta biaya operasional server agar tetap berjalan lancar dan gratis, Anda bisa memberikan donasi sukarela melalui Saweria. Setiap dukungan Anda sangat berarti!
      </motion.p>

      {/* Tombol Donasi */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
      >
        <a
          href={saweriaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 hover:from-yellow-500 hover:via-red-600 hover:to-pink-600 text-white font-bold rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105" // Styling tombol
        >
          <Coffee className="h-5 w-5 mr-2"/> Traktir Kopi (Donasi via Saweria)
          {/* Atau pakai ikon Gift: <Gift className="h-5 w-5 mr-2"/> Beri Dukungan via Saweria */}
        </a>
      </motion.div>

       <p className="text-xs text-gray-500 dark:text-gray-400 mt-10">
         Anda akan diarahkan ke halaman aman Saweria untuk menyelesaikan donasi.
       </p>

    </motion.div>
  );
}

export default DonationPage;