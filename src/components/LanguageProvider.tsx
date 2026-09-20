"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  DEFAULT_LANG,
  isLang,
  translations,
  type Dict,
  type Lang,
} from "@/lib/i18n";

const STORAGE_KEY = "cgw-lang";

// Die Sprachwahl liegt ausserhalb von React (localStorage + Browsersprache).
// useSyncExternalStore rendert serverseitig Deutsch und korrigiert direkt
// bei der Hydration — so bleibt das Markup konsistent.
const listeners = new Set<() => void>();
let cache: Lang | null = null;

function readLang(): Lang {
  let stored: string | null = null;
  try {
    stored = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    // privater modus o.ae. — dann entscheidet die browsersprache
  }
  if (isLang(stored)) return stored;
  return window.navigator.language.toLowerCase().startsWith("ru")
    ? "ru"
    : DEFAULT_LANG;
}

function getSnapshot(): Lang {
  cache ??= readLang();
  return cache;
}

function getServerSnapshot(): Lang {
  return DEFAULT_LANG;
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  // in anderen tabs umgestellt? dann hier mitziehen
  const onStorage = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY) return;
    cache = null;
    listeners.forEach((listener) => listener());
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onStorage);
  };
}

function storeLang(next: Lang) {
  cache = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // ohne speicher gilt die wahl nur fuer diesen besuch
  }
  listeners.forEach((listener) => listener());
}

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = translations[lang].documentTitle;
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang: storeLang, t: translations[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error(
      "useLanguage muss innerhalb von LanguageProvider genutzt werden",
    );
  }
  return ctx;
}

export function useT() {
  return useLanguage().t;
}
