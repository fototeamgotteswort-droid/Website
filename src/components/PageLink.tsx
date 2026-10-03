"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, type ComponentProps, type MouseEvent } from "react";

// Ein Klick auf einen Seitenlink soll immer ganz oben landen. Next.js scrollt
// beim Wechsel nur, wenn der Anfang der neuen Seite nicht sichtbar ist, und
// bei einem Link auf die aktuelle Seite gar nicht. Deshalb merken wir uns den
// Klick und scrollen nach dem Seitenwechsel selbst nach oben. Vor/Zurueck im
// Browser setzt das Merkzeichen nicht und behaelt seine Scrollposition.
let scrollTopAfterNavigation = false;

function isPlainClick(event: MouseEvent<HTMLAnchorElement>) {
  return (
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey
  );
}

export default function PageLink({
  href,
  onClick,
  ...props
}: ComponentProps<typeof Link> & { href: string }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      scroll={false}
      onClick={(event) => {
        onClick?.(event);
        if (event.defaultPrevented || !isPlainClick(event)) return;
        if (href === pathname) {
          // gleiche Seite: kein Seitenwechsel, nur nach oben (und #anker entfernen)
          event.preventDefault();
          if (window.location.hash) window.history.replaceState(null, "", href);
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        scrollTopAfterNavigation = true;
      }}
      {...props}
    />
  );
}

/** Im Layout eingebunden: setzt nach einem Seitenlink-Klick die Position auf oben. */
export function ScrollToTopOnNavigate() {
  const pathname = usePathname();

  useEffect(() => {
    if (!scrollTopAfterNavigation) return;
    scrollTopAfterNavigation = false;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
