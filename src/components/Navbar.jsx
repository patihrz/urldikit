import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Hanya perlu Link
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X /*, BarChart*/ } from 'lucide-react'; // Ikon dasar navbar

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Varian animasi mobile menu (tidak berubah)
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
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Link Home */}
              <Link to="/" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" onClick={closeMenu}>
                Home
              </Link>

              {/* Link Stats (Path Diperbarui) */}
              <Link
                to="/pages/stats" // <-- PERUBAHAN PATH
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={closeMenu}
              >
                 Stats
              </Link>

               {/* Link About (Path Diperbarui) */}
              <Link
                to="/pages/about" // <-- PERUBAHAN PATH
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={closeMenu}
              >
                 About
              </Link>

              <Link
                to="/pages/partnership"
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={closeMenu}
              >
                 Partnership
              </Link>
            </div>
          </div>

          {/* Tombol Menu Mobile */}
          <div className="-mr-2 flex md:hidden">
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
              {/* Link Home Mobile */}
              <Link to="/" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={closeMenu}> Home </Link>

              {/* Link Stats Mobile (Path Diperbarui) */}
              <Link
                to="/pages/stats" // <-- PERUBAHAN PATH
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                 Stats
              </Link>

              {/* Link About Mobile (Path Diperbarui) */}
              <Link
                to="/pages/about" // <-- PERUBAHAN PATH
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                 About
              </Link>

              <Link
                to="/pages/partnership"
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                 Partnership
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;