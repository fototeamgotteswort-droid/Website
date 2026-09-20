"use client";

import { useT } from "./LanguageProvider";

export default function SkipLink() {
  const t = useT();

  return (
    <a href="#ueber-uns" className="skip-link">
      {t.skipLink}
    </a>
  );
}
