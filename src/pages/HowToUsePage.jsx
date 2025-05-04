import React, { useState } from 'react'; // Import useState
import { motion, AnimatePresence } from 'framer-motion';
// Import ikon yang relevan + ChevronDown untuk akordeon
import { ChevronDown, Link as LinkIcon, AtSign, Copy, QrCode, BarChart3, AlertCircle, AlertTriangle, Send } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom'; // Rename Link from react-router

// Komponen kecil untuk satu item akordeon
function AccordionItem({ id, title, icon: Icon, children, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 overflow-hidden last:border-b-0"> {/* Hapus border bawah di item terakhir */}
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-4 px-4 sm:px-6 text-left text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 focus:outline-none transition-colors" // Sesuaikan padding/fontsize
        aria-expanded={isOpen}
        aria-controls={`content-htu-${id}`}
      >
        <span className='flex items-center'>
           {Icon && <Icon className="h-5 w-5 mr-3 text-indigo-500 flex-shrink-0"/>} {/* Tampilkan ikon jika ada */}
           {title}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            id={`content-htu-${id}`}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto', marginTop: '0.5rem', marginBottom: '1rem' },
              collapsed: { opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="px-4 sm:px-6 pb-4 overflow-hidden" // Beri padding horizontal & bawah
          >
             {/* Styling konten di dalam akordeon */}
            <div className="text-sm text-gray-600 dark:text-gray-400 pl-8 pr-4 leading-relaxed border-l-2 border-indigo-100 dark:border-indigo-900/50">
                 {children}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}


// Halaman How To Use
function HowToUsePage() {
  const serviceName = "urlDikit";
  const contactPagePath = "/pages/contact"; // Pastikan path benar

  // == Kode iframe Anda DITARUH DI SINI ==
  // INGAT: Ganti nilai src="..." dengan KODE EMBED ASLI dari YouTube!
  const youtubeEmbedIframeCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/sKadMQnx6Bo?si=nVd2Fnw9HOhOr-E9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  // ========================================

  // Fungsi untuk membersihkan dan menambahkan class responsif ke iframe
  const processIframe = (iframeString) => {
    if (!iframeString || typeof iframeString !== 'string') return '';
    let cleanedIframe = iframeString
      .replace(/width="[^"]*"/, '') // Hapus atribut width
      .replace(/height="[^"]*"/, '') // Hapus atribut height
      .replace('<iframe', '<iframe class="absolute top-0 left-0 w-full h-full"'); // Tambah class responsif
    return cleanedIframe;
  };

  const responsiveIframeHtml = processIframe(youtubeEmbedIframeCode);

  // State untuk akordeon
  const [openIndex, setOpenIndex] = useState(0); // Buka item pertama by default
  const handleToggle = (index) => { setOpenIndex(openIndex === index ? null : index); };

  // Data langkah-langkah penggunaan
  const howToUseSteps = [
    { id: 1, icon: LinkIcon, title: "1. Masukkan URL Panjang", content: <p>Tempel (paste) URL lengkap yang ingin Anda pendekkan ke kolom input utama.</p> },
    { id: 2, icon: AtSign, title: "2. (Opsional) Alias Kustom", content: <p>Ketik alias (6-10 karakter: huruf, angka, `_`, `-`) di kolom kedua jika ingin nama link khusus. Jika kosong/tidak valid, kode acak akan dibuat.</p> },
    { id: 3, icon: AlertCircle, title: "3. Klik 'Shorten URL'", content: <p>Tekan tombol "Shorten URL" untuk memproses permintaan Anda.</p> },
    { id: 4, icon: Copy, title: "4. Salin Hasil", content: <p>URL pendek akan muncul. Gunakan tombol copy di sebelahnya untuk menyalin dengan mudah.</p> },
    { id: 5, icon: QrCode, title: "5. Gunakan QR Code", content: <p>QR Code juga akan tampil bersama hasil URL pendek, siap untuk Anda scan atau simpan.</p> },
    { id: 6, icon: BarChart3, title: "6. Cek Statistik", content: <p>Kunjungi halaman "Check Stats" (<RouterLink to="/pages/stats" className='text-indigo-600 dark:text-indigo-400 hover:underline'>link di sini</RouterLink>) dan masukkan URL pendek atau kodenya untuk melihat jumlah klik.</p> },
    { id: 7, icon: AlertTriangle, title: "7. Laporkan URL", content: <p>Temukan link {serviceName} yang mencurigakan? Laporkan melalui link "Report Malicious URL" (<RouterLink to="/pages/report" className='text-indigo-600 dark:text-indigo-400 hover:underline'>link di sini</RouterLink>) di Footer.</p> }
  ];


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-4xl px-4" // Container utama halaman
    >
      <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-gray-800 dark:text-white">
        Cara Menggunakan {serviceName}
      </h1>

      {/* Bagian Video Tutorial */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Video Tutorial</h2>
        {/* Wrapper Responsif 16:9 */}
        <div
           className="relative overflow-hidden rounded-lg shadow-lg border dark:border-gray-700 bg-black" // bg-black sbg fallback
           style={{ paddingBottom: '56.25%' /* Rasio 16:9 */ }}
         >
           {responsiveIframeHtml ? (
                // Gunakan dangerouslySetInnerHTML untuk merender string HTML iframe
                <div dangerouslySetInnerHTML={{ __html: responsiveIframeHtml }} />
           ) : (
                // Fallback jika iframe kosong/salah
                <div className="absolute top-0 left-0 w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                     <p className="text-gray-500 dark:text-gray-400 text-center p-4">
                       Video tidak tersedia. Pastikan kode embed dari YouTube sudah benar.
                     </p>
                </div>
           )}
        </div>
      </motion.section>

      {/* Bagian Panduan Teks (Akordeon) */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Panduan Teks</h2>
        {/* Container Akordeon */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          {howToUseSteps.map((step, index) => (
            <AccordionItem
              key={step.id}
              id={step.id}
              title={step.title}
              icon={step.icon}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            >
              {step.content}
            </AccordionItem>
          ))}
        </div>
      </motion.section>

    </motion.div>
  );
}

export default HowToUsePage;
