// src/pages/AboutPage.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// Import ikon relevan (Zap, AtSign, QrCode, BarChart3, AlertTriangle)
import { Zap, AtSign, QrCode, BarChart3, AlertTriangle, Send } from 'lucide-react';

// Data Fitur (tanpa Panel Admin)
const features = [
  { icon: Zap, title: "Pemendekan Instan", description: "Ubah URL panjang jadi pendek dalam sekejap." },
  { icon: AtSign, title: "Alias Kustom", description: "Buat link pendek unik (6-10 karakter) yang mudah diingat." },
  { icon: QrCode, title: "QR Code Otomatis", description: "Setiap link pendek otomatis disertai QR Code untuk kemudahan berbagi." },
  { icon: BarChart3, title: "Statistik Klik", description: "Lihat berapa kali link pendek Anda diakses melalui halaman Statistik." },
  { icon: AlertTriangle, title: "Pelaporan Link", description: "Laporkan link yang diduga berbahaya atau melanggar aturan." }
];

// Varian animasi
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

function AboutPage() {
  // Ganti dengan path GIF Anda di folder public
  const yourGifPath = "/images/urldkt.gif"; // Contoh
  const serviceName = "urlDikit";
  const contactPagePath = "/pages/contact"; // Pastikan path ini benar

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-4xl lg:max-w-5xl px-4" // Container utama
    >
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Tentang {serviceName}
      </h1>

      {/* Intro + GIF */}
      <section className="mb-16 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
        <motion.div
           className="w-full md:w-3/5 flex-shrink-0 order-2 md:order-1" // GIF 60%
           initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={yourGifPath} alt="Demo urlDikit" className="w-full h-auto rounded-lg shadow-md" />
        </motion.div>
        <motion.div
            className="w-full md:w-2/5 order-1 md:order-2" // Teks 40%
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white mb-4">
            Ringkas, Cepat, Efisien.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            <strong>{serviceName}</strong> hadir sebagai solusi modern untuk kebutuhan pemendekan URL Anda. Ubah link panjang yang sulit diingat menjadi pendek, rapi, dan siap dibagikan ke mana saja hanya dengan beberapa klik. Fokus pada pesan Anda, biarkan kami urus kerumitan linknya!
          </p>
           <Link to="/" className="mt-4 inline-block text-indigo-600 dark:text-indigo-400 hover:underline font-medium">
              Coba Pendekkan URL Sekarang &rarr;
           </Link>
        </motion.div>
      </section>

      {/* Fitur Unggulan */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 sm:mb-12 text-gray-800 dark:text-white">
          Fitur Unggulan Kami
        </h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center"
            >
              {React.createElement(feature.icon, { size: 36, className: "text-indigo-500 mb-4" })}
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* === BAGIAN TECH STACK DIHAPUS DARI SINI === */}

       {/* Kontak CTA (Opsional) */}
       <section className="mt-16 text-center">
            <p className="mb-4 text-gray-600 dark:text-gray-400">
                Masih ada pertanyaan atau butuh bantuan?
            </p>
             <Link to={contactPagePath} className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-6 rounded-md transition duration-150 ease-in-out no-underline text-sm">
                 <Send className="h-4 w-4 mr-2"/> Hubungi Kami
             </Link>
        </section>

    </motion.div>
  );
}

export default AboutPage;
