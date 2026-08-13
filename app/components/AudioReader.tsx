"use client";

import { Pause, Play, Square, Volume2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function AudioReader({ text }: { text: string }) {
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  const start = () => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  };

  const pause = () => {
    window.speechSynthesis.pause();
    setSpeaking(false);
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  return <div className="audio-reader"><div className="audio-reader-copy"><span className="audio-icon"><Volume2 size={17}/></span><div><strong>Listen to this lesson</strong><small>Text-to-audio for accessible learning</small></div></div><div className="audio-actions">{speaking ? <button onClick={pause} aria-label="Pause"><Pause size={15}/></button> : <button onClick={start} aria-label="Read lesson aloud"><Play size={15}/></button>}<button onClick={stop} aria-label="Stop reading"><Square size={14}/></button></div></div>;
}
