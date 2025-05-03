import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

function ContactPage() {

  const contactEmail = "patihrmdk@gmail.com";
  const serviceName = "urlDikit";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-2xl px-4 text-center"
    >
      {/* Judul Halaman */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
        Hubungi Kami
      </h1>

      {/* === TEKS PENGANTAR (REVISI) === */}
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
        Kami menghargai setiap pertanyaan, masukan, laporan, atau potensi diskusi mengenai {serviceName}. Silakan gunakan informasi kontak di bawah ini untuk menghubungi tim kami.
      </p>
      {/* =============================== */}

      {/* Informasi Kontak (Email) */}
      <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 inline-block max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200 flex items-center justify-center">
          <Mail className="h-5 w-5 mr-2" /> Kontak Utama (Email)
        </h2>
        <a
          href={`mailto:${contactEmail}`}
          className="text-indigo-600 dark:text-indigo-400 hover:underline text-lg break-all font-medium"
        >
          {contactEmail}
        </a>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
          Tim kami akan berusaha merespons pesan Anda secepat mungkin dalam jam kerja.
        </p>
        {/* ========================== */}
      </div>

    </motion.div>
  );
}

export default ContactPage;
