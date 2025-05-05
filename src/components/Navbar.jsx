// src/components/Navbar.jsx (Resolved Conflict)

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
// Impor ikon yang diperlukan
import { Menu, X, Gift } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Varian animasi mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16"> {/* Sesuaikan h-16 jika perlu */}

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group" onClick={closeMenu}>
              <img
                className="h-10 w-auto" // Sesuaikan ukuran logo Anda
                src="/assets/logo.png" // Sesuaikan nama file logo Anda
                alt="urlDikit Logo"
              />
            </Link>
          </div>

          {/* Navigasi Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4"> {/* items-center agar tombol sejajar */}
              {/* Link Halaman Biasa */}
              <Link to="/" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" onClick={closeMenu}>Home</Link>
              <Link to="/pages/stats" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" onClick={closeMenu}>Stats</Link>
              <Link to="/pages/about" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" onClick={closeMenu}>About</Link>
              <Link to="/pages/how-to-use" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" onClick={closeMenu}>How to Use</Link>
              <Link to="/pages/partnership" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" onClick={closeMenu}>Partnership</Link>

              {/* Tombol Donasi (Versi Ungu/Indigo) */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/pages/donation"
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-700 hover:from-purple-700 hover:via-indigo-700 hover:to-indigo-800 text-white text-xs font-bold px-4 py-1.5 rounded-full transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 shadow-sm hover:shadow-lg"
                  onClick={closeMenu}
                >
                  <Gift size={14} className="mr-1.5" />
                  Support Us!
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Tombol Menu Mobile */}
          <div className="-mr-2 flex md:hidden">
             {/* Mengambil versi button yang lebih lengkap atributnya */}
             <button onClick={toggleMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded={isOpen}>
               <span className="sr-only">Buka menu utama</span>
               {isOpen ? (<X className="block h-6 w-6" aria-hidden="true" />) : (<Menu className="block h-6 w-6" aria-hidden="true" />)}
             </button>
          </div>

        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div id="mobile-menu" className="md:hidden border-t border-gray-200 dark:border-gray-700" initial="hidden" animate="visible" exit="exit" variants={menuVariants}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* Link Halaman Biasa Mobile */}
              <Link to="/" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={closeMenu}> Home </Link>
              <Link to="/pages/stats" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={closeMenu}> Stats </Link>
              <Link to="/pages/about" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={closeMenu}> About </Link>
              <Link to="/pages/how-to-use" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={closeMenu}> How to Use </Link>
              <Link to="/pages/partnership" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={closeMenu}> Partnership </Link>

              {/* Tombol Donasi Mobile (Versi Ungu/Indigo) */}
              <div className="pt-2">
                  <Link
                    to="/pages/donation"
                    className="flex items-center justify-center w-full px-3 py-2 rounded-md text-base font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-700 text-white text-center shadow-sm hover:shadow-md"
                    onClick={closeMenu}
                  >
                    <Gift size={16} className="inline-block mr-1.5" />
                    Support Us!
                  </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;