import React, { useState, useEffect } from 'react';
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

  // Fungsi extractShortCode (Tidak berubah)
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

  // Fungsi handleCheckStats (Tidak berubah)
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
      const response = await axios.get(`${API_BASE_URL}/api/stats/${shortCode}`);
      if (response.data && response.data.success) { setStatsResult(response.data); }
      else { const message = response.data.error || 'Could not retrieve stats.'; setError(message); toast.error(message); }
    } catch (err) {
      console.error("Error fetching stats:", err);
      const message = err.response?.data?.error || 'Failed to fetch stats.'; setError(message); toast.error(message);
    } finally { setLoading(false); }
  };

   // Fungsi handleCopyResult (Perbaiki URL yg dicopy)
   const handleCopyResult = () => {
       // === PERBAIKAN: Gunakan path relatif untuk URL yg dicopy ===
       const shortUrlToCopy = `${window.location.origin}/${statsResult?.shortCode}`; // Tetap pakai window.location.origin di sini karena ini JALAN DI BROWSER user
       // ========================================================
       if (!shortUrlToCopy || !statsResult?.success) return;
       navigator.clipboard.writeText(shortUrlToCopy) /* ... .then .catch ... */;
   };

  return (
    <motion.div /* ... */ className="w-full max-w-xl px-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 ..."> Check Link Statistics </h1>
      {/* === PERBAIKAN: Hapus window.location.origin dari deskripsi === */}
      <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-8">
        Enter the short URL (e.g., /abcde12) or just the code (6-10 characters) to see its click count.
      </p>
      {/* =========================================================== */}

      {/* Form Input */}
      <form onSubmit={handleCheckStats} className="flex items-center gap-2 mb-8">
        <input
          type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
          // === PERBAIKAN: Hapus window.location.origin dari placeholder ===
          placeholder="Enter Short URL or Code (e.g., /abcde12)" required
          // ============================================================
          className="flex-grow px-4 py-2 border ..."
        />
        <button type="submit" disabled={loading} /* ... */ > {/* ... Tombol Check ... */} </button>
      </form>

      {/* Area Hasil Statistik */}
      <div className="mt-6 min-h-[100px]">
        {/* ... Loading / Error / No Result ... */}
        {!loading && !error && statsResult && statsResult.success && (
          <motion.div /* ... */ className="bg-white dark:bg-gray-800 p-6 rounded-lg ...">
             {/* Short URL */}
             <div className="flex items-center justify-between border-b dark:border-gray-600 pb-3">
                 <div className='flex items-center text-sm ...'><LinkIcon ... /> Short URL</div>
                 <div className='flex items-center'>
                     {/* === PERBAIKAN: Gunakan path relatif untuk link === */}
                     <a
                       href={`/${statsResult.shortCode}`} // <-- Gunakan path relatif
                       target="_blank"
                       rel="noopener noreferrer"
                       className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline break-all"
                     >
                       {/* Tampilkan path relatif juga */}
                       {`/${statsResult.shortCode}`}
                     </a>
                     {/* =========================================== */}
                     <button onClick={handleCopyResult} /* ... */> {/* Tombol Copy */} </button>
                 </div>
             </div>
             {/* Original URL (Tidak berubah) */}
             <div className="flex items-center justify-between border-b dark:border-gray-600 pb-3">
                {/* ... */} <p className="font-medium ...">{statsResult.longUrl}</p>
             </div>
             {/* Click Count (Tidak berubah) */}
             <div className="flex items-center justify-between pt-2">
                 {/* ... */} <p className="font-semibold text-2xl ...">{statsResult.clickCount ?? 0}</p>
             </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default StatsPage;
