// src/pages/HowToUsePage.jsx

import React from 'react';
import { motion } from 'framer-motion';
// Import ikon relevan
import { Link as LinkIcon, AtSign, Copy, QrCode, BarChart3, AlertTriangle } from 'lucide-react';

function HowToUsePage() {
  const serviceName = "urlDikit";

  // == PENTING: Ganti nilai src pada iframe di bawah dengan kode embed dari YouTube ==
  const youtubeEmbedIframeCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/sKadMQnx6Bo?si=nVd2Fnw9HOhOr-E9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  // ============================================================================

  // Fungsi untuk membersihkan dan menambahkan class responsif ke iframe
  const processIframe = (iframeString) => {
    if (!iframeString || typeof iframeString !== 'string') return '';
    // Hapus width dan height, tambahkan class responsif
    let cleanedIframe = iframeString
      .replace(/width="\d+"/, '')
      .replace(/height="\d+"/, '')
      .replace('<iframe', '<iframe class="absolute top-0 left-0 w-full h-full"');
    return cleanedIframe;
  };

  const responsiveIframeHtml = processIframe(youtubeEmbedIframeCode);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // Pakai class prose untuk styling teks otomatis, atau style manual
      className="w-full max-w-4xl px-4 prose dark:prose-invert prose-indigo prose-headings:font-semibold prose-a:text-indigo-600 dark:prose-a:text-indigo-400"
      // Alternatif tanpa plugin prose: className="w-full max-w-4xl px-4 text-gray-700 dark:text-gray-300"
    >
      {/* Judul Halaman */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white !no-underline"> {/* !no-underline untuk override prose */}
        Cara Menggunakan {serviceName}
      </h1>

      {/* Bagian Video Tutorial */}
      <section className="mb-8">
        <h2 className="text-2xl mb-4">Video Tutorial</h2>
        {/* Wrapper Responsif 16:9 */}
        <div
           className="relative overflow-hidden rounded-lg shadow-md border dark:border-gray-700 not-prose" // 'not-prose' agar styling prose tidak mengganggu wrapper
           style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */ }}
         >
           {/* Render iframe menggunakan dangerouslySetInnerHTML */}
           {responsiveIframeHtml ? (
                <div dangerouslySetInnerHTML={{ __html: responsiveIframeHtml }} />
           ) : (
                <div className="absolute top-0 left-0 w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                     <p className="text-gray-500 dark:text-gray-400 text-center p-4">
                       Video tidak tersedia atau kode embed salah.<br/> Pastikan Anda menyalin kode iframe dari YouTube dengan benar.
                     </p>
                </div>
           )}
        </div>
      </section>

      {/* Bagian Panduan Teks */}
      <section className="mb-6">
        <h2 className="text-2xl mb-4">Panduan Teks</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl mb-2 flex items-center"><LinkIcon className="h-5 w-5 mr-2 text-indigo-500 inline-block not-prose"/>1. Masukkan URL Panjang</h3>
            <p>Tempel (paste) URL lengkap yang ingin Anda pendekkan ke kolom input utama.</p>
          </div>

          <div>
            <h3 className="text-xl mb-2 flex items-center"><AtSign className="h-5 w-5 mr-2 text-indigo-500 inline-block not-prose"/>2. (Opsional) Alias Kustom</h3>
            <p>Ketik alias (6-10 karakter: huruf, angka, `_`, `-`) di kolom kedua jika ingin nama link khusus. Jika kosong/tidak valid, kode acak akan dibuat.</p>
          </div>

          <div>
            <h3 className="text-xl mb-2 flex items-center"><span className='not-prose mr-2'>🚀</span> 3. Klik "Shorten URL"</h3>
            <p>Tekan tombol untuk memproses URL Anda.</p>
          </div>

          <div>
            <h3 className="text-xl mb-2 flex items-center"><Copy className="h-5 w-5 mr-2 text-indigo-500 inline-block not-prose"/>4. Salin Hasil</h3>
            <p>URL pendek akan muncul. Gunakan tombol copy di sebelahnya untuk menyalin.</p>
          </div>

          <div>
            <h3 className="text-xl mb-2 flex items-center"><QrCode className="h-5 w-5 mr-2 text-indigo-500 inline-block not-prose"/>5. Gunakan QR Code</h3>
            <p>Sebuah QR Code juga akan tampil, siap untuk Anda scan atau simpan.</p>
          </div>

          <div>
            <h3 className="text-xl mb-2 flex items-center"><BarChart3 className="h-5 w-5 mr-2 text-indigo-500 inline-block not-prose"/>6. Cek Statistik</h3>
            <p>Kunjungi halaman "Check Stats" (link ada di Navar/Footer) untuk melihat jumlah klik link pendek Anda.</p>
          </div>

          <div>
             <h3 className="text-xl mb-2 flex items-center"><AlertTriangle className="h-5 w-5 mr-2 text-orange-500 inline-block not-prose"/>7. Laporkan URL</h3>
             <p>Temukan link {serviceName} yang mencurigakan? Laporkan melalui link "Report Malicious URL" di Footer.</p>
          </div>
        </div>
      </section>

    </motion.div>
  );
}

export default HowToUsePage;