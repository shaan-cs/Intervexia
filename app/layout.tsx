import type { Metadata } from "next"; // Error fix: Metadata import missing tha
import { Poppins } from "next/font/google";
import "./globals.css";

// Poppins Configuration
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: 'swap',
});

// 🔥 SEO Metadata (Fixed & Optimized)
export const metadata: Metadata = {
  title: {
    default: "Intervexi | AI Interview Preparation Platform",
    template: "%s | Intervexi",
  },
  description:
    "Intervexi is an AI-powered interview preparation platform that helps students practice mock interviews, improve skills, and get job-ready with real-time feedback.",

  keywords: [
    "AI Interview Preparation",
    "Mock Interview Platform",
    "Technical Interview Practice",
    "Placement Preparation",
    "Intervexi",
    "AI Mock Interviews",
    "Interview Feedback AI"
  ],

  authors: [{ name: "Intervexi Team" }],
  creator: "Intervexi",
  publisher: "Intervexi",

  metadataBase: new URL("https://intervexi.com"),

  openGraph: {
    title: "Intervexi - AI Interview Preparation Platform",
    description: "Practice AI-based mock interviews and prepare for placements with Intervexi.",
    url: "https://intervexi.com",
    siteName: "Intervexi",
    images: [
      {
        url: "/og-image.png", // Ensure this image exists in your public folder
        width: 1200,
        height: 630,
        alt: "Intervexi Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Intervexi - AI Interview Preparation",
    description: "Get job-ready with AI-powered mock interviews and real-time feedback.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png", // Professional addition
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full font-sans selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}