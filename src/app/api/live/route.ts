import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const BROADCASTS_URL = "https://www.googleapis.com/youtube/v3/liveBroadcasts";

// Wie lange ein Ergebnis serverseitig zwischengespeichert wird. Verhindert,
// dass jeder Klick eine YouTube-Anfrage auslöst.
const LOOKUP_TTL = 60_000;
// Sicherheitsabstand, damit ein Access Token nicht mitten im Request abläuft.
const TOKEN_SKEW = 60_000;

type Cached<T> = { value: T; expiresAt: number };

let tokenCache: Cached<string> | null = null;
let streamCache: Cached<string | null> | null = null;

function fallbackUrl() {
  return process.env.YOUTUBE_FALLBACK_URL || "/#gottesdienst";
}

async function getAccessToken(): Promise<string> {
  if (tokenCache && tokenCache.expiresAt > Date.now()) return tokenCache.value;

  const clientId = process.env.YOUTUBE_CLIENT_ID;
  const clientSecret = process.env.YOUTUBE_CLIENT_SECRET;
  const refreshToken = process.env.YOUTUBE_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error(
      "YOUTUBE_CLIENT_ID, YOUTUBE_CLIENT_SECRET oder YOUTUBE_REFRESH_TOKEN fehlt"
    );
  }

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Token-Refresh fehlgeschlagen (${res.status}): ${await res.text()}`);
  }

  const data = (await res.json()) as { access_token: string; expires_in: number };
  tokenCache = {
    value: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000 - TOKEN_SKEW,
  };
  return tokenCache.value;
}

async function findBroadcast(
  accessToken: string,
  status: "active" | "upcoming"
): Promise<string | null> {
  const url = new URL(BROADCASTS_URL);
  url.searchParams.set("part", "id,snippet");
  url.searchParams.set("broadcastStatus", status);
  url.searchParams.set("broadcastType", "all");
  url.searchParams.set("maxResults", "5");

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`liveBroadcasts.list fehlgeschlagen (${res.status}): ${await res.text()}`);
  }

  const data = (await res.json()) as {
    items?: { id: string; snippet?: { scheduledStartTime?: string } }[];
  };
  const items = data.items ?? [];
  if (items.length === 0) return null;

  // Bei mehreren Treffern die am frühesten geplante Übertragung nehmen.
  const sorted = [...items].sort((a, b) => {
    const ta = Date.parse(a.snippet?.scheduledStartTime ?? "") || 0;
    const tb = Date.parse(b.snippet?.scheduledStartTime ?? "") || 0;
    return ta - tb;
  });
  return sorted[0].id;
}

async function currentStreamUrl(): Promise<string | null> {
  if (streamCache && streamCache.expiresAt > Date.now()) return streamCache.value;

  const accessToken = await getAccessToken();
  const id =
    (await findBroadcast(accessToken, "active")) ??
    (await findBroadcast(accessToken, "upcoming"));

  const value = id ? `https://www.youtube.com/watch?v=${id}` : null;
  streamCache = { value, expiresAt: Date.now() + LOOKUP_TTL };
  return value;
}

export async function GET(request: Request) {
  let target = fallbackUrl();

  try {
    target = (await currentStreamUrl()) ?? fallbackUrl();
  } catch (err) {
    console.error("[api/live]", err);
  }

  // Relative Fallbacks gegen die aktuelle Domain auflösen, absolute URLs
  // (YouTube) bleiben unverändert.
  return NextResponse.redirect(new URL(target, request.url), {
    status: 307,
    headers: { "Cache-Control": "no-store" },
  });
}
