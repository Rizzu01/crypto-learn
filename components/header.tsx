"use client";
import Link from "next/link";
import { ArrowRight, Moon, Sun, Languages } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header(){
  const [dark,setDark]=useState(false);
  const [lang,setLang]=useState<"en"|"hi">("en");
  useEffect(()=>{
    const saved=localStorage.getItem("crypto-theme");
    const isDark=saved?saved==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(isDark); document.documentElement.dataset.theme=isDark?"dark":"light";
    const savedLang=(localStorage.getItem("crypto-language") as "en"|"hi")||"en";
    setLang(savedLang); document.documentElement.lang=savedLang;
  },[]);
  const toggleTheme=()=>{const next=!dark;setDark(next);document.documentElement.dataset.theme=next?"dark":"light";localStorage.setItem("crypto-theme",next?"dark":"light")};
  const toggleLanguage=()=>{const next=lang==="en"?"hi":"en";setLang(next);document.documentElement.lang=next;localStorage.setItem("crypto-language",next);window.dispatchEvent(new Event("crypto-language-change"))};
  return <header className="site-header">
    <Link href="/" className="brand"><span className="brand-mark">C</span><span>CryptoLearn</span></Link>
    <nav className="pill-nav"><Link href="/learn/crypto-101">Learn</Link><Link href="/topics">Explore</Link><Link href="/tools">Tools</Link><Link href="/glossary">Glossary</Link></nav>
    <div className="header-actions">
      <button className="control-pill" onClick={toggleLanguage} aria-label="Change language"><Languages size={15}/><span>{lang==="en"?"हिन्दी":"English"}</span></button>
      <button className="control-pill" onClick={toggleTheme} aria-label="Toggle light and dark mode">{dark?<Sun size={15}/>:<Moon size={15}/>}<span>{dark?"Light":"Dark"}</span></button>
      <Link className="start-btn" href="/learn/crypto-101">Start learning <ArrowRight size={15}/></Link>
    </div>
  </header>
}
