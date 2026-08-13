import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "../components/theme-provider";
export const metadata: Metadata={title:"CryptoLearn — Understand Crypto. From Zero to On-Chain.",description:"A structured learning platform for crypto, blockchain, markets, DeFi, tokenomics and on-chain concepts."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><ThemeProvider>{children}</ThemeProvider></body></html>}
