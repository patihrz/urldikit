
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Handshake, Megaphone, Send } from 'lucide-react';

function PartnershipPage() {
  const serviceName = "urlDikit";
  const contactPagePath = "/pages/contact";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}

      className="w-full max-w-4xl px-4 prose dark:prose-invert prose-indigo prose-headings:font-semibold prose-headings:mb-3 prose-p:my-2 prose-a:text-indigo-600 dark:prose-a:text-indigo-400"
    >
      {/* Judul Halaman */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white !no-underline">
         Peluang Kemitraan & Periklanan - {serviceName}
      </h1>

      {/* Paragraf Pengantar */}
      <section className="mb-10">
        <p className="text-lg text-center text-gray-600 dark:text-gray-400">
          {serviceName} berkomitmen untuk menyediakan layanan pemendek URL yang simpel, cepat, dan andal. Kami percaya pada kekuatan kolaborasi dan terbuka untuk menjajaki peluang kemitraan serta periklanan yang dapat memberikan nilai tambah bagi kedua belah pihak dan pengguna kami.
        </p>
      </section>

      {/* Bagian Kemitraan & Periklanan */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">

          {/* Kolom Kemitraan */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 not-prose"> {/* 'not-prose' agar styling prose tidak terlalu mempengaruhi card */}
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800 dark:text-white">
                  <Handshake className="h-6 w-6 mr-2 text-indigo-600"/> Jalin Kemitraan Strategis
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Kami menyambut diskusi mengenai berbagai bentuk kemitraan untuk tumbuh bersama, termasuk namun tidak terbatas pada:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 pl-4">
                  <li>Integrasi API untuk alur kerja yang lebih efisien.</li>
                  <li>Kolaborasi dalam pengembangan fitur baru atau peningkatan layanan {serviceName}.</li>
                  <li>Peluang promosi bersama (co-branding) atau kampanye pemasaran bersama.</li>
                  <li>Solusi pemendekan URL khusus yang disesuaikan dengan kebutuhan bisnis Anda.</li>
              </ul>
          </div>

           {/* Kolom Periklanan */}
           <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 not-prose">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800 dark:text-white">
                 <Megaphone className="h-6 w-6 mr-2 text-indigo-600"/> Jangkau Audiens Kami
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Jangkau pengguna yang tertarik pada utilitas web, produktivitas, dan berbagi informasi secara efisien melalui platform kami.
              </p>
               <p className="text-gray-600 dark:text-gray-400">
                   Kami terbuka untuk mendiskusikan berbagai format penempatan iklan yang relevan dan tidak mengganggu pengalaman pengguna di {serviceName}.
                   {/* Anda bisa tambahkan contoh jika sudah punya ide: */}
                   {/* "Beberapa opsi potensial mencakup penempatan banner pada halaman hasil atau footer." */}
               </p>
           </div>
      </div>

      {/* Ajakan Kontak */}
      <section className="mt-10 pt-6 border-t dark:border-gray-700 text-center">
         <h2 className="text-2xl font-semibold mb-4">Mari Berdiskusi Lebih Lanjut</h2>
         <p className="mb-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
             Jika Anda tertarik untuk menjajaki peluang kemitraan atau periklanan dengan {serviceName}, atau memiliki proposal lain, kami mengundang Anda untuk menghubungi kami melalui halaman Kontak.
         </p>
         <Link
            to={contactPagePath}
            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-6 rounded-md transition duration-150 ease-in-out no-underline" // no-underline untuk override prose
         >
           <Send className="h-4 w-4 mr-2"/> Hubungi Kami
         </Link>
      </section>

    </motion.div>
  );
}

export default PartnershipPage;