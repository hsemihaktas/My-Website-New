// Basit bir dil context'i ve provider'ı
'use client';
import { createContext, useContext, useState } from 'react';

export type Lang = 'tr' | 'en';

const LangContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
}>({ lang: 'tr', setLang: () => {} });

import { useEffect } from 'react';

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  // Dil değişimini localStorage'a yaz
  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    if (typeof window !== 'undefined' && (newLang === 'tr' || newLang === 'en')) {
      window.localStorage.setItem('lang', newLang);
    }
  };

  // İlk yüklemede localStorage'dan oku
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = window.localStorage.getItem('lang');
      if (storedLang === 'tr' || storedLang === 'en') {
        setLangState(storedLang);
      }
    }
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
