"use client";

import React, { useState, useMemo } from "react";
import { Search, Filter, X } from "lucide-react";

interface ProjectItem {
  id: string;
  projectNumber: string;
  label: string;
  description: string;
  isFavorite: boolean;
  tags: string[];
  links: { type: string; url: string }[];
}

type FilterType = "all" | "favorites" | "web" | "mobile" | "cli" | "featured";
type SortType = "default" | "number-asc" | "number-desc" | "name-asc" | "name-desc";

interface ProjectFilterProps {
  projects: ProjectItem[];
  translations: {
    searchPlaceholder: string;
    all: string;
    favorites: string;
    web: string;
    mobile: string;
    cli: string;
    featured: string;
    sortBy: string;
    sortDefault: string;
    sortNumAsc: string;
    sortNumDesc: string;
    sortNameAsc: string;
    sortNameDesc: string;
    noResults: string;
  };
}

export default function ProjectFilter({ projects, translations: t }: ProjectFilterProps) {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [sortBy, setSortBy] = useState<SortType>("default");

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((p) => p.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, [projects]);

  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    let result = [...projects];

    // Search filter
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.label.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    // Category filter
    if (activeFilter === "favorites") {
      result = result.filter((p) => p.isFavorite);
    } else if (activeFilter === "web") {
      result = result.filter((p) =>
        p.tags.some((tag) =>
          ["Next.js", "React", "Astro", "Vite", "Express", "Flask", "PWA", "Dashboard"].some(
            (t) => tag.includes(t)
          )
        )
      );
    } else if (activeFilter === "mobile") {
      result = result.filter((p) =>
        p.tags.some((tag) => tag.includes("Android") || tag.includes("Kotlin"))
      );
    } else if (activeFilter === "cli") {
      result = result.filter((p) => p.tags.some((tag) => tag === "CLI" || tag === "Python"));
    }

    // Tag filter
    if (activeTag) {
      result = result.filter((p) => p.tags.includes(activeTag));
    }

    // Sort
    if (sortBy === "number-asc") {
      result.sort((a, b) => {
        const numA = parseInt(a.projectNumber.replace("#", ""));
        const numB = parseInt(b.projectNumber.replace("#", ""));
        return numA - numB;
      });
    } else if (sortBy === "number-desc") {
      result.sort((a, b) => {
        const numA = parseInt(a.projectNumber.replace("#", ""));
        const numB = parseInt(b.projectNumber.replace("#", ""));
        return numB - numA;
      });
    } else if (sortBy === "name-asc") {
      result.sort((a, b) => a.label.localeCompare(b.label));
    } else if (sortBy === "name-desc") {
      result.sort((a, b) => b.label.localeCompare(a.label));
    }

    return result;
  }, [projects, search, activeFilter, activeTag, sortBy]);

  const clearFilters = () => {
    setSearch("");
    setActiveFilter("all");
    setActiveTag(null);
    setSortBy("default");
  };

  const hasActiveFilters = search || activeFilter !== "all" || activeTag !== null || sortBy !== "default";

  return (
    <div className="space-y-4">
      {/* Search & Controls */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortType)}
          className="px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="default">{t.sortDefault}</option>
          <option value="number-asc"># {t.sortNumAsc}</option>
          <option value="number-desc"># {t.sortNumDesc}</option>
          <option value="name-asc">{t.sortNameAsc}</option>
          <option value="name-desc">{t.sortNameDesc}</option>
        </select>
      </div>

      {/* Filter Chips */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => { setActiveFilter("all"); setActiveTag(null); }}
          className={`px-3 py-1.5 rounded-full text-xs font-mono transition-colors ${
            activeFilter === "all" && !activeTag
              ? "bg-blue-500 text-white"
              : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
          }`}
        >
          {t.all}
        </button>
        <button
          onClick={() => { setActiveFilter("favorites"); setActiveTag(null); }}
          className={`px-3 py-1.5 rounded-full text-xs font-mono transition-colors ${
            activeFilter === "favorites"
              ? "bg-yellow-500 text-white"
              : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
          }`}
        >
          ★ {t.favorites}
        </button>
        <button
          onClick={() => { setActiveFilter("web"); setActiveTag(null); }}
          className={`px-3 py-1.5 rounded-full text-xs font-mono transition-colors ${
            activeFilter === "web"
              ? "bg-green-500 text-white"
              : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
          }`}
        >
          {t.web}
        </button>
        <button
          onClick={() => { setActiveFilter("mobile"); setActiveTag(null); }}
          className={`px-3 py-1.5 rounded-full text-xs font-mono transition-colors ${
            activeFilter === "mobile"
              ? "bg-purple-500 text-white"
              : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
          }`}
        >
          {t.mobile}
        </button>
        <button
          onClick={() => { setActiveFilter("cli"); setActiveTag(null); }}
          className={`px-3 py-1.5 rounded-full text-xs font-mono transition-colors ${
            activeFilter === "cli"
              ? "bg-orange-500 text-white"
              : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
          }`}
        >
          {t.cli}
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-neutral-200 dark:bg-neutral-700 self-center mx-1" />

        {/* Tag chips */}
        {allTags.slice(0, 8).map((tag) => (
          <button
            key={tag}
            onClick={() => {
              if (activeTag === tag) {
                setActiveTag(null);
              } else {
                setActiveTag(tag);
                setActiveFilter("all");
              }
            }}
            className={`px-3 py-1.5 rounded-full text-[10px] font-mono transition-colors ${
              activeTag === tag
                ? "bg-blue-500 text-white"
                : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Active tag indicator */}
      {activeTag && (
        <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
          <Filter className="w-3 h-3" />
          <span>Filtered by: <span className="font-semibold text-blue-500">{activeTag}</span></span>
          <button onClick={() => setActiveTag(null)} className="hover:text-neutral-700 dark:hover:text-neutral-200">
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Results count */}
      <div className="flex justify-between items-center">
        <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
          {filteredProjects.length} / {projects.length} projects
        </p>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-xs text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-mono"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 gap-6">
        {filteredProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
        {filteredProjects.length === 0 && (
          <div className="col-span-2 text-center py-12 text-neutral-500 dark:text-neutral-400">
            <p className="font-mono text-sm">{t.noResults}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Inline ProjectCard component
function ProjectCard({ project: p }: { project: ProjectItem }) {
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-5 bg-white dark:bg-[#0a0a0a] hover:border-neutral-300 dark:hover:border-neutral-700 transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-blue-500 dark:text-blue-400 font-bold">
            {p.projectNumber}
          </span>
          <h3 className="font-semibold text-neutral-900 dark:text-white">
            {p.label}
          </h3>
          {p.isFavorite && (
            <span className="px-1.5 py-0.5 text-[9px] bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 rounded border border-yellow-500/20 font-semibold">
              ★
            </span>
          )}
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
          {p.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-6">
          {p.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] rounded bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links */}
      <div className="flex flex-wrap gap-2 pt-3 border-t border-neutral-100 dark:border-neutral-900">
        {p.links.map((link, idx) => {
          if (link.type === "repo") {
            return (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-xs font-mono transition-colors text-neutral-800 dark:text-neutral-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
                </svg>
                <span>Code</span>
              </a>
            );
          }
          if (link.type === "web") {
            return (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-blue-500 hover:bg-blue-600 text-white text-xs font-mono transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
                </svg>
                <span>Demo</span>
              </a>
            );
          }
          if (link.type === "download") {
            return (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-green-500 hover:bg-green-600 text-white text-xs font-mono transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                </svg>
                <span>Download</span>
              </a>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
