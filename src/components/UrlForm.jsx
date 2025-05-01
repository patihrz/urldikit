import React, { useState } from 'react';
import axios from 'axios';
// Import ikon Link DAN AtSign untuk alias
import { Link, AtSign, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

// Base URL Backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// Komponen menerima props (pastikan onError tidak diperlukan/dihapus di App.jsx jika error via toast semua)
function UrlForm({ onShortenSuccess, onLoading, isLoading }) {
  const [longUrl, setLongUrl] = useState('');
  const [customAlias, setCustomAlias] = useState(''); // <-- State untuk alias

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi longUrl
    if (!longUrl.trim()) {
      toast.error('Please enter a URL to shorten.');
      return;
    }
    if (!longUrl.startsWith('http://') && !longUrl.startsWith('https://')) {
      toast.error('Please enter a valid URL starting with http:// or https://');
      return;
    }

    // Validasi format customAlias (jika diisi)
    const trimmedAlias = customAlias.trim();
    // Regex: 3-30 karakter, hanya huruf, angka, underscore, dash
    if (trimmedAlias && !/^[a-zA-Z0-9_-]{3,30}$/.test(trimmedAlias)) {
        toast.error('Invalid custom alias format. Use 3-30 alphanumeric characters, underscores, or dashes.');
        return;
    }

    onLoading(true);

    // Siapkan payload, tambahkan customAlias HANYA jika ada isinya
    const payload = { longUrl: longUrl.trim() };
    if (trimmedAlias) {
      payload.customAlias = trimmedAlias;
    }

    console.log("Sending payload to backend:", payload); // Log payload yang dikirim
    console.log("API Endpoint:", `${API_BASE_URL}/api/shorten`);

    try {
      // Kirim payload (bisa berisi longUrl saja atau longUrl + customAlias)
      const response = await axios.post(`${API_BASE_URL}/api/shorten`, payload);
      console.log("Backend response:", response.data);

      onShortenSuccess(response.data.shortUrl); // Kirim hasil ke parent

      // Kosongkan kedua input setelah sukses
      setLongUrl('');
      setCustomAlias('');

      // Tampilkan pesan sukses dari backend jika ada, atau default
      toast.success(response.data.message || 'URL shortened successfully!');

    } catch (err) {
      console.error("API Error:", err);
      const message = err.response?.data?.error || 'Failed to shorten URL.';
      toast.error(message); // Tampilkan error dari backend/default
    } finally {
      onLoading(false); // Selalu matikan loading
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Input Long URL */}
      <div>
        <label htmlFor="longUrlInput" className="sr-only">Long URL</label>
        <div className="relative flex items-center">
          <span className="absolute left-3 text-gray-400 dark:text-gray-500 pointer-events-none">
            <Link className="h-5 w-5" />
          </span>
          <input
            type="url"
            id="longUrlInput"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="Enter long URL (e.g., https://...)"
            required
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          />
        </div>
      </div>

      {/* Input Custom Alias (Opsional) */}
      <div>
        <label htmlFor="customAliasInput" className="sr-only">Custom Alias (Optional)</label>
        <div className="relative flex items-center">
           <span className="absolute left-3 text-gray-400 dark:text-gray-500 pointer-events-none">
              <AtSign className="h-5 w-5" /> {/* Ikon @ */}
            </span>
        <input
          type="text"
          id="customAliasInput"
          value={customAlias}
          onChange={(e) => setCustomAlias(e.target.value)}
          // === PERUBAHAN DI SINI ===
          placeholder="Custom alias (optional, 6-10 chars)" // Update placeholder
          pattern="^[a-zA-Z0-9_\-]{6,10}$" // Update panjang {6,10} dan escape hyphen
          title="Use 6-10 alphanumeric characters, underscores, or dashes." // Update tooltip
          // ==========================
          className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 text-sm"
        />
        </div>
      </div>

      {/* Tombol Submit */}
      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: isLoading ? 1 : 1.05 }}
        whileTap={{ scale: isLoading ? 1 : 0.95 }}
        className={`w-full flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
          isLoading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isLoading ? (
          <> <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Shortening... </>
        ) : (
          'Shorten URL'
        )}
      </motion.button>
    </form>
  );
}

export default UrlForm;