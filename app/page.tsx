import Link from "next/link";
import { ArrowRight, BookOpen, ChartNoAxesCombined, Compass, LockKeyhole, Play, Search, Sparkles, Wallet, Zap } from "lucide-react";

const tracks = [
  { level: "01", title: "Crypto 101", desc: "Start from zero. Learn money, Bitcoin, blockchain, wallets and the vocabulary of crypto.", meta: "12 lessons", tone: "light" },
  { level: "02", title: "How Crypto Works", desc: "Go beneath the surface: blocks, nodes, consensus, smart contracts and Layer 2s.", meta: "18 lessons", tone: "yellow" },
  { level: "03", title: "Markets & Trading", desc: "Understand spot, futures, leverage, liquidation, liquidity, order books and funding.", meta: "24 lessons", tone: "dark" },
  { level: "04", title: "Tokenomics & DeFi", desc: "Learn supply, unlocks, staking, burns, DEXs, AMMs, lending and protocol economics.", meta: "28 lessons", tone: "outline" },
];

const concepts = [
  ["Bitcoin", "The original decentralized digital asset."],
  ["Blockchain", "A shared ledger secured by a distributed network."],
  ["Wallets", "How keys let you control assets on-chain."],
  ["Stablecoins", "Crypto designed to track a reference value."],
  ["DeFi", "Financial applications built with smart contracts."],
  ["Tokenomics", "How a token's supply and incentives work."],
];

const stats = ["100+ concepts", "6 learning paths", "Interactive tools", "Beginner → Pro"];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link href="/" className="brand"><span className="brand-mark">C</span><span>CryptoLearn</span></Link>
        <nav>
          <Link href="/learn">Learn</Link>
          <Link href="/topics">Explore</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/glossary">Glossary</Link>
        </nav>
        <div className="header-actions"><button className="search-btn"><Search size={17}/> Search</button><Link className="start-btn" href="/learn">Start learning <ArrowRight size={16}/></Link></div>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot"/> THE CRYPTO LEARNING PLATFORM</div>
          <h1>Understand crypto.<br/><em>From zero to on-chain.</em></h1>
          <p className="hero-text">A structured, visual way to learn Bitcoin, blockchain, trading, DeFi, tokenomics and everything in between — without the jargon overload.</p>
          <div className="hero-cta"><Link className="primary-btn" href="/learn">Start from zero <ArrowRight size={18}/></Link><Link className="secondary-btn" href="/learn">Explore the curriculum <Compass size={17}/></Link></div>
          <div className="hero-proof">{stats.map((s) => <span key={s}>{s}</span>)}</div>
        </div>
        <div className="hero-map" aria-label="Crypto learning map">
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
          <div className="core"><span className="core-label">YOU ARE HERE</span><strong>CRYPTO</strong><span>Choose your path</span></div>
          <div className="map-node node-1"><BookOpen size={16}/> Learn</div>
          <div className="map-node node-2"><ChartNoAxesCombined size={16}/> Markets</div>
          <div className="map-node node-3"><Zap size={16}/> DeFi</div>
          <div className="map-node node-4"><Wallet size={16}/> Wallets</div>
          <div className="map-node node-5"><LockKeyhole size={16}/> Security</div>
        </div>
      </section>

      <section className="ticker"><div className="ticker-inner"><span>BTC</span><b>$117,420</b><i>+2.4%</i><span>ETH</span><b>$4,120</b><i>+1.8%</i><span>GLOBAL MARKET</span><b>$3.92T</b><i>+1.2%</i><span>LEARN THE WHY, NOT JUST THE WHAT.</span></div></section>

      <section className="section shell">
        <div className="section-heading"><div><span className="kicker">LEARNING PATHS</span><h2>One platform.<br/><em>Every level.</em></h2></div><p>Don't know where to begin? Start with the path that matches your current knowledge. Every track builds on the previous one.</p></div>
        <div className="tracks">{tracks.map((t) => <Link href="/learn" className={`track ${t.tone}`} key={t.level}><span className="track-no">{t.level}</span><div><h3>{t.title}</h3><p>{t.desc}</p><span className="track-meta">{t.meta} <ArrowRight size={14}/></span></div></Link>)}</div>
      </section>

      <section className="feature-band"><div className="shell feature-grid"><div><span className="kicker">LEARN BY UNDERSTANDING</span><h2>Simple when you need it.<br/><em>Deep when you want it.</em></h2><p>Every concept comes with three layers: a plain-English explanation, an intermediate breakdown and a deep dive for serious learners.</p><Link href="/learn" className="text-link">See how lessons work <ArrowRight size={16}/></Link></div><div className="lesson-card"><div className="lesson-top"><span>CONCEPT / 014</span><span>6 MIN READ</span></div><h3>What is a<br/><em>blockchain?</em></h3><div className="lesson-visual"><div className="block">BLOCK 1042<span>Tx · Tx · Tx</span></div><ArrowRight size={18}/><div className="block">BLOCK 1043<span>Tx · Tx · Tx</span></div><ArrowRight size={18}/><div className="block">BLOCK 1044<span>Tx · Tx · Tx</span></div></div><div className="lesson-footer"><span><Sparkles size={15}/> Plain English</span><span><Play size={15}/> Interactive</span></div></div></div></section>

      <section className="section shell concepts"><div className="section-heading"><div><span className="kicker">START ANYWHERE</span><h2>Explore the<br/><em>crypto universe.</em></h2></div><p>Jump into a topic you're curious about. We'll connect the dots and show you what to learn next.</p></div><div className="concept-grid">{concepts.map(([title,desc], i) => <Link href="/topics" className="concept" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{desc}</p><ArrowRight size={17}/></Link>)}</div></section>

      <section className="cta shell"><div className="cta-inner"><div><span className="kicker">NO EXPERIENCE REQUIRED</span><h2>Start with one<br/><em>simple question.</em></h2></div><div><p>What is crypto? We'll take it from there — step by step, concept by concept.</p><Link className="primary-btn" href="/learn">Begin Crypto 101 <ArrowRight size={18}/></Link></div></div></section>

      <footer className="footer shell"><Link href="/" className="brand"><span className="brand-mark">C</span><span>CryptoLearn</span></Link><span>Education first. Hype never.</span><span>© 2026 CryptoLearn</span></footer>
    </main>
  );
}
