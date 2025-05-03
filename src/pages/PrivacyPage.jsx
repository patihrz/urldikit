import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react'; // Ikon panah

// Komponen kecil untuk satu item akordeon
function AccordionItem({ id, title, children, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Header/Tombol Akordeon */}
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-4 px-1 text-left text-lg font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none transition-colors"
        aria-expanded={isOpen}
        aria-controls={`content-${id}`}
      >
        <span>{title}</span>
        {/* Animasi ikon panah */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      {/* Konten Akordeon (muncul/hilang dengan animasi) */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            id={`content-${id}`}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto', marginTop: '1rem', marginBottom: '1rem' },
              collapsed: { opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="px-1 pb-4 overflow-hidden" // Padding untuk konten
          >
            {/* Beri styling dasar untuk konten di sini atau pakai prose */}
            <div className="prose dark:prose-invert prose-sm max-w-none">
                 {children}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}


function PrivacyPage() {
  const lastUpdated = "1 Mei 2025";
  const serviceName = "urlDikit";
  const contactEmail = "patihrmdk@gmail.com";

  // State untuk melacak item mana yang sedang terbuka (null berarti semua tertutup)
  const [openIndex, setOpenIndex] = useState(null); // Atau useState(0) jika ingin item pertama terbuka default

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Buka item yg diklik, tutup yg lain
  };

  // Data kebijakan privasi dalam bentuk array objek
  const privacySections = [
    {
      id: 1, title: "1. Pendahuluan", content: (
        <p>Kebijakan Privasi ini menjelaskan bagaimana {serviceName} ("kami") mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda menggunakan layanan pemendek URL kami ("Layanan"). Kami berkomitmen untuk melindungi privasi Anda.</p>
      )
    },
    {
      id: 2, title: "2. Informasi yang Kami Kumpulkan", content: (
        <>
          <p>Saat ini, {serviceName} dirancang untuk meminimalkan pengumpulan data pribadi. Kami mengumpulkan informasi berikut:</p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li><strong>URL Asli:</strong> URL panjang yang Anda masukkan untuk dipendekkan.</li>
            <li><strong>URL Pendek yang Dihasilkan:</strong> Kode unik yang kami buat untuk URL Anda.</li>
            <li><strong>Data Laporan (jika Anda melapor):</strong> URL pendek yang dilaporkan dan alasan yang Anda berikan (opsional).</li>
            <li><strong>Informasi Teknis Dasar (Log Server):</strong> Seperti alamat IP, tipe browser, waktu akses. Informasi ini digunakan untuk pemeliharaan sistem, analisis lalu lintas agregat, dan keamanan. Kami tidak menghubungkan log ini secara langsung dengan identitas pribadi pengguna biasa.</li>
            {/* Tambahkan data lain jika ada */}
          </ul>
          <p>Kami <strong>tidak</strong> mengumpulkan informasi pribadi sensitif secara sengaja.</p>
        </>
      )
    },
    {
        id: 3, title: "3. Bagaimana Kami Menggunakan Informasi Anda", content: (
            <>
                <p>Kami menggunakan informasi yang kami kumpulkan untuk:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Menyediakan, mengoperasikan, dan memelihara Layanan kami.</li>
                    <li>Memproses laporan URL berbahaya.</li>
                    <li>Memantau penggunaan Layanan untuk keamanan.</li>
                    <li>Menganalisis data agregat untuk meningkatkan Layanan.</li>
                </ul>
            </>
        )
    },
    {
        id: 4, title: "4. Pembagian Informasi", content: (
            <>
                <p>Kami tidak menjual atau menyewakan informasi pribadi Anda. Kami hanya dapat membagikan informasi dalam keadaan berikut:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                    <li>Kewajiban Hukum.</li>
                    <li>Perlindungan Hak.</li>
                    <li>Penyedia Layanan pihak ketiga (misal: hosting) yang terikat kerahasiaan.</li>
                </ul>
            </>
        )
    },
    {
        id: 5, title: "5. Keamanan Data", content: (
             <p>Kami mengambil langkah keamanan wajar untuk melindungi informasi Anda, namun tidak ada sistem yang 100% aman. Penggunaan HTTPS membantu melindungi data saat transit.</p>
        )
    },
    {
        id: 6, title: "6. Cookie dan Teknologi Pelacakan", content: (
            <p>Kami mungkin menggunakan cookie esensial untuk fungsi dasar situs. Kami tidak menggunakan cookie pelacakan pihak ketiga untuk iklan. (Sesuaikan jika Anda menggunakan cookie lain).</p>
        )
    },
    {
        id: 7, title: "7. Privasi Anak", content: (
            <p>Layanan kami tidak ditujukan untuk anak di bawah usia yang relevan sesuai hukum. Kami tidak secara sadar mengumpulkan data dari anak-anak.</p>
        )
    },
    {
        id: 8, title: "8. Perubahan Kebijakan Privasi", content: (
             <p>Kami dapat memperbarui kebijakan ini. Perubahan akan diposting di halaman ini dengan tanggal pembaruan yang baru. Anda disarankan meninjau secara berkala.</p>
        )
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-4xl px-4" // Container utama
    >
      {/* Judul Halaman */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        Privacy Policy for {serviceName}
      </h1>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8">
        Last updated: {lastUpdated}
      </p>

      {/* Container Akordeon */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        {privacySections.map((section, index) => (
          <AccordionItem
            key={section.id}
            id={section.id}
            title={section.title}
            isOpen={openIndex === index} // Item terbuka jika indexnya cocok dengan openIndex
            onClick={() => handleToggle(index)} // Fungsi untuk buka/tutup item ini
          >
            {section.content} {/* Konten detail kebijakan */}
          </AccordionItem>
        ))}
      </div>

    </motion.div>
  );
}

export default PrivacyPage;
