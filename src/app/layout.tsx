import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { QuizProvider } from './QuizContext';

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SecurePro Hub",
  description: "SecurePro Hub: Cybersecurity & Professional Conduct Training Platform",
};

const home = {
  'background': 'linear-gradient(90deg, rgba(204,204,204,1) 0%, rgba(255,255,255,1) 22%, rgba(255,255,255,1) 76%, rgba(204,204,204,1) 100%)'
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" h-screen flex flex-col justify-center items-center gap-2" style={home}>
          <QuizProvider>
            {children}
          </QuizProvider>
        </div>
      </body>
    </html>
  );
}
