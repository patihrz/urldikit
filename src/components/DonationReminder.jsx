// src/components/DonationReminder.jsx (Resolved Conflict - Muncul Setiap Refresh)

import React, { useState, useEffect } from 'react'; // Pastikan useEffect diimport
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift } from 'lucide-react'; // Hanya perlu X dan Gift
import { Link } from 'react-router-dom';

function DonationReminder() {
  // State untuk visibility, default false agar bisa dianimasikan masuk
  const [isVisible, setIsVisible] = useState(false);
  // Tidak perlu storageKey

  // Efek untuk menampilkan banner setelah delay (tanpa cek localStorage)
  useEffect(() => {
    // Tidak ada pengecekan 'dismissed'
    const timer = setTimeout(() => {
        setIsVisible(true); // Langsung set true setelah delay
    }, 2500); // Delay 2.5 detik (sesuaikan jika perlu)

    // Bersihkan timer saat komponen unmount
    return () => clearTimeout(timer);
  }, []); // Dependency kosong, hanya jalan sekali saat mount

  // Fungsi dismiss HANYA menyembunyikan via state
  const handleDismiss = () => {
    // Tidak ada localStorage.setItem
    setIsVisible(false);
  };

  // Varian animasi (opsional, bisa didefinisikan di sini atau di luar)
  const reminderVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 50, scale: 0.9 }
   };

  return (
    <AnimatePresence>
        {isVisible && ( // Render hanya jika isVisible true
            <motion.div
                key="donation-reminder" // Beri key unik untuk AnimatePresence
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={reminderVariants}
                transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.4 }}
                // Posisi floating dan styling card
                className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[99] w-[calc(100%-2rem)] max-w-sm bg-gradient-to-tr from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white rounded-lg shadow-xl p-4"
            >
                <div className="flex items-start gap-3">
                     {/* Ikon */}
                     <div className="flex-shrink-0 pt-0.5">
                         <Gift size={24} />
                     </div>

                     {/* Konten Teks */}
                     <div className="flex-1">
                        <p className="font-semibold text-sm leading-tight mb-1">Dukung urlDikit!</p>
                        <p className="text-xs opacity-90 leading-snug">
                            Suka dengan layanan ini? Bantu kami tetap gratis & terus berkembang. Terima kasih! 🙏
                        </p>
                        {/* Tombol/Link ke Halaman Donasi */}
                        <Link
                            to="/pages/donation"
                            onClick={handleDismiss} // Tutup reminder saat link donasi diklik
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