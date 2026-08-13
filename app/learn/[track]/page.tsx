import Link from "next/link";
import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";
import Navbar from "../../components/Navbar";
import { tracks } from "../../../lib/curriculum";

export function generateStaticParams() { return tracks.map((track) => ({ track: track.slug })); }

export default async function TrackPage({ params }: { params: Promise<{ track: string }> }) {
  const { track: slug } = await params;
  const track = tracks.find((item) => item.slug === slug);
  if (!track) return <main><Navbar/><section className="simple-page shell"><h1>Path not found.</h1><Link className="primary-btn" href="/learn">Back to learning</Link></section></main>;
  return <main><Navbar/><section className={`path-hero shell accent-${track.accent}`}><div><span className="kicker">LEARNING PATH / {track.number}</span><h1>{track.title}</h1><p>{track.description}</p></div><div className="path-summary"><strong>{track.lessons.length}</strong><span>lessons</span><small>Text-first learning<br/>with audio support</small></div></section><section className="lesson-list shell"><div className="path-intro"><span>CURRICULUM</span><strong>Go at your own pace.</strong><p>Every lesson has a readable explanation and a deeper technical section. Use the audio button inside a lesson if you prefer listening.</p></div>{track.lessons.map((lesson, index) => <Link href={`/learn/${track.slug}/${lesson.id}`} className="lesson-row" key={lesson.id}><span className="lesson-number">{lesson.id}</span><span className="lesson-status">{index === 0 ? <PlayCircle size={17}/> : <CheckCircle2 size={17}/>}</span><div><span className="lesson-level">{lesson.level}</span><h2>{lesson.title}</h2><p>{lesson.summary}</p></div><ArrowRight size={18}/></Link>)}</section></main>;
}
