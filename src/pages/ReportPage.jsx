import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
// Ganti ikon Send dengan Mail atau ikon lain jika lebih cocok untuk "Submit Report"
import { AlertTriangle, Send, Loader2, Mail } from 'lucide-react';

// Base URL Backend (tetap sama)
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

function ReportPage() {
  const [reportedUrl, setReportedUrl] = useState('');
  const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!reportedUrl.trim()) {
      toast.error('Please enter the Short URL you want to report.');
      return;
    }
    setLoading(true);
    const payload = {
      reportedUrl: reportedUrl.trim(),
      reason: reason.trim()
    };
    try {
      const response = await axios.post(`${API_BASE_URL}/api/report`, payload);
      toast.success(response.data?.message || 'Report submitted successfully. Thank you!');
      setReportedUrl('');
      setReason('');
    } catch (err) {
      console.error("Error submitting report:", err);
      toast.error(err.response?.data?.error || 'Failed to submit report. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    // Wrapper utama halaman
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // Dibuat w-full agar padding dari Layout bekerja, konten dibatasi lebarnya di bawah
      className="w-full flex flex-col items-center px-4"
    >
      {/* Judul Halaman */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">
        <AlertTriangle className="inline-block h-7 w-7 mr-2 mb-1 text-orange-500" /> Report Malicious URL
      </h1>

      {/* Deskripsi */}
      <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
        Jika Anda menemukan URL pendek dari layanan kami yang mengarah ke konten berbahaya, phishing, malware, atau melanggar ketentuan layanan, silakan laporkan di bawah ini. Kami akan meninjaunya sesegera mungkin.
      </p>

      {/* === TAMBAHAN: Card Pembungkus Form === */}
      <div className="w-full max-w-xl bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
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
              placeholder={`e.g., ${typeof window !== 'undefined' ? window.location.origin : 'domain.com'}/abcde`} // Lebih dinamis
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
          <div className="pt-2"> {/* Beri jarak atas */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.05 }}
                whileTap={{ scale: loading ? 1 : 0.95 }}
                 // === PERUBAHAN WARNA TOMBOL (ke Indigo) ===
                className={`w-full flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-4 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                // ==========================================
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? (
                  <> <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending Report... </>
                ) : (
                  // Ganti ikon Send dengan Mail atau lainnya jika mau
                  <> <Send className="mr-2 h-5 w-5" /> Submit Report </>
                  // <> <Mail className="mr-2 h-5 w-5" /> Submit Report </>
                )}
              </motion.button>
          </div>
        </form>
      </div>
      {/* === AKHIR Card Pembungkus Form === */}

    </motion.div>
  );
}

export default ReportPage;
