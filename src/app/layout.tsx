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
  title: "Prince Chauhan — AI Engineer & Data Scientist",
  description:
    "Portfolio of Prince Chauhan — an AI Engineer and Data Scientist building intelligent systems. Explore projects in RAG, NLP, computer vision, and full-stack development.",
  keywords: [
    "AI Engineer",
    "Data Scientist",
    "Python Developer",
    "Machine Learning",
    "Portfolio",
    "Prince Chauhan",
  ],
  authors: [{ name: "Prince Chauhan" }],
  openGraph: {
    title: "Prince Chauhan — AI Engineer & Data Scientist",
    description:
      "Building intelligent systems that solve real-world problems. AI, ML, and full-stack development.",
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
