# urlDikit - Simple & Fast URL Shortener

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
A full-stack URL shortener application built with the MERN stack (MySQL instead of MongoDB) + Vite + Tailwind CSS, featuring custom aliases, click statistics, admin management, and more. Deployed with a separate frontend (Vercel) and backend (Railway).

**Live Demo:** [urldikit.my.id](https://urldikit.my.id) 

![Untitled design](https://github.com/user-attachments/assets/0fc581ee-8a8c-4434-b673-b6d595d98885)

---

## 📖 Tentang Proyek

`urlDikit` adalah layanan pemendek URL yang memungkinkan pengguna mengubah alamat web yang panjang menjadi link pendek yang ringkas dan mudah dibagikan. Proyek ini dibangun sebagai demonstrasi pengembangan aplikasi web full-stack modern, mencakup frontend interaktif, backend API, manajemen database, dan proses deployment.

## ✨ Fitur Utama

* Pemendekan URL (Random & Alias Kustom 6-10 Karakter).
* Penanganan URL Duplikat.
* Redirect Cepat & Penghitungan Klik Dasar.
* QR Code Generator.
* Halaman Statistik Klik per Link.
* Pelaporan URL Berbahaya (Form + Simpan ke DB).
* Area Admin Dasar (Login, Lihat Laporan, Hapus Link + Update Status Report, Logout).
* Proteksi Route Admin (Frontend).
* Halaman Statis (Terms, Privacy, Contact, About).
* Desain Responsif.
* Navbar & Footer.
* Keamanan Dasar Backend (Helmet, Rate Limit, Parameterized Query).

## 🛠️ Teknologi yang Digunakan

* **Frontend:** React (Vite), React Router DOM, Tailwind CSS, Framer Motion, Axios, Lucide React, qrcode.react, react-hot-toast.
* **Backend:** Node.js, Express.js, MySQL2, bcrypt, nanoid@3 (CommonJS), cors, dotenv, helmet, express-rate-limit, validator.
* **Database:** MySQL.
* **Deployment:** Frontend di Vercel, Backend di Railway, Database di Railway MySQL / PlanetScale ().

## ☁️ Deployment

* **Frontend:** Dideploy ke [Vercel](https://vercel.com/) dari branch `master`/`main`. Live di: [https://urldikit.my.id](https://urldikit.my.id) * **Backend:** Dideploy ke [Railway](https://railway.app/) dari branch `master`/`main`.
* **Database:** Menggunakan [Railway MySQL](https://railway.app/) / [PlanetScale](https://planetscale.com/) ().

Environment variables production diatur langsung di dashboard Railway dan Vercel.

## 🔐 Catatan Keamanan

* Fitur login admin saat ini menggunakan metode sederhana (hash di `.env`) dan **belum menggunakan** otentikasi berbasis Token (JWT/Session) yang aman.
* Endpoint API admin (`/api/admin/*`) di backend **belum diproteksi** dengan middleware otorisasi.
* Pengamanan dasar (`helmet`, `rate-limit`, parameterized query) sudah diterapkan.

## 🔮 Rencana Pengembangan (Opsional)

* Implementasi otentikasi JWT & proteksi backend API admin.
* Fitur Expiration Date.
* Fitur admin: Edit link, Mark report as reviewed.
* User accounts.
* Unit/Integration Testing.

## 👤 Kontak

Dibuat oleh [Patih Ramadika] - [[Linkedin](https://www.linkedin.com/in/patih-ramadika-19b763217/)]
