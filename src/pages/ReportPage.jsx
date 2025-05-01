import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { AlertTriangle, Send, Loader2 } from 'lucide-react';

// Ambil base URL backend dari environment variable atau default
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

function ReportPage() {
  const [reportedUrl, setReportedUrl] = useState(''); // State untuk input URL pendek
  const [reason, setReason] = useState(''); // State untuk input alasan
  const [loading, setLoading] = useState(false); // State untuk status loading submit

  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah submit form HTML biasa

    // Validasi frontend sederhana
    if (!reportedUrl.trim()) {
      toast.error('Please enter the Short URL you want to report.');
      return;
    }
    // Anda bisa tambahkan validasi format URL pendek di sini jika perlu
    // (misal: harus mengandung base URL aplikasi Anda)

    setLoading(true); // Mulai loading

    const payload = {
      reportedUrl: reportedUrl.trim(),
      reason: reason.trim()
    };

    try {
      // Kirim data ke backend (endpoint /api/report akan kita buat nanti)
      const response = await axios.post(`${API_BASE_URL}/api/report`, payload);

      toast.success(response.data?.message || 'Report submitted successfully. Thank you!'); // Tampilkan pesan sukses
      // Kosongkan form setelah sukses
      setReportedUrl('');
      setReason('');

    } catch (err) {
      console.error("Error submitting report:", err);
      // Tampilkan pesan error dari backend atau pesan default
      toast.error(err.response?.data?.error || 'Failed to submit report. Please try again later.');
    } finally {
      setLoading(false); // Hentikan loading
    }
  };

  return (
    // Gunakan motion.div untuk animasi masuk halaman (opsional)
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-xl px-4" // Batasi lebar container form
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        <AlertTriangle className="inline-block h-7 w-7 mr-2 mb-1 text-orange-500" /> Report Malicious URL
      </h1>

      <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-8">
        Jika Anda menemukan URL pendek dari layanan kami yang mengarah ke konten berbahaya, phishing, malware, atau melanggar ketentuan layanan, silakan laporkan di bawah ini. Kami akan meninjaunya sesegera mungkin.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Input URL Pendek */}
        <div>
          <label htmlFor="reportedUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Short URL to Report <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="reportedUrl"
            value={reportedUrl}
            onChange={(e) => setReportedUrl(e.target.value)}
            required
            placeholder={`e.g., ${window.location.origin}/abcdefg`} // Contoh URL pendek
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          />
        </div>

        {/* Textarea Alasan */}
        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Reason for Reporting (Optional)
          </label>
          <textarea
            id="reason"
            rows="4"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Jelaskan mengapa URL ini berbahaya atau melanggar ketentuan..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          />
        </div>

        {/* Tombol Submit */}
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: loading ? 1 : 1.05 }}
          whileTap={{ scale: loading ? 1 : 0.95 }}
          className={`w-full flex justify-center items-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 px-4 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending Report...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" /> Submit Report
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
}

export default ReportPage;