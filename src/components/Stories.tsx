"use client";

import { CirclePlay } from "lucide-react";
import { STORIES_HIGHLIGHT_URL, STORY_REEL_URL } from "@/lib/links";
import { useT } from "./LanguageProvider";
import Reveal from "./Reveal";

/** Section laut Briefing optional — auf false setzen, um sie auszublenden. */
export const SHOW_STORIES = true;

export default function Stories() {
  const t = useT();
  if (!SHOW_STORIES) return null;

  return (
    <section className="section section-deep" id="geschichten">
      <div className="wrap stories">
        {/* Thumbnail oeffnet das Reel auf Instagram, kein Autoplay */}
        <a
          href={STORY_REEL_URL}
          className="stories-reel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.stories.reel}
        >
          <CirclePlay size={44} strokeWidth={1.5} aria-hidden="true" />
          <span aria-hidden="true">{t.stories.reelPlaceholder}</span>
        </a>
        <Reveal className="stories-body">
          <figure>
            <blockquote>
              <p>{t.stories.quote}</p>
            </blockquote>
            <figcaption>{t.stories.person}</figcaption>
          </figure>
          <a
            href={STORIES_HIGHLIGHT_URL}
            className="text-link on-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.stories.more} <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
