import React from 'react';
import { motion } from 'framer-motion'; // Pastikan motion diimport
import { Link } from 'react-router-dom';
import { Handshake, Megaphone, Send } from 'lucide-react'; // Ikon

// Varian animasi untuk kartu (bisa pakai yg sama dgn About)
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

function PartnershipPage() {
  const serviceName = "urlDikit";
  const contactPagePath = "/pages/contact";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // Hapus class prose, atur max-width & padding
      className="w-full max-w-5xl px-4"
    >
      {/* Judul Halaman (Styling manual) */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white">
         Kerja Sama & Iklan - {serviceName}
      </h1>

      {/* Paragraf Pengantar (Styling manual) */}
      <motion.section
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
      >
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          {serviceName} berkomitmen menyediakan layanan pemendek URL yang simpel dan andal. Kami percaya pada kekuatan kolaborasi dan terbuka untuk menjajaki peluang kemitraan serta periklanan yang strategis dan saling menguntungkan.
        </p>
      </motion.section>

      {/* Bagian Kemitraan & Periklanan (Grid dengan Animasi) */}
      {/* Bungkus grid dengan motion.div untuk stagger effect */}
      <motion.div
        className="grid md:grid-cols-2 gap-8 mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Animasikan saat section masuk viewport
        viewport={{ once: true, amount: 0.2 }} // Animasikan sekali
      >

          {/* Kolom Kemitraan (Dibungkus motion.div) */}
          <motion.div
             variants={itemVariants}
             className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 h-full flex flex-col" // Tambah h-full & flex-col
          >
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800 dark:text-white">
                  <Handshake className="h-6 w-6 mr-3 text-indigo-600"/> Kemitraan Strategis
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed flex-grow"> {/* text-sm, leading-relaxed, flex-grow */}
                  Kami menyambut diskusi mengenai berbagai bentuk kemitraan untuk tumbuh bersama, termasuk namun tidak terbatas pada:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 pl-4 text-sm"> {/* text-sm */}
                  <li>Integrasi API untuk alur kerja yang lebih efisien.</li>
                  <li>Kolaborasi dalam pengembangan fitur baru.</li>
                  <li>Peluang promosi bersama (co-branding).</li>
                  <li>Solusi pemendekan URL khusus untuk bisnis Anda.</li>
              </ul>
          </motion.div>

           {/* Kolom Periklanan (Dibungkus motion.div) */}
           <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 h-full flex flex-col" // Tambah h-full & flex-col
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800 dark:text-white">
                 <Megaphone className="h-6 w-6 mr-3 text-indigo-600"/> Peluang Periklanan
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed flex-grow"> {/* text-sm, leading-relaxed, flex-grow */}
                  Jangkau pengguna yang tertarik pada utilitas web, produktivitas, dan berbagi informasi secara efisien melalui platform kami. Kami terbuka untuk mendiskusikan berbagai format penempatan iklan yang relevan dan tidak mengganggu pengalaman pengguna di {serviceName}.
              </p>
              {/* Tambahkan contoh placement jika ada ide spesifik */}
               {/* <p className="text-xs text-gray-500 dark:text-gray-500 mt-auto pt-4 border-t dark:border-gray-600">Contoh: Banner di halaman hasil, dll.</p> */}
           </motion.div>
      </motion.div>

      {/* Ajakan Kontak (Styling manual) */}
      <motion.section
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.4 }} // Sedikit delay berbeda
         className="mt-10 pt-8 border-t dark:border-gray-700 text-center"
        >
         <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Mari Berdiskusi Lebih Lanjut</h2>
         <p className="mb-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
             Jika Anda tertarik menjajaki peluang kemitraan atau periklanan dengan {serviceName}, silakan hubungi kami.
         </p>
         <Link
            to={contactPagePath}
            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-6 rounded-md transition duration-150 ease-in-out"
         >
           <Send className="h-4 w-4 mr-2"/> Hubungi Kami
         </Link>
      </motion.section>

    </motion.div>
  );
}

export default PartnershipPage;
