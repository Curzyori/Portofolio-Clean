// ============================================================
// data/links.ts: Semua data link hardcoded di sini.
// Edit file ini untuk mengupdate konten tanpa menyentuh UI.
// ============================================================

export interface LinkItem {
  id: string;
  label: string;
  url: string;
  icon?: string;
  description?: string;
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
  type: 'repo' | 'web' | 'download';
  url: string;
}

export interface ProjectItem {
  id: string;
  projectNumber: string;
  label: string;
  description: string;
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
        description: "Layanan Game Server Hosting (Minecraft Java/Bedrock) dan script custom automation yang beroperasi penuh pada periode 2024 - 2026. Platform ini memanfaatkan arsitektur Pterodactyl Panel, integrasi database Supabase Realtime, serta otomatisasi payment gateway berbasis Crypto (USDT BEP-20). Saat ini proyek telah selesai diarsipkan, dan seluruh aktivitas komunitas dialihkan ke Saluran WhatsApp resmi.",
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
        description: "Global digital marketplace and development agency disiapkan eksklusif dengan payment gateway berbasis Web3/Crypto (tanpa fiat/metode lokal). Menjadi pusat distribusi aset digital premium seperti Automation Scripts, CLI tools, Template Website, aplikasi Premium (Free Trial & Premium dari 50 Projects Challenge), hingga layanan komersial komputasi seperti Joki Tugas Engineering dan Jasa Pembuatan Website Kustom (Buy Custom Website).",
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
        id: "pass-qr",
        projectNumber: "#15",
        label: "PassQR",
        description: "PassQR - Instant QR to Web & App access. Scan any QR code to open in browser or in-app WebView. Supports English and Indonesian.",
        isFavorite: true,
        tags: ["Kotlin", "Android", "WebView", "QR Code", "Open Source", "Privacy"],
        links: [
          { type: "repo", url: "https://github.com/Curzyori/pass-qr" }
        ]
      },
      {
        id: "pharma-stock",
        projectNumber: "#14",
        label: "PharmaStock",
        description: "Sistem Manajemen Inventaris & Keuangan Apotek — Dashboard finansial, deteksi stok kritis, RBAC multi-role, PPN/PPh otomatis.",
        isFavorite: true,
        tags: ["Python", "Flask", "Healthcare", "Pharmacy", "Finance", "PWA", "Dashboard", "Open Source", "Supabase"],
        links: [
          { type: "web", url: "https://pharma-stock.curzy.dev/" },
          { type: "repo", url: "https://github.com/Curzyori/pharma-stock" }
        ]
      },
      {
        id: "github-searcher",
        projectNumber: "#13",
        label: "Github Searcher",
        description: "Asynchronous GitHub repository & code scanner CLI with Dual-Engine (Browser Session & API Token). Built with Python asyncio.",
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
        description: "Premium mobile-first link hub & portfolio developer dengan Terminal Glass UI theme. 100% static, zero maintenance, MIT license.",
        isFavorite: true,
        tags: ["TypeScript", "Next.js", "Tailwind CSS", "Portfolio", "Template", "Terminal", "Glass UI", "Open Source"],
        links: [
          { type: "repo", url: "https://github.com/Curzyori/portofolio-template" }
        ]
      },
      {
        id: "c-lync",
        projectNumber: "#11",
        label: "C Lync",
        description: "SaaS Manajemen & Otomatisasi WhatsApp Berbasis Google AI. Kurangi chat-overload dengan AI summarization & dynamic contact memory.",
        isFavorite: true,
        tags: ["React", "Express", "TypeScript", "AI", "Chatbot", "Automation", "Open Source", "Supabase"],
        links: [
          { type: "web", url: "https://c-lync-266408539680.asia-southeast1.run.app" },
          { type: "repo", url: "https://github.com/Curzyori/c-lync" }
        ]
      },
      {
        id: "float-volume",
        projectNumber: "#10",
        label: "Float Volume",
        description: "Free, ad-free, and privacy-friendly floating volume control application for Android devices, designed with Material Design 3 and Prestige-Safe Stealth Aesthetic.",
        isFavorite: true,
        tags: ["Kotlin", "Android", "Accessibility", "Privacy", "Volume Control", "Open Source"],
        links: [
          { type: "download", url: "https://github.com/Curzyori/float-volume/tree/main/version" },
          { type: "repo", url: "https://github.com/Curzyori/float-volume" }
        ]
      },
      {
        id: "check-ip",
        projectNumber: "#09",
        label: "Check IP",
        description: "Fast, simple, and beautiful web tool to check your public IP address and lookup any IP. Instantly shows IP, location, ISP, and timezone. Built with Next.js.",
        isFavorite: false,
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
        description: "Decentralized intelligence library for digital assets. Content collections with Zod-validated security levels, encryption layer, archive workflows. Astro 6 + Tailwind CSS v4.",
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
        description: "Multi-Platform Media Downloader for Spotify, Instagram, YouTube & TikTok. Ad-free, forced-download proxy via Edge Runtime. Next.js 16 + Tailwind v4.",
        isFavorite: true,
        tags: ["TypeScript", "Next.js", "Downloader", "Spotify", "Instagram", "YouTube", "TikTok", "Open Source"],
        links: [
          { type: "web", url: "https://4mate.curzy.dev" },
          { type: "repo", url: "https://github.com/Curzyori/4-mate" }
        ]
      },
      {
        id: "c-story",
        projectNumber: "#06",
        label: "C Story",
        description: "Interactive Storyboard Engine for the Curzy Ecosystem. Built with Astro + React, markdown-driven narratives with dynamic interactivity.",
        isFavorite: false,
        tags: ["Astro", "React", "Markdown", "MDX", "Storyboard", "Content Generator"],
        links: [
          { type: "repo", url: "https://github.com/Curzyori/c-story" }
        ]
      },
      {
        id: "c-math",
        projectNumber: "#05",
        label: "C Math",
        description: "Precision-engineered calculator and financial engine. Built with React + Vite, powered by math.js for advanced computations.",
        isFavorite: false,
        tags: ["JavaScript", "React", "Vite", "Calculator", "Finance App", "MathJS", "CLI", "Python"],
        links: [
          { type: "repo", url: "https://github.com/Curzyori/c-math" }
        ]
      },
      {
        id: "c-flow",
        projectNumber: "#04",
        label: "C Flow",
        description: "🎵 Premium local audio hub & music visualizer with glassmorphism UI. Features local folder scanning, metadata extraction, daily listening streaks. React + Tailwind CSS v4, Express, music-metadata.",
        isFavorite: false,
        tags: ["JavaScript", "React", "Express", "Glassmorphism", "Audio", "Music Player", "Visualization"],
        links: [
          { type: "repo", url: "https://github.com/Curzyori/c-flow" }
        ]
      },
      {
        id: "curzy-vitality",
        projectNumber: "#03",
        label: "Curzy Vitality",
        description: "🧠 Background productivity tracker & Life OS daemon. Tracks active application times in SQLite, calculates burnout risk, and gamifies work via achievements. React + Tailwind v4, Express, better-sqlite3.",
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
        description: "🖥️ Real-time system Command Center. Monitor CPU/Memory, control processes, historical logs in SQLite. React + Vite + Tailwind CSS v4, Node.js + Socket.io & systeminformation.",
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
        description: "Zafkiel Arcade is a high-stakes, time-manipulating survival game inspired by the aesthetic of Kurumi Tokisaki. Unlike standard arcade clones, Zafkiel integrates a full Modular Monolith backend to track highscores, enforce zero-trust inputs, and stream real-time temporal state.",
        isFavorite: false,
        tags: ["JavaScript", "React", "Express", "Modular Monolith", "SQLite", "Survival Game", "Time Manipulation"],
        links: [
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
        description: "Spesialisasi Profesional dari Google. Diselesaikan dalam waktu sekitar 1 bulan dengan intensitas belajar 2 jam per minggu. Mencakup 7 modul utama: AI Fundamentals, Brainstorming & Planning, Research & Insights, Writing & Communication, Content Creation, Data Analysis, hingga App Building.",
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
