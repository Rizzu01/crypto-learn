import Link from "next/link";
import Navbar from "../components/Navbar";
const topics=["Bitcoin","Ethereum","Blockchain","Trading","Futures","DeFi","Stablecoins","Tokenomics","Wallets","Security","Layer 2","On-chain Analysis"];
export default function Topics(){return <main><Navbar/><section className="simple-page shell"><span className="kicker">EXPLORE</span><h1>The crypto universe.</h1><p>Pick a subject and follow the concepts underneath it. No prior knowledge required.</p><div className="topic-grid">{topics.map((t,i)=><Link href="/learn" key={t}><span>0{i+1}</span><strong>{t}</strong><small>Explore topic →</small></Link>)}</div></section></main>}
