// ============================================================
// data/links.ts: Semua data link hardcoded di sini.
// Edit file ini untuk mengupdate konten tanpa menyentuh UI.
// ============================================================

export interface LinkItem {
  id: string;
  label: string;
  url: string;
  icon?: string;
  description?: string | { en: string; id: string };
  isExternal?: boolean;
  isFavorite?: boolean;
  type?: "nasional" | "internasional";
  workMode?: "individu" | "team";
  issuer?: string;
  date?: string;
  category?: 'seminar' | 'lomba' | 'course' | 'bootcamp';
  status?: "CLOSE" | "OPEN" | "MAINTENANCE" | "COMING SOON";
  year?: string;
}

export interface ProjectLink {
  type: 'repo' | 'web' | 'download' | 'contact';
  url: string;
  label?: string;
}

export interface ProjectItem {
  id: string;
  projectNumber: string;
  label: string;
  description: string | { en: string; id: string };
  isFavorite: boolean;
  tags: string[];
  links: ProjectLink[];
}

export type SectionItem = LinkItem | ProjectItem;

export interface LinkSection {
  id: string;
  title: string;
  items: SectionItem[];
}

// === Profil ===
export const profile = {
  name: "Yuken Velino",
  username: "@Curzyori",
  role: "Full-Stack Developer | Informatics Student | Automation Enthusiast",
  tagline: "Building Digital Solutions 🚀 | Automating Everything I Can ⚙️ | Learning Never Stops 📚",
  philosophy: "Hasil Adalah Segalanya",
  avatarUrl: "https://avatars.githubusercontent.com/u/139356517?v=4",
  domain: "curzy.dev",
  techStack: {
    languages: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3", "Kotlin"],
    frontend: ["React", "Next.js", "Vite", "Tailwind CSS"],
    backend: ["Node.js", "Express", "Supabase", "MySQL", "Flask"],
    devops: ["Vercel", "Cloudflare", "Nginx", "Git", "Linux Ubuntu", "Antigravity IDE", "Obsidian", "Resend", "GitHub"],
  },
};

// === Sections ===
export const sections: LinkSection[] = [
  {
    id: "bisnis",
    title: "Bisnis",
    items: [
      {
        id: "curzy-cloud",
        label: "Curzy Cloud",
        url: "https://github.com/Curzyori/CurzyCloud",
        icon: "fa-cloud",
        description: {
          en: "Game Server Hosting Service (Minecraft Java/Bedrock) and custom automation scripts fully operational from 2024 to 2026. The platform utilized the Pterodactyl Panel architecture, Supabase Realtime integration, and automated Web3/Crypto (USDT BEP-20) payment gateway. Currently, the project is officially archived, and community activities are redirected to the official WhatsApp Channel.",
          id: "Layanan Game Server Hosting (Minecraft Java/Bedrock) dan script custom automation yang beroperasi penuh pada periode 2024 - 2026. Platform ini memanfaatkan arsitektur Pterodactyl Panel, integrasi database Supabase Realtime, serta otomatisasi payment gateway berbasis Crypto (USDT BEP-20). Saat ini proyek telah selesai diarsipkan, dan seluruh aktivitas komunitas dialihkan ke Saluran WhatsApp resmi."
        },
        isExternal: true,
        isFavorite: true,
        type: "internasional",
        workMode: "individu",
        status: "CLOSE",
        year: "2024 - 2026",
      },
      {
        id: "curzy-market",
        label: "Curzy Market (Coming Soon)",
        url: "https://github.com/Curzyori",
        icon: "fa-shopping-bag",
        description: {
          en: "Global digital marketplace and development agency prepared exclusively with Web3/Crypto payment gateways (no fiat/local methods). It serves as a distribution hub for premium digital assets such as automation scripts, CLI tools, website templates, premium applications (from the 50 Projects Challenge), and commercial computing services.",
          id: "Marketplace digital global dan agensi pengembangan yang disiapkan secara eksklusif dengan payment gateway berbasis Web3/Crypto (tanpa metode fiat/lokal). Menjadi pusat distribusi aset digital premium seperti Script Otomatisasi, CLI Tools, Template Website, aplikasi Premium dari 50 Projects Challenge, hingga layanan komersial komputasi."
        },
        isExternal: true,
        isFavorite: false,
        type: "internasional",
        workMode: "individu",
        status: "COMING SOON",
        year: "2026",
      },
    ],
  },
  {
    id: "projects",
    title: "Projects",
    items: [
      {
        id: "ex-apk",
        projectNumber: "#19",
        label: "ExAPK",
        description: {
          en: "Extract and backup APKs from your Android device without root access. Batch extraction, easy sharing, and offline backup. Perfect for QA testing, archiving, or sharing apps with friends.",
          id: "Ekstrak dan backup APK dari perangkat Android tanpa akses root. Ekstraksi batch, berbagi mudah, dan cadangan offline. Cocok untuk testing QA, arsip, atau berbagi aplikasi dengan teman."
        },
        isFavorite: true,
        tags: ["Kotlin", "Android", "Compose", "APK Extractor", "Backup", "Open Source", "Utility"],
        links: [
          { type: "web", url: "https://ex-apk.curzy.dev/" },
          { type: "repo", url: "https://github.com/Curzyori/ex-apk" }
        ]
      },
      {
        id: "spec-md",
        projectNumber: "#18",
        label: "SpecMD",
        description: {
          en: "One tap. Device specs to Markdown. Extract Android device specifications and export to clean Markdown format. Perfect for bug reports, tech reviews, and marketplace listings.",
          id: "1x tap. Specs HP ke Markdown. Extract spesifikasi perangkat Android dan export ke format Markdown yang rapi. Cocok buat bug reports, review HP, dan listing barang."
        },
        isFavorite: true,
        tags: ["Kotlin", "Android", "Compose", "MD3", "Markdown", "Bug Report", "Open Source"],
        links: [
          { type: "web", url: "https://spec-md.curzy.dev" },
          { type: "repo", url: "https://github.com/Curzyori/spec-md" }
        ]
      },
      {
        id: "morsify",
        projectNumber: "#17",
        label: "Morsify",
        description: {
          en: "Morse code transmitter for Android with Flashlight & Sound modes. Built with Kotlin and Material Design 3.",
          id: "Pengirim kode Morse untuk Android dengan mode Senter & Suara. Dibangun dengan Kotlin dan Material Design 3."
        },
        isFavorite: true,
        tags: ["Kotlin", "Android", "Morse Code", "Utility", "Open Source"],
        links: [
          { type: "web", url: "https://morsify.curzy.dev/" },
          { type: "repo", url: "https://github.com/Curzyori/morsify" }
        ]
      },
      {
        id: "zero-cache",
        projectNumber: "#16",
        label: "ZeroCache",
        description: {
          en: "ZeroCache - One-tap Android cache cleaner with Root & No-Root modes. Apache 2.0.",
          id: "ZeroCache - Pembersih cache Android sekali ketuk dengan mode Root & Tanpa Root. Apache 2.0."
        },
        isFavorite: true,
        tags: ["Kotlin", "Android", "Root", "Utility", "Open Source", "Privacy"],
        links: [
          { type: "web", url: "https://zero-cache.curzy.dev/" },
          { type: "repo", url: "https://github.com/Curzyori/zero-cache" }
        ]
      },
      {
        id: "pass-qr",
        projectNumber: "#15",
        label: "PassQR",
        description: {
          en: "PassQR - Instant QR to Web & App access. Scan any QR code to open in browser or in-app WebView. Supports English and Indonesian.",
          id: "PassQR - Akses instan QR ke Web & Aplikasi. Pindai kode QR apa pun untuk membukanya di browser atau WebView bawaan aplikasi. Mendukung bahasa Inggris dan Indonesia."
        },
        isFavorite: true,
        tags: ["Kotlin", "Android", "WebView", "QR Code", "Open Source", "Privacy"],
        links: [
          { type: "web", url: "https://pass-qr.curzy.dev/" },
          { type: "repo", url: "https://github.com/Curzyori/pass-qr" }
        ]
      },
      {
        id: "pharma-stock",
        projectNumber: "#14",
        label: "PharmaStock",
        description: {
          en: "Pharmacy Inventory & Financial Management System — Financial dashboard, critical stock detection, multi-role RBAC, and automated VAT/Income Tax calculations.",
          id: "Sistem Manajemen Inventaris & Keuangan Apotek — Dashboard finansial, deteksi stok kritis, RBAC multi-role, PPN/PPh otomatis."
        },
        isFavorite: true,
        tags: ["Python", "Flask", "Healthcare", "Pharmacy", "Finance", "PWA", "Dashboard", "Open Source", "Supabase"],
        links: [
          { type: "web", url: "https://pharma-stock.curzy.dev/", label: "Demo" },
          { type: "repo", url: "https://github.com/Curzyori/pharma-stock", label: "Shadow Code" },
          { type: "contact", url: "https://curzy.dev/#contact", label: "Contact" }
        ]
      },
      {
        id: "github-searcher",
        projectNumber: "#13",
        label: "Github Searcher",
        description: {
          en: "Asynchronous GitHub repository & code scanner CLI with Dual-Engine (Browser Session & API Token). Built with Python asyncio.",
          id: "Pemindai repositori & kode GitHub asinkron berbasis CLI dengan Dual-Engine (Sesi Browser & Token API). Dibuat dengan Python asyncio."
        },
        isFavorite: true,
        tags: ["Python", "Git", "Scraper", "CLI", "API", "Asyncio", "Automation", "Open Source"],
        links: [
          { type: "repo", url: "https://github.com/Curzyori/github-searcher" }
        ]
      },
      {
        id: "portofolio-template",
        projectNumber: "#12",
        label: "Portofolio Template",
        description: {
          en: "Premium mobile-first link hub & developer portfolio with Terminal Glass UI theme. 100% static, zero maintenance, MIT license.",
          id: "Template premium mobile-first link hub & portofolio developer dengan tema Terminal Glass UI. 100% statis, bebas perawatan, lisensi MIT."
        },
        isFavorite: true,
        tags: ["TypeScript", "Next.js", "Tailwind CSS", "Portfolio", "Template", "Terminal", "Glass UI", "Open Source"],
        links: [
          { type: "web", url: "https://portofolio-12.curzy.dev/" },
          { type: "repo", url: "https://github.com/Curzyori/portofolio-template" }
        ]
      },
      {
        id: "c-lync",
        projectNumber: "#11",
        label: "C Lync",
        description: {
          en: "WhatsApp Management & Automation SaaS Powered by Google AI. Mitigate chat overload with automated AI summarization & dynamic contact memory.",
          id: "SaaS Manajemen & Otomatisasi WhatsApp Berbasis Google AI. Kurangi chat-overload dengan AI summarization & dynamic contact memory."
        },
        isFavorite: true,
        tags: ["React", "Express", "TypeScript", "AI", "Chatbot", "Automation", "Open Source", "Supabase"],
        links: [
          { type: "web", url: "https://c-lync-266408539680.asia-southeast1.run.app/" },
          { type: "repo", url: "https://github.com/Curzyori/c-lync", label: "Shadow Code" }
        ]
      },
      {
        id: "float-volume",
        projectNumber: "#10",
        label: "Float Volume",
        description: {
          en: "Free, ad-free, and privacy-friendly floating volume control application for Android devices, designed with Material Design 3 and Prestige-Safe Stealth Aesthetic.",
          id: "Aplikasi kontrol volume melayang bebas iklan dan ramah privasi untuk perangkat Android, dirancang dengan Material Design 3 dan Prestige-Safe Stealth Aesthetic."
        },
        isFavorite: true,
        tags: ["Kotlin", "Android", "Accessibility", "Privacy", "Volume Control", "Open Source"],
        links: [
          { type: "web", url: "https://float-volume.curzy.dev/" },
          { type: "repo", url: "https://github.com/Curzyori/float-volume" }
        ]
      },
      {
        id: "check-ip",
        projectNumber: "#09",
        label: "Check IP",
        description: {
          en: "Fast, simple, and beautiful web tool to check your public IP address and lookup any IP. Instantly shows IP, location, ISP, and timezone. Built with Next.js.",
          id: "Alat web cepat, sederhana, dan cantik untuk memeriksa alamat IP publik Anda dan pencarian IP apa pun. Instan menampilkan IP, lokasi, ISP, dan zona waktu."
        },
        isFavorite: true,
        tags: ["TypeScript", "Next.js", "Tailwind CSS", "IP Checker", "Geolocation", "Networking Tool"],
        links: [
          { type: "web", url: "https://checkip.curzy.dev" },
          { type: "repo", url: "https://github.com/Curzyori/check-ip" }
        ]
      },
      {
        id: "c-vault",
        projectNumber: "#08",
        label: "C Vault",
        description: {
          en: "Decentralized intelligence library for digital assets. Content collections with Zod-validated security levels, encryption layer, archive workflows. Astro 6 + Tailwind CSS v4.",
          id: "Perpustakaan intelijen terdesentralisasi untuk aset digital. Koleksi konten dengan tingkat keamanan yang divalidasi Zod, lapisan enkripsi, alur kerja arsip. Astro 6 + Tailwind CSS v4."
        },
        isFavorite: false,
        tags: ["Astro", "Tailwind CSS", "Markdown", "Security", "Vault", "Knowledge Management", "Productivity"],
        links: [
          { type: "repo", url: "https://github.com/Curzyori/c-vault" }
        ]
      },
      {
        id: "4-mate",
        projectNumber: "#07",
        label: "4 Mate",
        description: {
          en: "Multi-Platform Media Downloader for Spotify, Instagram, YouTube & TikTok. Ad-free, forced-download proxy via Edge Runtime. Next.js 16 + Tailwind v4.",
          id: "Pengunduh Media Multi-Platform untuk Spotify, Instagram, YouTube & TikTok. Bebas iklan, proxy forced-download memanfaatkan Edge Runtime. Next.js 16 + Tailwind v4."
        },
        isFavorite: true,
        tags: ["TypeScript", "Next.js", "Downloader", "Spotify", "Instagram", "YouTube", "TikTok", "Open Source"],
        links: [
          { type: "web", url: "https://4-mate.curzy.dev" },
          { type: "repo", url: "https://github.com/Curzyori/4-mate" }
        ]
      },
      {
        id: "c-story",
        projectNumber: "#06",
        label: "C Story",
        description: {
          en: "Interactive Storyboard Engine for the Curzy Ecosystem. Built with Astro + React, markdown-driven narratives with dynamic interactivity.",
          id: "Mesin Storyboard Interaktif untuk Ekosistem Curzy. Dibangun dengan Astro + React, narasi berbasis markdown dengan interaktivitas dinamis."
        },
        isFavorite: false,
        tags: ["Astro", "React", "Markdown", "MDX", "Storyboard", "Content Generator"],
        links: [
          { type: "web", url: "https://c-story.curzy.dev" },
          { type: "repo", url: "https://github.com/Curzyori/c-story" }
        ]
      },
      {
        id: "c-math",
        projectNumber: "#05",
        label: "C Math",
        description: {
          en: "Precision-engineered calculator and financial engine. Built with React + Vite, powered by math.js for advanced computations.",
          id: "Kalkulator dan mesin keuangan berpresisi tinggi. Dibangun dengan React + Vite, didukung oleh math.js untuk komputasi tingkat lanjut."
        },
        isFavorite: false,
        tags: ["JavaScript", "React", "Vite", "Calculator", "Finance App", "MathJS", "CLI", "Python"],
        links: [
          { type: "web", url: "https://c-math.curzy.dev" },
          { type: "repo", url: "https://github.com/Curzyori/c-math" }
        ]
      },
      {
        id: "c-flow",
        projectNumber: "#04",
        label: "C Flow",
        description: {
          en: "Premium local audio hub & music visualizer with glassmorphism UI. Features local folder scanning, metadata extraction, daily listening streaks. React + Tailwind CSS v4, Express, music-metadata.",
          id: "Pusat audio lokal & visualisator musik premium dengan UI glassmorphic. Menampilkan pemindaian folder lokal, ekstraksi metadata, skor beruntun harian. React + Tailwind CSS v4, Express, music-metadata."
        },
        isFavorite: false,
        tags: ["JavaScript", "React", "Express", "Glassmorphism", "Audio", "Music Player", "Visualization"],
        links: [
          { type: "web", url: "https://c-flow.curzy.dev" },
          { type: "repo", url: "https://github.com/Curzyori/c-flow" }
        ]
      },
      {
        id: "curzy-vitality",
        projectNumber: "#03",
        label: "Curzy Vitality",
        description: {
          en: "Background productivity tracker & Life OS daemon. Tracks active application times in SQLite, calculates burnout risk, and gamifies work via achievements. React + Tailwind v4, Express, better-sqlite3.",
          id: "Pelacak produktivitas latar belakang & daemon Life OS. Melacak waktu aplikasi aktif di SQLite, menghitung risiko burnout, dan gamifikasi kerja melalui pencapaian. React + Tailwind v4, Express, better-sqlite3."
        },
        isFavorite: false,
        tags: ["JavaScript", "React", "Express", "SQLite", "Productivity Tool", "Gamification", "Life OS", "Wellness"],
        links: [
          { type: "repo", url: "https://github.com/Curzyori/curzy-vitality" }
        ]
      },
      {
        id: "c-dashboard",
        projectNumber: "#02",
        label: "C Dashboard",
        description: {
          en: "Real-time system Command Center. Monitor CPU/Memory, control processes, historical logs in SQLite. React + Vite + Tailwind CSS v4, Node.js + Socket.io & systeminformation.",
          id: "Pusat Komando sistem waktu nyata. Pantau CPU/Memori, kontrol proses, log historis dalam SQLite. React + Vite + Tailwind CSS v4, Node.js + Socket.io & systeminformation."
        },
        isFavorite: false,
        tags: ["JavaScript", "React", "Node.js", "Socket.io", "SQLite", "System Monitor", "Productivity"],
        links: [
          { type: "repo", url: "https://github.com/Curzyori/c-dashboard" }
        ]
      },
      {
        id: "zafkiel-arcade",
        projectNumber: "#01",
        label: "Zafkiel Arcade",
        description: {
          en: "Zafkiel Arcade is a high-stakes, time-manipulating survival game inspired by the aesthetic of Kurumi Tokisaki. Unlike standard arcade clones, Zafkiel integrates a full Modular Monolith backend to track highscores, enforce zero-trust inputs, and stream real-time temporal state.",
          id: "Zafkiel Arcade adalah permainan bertahan hidup manipulasi waktu berisiko tinggi yang terinspirasi oleh estetika Kurumi Tokisaki. Dilengkapi backend Monolit Modular untuk melacak skor, validasi input, dan streaming status waktu nyata."
        },
        isFavorite: false,
        tags: ["JavaScript", "React", "Express", "Modular Monolith", "SQLite", "Survival Game", "Time Manipulation"],
        links: [
          { type: "web", url: "https://zafkiel-arcade.curzy.dev" },
          { type: "repo", url: "https://github.com/Curzyori/zafkiel-arcade" }
        ]
      }
    ]
  },
  {
    id: "certificates",
    title: "Sertifikat",
    items: [
      {
        id: "google-ai",
        label: "Google AI Professional Certificate",
        issuer: "Google & Coursera",
        description: {
          en: "Professional Specialization from Google. Completed in approximately 1 month with 2 hours of study per week. Covers 7 main modules: AI Fundamentals, Brainstorming & Planning, Research & Insights, Writing & Communication, Content Creation, Data Analysis, and App Building.",
          id: "Spesialisasi Profesional dari Google. Diselesaikan dalam waktu sekitar 1 bulan dengan intensitas belajar 2 jam per minggu. Mencakup 7 modul utama: AI Fundamentals, Brainstorming & Planning, Research & Insights, Writing & Communication, Content Creation, Data Analysis, hingga App Building."
        },
        url: "/certificates/google-ai.pdf",
        isExternal: true,
        type: "internasional",
        workMode: "individu",
        date: "2026-05-22",
        category: "course",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact",
    items: [
      {
        id: "email",
        label: "Email",
        description: "yukenvelino11@gmail.com",
        url: "mailto:yukenvelino11@gmail.com",
        isExternal: true,
      },
      {
        id: "whatsapp-personal",
        label: "WhatsApp",
        description: "Chat langsung",
        url: "https://wa.me/6285141495185",
        isExternal: true,
      },
      {
        id: "github",
        label: "GitHub",
        description: "@Curzyori",
        url: "https://github.com/Curzyori",
        isExternal: true,
      },
      {
        id: "threads",
        label: "Threads",
        description: "@curzyori",
        url: "https://www.threads.com/@curzyori",
        isExternal: true,
      },
      {
        id: "instagram",
        label: "Instagram",
        description: "@curzyori",
        url: "https://www.instagram.com/curzyori",
        isExternal: true,
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        description: "Yuken Velino",
        url: "https://www.linkedin.com/in/curzy/",
        isExternal: true,
      },
      {
        id: "youtube",
        label: "YouTube",
        description: "@Curzys",
        url: "https://youtube.com/@Curzys",
        isExternal: true,
      },
    ],
  },
];
