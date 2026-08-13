import Link from "next/link";
import { ArrowRight, BookOpen, Headphones, Layers3, LineChart, Coins } from "lucide-react";
import Navbar from "../components/Navbar";
import { tracks } from "../../lib/curriculum";

const icons = [BookOpen, Layers3, LineChart, Coins];

export default function LearnPage() {
  return <main><Navbar/><section className="learn-hero shell"><span className="kicker">THE CURRICULUM</span><h1>Choose your path.</h1><p>Every level has a dedicated page. Learn in text, open deeper explanations when you're ready, and listen aloud with your device's built-in speech engine.</p><div className="accessibility-chip"><Headphones size={16}/> Every lesson supports text-to-audio</div></section><section className="path-grid shell">{tracks.map((track, index) => { const Icon = icons[index]; return <Link href={`/learn/${track.slug}`} className={`path-card accent-${track.accent}`} key={track.slug}><div className="path-card-top"><span>{track.number}</span><Icon size={20}/></div><div><h2>{track.title}</h2><p>{track.description}</p></div><div className="path-card-bottom"><strong>{track.lessons.length} lessons</strong><span>Open path <ArrowRight size={15}/></span></div></Link>; })}</section></main>;
}
