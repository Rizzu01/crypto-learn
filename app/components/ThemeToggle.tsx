"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cryptolearn-theme");
    const isDark = saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    setDark(isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    document.documentElement.dataset.theme = next ? "dark" : "light";
    localStorage.setItem("cryptolearn-theme", next ? "dark" : "light");
    setDark(next);
  };

  return <button className="theme-toggle" onClick={toggle} aria-label={`Switch to ${dark ? "light" : "dark"} mode`} title={`Switch to ${dark ? "light" : "dark"} mode`}>{dark ? <Sun size={16}/> : <Moon size={16}/>}<span>{dark ? "Light" : "Dark"}</span></button>;
}
