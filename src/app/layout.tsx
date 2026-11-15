import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://princechauhan.vercel.app"),
  title: "Prince Chauhan | AI/ML & Python Backend Developer",
  description:
    "Official portfolio of Prince Chauhan, an AI/ML enthusiast and Python backend developer. Explore projects in machine learning, RAG systems, FastAPI, and backend development.",

  keywords: [
    "erprincechauhan",
    "Prince Chauhan",
    "Prince Chauhan Portfolio",
    "AI/ML Enthusiast",
    "Python Developer",
    "Backend Developer",
    "Machine Learning",
    "FastAPI",
    "RAG",
    "Artificial Intelligence",
    "Web Designer",
  ],

  authors: [{ name: "Prince Chauhan" }],
  creator: "Prince Chauhan",
  publisher: "Prince Chauhan",

  alternates: {
    canonical: "/",
  },

  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },

  openGraph: {
    title: "Prince Chauhan | AI/ML & Python Backend Developer",
    description:
      "Explore Prince Chauhan's AI/ML projects, Python backend development, RAG systems, and technical experience.",
    url: "https://princechauhan.vercel.app/",
    siteName: "Prince Chauhan Portfolio",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};


const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Prince Chauhan",
  url: "https://princechauhan.vercel.app/",

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://princechauhan.vercel.app/",
  },

  sameAs: [
    "https://github.com/erprincechauhan",
    "https://www.linkedin.com/in/erprincechauhan/",
    "https://leetcode.com/u/erprincechauhan/",
    "https://www.instagram.com/princechauhannn_/",
  ],

  jobTitle: "AI/ML Enthusiast and Backend Developer",
  description:
    "Prince Chauhan is an AI/ML enthusiast and Python backend developer working on machine learning, RAG systems, and backend applications.",
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Python",
    "Backend Development",
    "FastAPI",
    "REST APIs",
    "RAG Systems",
    "Large Language Models",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-black text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />

        {children}
      </body>
    </html>
  );
}
