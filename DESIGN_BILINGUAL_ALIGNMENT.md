# Design Specification: Bilingual Translation Alignments

## 1. Goal
Ensure 100% of website content dynamically switches between English ("en") and Indonesian ("id") languages.

## 2. Changes Needed

### A. Data Layer (`src/app/links.ts`)
- Update `description` types in `LinkItem`, `ProjectItem`, and `CertItem` to accept `string | { en: string; id: string }`.
- Provide localized translations `{ en: string, id: string }` for the Business (`bisnis`), Projects, and Certificates items.

### B. UI Layer (`src/app/page.tsx`)
- Update `translations` dictionary to include missing static labels:
  - `challengeProgress` -> "Challenge Progress:" / "Progress Tantangan:"
  - `projectsSubtitle` -> "List of built challenges as part of the 50 Projects roadmap." / "Daftar tantangan yang dibangun sebagai bagian dari peta jalan 50 Projek."
  - `pdfDocument` -> "PDF Document" / "Dokumen PDF"
  - `footerText` -> "Built with passion from Pontianak, Indonesia" / "Dibuat dengan dedikasi dari Pontianak, Indonesia"
  - `majorLabel` -> "Information Systems" / "Sistem Informasi"
- Render `c.description` and `b.description` dynamically based on active `lang`.
- Pass `lang` down to `<TypingAnimation lang={lang} />`.
- Pass `lang` down to `<ProjectFilter lang={lang} ... />`.

### C. Component Layer (`src/components/ProjectFilter.tsx` & `src/components/TypingAnimation.tsx`)
- Adapt `ProjectFilter` to accept `lang` prop and read `p.description` based on the chosen language.
- Adapt `TypingAnimation` to accept `lang` prop and type translated text strings dynamically.
