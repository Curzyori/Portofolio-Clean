import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const BASE_URL = "https://curzy.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Yuken Velino — Full-Stack Developer",
    template: "%s | Yuken Velino",
  },
  description:
    "Portfolio of Yuken Velino (Curzyori) — Full-Stack Developer & Informatics Student. Featuring 50 Projects Challenge, automation scripts, and full-stack applications.",
  keywords: [
    "Yuken Velino",
    "Curzyori",
    "portfolio",
    "full-stack developer",
    "Next.js",
    "React",
    "TypeScript",
    "automation",
    "50 Projects Challenge",
    "Pontianak",
    "Indonesia",
  ],
  authors: [{ name: "Yuken Velino", url: BASE_URL }],
  creator: "Yuken Velino",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Curzy Portfolio",
    title: "Yuken Velino — Full-Stack Developer",
    description:
      "Full-Stack Developer & Informatics Student. 50 Projects Challenge, automation, and production-grade applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yuken Velino Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuken Velino — Full-Stack Developer",
    description:
      "Full-Stack Developer & Informatics Student. 50 Projects Challenge, automation, and production-grade applications.",
    images: ["/og-image.png"],
    creator: "@curzyori",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "your-google-site-verification-id", // replace with actual ID
  },
};

// JSON-LD Structured Data
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yuken Velino",
    alternateName: "Curzyori",
    url: BASE_URL,
    jobTitle: "Full-Stack Developer",
    description:
      "Full-Stack Developer and Informatics Student specializing in Next.js, React, TypeScript, and automation.",
    email: "yukenvelino11@gmail.com",
    sameAs: [
      "https://github.com/Curzyori",
      "https://www.linkedin.com/in/curzy/",
      "https://www.instagram.com/curzyori",
      "https://youtube.com/@Curzys",
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "Python",
      "React",
      "Next.js",
      "Node.js",
      "Supabase",
      "Tailwind CSS",
      "Automation",
    ],
  };

  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
