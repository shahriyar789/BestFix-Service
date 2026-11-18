'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const LangContext = createContext({ lang: 'en', setLang: () => {} });

export function LangProvider({ children }) {
  const [lang, setLangState] = useState('en');

  // Saved language wapis load karo
  useEffect(() => {
    try {
      const saved = localStorage.getItem('bestfix-lang');
      if (saved === 'ur' || saved === 'en') setLangState(saved);
    } catch {}
  }, []);

  // <html lang dir> update karo (Urdu = RTL)
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr';
  }, [lang]);

  const setLang = useCallback((next) => {
    setLangState(next);
    try {
      localStorage.setItem('bestfix-lang', next);
    } catch {}
  }, []);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

// <T v={{ en: 'Hello', ur: 'ہیلو' }} />  ya  <T v="plain text" />
export function T({ v }) {
  const { lang } = useLang();
  if (typeof v === 'string' || typeof v === 'number') return <>{v}</>;
  return <>{v[lang] ?? v.en}</>;
}

// Attribute/placeholder jahan component nahi chal sakta wahan ye hook use karo
export function useT() {
  const { lang } = useLang();
  return (v) => (typeof v === 'string' ? v : v[lang] ?? v.en);
}
