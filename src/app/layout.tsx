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
  title: "Prince Chauhan — AI/ML Enthusiast & Backend Developer",
  description:
    "Portfolio of Prince Chauhan — an AI/ML Enthusiast and backend developer building production-style AI systems. Explore projects in RAG, LLM automation, and backend development.",
  keywords: [
    "Prince Chauhan",
    "AI/ML Enthusiast",
    "Backend Developer",
    "Python Developer",
    "Machine Learning",
    "LangChain",
    "RAG",
    "FastAPI",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Prince Chauhan" }],
  openGraph: {
    title: "Prince Chauhan — AI/ML Enthusiast & Backend Developer",
    description:
      "Building production-style AI systems and scalable backend applications.",
    type: "website",
  },
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
        {children}
      </body>
    </html>
  );
}
