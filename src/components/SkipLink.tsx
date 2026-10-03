"use client";

import { useT } from "./LanguageProvider";

export default function SkipLink() {
  const t = useT();

  return (
    <a href="#main" className="skip-link">
      {t.skipLink}
    </a>
  );
}
