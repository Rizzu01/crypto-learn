import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, CircleHelp } from "lucide-react";
import Navbar from "../../../components/Navbar";
import AudioReader from "../../../components/AudioReader";
import { tracks } from "../../../../lib/curriculum";

export function generateStaticParams() { return tracks.flatMap((track) => track.lessons.map((lesson) => ({ track: track.slug, lesson: lesson.id }))); }

export default async function LessonPage({ params }: { params: Promise<{ track: string; lesson: string }> }) {
  const { track: slug, lesson: lessonId } = await params;
  const track = tracks.find((item) => item.slug === slug);
  const lesson = track?.lessons.find((item) => item.id === lessonId);
  if (!track || !lesson) return <main><Navbar/><section className="simple-page shell"><h1>Lesson not found.</h1><Link className="primary-btn" href="/learn">Back to learning</Link></section></main>;
  const index = track.lessons.findIndex((item) => item.id === lesson.id);
  const next = track.lessons[index + 1];
  const previous = track.lessons[index - 1];
  const spokenText = `${lesson.title}. ${lesson.body} Deep dive. ${lesson.deepDive}`;
  return <main><Navbar/><article className={`lesson-page shell accent-${track.accent}`}><Link className="back-link" href={`/learn/${track.slug}`}><ArrowLeft size={15}/> {track.title}</Link><header className="lesson-heading"><span className="kicker">LESSON {lesson.id} / {track.lessons.length} · {lesson.level.toUpperCase()}</span><h1>{lesson.title}</h1><p>{lesson.summary}</p></header><AudioReader text={spokenText}/><div className="lesson-content"><section className="lesson-section"><span className="section-label"><BookOpen size={15}/> IN PLAIN ENGLISH</span><p className="lesson-lead">{lesson.body}</p></section><section className="lesson-section deep"><span className="section-label"><CircleHelp size={15}/> GO DEEPER</span><h2>The mental model</h2><p>{lesson.deepDive}</p><div className="note"><strong>Remember</strong><span>Crypto concepts connect to one another. When a term feels unfamiliar, open the glossary and come back to the lesson with the missing piece.</span></div></section></div><nav className="lesson-nav">{previous ? <Link href={`/learn/${track.slug}/${previous.id}`}><ArrowLeft size={16}/><span><small>Previous</small>{previous.title}</span></Link> : <span/>}{next ? <Link href={`/learn/${track.slug}/${next.id}`} className="next"><span><small>Next lesson</small>{next.title}</span><ArrowRight size={16}/></Link> : <Link href={`/learn/${track.slug}`} className="next"><span><small>Path complete</small>Back to curriculum</span><ArrowRight size={16}/></Link>}</nav></article></main>;
}
