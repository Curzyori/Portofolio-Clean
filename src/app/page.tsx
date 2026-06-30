"use client";

import React, { useState } from "react";
import Image from "next/image";
import { profile, sections, type ProjectItem } from "./links";
import TypingAnimation from "@/components/TypingAnimation";
import { useTheme } from "@/hooks/useTheme";
import ProjectFilter from "@/components/ProjectFilter";
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ExternalLink, 
  ArrowUpRight, 
  Clock
} from "lucide-react";

export default function Home() {
  const [lang, setLang] = useState<"en" | "id">("en");
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Set project total count and completed count
  const totalProjectsLimit = 50;
  const projectsList = sections.find((s) => s.id === "projects")?.items || [];
  const completedProjectsCount = projectsList.length; // 17 projects

  const translations = {
    en: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
      philosophy: "Philosophy",
      education: "Education",
      techStack: "Tech Stack",
      featured: "Featured",
      allProjects: "All Projects",
      certificates: "Certificates",
      viewProject: "Visit Site",
      viewCode: "Open Code",
      downloadApp: "Download App",
      business: "Business",
      statusClose: "ARCHIVED",
      statusOpen: "ACTIVE",
      statusMaint: "MAINTENANCE",
      statusSoon: "COMING SOON",
      aboutTitle: "About Me",
      challengeTitle: "50 Projects Challenge",
      challengeDesc: "A self-driven roadmap to design, build, and deploy 50 real-world applications before September 2026. This self-imposed pressure forces continuous coding, quick pivots, and rapid acquisition of new technical skills.",
      aboutText: "I am an Information Systems student at Universitas Bina Sarana Informatika (UBSI), specialized in building production-grade full-stack systems, automation scripts, and exploring Gemini / LLM integrations.",
      resultHeader: "Results are Everything",
      // Missing keys
      challengeProgress: "Challenge Progress:",
      projectsSubtitle: "List of built challenges as part of the 50 Projects roadmap.",
      pdfDocument: "PDF Document",
      footerText: "Built with passion from Pontianak, Indonesia",
      majorLabel: "Information Systems",
      // Filter
      searchPlaceholder: "Search projects...",
      filterAll: "All",
      filterFavorites: "Favorites",
      filterWeb: "Web",
      filterMobile: "Mobile",
      filterCli: "CLI",
      sortBy: "Sort",
      sortDefault: "Default",
      sortNumAsc: "Number ↑",
      sortNumDesc: "Number ↓",
      sortNameAsc: "Name A-Z",
      sortNameDesc: "Name Z-A",
      noResults: "No projects match your filters.",
    },
    id: {
      about: "Tentang",
      projects: "Projek",
      contact: "Kontak",
      philosophy: "Filosofi",
      education: "Pendidikan",
      techStack: "Teknologi",
      featured: "Unggulan",
      allProjects: "Semua Projek",
      certificates: "Sertifikat",
      viewProject: "Kunjungi Situs",
      viewCode: "Buka Kode",
      downloadApp: "Unduh Aplikasi",
      business: "Bisnis",
      statusClose: "DIARSIPKAN",
      statusOpen: "AKTIF",
      statusMaint: "PEMELIHARAAN",
      statusSoon: "SEGERA HADIR",
      aboutTitle: "Tentang Saya",
      challengeTitle: "Tantangan 50 Projek",
      challengeDesc: "Peta jalan mandiri untuk merancang, membangun, dan menyebarkan 50 aplikasi dunia nyata sebelum September 2026. Tekanan mandiri ini memaksa saya untuk terus menulis kode, beradaptasi cepat, dan menguasai keahlian teknis baru.",
      aboutText: "Saya adalah mahasiswa Sistem Informasi di Universitas Bina Sarana Informatika (UBSI), spesialisasi dalam membangun sistem full-stack siap produksi, skrip otomatisasi, serta eksplorasi integrasi Gemini / LLM.",
      resultHeader: "Hasil Adalah Segalanya",
      // Missing keys
      challengeProgress: "Progress Tantangan:",
      projectsSubtitle: "Daftar tantangan yang dibangun sebagai bagian dari peta jalan 50 Projek.",
      pdfDocument: "Dokumen PDF",
      footerText: "Dibuat dengan dedikasi dari Pontianak, Indonesia",
      majorLabel: "Sistem Informasi",
      // Filter
      searchPlaceholder: "Cari proyek...",
      filterAll: "Semua",
      filterFavorites: "Favorit",
      filterWeb: "Web",
      filterMobile: "Mobile",
      filterCli: "CLI",
      sortBy: "Urutkan",
      sortDefault: "Default",
      sortNumAsc: "Nomor ↑",
      sortNumDesc: "Nomor ↓",
      sortNameAsc: "Nama A-Z",
      sortNameDesc: "Nama Z-A",
      noResults: "Tidak ada proyek yang cocok.",
    }
  };

  const t = translations[lang];

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "id" : "en"));
  };

  // Sync <html lang> attribute for SEO
  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const getStatusLabel = (status?: string) => {
    if (!status) return "";
    switch (status) {
      case "CLOSE":
        return t.statusClose;
      case "OPEN":
        return t.statusOpen;
      case "MAINTENANCE":
        return t.statusMaint;
      case "COMING SOON":
        return t.statusSoon;
      default:
        return status;
    }
  };

  interface BizItem {
    id: string;
    label: string;
    description: string;
    status: string;
    year: string;
    url: string;
  }

  interface CertItem {
    id: string;
    label: string;
    issuer: string;
    description: string;
    date: string;
    url: string;
  }

  interface ContactItem {
    id: string;
    label: string;
    description: string;
    url: string;
  }

  return (
    <div id="main-content" className="min-h-screen bg-white text-neutral-900 dark:bg-[#0a0a0a] dark:text-neutral-100 font-sans antialiased relative overflow-x-hidden">
      {/* Ambient Vercel Mesh Glow Backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none z-0 opacity-70">
        <div className={`w-full h-full transition-all duration-300 ${theme === "dark" ? "ambient-glow-dark" : "ambient-glow"}`} />
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/80 backdrop-blur-md dark:border-neutral-800/80 dark:bg-[#0a0a0a]/80 transition-colors">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo / Link Hub Title */}
          <a href="#" className="font-mono text-sm tracking-tight font-semibold flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span>curzy.dev</span>
            <span className="px-1.5 py-0.5 text-[10px] bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 rounded border border-neutral-200 dark:border-neutral-700">
              v3.0.0
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            <a href="#about" className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors">
              {t.about}
            </a>
            <a href="#projects" className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors">
              {t.projects}
            </a>
            <a href="#contact" className="text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors">
              {t.contact}
            </a>
          </nav>

          {/* Right Header Controls */}
          <div className="flex items-center gap-3">
            {/* Github Count Badge - Desktop Only */}
            <a 
              href="https://github.com/stars/Curzyori/lists/%E1%B4%98%CA%80%E1%B4%8F%E1%B4%8A%E1%B4%87%E1%B4%84%E1%B4%9Bs"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all text-xs font-mono"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
              </svg>
              <span>{t.challengeProgress}</span>
              <span className="font-semibold text-blue-500 dark:text-blue-400">{completedProjectsCount}/{totalProjectsLimit}</span>
            </a>

            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors text-xs font-mono font-semibold"
              aria-label="Switch language"
            >
              {lang.toUpperCase()}
            </button>

            {/* Dark Mode Switcher Button */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-500" />}
            </button>

            {/* Mobile Hamburger menu icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors md:hidden"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="fixed inset-0 top-16 z-40 bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-lg md:hidden transition-all duration-300" role="dialog" aria-modal="true" aria-label="Mobile navigation menu">
          <div className="flex flex-col p-6 gap-6">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium border-b border-neutral-100 dark:border-neutral-900 pb-3"
            >
              {t.about}
            </a>
            <a 
              href="#projects" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium border-b border-neutral-100 dark:border-neutral-900 pb-3"
            >
              {t.projects}
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium border-b border-neutral-100 dark:border-neutral-900 pb-3"
            >
              {t.contact}
            </a>
            <div className="mt-4 flex flex-col gap-3">
              <a 
                href="https://github.com/stars/Curzyori/lists/%E1%B4%98%CA%80%E1%B4%8F%E1%B4%8A%E1%B4%87%E1%B4%84%E1%B4%9Bs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 font-mono text-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
                </svg>
                <span>Progress: {completedProjectsCount}/{totalProjectsLimit}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-12 z-10 relative flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-neutral-200 dark:border-neutral-800 mb-6 bg-neutral-100 dark:bg-neutral-900">
          <Image
            src={profile.avatarUrl}
            alt={`${profile.name} profile photo`}
            width={96}
            height={96}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-none text-neutral-900 dark:text-white mb-2 selection:bg-neutral-800 selection:text-white dark:selection:bg-neutral-200 dark:selection:text-black">
          {profile.name}
        </h1>
        <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400 max-w-lg mb-6">
          {profile.role}
        </p>

        {/* Dynamic Typing Animation */}
        <div className="w-full max-w-md mx-auto">
          <TypingAnimation lang={lang} />
        </div>

        <div className="mt-8 flex gap-4">
          <a 
            href="#projects" 
            className="px-6 py-2.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black hover:opacity-90 transition-opacity text-sm font-medium"
          >
            {t.projects}
          </a>
          <a 
            href="#contact" 
            className="px-6 py-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors text-sm font-medium"
          >
            {t.contact}
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-4 py-16 border-t border-neutral-100 dark:border-neutral-900">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-4">
              {t.aboutTitle}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
              {t.aboutText}
            </p>
            <div className="bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-lg p-5">
              <h3 className="font-mono text-xs uppercase tracking-wider text-blue-500 dark:text-blue-400 mb-2 font-bold flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {t.challengeTitle}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {t.challengeDesc}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div 
                  className="w-full bg-neutral-200 dark:bg-neutral-800 h-2 rounded-full overflow-hidden"
                  role="progressbar"
                  aria-valuenow={completedProjectsCount}
                  aria-valuemax={totalProjectsLimit}
                  aria-label={t.challengeProgress}
                >
                  <div 
                    className="bg-blue-500 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${(completedProjectsCount / totalProjectsLimit) * 100}%` }} 
                  />
                </div>
                <span className="font-mono text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                  {Math.round((completedProjectsCount / totalProjectsLimit) * 100)}%
                </span>
              </div>
            </div>
          </div>

          {/* Sidebar YAML / Meta details */}
          <div className="flex flex-col gap-6">
            <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-5 bg-neutral-50 dark:bg-neutral-900/50">
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block mb-3 font-semibold">
                SYSTEM_SPECS.YAML
              </span>
              <pre className="font-mono text-xs leading-relaxed text-neutral-600 dark:text-neutral-400 whitespace-pre-wrap">
                {`name: Yuken Velino
age: 18
loc: Pontianak, ID
college: UBSI
major: ${t.majorLabel}
focus: Full-Stack & AI
motto: "${profile.philosophy}"`}
              </pre>
            </div>
            
            {/* Tech Stack Summary */}
            <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-5">
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block mb-3 font-semibold">
                {t.techStack}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {profile.techStack.languages.concat(profile.techStack.frontend).map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 py-0.5 text-[11px] rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 border-t border-neutral-100 dark:border-neutral-900">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-6">
          {t.business}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {sections.find((s) => s.id === "bisnis")?.items.map((biz) => {
            const b = biz as BizItem;
            const desc = typeof b.description === "object" ? b.description[lang] : b.description;
            return (
              <div 
                key={b.id} 
                className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-5 bg-neutral-50 dark:bg-neutral-900/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-lg text-neutral-900 dark:text-white">
                      {b.label}
                    </h3>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                      b.status === "CLOSE" 
                        ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-500" 
                        : "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400"
                    }`}>
                      {getStatusLabel(b.status)}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                    {desc}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-neutral-100 dark:border-neutral-900 mt-2">
                  <span className="text-xs font-mono text-neutral-400">
                    {b.year}
                  </span>
                  <a 
                    href={b.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-xs text-blue-500 hover:text-blue-600 font-semibold gap-1"
                  >
                    <span>Link</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto px-4 py-16 border-t border-neutral-100 dark:border-neutral-900">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white">
              {t.allProjects}
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              {t.projectsSubtitle}
            </p>
          </div>
        </div>

        <ProjectFilter
          projects={projectsList as ProjectItem[]}
          lang={lang}
          translations={{
            searchPlaceholder: t.searchPlaceholder,
            all: t.filterAll,
            favorites: t.filterFavorites,
            web: t.filterWeb,
            mobile: t.filterMobile,
            cli: t.filterCli,
            featured: t.featured,
            sortBy: t.sortBy,
            sortDefault: t.sortDefault,
            sortNumAsc: t.sortNumAsc,
            sortNumDesc: t.sortNumDesc,
            sortNameAsc: t.sortNameAsc,
            sortNameDesc: t.sortNameDesc,
            noResults: t.noResults,
          }}
        />
      </section>

      {/* Certificates Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 border-t border-neutral-100 dark:border-neutral-900">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-6">
          {t.certificates}
        </h2>
        <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-5 bg-neutral-50 dark:bg-neutral-900/10">
          {sections.find((s) => s.id === "certificates")?.items.map((cert) => {
            const c = cert as CertItem;
            const desc = typeof c.description === "object" ? c.description[lang] : c.description;
            return (
              <div key={c.id} className="flex flex-col justify-between">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2">
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white">
                      {c.label}
                    </h3>
                    <p className="text-xs text-neutral-400 font-mono">
                      {c.issuer}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-neutral-500">
                    {c.date}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  {desc}
                </p>
                <div className="flex">
                  <a 
                    href={c.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-xs text-blue-500 hover:underline font-semibold gap-1"
                  >
                    <span>{t.pdfDocument}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-4 py-16 border-t border-neutral-100 dark:border-neutral-900">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-6">
          {t.contact}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" role="list" aria-label={t.contact}>
          {sections.find((s) => s.id === "contact")?.items.map((link) => {
            const l = link as ContactItem;
            return (
              <a 
                key={l.id} 
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 bg-white dark:bg-[#0a0a0a] hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900/30 transition-all flex flex-col justify-between min-h-[90px]"
              >
                <span className="font-semibold text-sm text-neutral-900 dark:text-white">
                  {l.label}
                </span>
                <div className="flex justify-between items-center mt-2 text-xs font-mono text-neutral-400">
                  <span>{l.description}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-100" />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-100 dark:border-neutral-900 py-12 bg-neutral-50 dark:bg-neutral-950/20 text-center text-xs text-neutral-400">
        <p className="mb-2">⚡ {t.footerText}</p>
        <p className="font-mono text-[10px]">&copy; 2026 Yuken Velino (Curzyori)</p>
      </footer>
    </div>
  );
}
