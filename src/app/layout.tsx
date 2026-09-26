import type { Metadata } from "next";
import { Source_Serif_4, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./studio.css";
import "./cosmos.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adityavardhanjain.dev"),
  title: "Adityavardhan Jain — AI/ML Engineer, Data Analyst & Researcher",
  description: "AI/ML engineer, data analyst, and researcher building intelligent systems across data, perception, and human-computer interaction.",
  alternates: { canonical: "/" },
  keywords: ["AI/ML Engineer", "Data Analyst", "Researcher", "Computer Vision", "Artificial Intelligence", "Brain-Computer Interfaces"],
  authors: [{ name: "Adityavardhan Jain" }],
  creator: "Adityavardhan Jain",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Adityavardhan Jain Portfolio",
    title: "Adityavardhan Jain — AI/ML Engineer, Data Analyst & Researcher",
    description: "Building intelligent systems across data, perception, and human-computer interaction.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Adityavardhan Jain — AI / ML, Data, Research" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adityavardhan Jain — AI/ML Engineer",
    description: "Building intelligent systems across AI, data, and perception.",
    images: ["/opengraph-image"],
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
    <html lang="en" className={`${sourceSerif.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Adityavardhan Jain",
              url: "https://adityavardhanjain.dev",
              jobTitle: "AI/ML Engineer, Data Analyst, and Researcher",
              sameAs: ["https://github.com/Adityavardhanjain", "https://linkedin.com/in/adityavardhan-jain/"],
            }),
          }}
        />
      </body>
    </html>
  );
}
