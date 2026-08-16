"use client";

import { useState } from "react";

export default function CopyField({
  value,
  copyValue,
}: {
  value: string;
  copyValue?: string;
}) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyValue ?? value);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      // clipboard nicht verfuegbar (z.b. ohne https) — label bleibt unveraendert
    }
  };

  return (
    <div className="copy-row">
      <span style={{ fontFamily: "var(--mono)", fontSize: "0.92rem" }}>
        {value}
      </span>
      <button
        type="button"
        className={`copy-btn${isCopied ? " copied" : ""}`}
        onClick={handleCopy}
        aria-live="polite"
      >
        {isCopied ? "Kopiert" : "Kopieren"}
      </button>
    </div>
  );
}
