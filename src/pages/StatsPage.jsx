import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
// Import ikon yang relevan
import { Search, Loader2, AlertCircle, Link as LinkIcon, Eye, ClipboardCopy, Check } from 'lucide-react';

// Base URL Backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

function StatsPage() {
  const [inputValue, setInputValue] = useState(''); // State untuk input user
  const [statsResult, setStatsResult] = useState(null); // State untuk hasil statistik
  const [loading, setLoading] = useState(false); // State loading pencarian
  const [error, setError] = useState(null); // State untuk pesan error
  const [copied, setCopied] = useState(false); // State untuk tombol copy

  // Fungsi untuk mengekstrak short code dari input
  const extractShortCode = (input) => {
    if (!input) return null;
    try {
      // Coba parse sebagai URL lengkap
      const url = new URL(input);
      // Ambil bagian terakhir dari path
      const pathParts = url.pathname.split('/');
      const potentialCode = pathParts[pathParts.length - 1];
      // Validasi sederhana format kode (sesuaikan panjang jika perlu)
      if (potentialCode && potentialCode.length === 7) {
        return potentialCode;
      }
    } catch (_) {
      // Jika bukan URL valid, anggap input adalah short code itu sendiri
      // Validasi sederhana format kode
      if (input.length === 7 && /^[a-zA-Z0-9_-]+$/.test(input)) { // Contoh: alphanumeric, underscore, dash
         return input;
      }
    }
    // Jika tidak ada yang cocok
    return null;
  };

  // Fungsi yang dijalankan saat form disubmit
  const handleCheckStats = async (e) => {
    e.preventDefault();
    setError(null); // Reset error
    setStatsResult(null); // Reset hasil sebelumnya
    setCopied(false); // Reset status copy

    const shortCode = extractShortCode(inputValue);

    if (!shortCode) {
      toast.error('Invalid input. Please enter a valid short URL or short code (7 characters).');
      setError('Invalid input format.'); // Set error state juga
      return;
    }

    setLoading(true); // Mulai loading

    try {
      const response = await axios.get(`${API_BASE_URL}/api/stats/${shortCode}`);

      if (response.data && response.data.success) {
        setStatsResult(response.data); // Simpan hasil ke state
      } else {
        // Jika backend mengembalikan success: false (meski status 200)
        setError(response.data.error || 'Could not retrieve stats.');
        toast.error(response.data.error || 'Could not retrieve stats.');
      }
    } catch (err) {
      console.error("Error fetching stats:", err);
      const message = err.response?.data?.error || 'Failed to fetch stats. Link may not exist or server error.';
      setError(message); // Simpan error ke state
      toast.error(message); // Tampilkan toast error
    } finally {
      setLoading(false); // Hentikan loading
    }
  };

   // Fungsi copy short URL dari hasil
   const handleCopyResult = () => {
       const shortUrlToCopy = `${window.location.origin}/${statsResult?.shortCode}`; // Buat URL lengkap
       if (!shortUrlToCopy || !statsResult?.success) return;
       navigator.clipboard.writeText(shortUrlToCopy)
           .then(() => {
               setCopied(true);
               setTimeout(() => setCopied(false), 2000);
           })
           .catch(err => {
               console.error('Failed to copy result URL: ', err);
               toast.error('Failed to copy URL.');
           });
   };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-xl px-4" // Lebar container
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Check Link Statistics
      </h1>
      <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-8">
        Enter the short URL (e.g., {window.location.origin}/abcde) or just the code (abcde) to see its click count.
      </p>

      {/* Form Input */}
      <form onSubmit={handleCheckStats} className="flex items-center gap-2 mb-8">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter Short URL or Code"
          required
          className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
        />
        <button
          type="submit"
          disabled={loading}
          className={`flex items-center justify-center px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Search className="h-5 w-5" />
          )}
          <span className="ml-2 hidden sm:inline">Check</span>
        </button>
      </form>

      {/* Area Hasil Statistik */}
      <div className="mt-6 min-h-[100px]"> {/* Beri tinggi minimum */}
        {/* Tampilan Loading */}
        {loading && (
          <div className="flex justify-center items-center py-10">
            <Loader2 className="h-6 w-6 animate-spin text-indigo-500" />
            <p className="ml-3 text-gray-500 dark:text-gray-400">Checking stats...</p>
          </div>
        )}

        {/* Tampilan Error */}
        {!loading && error && (
           <div className="flex flex-col sm:flex-row justify-center items-center py-10 text-red-500 bg-red-50 dark:bg-red-900/20 p-4 rounded border border-red-300 dark:border-red-700">
              <AlertCircle className="h-8 w-8 mb-2 sm:mb-0 sm:mr-3 flex-shrink-0" />
              <div><p className='font-semibold text-center sm:text-left'>Error!</p><p className='text-sm text-center sm:text-left'>{error}</p></div>
           </div>
        )}

        {/* Tampilan Hasil Sukses */}
        {!loading && !error && statsResult && statsResult.success && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 space-y-4"
          >
             {/* Short URL */}
             <div className="flex items-center justify-between border-b dark:border-gray-600 pb-3">
                 <div className='flex items-center text-sm text-gray-500 dark:text-gray-400'>
                    <LinkIcon className="h-4 w-4 mr-2" /> Short URL
                 </div>
                 <div className='flex items-center'>
                    <a
                      href={`${window.location.origin}/${statsResult.shortCode}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline break-all"
                    >
                      {`${window.location.origin}/${statsResult.shortCode}`}
                    </a>
                     <button onClick={handleCopyResult} className="ml-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" aria-label="Copy Short URL">
                       {copied ? <Check size={16} className="text-green-500"/> : <ClipboardCopy size={16} />}
                     </button>
                 </div>
             </div>
             {/* Original URL */}
             <div className="flex items-center justify-between border-b dark:border-gray-600 pb-3">
                 <div className='flex items-center text-sm text-gray-500 dark:text-gray-400'>
                    <LinkIcon className="h-4 w-4 mr-2" /> Original URL
                 </div>
                 <p className="font-medium text-gray-800 dark:text-gray-200 break-all text-right">{statsResult.longUrl}</p>
             </div>
             {/* Click Count */}
             <div className="flex items-center justify-between pt-2">
                 <div className='flex items-center text-sm text-gray-500 dark:text-gray-400'>
                    <Eye className="h-4 w-4 mr-2" /> Total Clicks
                 </div>
                 <p className="font-semibold text-2xl text-indigo-600 dark:text-indigo-400">{statsResult.clickCount ?? 0}</p>
             </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default StatsPage;