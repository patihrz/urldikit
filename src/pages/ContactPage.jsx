import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react'; // Ikon email

function ContactPage() {
  // --- GANTI DENGAN ALAMAT EMAIL ANDA YANG SEBENARNYA ---
  const contactEmail = "patihrmdk@gmail.com";
  // ----------------------------------------------------

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-2xl px-4 text-center" // Batasi lebar dan tengahkan teks
    >
      {/* Judul Halaman */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
        Contact Us
      </h1>

      {/* Teks Pengantar */}
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Punya pertanyaan, masukan, atau laporan mengenai {`urlDikit`}? Jangan ragu untuk menghubungi kami.
      </p>

      {/* Informasi Kontak (Email) */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 inline-block"> {/* Buat card kecil */}
        <h2 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-200 flex items-center justify-center">
          <Mail className="h-5 w-5 mr-2" /> Email
        </h2>
        <a
          href={`mailto:${contactEmail}`} // Membuat link email yang bisa diklik
          className="text-indigo-600 dark:text-indigo-400 hover:underline text-lg break-all"
        >
          {contactEmail}
        </a>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
          Kami akan berusaha membalas sesegera mungkin.
        </p>
      </div>

      {/* Anda bisa tambahkan link media sosial atau info kontak lain di sini jika perlu */}

    </motion.div>
  );
}

export default ContactPage;