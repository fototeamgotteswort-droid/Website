"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Modales Fenster mit Fokus-Falle: Tab bleibt im Dialog, Esc und ein Klick
 * auf den Hintergrund schliessen, danach geht der Fokus zurueck zum Ausloeser.
 */
export default function Dialog({
  onClose,
  labelledBy,
  overlayClassName,
  className,
  children,
}: {
  onClose: () => void;
  labelledBy: string;
  overlayClassName: string;
  className: string;
  children: ReactNode;
}) {
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = panel.current;
    if (!el) return;
    const opener = document.activeElement as HTMLElement | null;
    el.querySelector<HTMLElement>("button")?.focus();
    // Seite dahinter soll nicht mitscrollen
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = Array.from(
        el.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      opener?.focus();
    };
  }, [onClose]);

  return (
    <div
      className={overlayClassName}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={panel}
        className={className}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
      >
        {children}
      </div>
    </div>
  );
}
