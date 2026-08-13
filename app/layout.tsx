import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CryptoLearn — Understand Crypto. From Zero to On-Chain.",
  description: "A structured, accessible learning platform for crypto, blockchain, trading, DeFi, tokenomics and on-chain concepts.",
};

const themeScript = `(() => { try { const saved = localStorage.getItem('cryptolearn-theme'); const dark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches); document.documentElement.dataset.theme = dark ? 'dark' : 'light'; } catch {} })()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }}/></head><body>{children}</body></html>;
}
