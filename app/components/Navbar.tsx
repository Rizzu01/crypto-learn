import Link from "next/link";
import { Search } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return <header className="site-header"><Link href="/" className="brand"><span className="brand-mark">C</span><span>CryptoLearn</span></Link><nav className="pill-nav"><Link href="/learn">Learn</Link><Link href="/topics">Explore</Link><Link href="/tools">Tools</Link><Link href="/glossary">Glossary</Link></nav><div className="header-actions"><button className="search-btn"><Search size={16}/><span>Search</span></button><ThemeToggle/><Link className="start-btn" href="/learn/crypto-101">Start learning</Link></div></header>;
}
