import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Import komponen-komponen yang dibutuhkan
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar'; // Pastikan Navbar diimpor
import HomePage from './pages/HomePage';
import AdminLoginPage from './pages/AdminLoginPage';
import ReportPage from './pages/ReportPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import ContactPage from './pages/ContactPage';
import StatsPage from './pages/StatsPage';
import AboutPage from './pages/AboutPage';
// import NotFoundPage from './pages/NotFoundPage';

// Komponen Layout: Struktur umum halaman
function Layout() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-x-hidden">
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />
      <main className="flex-grow w-full flex flex-col items-center p-4 pt-20 sm:pt-24"> {/* Pastikan padding atas sesuai tinggi Navbar */}
        <Outlet />
      </main>
      <footer className="w-full max-w-5xl mx-auto text-center mt-auto mb-8 px-4">
        <div className="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
          {/* Link Footer dengan prefix /pages/ */}
          <a href="/pages/report" className="hover:text-gray-800 dark:hover:text-white hover:underline transition-colors duration-200">Report Malicious URL</a> <span className="opacity-50 select-none" aria-hidden="true">|</span>
          <a href="/pages/terms" className="hover:text-gray-800 dark:hover:text-white hover:underline transition-colors duration-200">Terms of Service</a> <span className="opacity-50 select-none" aria-hidden="true">|</span>
          <a href="/pages/privacy" className="hover:text-gray-800 dark:hover:text-white hover:underline transition-colors duration-200">Privacy Policy</a> <span className="opacity-50 select-none" aria-hidden="true">|</span>
          <a href="/pages/contact" className="hover:text-gray-800 dark:hover:text-white hover:underline transition-colors duration-200">Contact</a> <span className="opacity-50 select-none" aria-hidden="true">|</span>
          <a href="/pages/stats" className="hover:text-gray-800 dark:hover:text-white hover:underline transition-colors duration-200">Check Stats</a> <span className="opacity-50 select-none" aria-hidden="true">|</span>
          <a href="/pages/about" className="hover:text-gray-800 dark:hover:text-white hover:underline transition-colors duration-200">About</a>
        </div>
        <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
          &copy; {new Date().getFullYear()} urlDikit. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

// Komponen App utama: Mengatur Rute dengan struktur /pages/
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}> {/* Rute Induk */}
        {/* Rute Anak */}
        <Route index element={<HomePage />} /> {/* path: / */}
        {/* Halaman SPA di bawah /pages/ */}
        <Route path="pages/report" element={<ReportPage />} />
        <Route path="pages/terms" element={<TermsPage />} />
        <Route path="pages/privacy" element={<PrivacyPage />} />
        <Route path="pages/contact" element={<ContactPage />} />
        <Route path="pages/stats" element={<StatsPage />} />
        <Route path="pages/about" element={<AboutPage />} />
        {/* Rute Admin */}
        <Route path="admin/login" element={<AdminLoginPage />} />
        <Route path="admin" element={ <ProtectedRoute><AdminDashboardPage /></ProtectedRoute> } />
        {/* Halaman Not Found */}
        <Route path="*" element={ <div className='text-center py-10'><h1 className='text-4xl font-bold text-red-500 mb-4'>404</h1><p className='text-xl text-gray-700 dark:text-gray-300'>Oops! Halaman Tidak Ditemukan.</p><a href="/" className="mt-6 inline-block text-indigo-600 dark:text-indigo-400 hover:underline">Kembali ke Halaman Utama</a></div> } />
      </Route>
    </Routes>
  );
}

export default App;