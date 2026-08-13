import Link from "next/link";
import { ArrowRight, CheckCircle2, Lock, Play, Search } from "lucide-react";

const lessons = [
  ["01", "What is money?", "Why money exists and how it evolved.", "Beginner"],
  ["02", "What is cryptocurrency?", "The core idea behind digital-native money.", "Beginner"],
  ["03", "What is Bitcoin?", "The problem Bitcoin was designed to solve.", "Beginner"],
  ["04", "What is a blockchain?", "The shared ledger underneath crypto.", "Beginner"],
  ["05", "How does a transaction work?", "From signing to confirmation.", "Beginner"],
  ["06", "Wallets & private keys", "Ownership, custody and signing.", "Beginner"],
  ["07", "Proof of Work", "How Bitcoin reaches consensus.", "Intermediate"],
  ["08", "Proof of Stake", "Validators, staking and network security.", "Intermediate"],
];

export default function LearnPage() {
  return <main><header className="site-header"><Link href="/" className="brand"><span className="brand-mark">C</span><span>CryptoLearn</span></Link><nav><Link className="active" href="/learn">Learn</Link><Link href="/topics">Explore</Link><Link href="/tools">Tools</Link><Link href="/glossary">Glossary</Link></nav><button className="search-btn"><Search size={17}/> Search</button></header><section className="learn-hero shell"><span className="kicker">LEARNING PATH / 01</span><h1>Crypto 101</h1><p>Build the mental model you need before diving into markets, DeFi and on-chain data.</p><div className="progress"><span/><b>0%</b></div></section><section className="lesson-list shell">{lessons.map(([n,t,d,l],i)=><Link href="/learn" className="lesson-row" key={n}><span className="lesson-number">{n}</span><span className="lesson-status">{i===0?<Play size={15}/>:i<4?<CheckCircle2 size={15}/>:<Lock size={15}/>}</span><div><span className="lesson-level">{l}</span><h2>{t}</h2><p>{d}</p></div><ArrowRight size={18}/></Link>)}</section></main>;
}
