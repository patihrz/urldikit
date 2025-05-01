import React, { useState } from 'react';
import { Copy, Check, AlertTriangle } from 'lucide-react'; // Import ikon
import { motion, AnimatePresence } from 'framer-motion'; // Import untuk animasi
import { QRCodeCanvas } from 'qrcode.react'; // <-- 1. Import komponen QR Code

// Komponen menerima props: shortUrl (hasil), error (pesan error), loading (status loading)
function ResultDisplay({ shortUrl, error, loading }) {
  const [copied, setCopied] = useState(false); // State untuk tombol copy

  // Fungsi handleCopy (tidak berubah)
  const handleCopy = () => {
    if (!shortUrl) return;
    navigator.clipboard.writeText(shortUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  // Jangan tampilkan apa-apa jika sedang loading awal (tidak berubah)
  if (loading && !shortUrl && !error) {
     return <div className="mt-6 min-h-[60px]"></div>;
  }

  return (
    <div className="mt-6 min-h-[60px]">
      <AnimatePresence mode="wait">

        {/* Tampilan Error (tidak berubah) */}
        {error && !loading && (
          <motion.div /* ... props motion ... */ role="alert" className="bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded relative flex items-center">
             <AlertTriangle className="h-5 w-5 mr-3 flex-shrink-0" />
            <div><strong className="font-bold block sm:inline">Error:</strong><span className="block sm:inline ml-1">{error}</span></div>
          </motion.div>
        )}

        {/* Tampilan Hasil Sukses (Ditambahkan QR Code) */}
        {shortUrl && !loading && !error && (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            // === PERUBAHAN CLASS ===
            // Padding diubah jadi py-4, tambah flex flex-col items-center
            className="bg-green-100 dark:bg-gray-700 border border-green-400 dark:border-gray-600 text-green-800 dark:text-gray-200 px-4 py-4 rounded relative flex flex-col items-center"
          >
            {/* Wrapper untuk URL dan Tombol Copy */}
            <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4"> {/* Tambah mb-4 */}
              <div className="flex-grow mb-2 sm:mb-0 sm:mr-4 overflow-hidden">
                  <span className="font-bold block text-sm mb-1">Shortened URL:</span>
                  <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline break-all text-sm sm:text-base">
                      {shortUrl}
                  </a>
              </div>
              <motion.button onClick={handleCopy} /* ... props tombol copy ... */ className="ml-auto sm:ml-0 flex-shrink-0 p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  {copied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
              </motion.button>
            </div>

            {/* === PENAMBAHAN BAGIAN QR CODE === */}
            <div className="mt-2 border-t border-green-300 dark:border-gray-600 pt-4 w-full flex flex-col items-center">
              <QRCodeCanvas
                value={shortUrl}        // URL pendek sebagai data QR Code
                size={128}              // Ukuran (px)
                bgColor={"#ffffff"}     // Warna latar belakang
                fgColor={"#000000"}     // Warna QR Code
                level={"L"}             // Level koreksi error
                includeMargin={true}    // Tambahkan margin putih
                className="rounded"
              />
              <p className='text-xs text-gray-500 dark:text-gray-400 mt-2'>Scan QR Code</p>
            </div>
            {/* === AKHIR PENAMBAHAN QR CODE === */}

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ResultDisplay;