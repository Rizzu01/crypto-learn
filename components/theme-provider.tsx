"use client";
import { useEffect } from "react";
export default function ThemeProvider({children}:{children:React.ReactNode}){
  useEffect(()=>{
    const saved=localStorage.getItem("crypto-theme");
    const dark=saved?saved==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.dataset.theme=dark?"dark":"light";
  },[]);
  return <>{children}</>;
}
