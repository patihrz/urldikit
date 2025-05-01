import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { LogIn, Loader2, User, KeyRound } from 'lucide-react'; // Import ikon

// Base URL Backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

function AdminLoginPage() {
  // State untuk input form
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // State untuk status loading tombol submit
  const [loading, setLoading] = useState(false);
  // Panggil hook useNavigate
  const navigate = useNavigate();

  // Fungsi yang dijalankan saat form di-submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload halaman

    // Validasi frontend dasar
    if (!username.trim() || !password.trim()) {
      toast.error('Please enter both username and password.');
      return;
    }

    setLoading(true); // Aktifkan status loading

    try {
      // Kirim request POST ke endpoint login backend
      const response = await axios.post(`${API_BASE_URL}/api/admin/login`, {
        username: username.trim(),
        password: password
      });

      // Cek jika response dari backend sukses
      if (response.data.success) {
        toast.success(response.data.message || 'Login Successful!');
        console.log('ADMIN LOGIN SUCCESSFUL - Storing status & Redirecting...');

        // Simpan status login ke localStorage
        localStorage.setItem('isAdminLoggedIn', 'true');

        // Redirect ke halaman dashboard admin
        navigate('/admin');

      }
      // Error (seperti 401 Invalid credentials) akan ditangani di catch

    } catch (err) {
      // Tangani error dari request
      console.error("Login error:", err);
      const message = err.response?.data?.error || 'Login failed. Please try again.';
      toast.error(message);
    } finally {
      // Selalu matikan status loading
      setLoading(false);
    }
  };

  return (
    // Container utama halaman login
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-xs sm:max-w-sm px-4"
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Admin Login
      </h1>
      {/* Form Login */}
      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
      >
        {/* Input Username */}
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Username
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-gray-500">
                <User className="h-5 w-5" />
            </span>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white dark:bg-gray-700 dark:text-white"
              placeholder="Enter username"
            />
          </div>
        </div>

        {/* Input Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Password
          </label>
           <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-gray-500">
                <KeyRound className="h-5 w-5" />
            </span>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white dark:bg-gray-700 dark:text-white"
              placeholder="Enter password"
            />
          </div>
        </div>

        {/* Tombol Submit */}
        <div className="pt-2">
            <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.05 }}
                whileTap={{ scale: loading ? 1 : 0.95 }}
                className={`w-full flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-4 rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                >
                {loading ? (
                    <> <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Logging In... </>
                ) : (
                    <> <LogIn className="mr-2 h-5 w-5" /> Login </>
                )}
            </motion.button>
        </div>
      </form>
    </motion.div>
  );
}

export default AdminLoginPage;