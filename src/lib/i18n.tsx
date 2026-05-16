"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "zh";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (en: string, zh: string) => string };

const LangCtx = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (en) => en });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("th-lang") as Lang)) || null;
    if (saved === "en" || saved === "zh") {
      setLangState(saved);
      document.documentElement.lang = saved === "zh" ? "zh-CN" : "en";
    } else {
      const navLang = typeof navigator !== "undefined" ? navigator.language : "en";
      const initial: Lang = navLang.toLowerCase().startsWith("zh") ? "zh" : "en";
      setLangState(initial);
      document.documentElement.lang = initial === "zh" ? "zh-CN" : "en";
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("th-lang", l);
      document.documentElement.lang = l === "zh" ? "zh-CN" : "en";
    }
  };

  const t = (en: string, zh: string) => (lang === "zh" ? zh : en);

  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);

export type Bi = { en: string; zh: string };
export const bi = (en: string, zh: string): Bi => ({ en, zh });
