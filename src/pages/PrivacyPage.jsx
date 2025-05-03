import React from 'react';
import { motion } from 'framer-motion';

function PrivacyPage() {
  // Anda bisa ganti tanggal ini
  const lastUpdated = "1 Mei 2025";
  const serviceName = "urlDikit";
  const contactEmail = "patihrmdk@gmail.com";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // Gunakan styling yang sama seperti halaman Terms atau sesuaikan
      className="w-full max-w-4xl px-4 prose dark:prose-invert prose-indigo"
      // Alternatif tanpa @tailwindcss/typography:
      // className="w-full max-w-4xl px-4 text-gray-700 dark:text-gray-300"
    >
      {/* Judul Halaman */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        Privacy Policy for {serviceName}
      </h1>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8">
        Last updated: {lastUpdated}
      </p>

      {/* === AWAL KONTEN PLACEHOLDER === */}
      {/* GANTI SEMUA TEKS DI BAWAH INI DENGAN KEBIJAKAN PRIVASI ANDA YANG SEBENARNYA */}

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">1. Pendahuluan</h2>
        <p className="mb-3">
          Kebijakan Privasi ini menjelaskan bagaimana {serviceName} ("kami") mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda menggunakan layanan pemendek URL kami ("Layanan"). Kami berkomitmen untuk melindungi privasi Anda.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">2. Informasi yang Kami Kumpulkan</h2>
        <p className="mb-3">
          Saat ini, {serviceName} dirancang untuk meminimalkan pengumpulan data pribadi. Kami mengumpulkan informasi berikut:
        </p>
        <ul className="list-disc list-inside mb-3 space-y-1 pl-4">
          <li><strong>URL Asli:</strong> URL panjang yang Anda masukkan untuk dipendekkan.</li>
          <li><strong>URL Pendek yang Dihasilkan:</strong> Kode unik yang kami buat untuk URL Anda.</li>
          <li><strong>Data Laporan (jika Anda melapor):</strong> URL pendek yang dilaporkan dan alasan yang Anda berikan (opsional).</li>
          <li><strong>Informasi Teknis Dasar (Log Server):</strong> Seperti alamat IP, tipe browser, waktu akses. Informasi ini digunakan untuk pemeliharaan sistem, analisis lalu lintas agregat, dan keamanan. Kami tidak menghubungkan log ini secara langsung dengan identitas pribadi pengguna biasa.</li>
          {/* --- TAMBAHKAN JENIS DATA LAIN JIKA ADA --- */}
          {/* Contoh: Jika ada fitur user account: Informasi pendaftaran (nama, email, password hash) */}
          {/* Contoh: Jika ada fitur analytics: Data klik agregat (jumlah klik, timestamp, mungkin data geolokasi kasar dari IP) */}
        </ul>
        <p>
          Kami **tidak** mengumpulkan informasi pribadi sensitif secara sengaja.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">3. Bagaimana Kami Menggunakan Informasi Anda</h2>
        <p className="mb-3">
          Kami menggunakan informasi yang kami kumpulkan untuk:
        </p>
         <ul className="list-disc list-inside mb-3 space-y-1 pl-4">
          <li>Menyediakan, mengoperasikan, dan memelihara Layanan kami (membuat dan mengarahkan URL pendek).</li>
          <li>Memproses laporan URL berbahaya dan mengambil tindakan yang diperlukan.</li>
          <li>Memantau penggunaan Layanan untuk mencegah penyalahgunaan dan memastikan keamanan.</li>
          <li>Menganalisis data agregat untuk meningkatkan Layanan (misalnya, performa server).</li>
           {/* --- TAMBAHKAN PENGGUNAAN LAIN JIKA ADA --- */}
           {/* Contoh: Mengelola akun pengguna, menyediakan fitur analytics jika ada */}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">4. Pembagian Informasi</h2>
        <p className="mb-3">
          Kami **tidak** menjual atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami hanya dapat membagikan informasi Anda dalam keadaan berikut:
        </p>
         <ul className="list-disc list-inside mb-3 space-y-1 pl-4">
           <li>**Kewajiban Hukum:** Jika diwajibkan oleh hukum, panggilan pengadilan, atau proses hukum lainnya.</li>
           <li>**Perlindungan Hak:** Untuk melindungi hak, properti, atau keamanan {serviceName}, pengguna kami, atau publik.</li>
           <li>**Penyedia Layanan:** Kami mungkin menggunakan penyedia layanan pihak ketiga untuk membantu operasional (misalnya, penyedia hosting). Mereka hanya memiliki akses ke informasi yang diperlukan untuk melakukan tugas mereka dan terikat kewajiban kerahasiaan.</li>
         </ul>
      </section>

       <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">5. Keamanan Data</h2>
        <p className="mb-3">
          Kami mengambil langkah-langkah keamanan yang wajar untuk melindungi informasi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah. Namun, tidak ada metode transmisi melalui internet atau penyimpanan elektronik yang 100% aman.
        </p>
         {/* --- JELASKAN LANGKAH KEAMANAN SPESIFIK JIKA PERLU --- */}
         {/* Contoh: Penggunaan HTTPS, hashing password (jika ada akun) */}
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">6. Cookie dan Teknologi Pelacakan</h2>
        <p className="mb-3">
          Saat ini, kami mungkin menggunakan cookie esensial hanya untuk fungsi dasar situs dan keamanan (misalnya, cookie sesi jika ada login admin). Kami **tidak** menggunakan cookie pelacakan pihak ketiga untuk iklan atau analitik terperinci. (Sesuaikan paragraf ini jika Anda menggunakan cookie lain atau layanan analitik seperti Google Analytics).
        </p>
      </section>

       <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">7. Privasi Anak</h2>
        <p className="mb-3">
          Layanan kami tidak ditujukan untuk anak di bawah usia 13 tahun (atau usia relevan lain sesuai yurisdiksi Anda). Kami tidak secara sadar mengumpulkan informasi pribadi dari anak-anak.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">8. Perubahan Kebijakan Privasi</h2>
        <p className="mb-3">
          Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberi tahu Anda tentang perubahan apa pun dengan memposting kebijakan baru di halaman ini dan memperbarui tanggal "Last updated" di bagian atas. Anda disarankan untuk meninjau Kebijakan Privasi ini secara berkala.
        </p>
      </section>

      {/* === AKHIR KONTEN PLACEHOLDER === */}

    </motion.div>
  );
}

export default PrivacyPage;
