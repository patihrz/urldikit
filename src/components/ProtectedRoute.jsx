import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  // Cek status login dari localStorage
  const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
  console.log("ProtectedRoute Check: isLoggedIn =", isLoggedIn); // Tambahkan log untuk lihat status

  // Jika TIDAK login, redirect ke halaman login
  if (!isLoggedIn) {
    console.log("ProtectedRoute: Not logged in, redirecting to /admin/login");
    return <Navigate to="/admin/login" replace />;
  }

  // Jika LOGIN, tampilkan children (halaman yg dilindungi)
  console.log("ProtectedRoute: Logged in, rendering children");
  return children;
}

export default ProtectedRoute;