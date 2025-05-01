import React, { useState, useEffect, useMemo } from 'react'; // Import useMemo untuk sortir
import { motion } from 'framer-motion';
// Import ikon sortir dan ikon lainnya
import { LogOut, Loader2, AlertCircle, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

// Base URL Backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

function AdminDashboardPage() {
  const navigate = useNavigate();
  const [reports, setReports] = useState([]);
  const [reportsLoading, setReportsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // State untuk konfigurasi sortir
  const [sortConfig, setSortConfig] = useState({
    key: 'report_timestamp', // Default sort key
    direction: 'descending' // Default direction
  });

  // useEffect untuk fetch data
  useEffect(() => {
    const fetchReports = async () => {
      setReportsLoading(true);
      setFetchError(null);
      console.log("Fetching reports from:", `${API_BASE_URL}/api/admin/reports`);
      try {
        const response = await axios.get(`${API_BASE_URL}/api/admin/reports`);
        console.log("Reports data received:", response.data);
        if (response.data && Array.isArray(response.data.reports)) {
           setReports(response.data.reports);
        } else {
           console.error("Invalid data structure received:", response.data);
           setFetchError("Received invalid data structure from server.");
           setReports([]);
        }
      } catch (err) {
        console.error("Error fetching reports:", err);
        const message = err.response?.data?.error || 'Failed to fetch reports.';
        setFetchError(message);
      } finally {
        setReportsLoading(false);
      }
    };
    fetchReports();
  }, [refreshTrigger]); // Re-fetch saat refreshTrigger berubah

  // Fungsi Logout
  const handleLogout = () => {
    console.log('Logging out...');
    localStorage.removeItem('isAdminLoggedIn');
    toast.success('You have been logged out.');
    navigate('/admin/login');
  };

  // Fungsi Delete (belum implementasi API call, baru konfirmasi + trigger refresh)
  const handleDeleteLink = async (shortCode) => {
    if (!shortCode) {
      toast.error("Cannot delete link: Invalid Short Code provided.");
      return;
    }
    if (window.confirm(`Are you sure you want to permanently delete the link associated with short code "${shortCode}"? This action cannot be undone.`)) {
      console.log(`Attempting to delete link via API: ${shortCode}`);
      try {
        const response = await axios.delete(`${API_BASE_URL}/api/admin/links/${shortCode}`);
        toast.success(response.data?.message || `Link ${shortCode} deleted successfully!`);
        setRefreshTrigger(prev => prev + 1); // Trigger re-fetch
      } catch (err) {
        console.error(`Error deleting link ${shortCode}:`, err);
        const message = err.response?.data?.error || 'Failed to delete link.';
        toast.error(message);
      }
    } else {
      console.log(`Deletion cancelled for short code: ${shortCode}`);
    }
  };

  // Fungsi untuk menangani klik sortir header
  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Mengurutkan data menggunakan useMemo
  const sortedReports = useMemo(() => {
    let sortableItems = [...reports];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        const aValue = a[sortConfig.key] ?? '';
        const bValue = b[sortConfig.key] ?? '';
        let comparison = 0;

        if (sortConfig.key === 'report_timestamp') {
          comparison = new Date(aValue) - new Date(bValue);
        } else if (typeof aValue === 'string' && typeof bValue === 'string') {
          comparison = aValue.localeCompare(bValue, undefined, { sensitivity: 'base' });
        } else {
          if (aValue < bValue) comparison = -1;
          if (aValue > bValue) comparison = 1;
        }
        return sortConfig.direction === 'ascending' ? comparison : comparison * -1;
      });
    }
    return sortableItems;
  }, [reports, sortConfig]);

  return (
    // Container utama halaman dashboard
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // Responsif: max-w-6xl membatasi lebar di layar besar, px-4 memberi padding samping
      className="w-full max-w-6xl px-4"
    >
      {/* Header Dashboard */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
          Admin Dashboard
        </h1>
        <button
          onClick={handleLogout}
          className="flex items-center bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out w-full sm:w-auto" // Full width di mobile
        >
          <LogOut className="h-4 w-4 mr-2"/> Logout
        </button>
      </div>

      {/* Kontainer untuk Tabel Laporan */}
      <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 mt-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
          Reported URLs
        </h2>

        {/* Tampilan Loading, Error, atau Kosong (Sudah responsif) */}
        {reportsLoading && ( <div className="flex justify-center items-center py-10"> <Loader2 className="h-8 w-8 animate-spin text-indigo-500" /> <p className="ml-3 text-gray-500 dark:text-gray-400">Loading reports...</p> </div> )}
        {!reportsLoading && fetchError && ( <div className="flex flex-col sm:flex-row justify-center items-center py-10 text-red-500 bg-red-50 dark:bg-red-900/20 p-4 rounded border border-red-300 dark:border-red-700"> <AlertCircle className="h-8 w-8 mb-2 sm:mb-0 sm:mr-3 flex-shrink-0" /> <div><p className='font-semibold text-center sm:text-left'>Error loading reports!</p><p className='text-sm text-center sm:text-left'>{fetchError}</p></div> </div> )}
        {!reportsLoading && !fetchError && reports.length === 0 && ( <div className="text-center py-10"> <p className="text-gray-500 dark:text-gray-400">No reports found to display.</p> </div> )}

        {/* Tabel Laporan */}
        {!reportsLoading && !fetchError && reports.length > 0 && (
          // Responsif: overflow-x-auto membuat tabel bisa discroll horizontal di layar kecil
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-300">
                <tr>
                  <th scope="col" className="py-3 px-4 sm:px-6">ID</th>
                  <th scope="col" className="py-3 px-4 sm:px-6">Reported URL</th>
                  <th scope="col" className="py-3 px-4 sm:px-6">Reason</th>
                  {/* Header Timestamp Sortable */}
                  <th scope="col" className="py-3 px-4 sm:px-6">
                    <button onClick={() => handleSort('report_timestamp')} className="flex items-center hover:text-gray-900 dark:hover:text-white focus:outline-none group">
                      Timestamp
                      <span className="ml-1.5 opacity-25 group-hover:opacity-100"> {/* Ikon sortir */}
                         {sortConfig.key === 'report_timestamp' ? (sortConfig.direction === 'ascending' ? <ArrowUp size={14} /> : <ArrowDown size={14} />) : <ArrowUpDown size={14} />}
                      </span>
                    </button>
                  </th>
                  {/* Header Status Sortable */}
                  <th scope="col" className="py-3 px-4 sm:px-6">
                     <button onClick={() => handleSort('status')} className="flex items-center hover:text-gray-900 dark:hover:text-white focus:outline-none group">
                       Status
                       <span className="ml-1.5 opacity-25 group-hover:opacity-100"> {/* Ikon sortir */}
                         {sortConfig.key === 'status' ? (sortConfig.direction === 'ascending' ? <ArrowUp size={14} /> : <ArrowDown size={14} />) : <ArrowUpDown size={14} />}
                       </span>
                     </button>
                  </th>
                  <th scope="col" className="py-3 px-4 sm:px-6">Actions</th>
                </tr>
              </thead>
              <tbody>
                 {/* Menggunakan data yang sudah disortir */}
                 {sortedReports.map((report) => {
                   let shortCode = '';
                   try { if (report.reported_url) { const urlParts = report.reported_url.split('/'); shortCode = urlParts[urlParts.length - 1] || ''; } } catch (e) { console.error("Error parsing shortCode", e); }
                   return (
                     <tr key={report.id} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                       {/* ... (td untuk data, tidak berubah) ... */}
                       <td className="py-3 px-4 sm:px-6 font-medium text-gray-900 dark:text-white">{report.id}</td>
                       <td className="py-3 px-4 sm:px-6 break-all"><a href={report.reported_url} target="_blank" rel="noopener noreferrer" className="hover:underline">{report.reported_url || 'N/A'}</a></td>
                       <td className="py-3 px-4 sm:px-6 whitespace-pre-wrap">{report.reason || '-'}</td>
                       <td className="py-3 px-4 sm:px-6">{report.report_timestamp ? new Date(report.report_timestamp).toLocaleString('id-ID', { dateStyle: 'short', timeStyle: 'short' }) : '-'}</td>
                       <td className="py-3 px-4 sm:px-6"><span className={`px-2 py-0.5 rounded text-xs font-medium ${ report.status === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' : report.status === 'reviewed' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' }`}>{report.status || 'unknown'}</span></td>
                       <td className="py-3 px-4 sm:px-6">
                         <button onClick={() => handleDeleteLink(shortCode)} className="text-red-500 hover:text-red-700 hover:underline text-xs font-medium disabled:opacity-50 disabled:cursor-not-allowed" disabled={!shortCode}>Delete Link</button>
                       </td>
                     </tr>
                   );
                 })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default AdminDashboardPage;