import React, { useState, useEffect } from 'react'; // Pastikan useEffect diimport
import axios from 'axios';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
// Import ikon yang relevan
import { Search, Loader2, AlertCircle, Link as LinkIcon, Eye, ClipboardCopy, Check } from 'lucide-react';

// Base URL Backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// --- Varians Animasi ---
const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  exit: { opacity: 0 }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } }
};

const resultAreaVariants = {
   hidden: { opacity: 0, height: 0, y: 10 }, // Mulai sedikit dari bawah
   visible: { opacity: 1, height: 'auto', y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
   exit: { opacity: 0, height: 0, y: -10, transition: { duration: 0.2, ease: 'easeIn' } } // Keluar ke atas
};
// ---------------------


function StatsPage() {
  const [inputValue, setInputValue] = useState('');
  const [statsResult, setStatsResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  // Fungsi extractShortCode (Sudah benar 6-10 char)
  const extractShortCode = (input) => {
    if (!input) return null;
    const trimmedInput = input.trim();
    try {
      const url = new URL(trimmedInput);
      const pathParts = url.pathname.split('/');
      const potentialCode = pathParts[pathParts.length - 1]?.replace(/^\/+|\/+$/g, '');
      if (potentialCode && /^[a-zA-Z0-9_-]{6,10}$/.test(potentialCode)) { return potentialCode; }
    } catch (_) {
      if (/^[a-zA-Z0-9_-]{6,10}$/.test(trimmedInput)) { return trimmedInput; }
    }
    return null;
  };

  // Fungsi handleCheckStats (Sudah benar)
  const handleCheckStats = async (e) => {
    e.preventDefault();
    setError(null); setStatsResult(null); setCopied(false);
    const shortCode = extractShortCode(inputValue);
    if (!shortCode) {
      toast.error('Invalid input. Please enter a valid short URL or short code (6-10 valid characters).');
      setError('Invalid input format or length.'); return;
    }
    setLoading(true);
    try {
      // Simulasi delay (HAPUS DI PRODUKSI)
      // await new Promise(resolve => setTimeout(resolve, 1000));
      const response = await axios.get(`${API_BASE_URL}/api/stats/${shortCode}`);
      if (response.data && response.data.success) { setStatsResult(response.data); }
      else { const message = response.data.error || 'Could not retrieve stats.'; setError(message); toast.error(message); }
    } catch (err) {
      console.error("Error fetching stats:", err);
      const message = err.response?.data?.error || 'Failed to fetch stats. Link may not exist or server error.'; setError(message); toast.error(message);
    } finally { setLoading(false); }
  };

   // Fungsi handleCopyResult (Sudah benar)
   const handleCopyResult = () => {
       const shortUrlToCopy = `${window.location.origin}/${statsResult?.shortCode}`;
       if (!shortUrlToCopy || !statsResult?.success) return;
       navigator.clipboard.writeText(shortUrlToCopy)
           .then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); })
           .catch(err => { console.error('Failed to copy result URL: ', err); toast.error('Failed to copy URL.'); });
   };


  return (
    // Gunakan varian untuk animasi masuk halaman
    <motion.div
      key="stats-page" // Beri key unik jika ini bagian dari <AnimatePresence> di level atas
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full max-w-xl px-4"
    >
      {/* Judul (Dianimasikan sebagai item) */}
      <motion.h1 variants={itemVariants} className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Check Link Statistics
      </motion.h1>
      {/* Deskripsi (Dianimasikan sebagai item) */}
      <motion.p variants={itemVariants} className="text-center text-sm text-gray-600 dark:text-gray-400 mb-8">
        Enter the short URL (e.g., /abcde12) or just the code (6-10 characters) to see its click count.
      </motion.p>

      {/* Form Input (Dianimasikan sebagai item) */}
      <motion.form onSubmit={handleCheckStats} className="flex items-center gap-2 mb-8" variants={itemVariants}>
        <input
          type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter Short URL or Code (6-10 chars)" required
          className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
        />
        <button type="submit" disabled={loading} className={`flex items-center justify-center px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${ loading ? 'opacity-50 cursor-not-allowed' : '' }`}>
            {loading ? (<Loader2 className="h-5 w-5 animate-spin" />) : (<Search className="h-5 w-5" />)}
            <span className="ml-2 hidden sm:inline">Check</span>
        </button>
      </motion.form>

      {/* Area Hasil Statistik (Gunakan AnimatePresence) */}
      <div className="mt-6 min-h-[150px]"> {/* Beri tinggi minimum sedikit lebih besar */}
        <AnimatePresence mode="wait"> {/* mode="wait" agar animasi keluar selesai sebelum masuk */}

          {/* Tampilan Loading (Dianimasikan) */}
          {loading && (
            <motion.div
                key="loading" // Key unik untuk AnimatePresence
                variants={resultAreaVariants} // Pakai varian hasil
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex justify-center items-center py-10"
             >
              <Loader2 className="h-6 w-6 animate-spin text-indigo-500" />
              <p className="ml-3 text-gray-500 dark:text-gray-400">Checking stats...</p>
            </motion.div>
          )}

          {/* Tampilan Error (Dianimasikan) */}
          {!loading && error && (
             <motion.div
                key="error" // Key unik
                variants={resultAreaVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-red-50 dark:bg-red-900/20 p-4 rounded border border-red-300 dark:border-red-700" // Styling error
            >
                <div className="flex items-center gap-3 text-red-600 dark:text-red-300">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <div>
                        <p className='font-semibold text-sm'>Error!</p>
                        <p className='text-xs'>{error}</p>
                    </div>
                </div>
             </motion.div>
          )}

          {/* Tampilan Hasil Sukses (Dianimasikan) */}
          {!loading && !error && statsResult && statsResult.success && (
            <motion.div
                key="success" // Key unik
                variants={resultAreaVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 space-y-4"
            >
                {/* Short URL */}
                <div className="flex items-center justify-between border-b dark:border-gray-600 pb-3">
                    <div className='flex items-center text-sm text-gray-500 dark:text-gray-400'><LinkIcon className="h-4 w-4 mr-2" /> Short URL</div>
                    <div className='flex items-center'>
                        <a href={`/${statsResult.shortCode}`} target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline break-all">{`/${statsResult.shortCode}`}</a>
                        <button onClick={handleCopyResult} className="ml-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" aria-label="Copy Short URL">{copied ? <Check size={16} className="text-green-500"/> : <ClipboardCopy size={16} />}</button>
                    </div>
                </div>
                {/* Original URL */}
                <div className="flex items-center justify-between border-b dark:border-gray-600 pb-3">
                    <div className='flex items-center text-sm text-gray-500 dark:text-gray-400'><LinkIcon className="h-4 w-4 mr-2" /> Original URL</div>
                    <p className="font-medium text-gray-800 dark:text-gray-200 break-all text-right">{statsResult.longUrl}</p>
                </div>
                {/* Click Count */}
                <div className="flex items-center justify-between pt-2">
                    <div className='flex items-center text-sm text-gray-500 dark:text-gray-400'><Eye className="h-4 w-4 mr-2" /> Total Clicks</div>
                    <p className="font-semibold text-2xl text-indigo-600 dark:text-indigo-400">{statsResult.clickCount ?? 0}</p>
                </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default StatsPage;