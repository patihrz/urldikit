import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Import komponen-komponen yang dibutuhkan
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import AdminLoginPage from './pages/AdminLoginPage';
import ReportPage from './pages/ReportPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import StatsPage from './pages/StatsPage';
import AboutPage from './pages/AboutPage';

// import NotFoundPage from './pages/NotFoundPage'; // Bisa dibuat jika mau halaman 404 custom

// Komponen Layout: Struktur umum halaman (Toaster, Konten via Outlet, Footer)
// (Kode Layout ini sama seperti sebelumnya, tidak ada perubahan)
function Layout() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-x-hidden">
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />

      <main className="flex-grow w-full flex flex-col items-center p-4 pt-16 sm:pt-24">
        <Outlet /> {/* Komponen Halaman (HomePage, ReportPage, dll.) akan dirender di sini */}
      </main>

      <footer className="w-full max-w-5xl mx-auto text-center mt-auto mb-8 px-4">
        <div className="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
          <a href="/report" className="hover:text-gray-800 dark:hover:text-white hover:underline transition-colors duration-200">Report Malicious URL</a>
          <span className="opacity-50 select-none" aria-hidden="true">|</span>
          <a href="/terms" className="hover:text-gray-800 dark:hover:text-white hover:underline transition-colors duration-200">Terms of Service</a>
          <span className="opacity-50 select-none" aria-hidden="true">|</span>
          <a href="/privacy" className="hover:text-gray-800 dark:hover:text-white hover:underline transition-colors duration-200">Privacy Policy</a>
          <span className="opacity-50 select-none" aria-hidden="true">|</span>
          <a href="/contact" className="hover:text-gray-800 dark:hover:text-white hover:underline transition-colors duration-200">Contact</a>
        </div>
        <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
          &copy; {new Date().getFullYear()} urlDikit. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

// Komponen App utama: Mengatur Rute menggunakan komponen asli
function App() {
  return (
    <Routes>
      {/* Rute Induk menggunakan Layout */}
      <Route path="/" element={<Layout />}>
      <Route path="terms" element={<TermsPage />} />
      <Route path="privacy" element={<PrivacyPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="stats" element={<StatsPage />} />
      <Route path="about" element={<AboutPage />} />
        {/* Rute Anak (dirender di dalam <Outlet> Layout) */}
        <Route index element={<HomePage />} /> {/* Halaman utama */}
        <Route path="report" element={<ReportPage />} /> {/* Halaman report */}
        <Route path="admin/login" element={<AdminLoginPage />} /> {/* Halaman login admin */}

        {/* Halaman Admin Dashboard (dilindungi) */}
        <Route
          path="admin"
          element={
            <ProtectedRoute>
              <AdminDashboardPage />
            </ProtectedRoute>
          }
        />

        {/* Halaman Not Found (404) */}
        <Route path="*" element={
            <div className='text-center py-10'>
                <h1 className='text-4xl font-bold text-red-500 mb-4'>404</h1>
                <p className='text-xl text-gray-700 dark:text-gray-300'>Oops! Halaman Tidak Ditemukan.</p>
                <a href="/" className="mt-6 inline-block text-indigo-600 dark:text-indigo-400 hover:underline">
                    Kembali ke Halaman Utama
                </a>
            </div>
          }
        />

      </Route> {/* Penutup Rute Induk '/' */}
    </Routes>
  );
}

export default App;