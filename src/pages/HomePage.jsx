import React, { useState } from 'react';
import UrlForm from '../components/UrlForm'; // Sesuaikan path jika perlu
import ResultDisplay from '../components/ResultDisplay'; // Sesuaikan path jika perlu
import { motion } from 'framer-motion';
// Import ikon-ikon
import { Zap, Link2, BarChart, Smile, Lock } from 'lucide-react';

// Data dan varian animasi bisa tetap di sini atau dipindah ke file terpisah jika mau
const advantages = [
    { icon: Zap, title: "Super Cepat", description: "Proses pemendekan URL instan tanpa menunggu lama." },
    { icon: Link2, title: "Andal & Stabil", description: "Redirect yang handal memastikan link Anda selalu bisa diakses." },
    { icon: BarChart, title: "Analytics Sederhana", description: "Lacak berapa kali link Anda diklik." },
    { icon: Smile, title: "Mudah Digunakan", description: "Antarmuka yang bersih dan intuitif untuk semua orang." },
    { icon: Lock, title: "Aman", description: "Kami memastikan link Anda aman dan tidak disalahgunakan." },
    { icon: 'Custom', title: "Url Kustom", description: "Buat link pendek yang mudah diingat." }
];
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function HomePage() {
    // State dan handler sekarang berada di komponen halaman ini
    const [shortUrl, setShortUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleShorten = (url) => setShortUrl(url);
    const handleLoading = (isLoading) => setLoading(isLoading);

    return (
        <> {/* Gunakan Fragment <>...</> karena elemen induk sudah ada di Layout */}
            {/* Area Shortener Utama */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-800 dark:text-white"
            >
                Simple URL Shortener
            </motion.h1>

            <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 sm:p-6 mb-16 sm:mb-24"
            >
                {/* Pass handler ke UrlForm */}
                <UrlForm onShortenSuccess={handleShorten} onLoading={handleLoading} isLoading={loading} />
                {/* Pass state ke ResultDisplay */}
                <ResultDisplay shortUrl={shortUrl} loading={loading} />
            </motion.div>

            {/* Section Keunggulan */}
            <motion.section
                className="w-full max-w-5xl px-4" // Diberi px-4 agar konten section tidak mepet tepi di Layout
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">
                    Mengapa Memilih Shortener Kami?
                </h2>
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {advantages.map((advantage, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-lg"
                            whileHover={{ y: -5 }}
                        >
                            {advantage.icon && advantage.icon !== 'Custom' && React.createElement(advantage.icon, { className: "h-10 w-10 text-indigo-500 mb-4" })}
                            {advantage.icon === 'Custom' && <span className="text-3xl mb-4">✨</span>}
                            <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{advantage.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </>
    );
}

export default HomePage;