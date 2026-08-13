import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CryptoLearn — Understand Crypto. From Zero to On-Chain.",
  description: "A structured learning platform for crypto, blockchain, trading, DeFi, tokenomics and on-chain concepts.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
