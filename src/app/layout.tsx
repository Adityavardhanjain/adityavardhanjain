import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adityavardhan Jain | AI/ML Engineer, Data Analyst & Research Enthusiast",
  description: "Portfolio of Adityavardhan Jain, exploring artificial intelligence, machine learning, data analytics, computer vision, brain-computer interfaces, intelligent systems, and interdisciplinary research.",
  keywords: ["AI", "Machine Learning", "Data Science", "Portfolio", "Brain-Computer Interface", "Computer Vision", "Research"],
  authors: [{ name: "Adityavardhan Jain" }],
  creator: "Adityavardhan Jain",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adityavardhanjain.dev",
    siteName: "Adityavardhan Jain Portfolio",
    title: "Adityavardhan Jain | AI/ML Engineer, Data Analyst & Research Enthusiast",
    description: "Portfolio exploring artificial intelligence, machine learning, data analytics, computer vision, brain-computer interfaces, and interdisciplinary research.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adityavardhan Jain | AI/ML Engineer",
    description: "Building intelligent systems at the intersection of AI, data, and human cognition.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen bg-[#030810] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
