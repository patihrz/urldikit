// src/components/DonationReminder.jsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

function DonationReminder() {
  const [isVisible, setIsVisible] = useState(false);
  const storageKey = 'donationReminderDismissed_urlDikit'; // Kunci unik untuk localStorage

  // Cek saat komponen pertama kali dimuat apakah user sudah pernah menutup ini
  useEffect(() => {
    const dismissed = localStorage.getItem(storageKey);
    // Hanya tampilkan jika BELUM PERNAH ditutup (nilai di localStorage bukan 'true')
    // Dan tambahkan sedikit delay agar tidak langsung muncul saat load
    const timer = setTimeout(() => {
        if (dismissed !== 'true') {
          setIsVisible(true);
        }
    }, 2500); // Muncul setelah 2.5 detik (sesuaikan delay jika perlu)

    return () => clearTimeout(timer); // Bersihkan timer jika komponen unmount
  }, []); // Dependency kosong, hanya jalan sekali saat mount

  // Fungsi untuk menutup banner dan menyimpannya di localStorage
  const handleDismiss = () => {
    localStorage.setItem(storageKey, 'true');
    setIsVisible(false);
  };

  // Jangan render apa-apa jika tidak visible
//   if (!isVisible) { // Kita pakai AnimatePresence jadi return null tidak perlu
//     return null;
//   }

  return (
    <AnimatePresence>
        {isVisible && (
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }} // Animasi masuk
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.9 }} // Animasi keluar
                transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.4 }}
                // Posisi floating (kanan bawah), z-index tinggi, styling card
                className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[99] w-[calc(100%-2rem)] max-w-sm bg-gradient-to-tr from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white rounded-lg shadow-xl p-4"
            >
                <div className="flex items-start gap-3">
                     {/* Ikon */}
                     <div className="flex-shrink-0 pt-0.5">
                         <Gift size={24} />
                     </div>

                     {/* Teks Konten */}
                     <div className="flex-1">
                        <p className="font-semibold text-sm leading-tight mb-1">Dukung urlDikit!</p>
                        <p className="text-xs opacity-90 leading-snug">
                            Suka dengan layanan ini? Bantu kami tetap gratis & terus berkembang dengan donasi kecil Anda. Terima kasih! 🙏
                        </p>
                        {/* Tombol/Link ke Halaman Donasi */}
                        <Link
                            to="/pages/donation"
                            onClick={handleDismiss} // Sekalian tutup saat diklik
                            className="inline-block mt-3 text-xs font-bold bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors"
                        >
                            Donasi Sekarang
                        </Link>
                     </div>

                     {/* Tombol Close */}
                     <button
                        onClick={handleDismiss}
                        className="-mt-1 -mr-1 p-1 rounded-full text-indigo-100/70 hover:text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors"
                        aria-label="Tutup Pengingat Donasi"
                     >
                        <X size={18} />
                     </button>
                </div>
            </motion.div>
         )}
    </AnimatePresence>
  );
}

export default DonationReminder;