import React, { useState, useEffect } from 'react'; // Tambahkan useEffect jika belum ada
import axios from 'axios';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Search, Loader2, AlertCircle, Link as LinkIcon, Eye, ClipboardCopy, Check } from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

function StatsPage() {
  const [inputValue, setInputValue] = useState('');
  const [statsResult, setStatsResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  // === FUNGSI EXTRACTSHORTCODE DIPERBAIKI ===
  const extractShortCode = (input) => {
    if (!input) return null;
    const trimmedInput = input.trim(); // Trim input dulu

    try {
      // Coba parse sebagai URL lengkap
      const url = new URL(trimmedInput);
      const pathParts = url.pathname.split('/');
      // Ambil bagian terakhir, HAPUS / jika ada di awal/akhir segment
      const potentialCode = pathParts[pathParts.length - 1]?.replace(/^\/+|\/+$/g, '');

      // Validasi format & panjang 6-10 karakter
      if (potentialCode && /^[a-zA-Z0-9_-]{6,10}$/.test(potentialCode)) {
        return potentialCode;
      }
    } catch (_) {
      // Jika bukan URL valid, anggap input adalah short code itu sendiri
      // Validasi format & panjang 6-10 karakter
      if (/^[a-zA-Z0-9_-]{6,10}$/.test(trimmedInput)) {
         return trimmedInput;
      }
    }
    // Jika tidak ada yang cocok
    return null;
  };
  // =========================================

  const handleCheckStats = async (e) => {
    e.preventDefault();
    setError(null);
    setStatsResult(null);
    setCopied(false);

    const shortCode = extractShortCode(inputValue); // Panggil fungsi yg sudah diperbaiki

    // === PESAN ERROR DIPERBAIKI ===
    if (!shortCode) {
      // Pesan error sekarang menyebutkan 6-10 karakter
      toast.error('Invalid input. Please enter a valid short URL or short code (6-10 valid characters).');
      setError('Invalid input format or length.'); // Perjelas error state
      return;
    }
    // ============================

    setLoading(true);

    try {
      const response = await axios.get(`<span class="math-inline">\{API\_BASE\_URL\}/api/stats/</span>{shortCode}`);
      if (response.data && response.data.success) {
        setStatsResult(response.data);
      } else {
        const message = response.data.error || 'Could not retrieve stats.';
        setError(message);
        toast.error(message);
      }
    } catch (err) {
      console.error("Error fetching stats:", err);
      const message = err.response?.data?.error || 'Failed to fetch stats. Link may not exist or server error.';
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

   // Fungsi handleCopyResult (tidak berubah)
   const handleCopyResult = () => { /* ... */ };


  return (
    <motion.div /* ... */ className="w-full max-w-xl px-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Check Link Statistics
      </h1>
      {/* === DESKRIPSI DIPERBAIKI === */}
      <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-8">
        Enter the short URL (e.g., {typeof window !== 'undefined' ? window.location.origin : 'domain.com'}/abcde12) or just the code (6-10 characters) to see its click count.
      </p>
      {/* ========================= */}

      {/* Form Input (tidak berubah) */}
      <form onSubmit={handleCheckStats} className="flex items-center gap-2 mb-8">
         {/* ... input & button ... */}
            <input
              type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter Short URL or Code (6-10 chars)" required
              className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            />
            <button type="submit" disabled={loading} /* ... */>
                {/* ... icon/text ... */}
            </button>
      </form>

      {/* Area Hasil Statistik (tidak berubah) */}
      <div className="mt-6 min-h-[100px]">
        {/* ... conditional rendering loading/error/hasil ... */}
         {!loading && !error && statsResult && statsResult.success && (
             <motion.div /* ... */>
                 {/* Short URL */}
                 <div className="flex items-center justify-between border-b dark:border-gray-600 pb-3">
                     <div className='flex items-center text-sm ...'><LinkIcon ... /> Short URL</div>
                     <div className='flex items-center'>
                         <a href={`<span class="math-inline">\{typeof window \!\=\= 'undefined' ? window\.location\.origin \: 'domain\.com'\}/</span>{statsResult.shortCode}`} /* ... */>
                             {`<span class="math-inline">\{typeof window \!\=\= 'undefined' ? window\.location\.origin \: 'domain\.com'\}/</span>{statsResult.shortCode}`}
                         </a>
                         <button onClick={handleCopyResult} /* ... */>
                            {copied ? <Check ... /> : <ClipboardCopy ... />}
                         </button>
                     </div>
                 </div>
                 {/* Original URL */}
                 <div className="flex items-center justify-between border-b dark:border-gray-600 pb-3">
                     <div className='flex items-center text-sm ...'><LinkIcon ... /> Original URL</div>
                     <p className="font-medium ... break-all text-right">{statsResult.longUrl}</p>
                 </div>
                 {/* Click Count */}
                 <div className="flex items-center justify-between pt-2">
                     <div className='flex items-center text-sm ...'><Eye ... /> Total Clicks</div>
                     <p className="font-semibold text-2xl ...">{statsResult.clickCount ?? 0}</p>
                 </div>
             </motion.div>
         )}
      </div>
    </motion.div>
  );
}

export default StatsPage;
