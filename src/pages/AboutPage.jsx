import React from 'react';
import { motion } from 'framer-motion';

function AboutPage() {
  const techStack = ["React", "Vite", "Node.js", "Express", "MySQL", "Tailwind CSS", "Framer Motion", "Lucide Icons", "React Hot Toast", "Axios", "Validator", "Bcrypt", "Helmet", "Express Rate Limit", "qrcode.react", "React Router DOM"]; // Sesuaikan jika perlu

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-3xl px-4" // Lebar kontainer bisa disesuaikan
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Tentang urlDikit
      </h1>

      <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 space-y-4">
        <p>
          Selamat datang di <strong>urlDikit</strong>! Ini adalah proyek personal yang saya bangun untuk mendemonstrasikan kemampuan dalam membuat aplikasi web full-stack menggunakan teknologi modern.
        </p>
        <p>
          urlDikit adalah layanan pemendek URL sederhana yang memungkinkan Anda mengubah alamat web yang panjang menjadi link pendek yang lebih mudah dibagikan dan diingat.
        </p>
        <h2 className="text-xl font-semibold pt-4 border-t dark:border-gray-700">Fitur Utama:</h2>
        <ul className="list-disc list-inside space-y-1 pl-4">
          <li>Pemendekan URL Cepat</li>
          <li>URL Kustom (Alias)</li>
          <li>QR Code untuk Setiap Link Pendek</li>
          <li>Halaman Statistik Klik (Dasar)</li>
          <li>Pelaporan URL Berbahaya</li>
        </ul>

        <p className="pt-4 border-t dark:border-gray-700">
          Proyek ini terus dikembangkan. Terima kasih sudah berkunjung!
        </p>
        {/* Tambahkan info kontak atau link ke portofolio/GitHub Anda jika mau */}
         {/* <p>Anda bisa melihat kode sumber proyek ini di [Link GitHub Anda].</p> */}
      </div>
    </motion.div>
  );
}

export default AboutPage;