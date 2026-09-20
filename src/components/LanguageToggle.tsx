"use client";

import { LANGS, type Lang } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

const SHORT: Record<Lang, string> = { de: "DE", ru: "RU" };

export default function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="lang-toggle" role="group" aria-label={t.lang.label}>
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          aria-pressed={lang === code}
          title={t.lang[code]}
          onClick={() => setLang(code)}
        >
          <span aria-hidden="true">{SHORT[code]}</span>
          <span className="sr-only">{t.lang[code]}</span>
        </button>
      ))}
    </div>
  );
}
