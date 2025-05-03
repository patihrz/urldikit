

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';


function AccordionItem({ id, title, children, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 overflow-hidden">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-4 px-1 text-left text-lg font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none transition-colors"
        aria-expanded={isOpen}
        aria-controls={`content-tos-${id}`}
      >
        <span>{title}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            id={`content-tos-${id}`}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto', marginTop: '1rem', marginBottom: '1rem' },
              collapsed: { opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="px-1 pb-4 overflow-hidden"
          >
            {/* Styling konten */}
            <div className="prose dark:prose-invert prose-sm max-w-none">
                 {children}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}


function TermsPage() {
  const lastUpdated = "1 Mei 2025"; // Ganti tanggal ini
  const serviceName = "urlDikit";

  // State untuk akordeon
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Data Terms of Service dalam array objek
  const termsSections = [
    {
      id: 1, title: "1. Pendahuluan", content: (
        <p>Selamat datang di {serviceName} ("Layanan"), layanan pemendek URL yang disediakan oleh {serviceName}. Dengan mengakses atau menggunakan Layanan kami, Anda setuju untuk terikat oleh Ketentuan Layanan ini ("Ketentuan"). Jika Anda tidak setuju dengan bagian mana pun dari ketentuan ini, Anda tidak diizinkan untuk menggunakan Layanan.</p>
      )
    },
    {
      id: 2, title: "2. Penggunaan Layanan", content: (
        <>
          <p>Anda setuju untuk menggunakan Layanan hanya untuk tujuan yang sah dan sesuai dengan Ketentuan ini. Anda bertanggung jawab penuh atas URL asli yang Anda pendekkan dan konten yang terkait dengannya.</p>
          <p>Anda setuju untuk tidak menggunakan Layanan untuk:</p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Memendekkan URL yang mengarah ke konten ilegal, berbahaya, menipu, memfitnah, cabul, atau tidak pantas.</li>
            <li>Memendekkan URL yang melanggar hak kekayaan intelektual pihak lain.</li>
            <li>Memendekkan URL yang berisi malware, virus, atau kode berbahaya lainnya.</li>
            <li>Mengirim spam atau lalu lintas yang tidak diminta menggunakan URL pendek kami.</li>
            <li>Mengganggu atau mencoba mengganggu fungsi Layanan.</li>
          </ul>
        </>
      )
    },
    {
        id: 3, title: "3. Konten dan Tautan Pihak Ketiga", content: (
            <p>Layanan kami hanya memendekkan URL yang Anda berikan. Kami tidak mengontrol, mendukung, atau bertanggung jawab atas konten situs web pihak ketiga yang ditautkan melalui Layanan kami. Anda mengakses tautan tersebut atas risiko Anda sendiri.</p>
        )
    },
    {
        id: 4, title: "4. Pelaporan Penyalahgunaan", content: (
             <p>Kami menyediakan mekanisme bagi pengguna untuk melaporkan URL pendek yang diduga berbahaya atau melanggar Ketentuan ini. Kami akan meninjau laporan tersebut dan mengambil tindakan yang sesuai, termasuk kemungkinan menonaktifkan atau menghapus URL pendek yang melanggar.</p>
        )
    },
     {
        id: 5, title: "5. Batasan Tanggung Jawab", content: (
             <p>Layanan disediakan "sebagaimana adanya" tanpa jaminan apa pun. {serviceName} tidak akan bertanggung jawab atas kerugian atau kerusakan apa pun yang timbul dari penggunaan Anda atas Layanan.</p>
        )
    },
     {
        id: 6, title: "6. Perubahan Ketentuan", content: (
             <p>Kami berhak untuk memodifikasi atau mengganti Ketentuan ini kapan saja atas kebijakan kami sendiri. Kami akan memberi tahu Anda tentang perubahan materi dengan memposting ketentuan baru di situs ini. Penggunaan Anda yang berkelanjutan atas Layanan setelah perubahan tersebut merupakan penerimaan Anda terhadap Ketentuan baru.</p>
        )
    }
    // Tambahkan section lain jika perlu (misal: Hukum yang Mengatur, dll.)
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
        Terms of Service
      </h1>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8">
        Last updated: {lastUpdated}
      </p>

      {/* Container Akordeon */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        {termsSections.map((section, index) => (
          <AccordionItem
            key={section.id}
            id={section.id} // Beri id unik untuk aria-controls
            title={section.title}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          >
            {section.content}
          </AccordionItem>
        ))}
      </div>

    </motion.div>
  );
}

export default TermsPage;
