import type { Metadata } from "next";
import localFont from "next/font/local";
import { Providers } from "./providers";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Attention Factory | Your AI Partner",
  description: "For people who would rather leverage AI than talk about leveraging AI.",
  authors: [{ name: "Mercy Thaddeus", url: "https://mercythaddeus.xyz" }, { name: "Joshua Omobola", url: "https://koha.wtf" }],
  creator: "Joshua Omobola",
  publisher: "Joshua Omobola",
  openGraph: {
    title: "Attention Factory | Your AI Partner",
    description: "For people who would rather leverage AI than talk about leveraging AI.",
    url: "https://attentionfactory.io",
    siteName: "Attention Factory",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
