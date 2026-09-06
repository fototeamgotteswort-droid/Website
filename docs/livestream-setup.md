# Livestream-Button einrichten

Der Button „Online mitfeiern" verlinkt auf `/api/live`. Diese Route fragt bei
jedem Klick (serverseitig, mit 60 Sekunden Cache) bei YouTube nach der gerade
laufenden Übertragung und leitet direkt dorthin weiter. Der Link auf der
Website muss dadurch nie geändert werden — auch bei **nicht gelisteten**
Streams, die über die normale YouTube-Kanalseite nicht auffindbar sind.

Reihenfolge der Weiterleitung:

1. laufende Übertragung (`broadcastStatus=active`)
2. sonst die nächste geplante Übertragung (`broadcastStatus=upcoming`) —
   Besucher landen auf der Countdown-Seite
3. sonst der Wert aus `YOUTUBE_FALLBACK_URL`, standardmäßig `/#gottesdienst`

Solange die Zugangsdaten fehlen, greift automatisch Schritt 3. Der Button
funktioniert also schon jetzt, ohne kaputte Links.

## Einmalige Einrichtung

### 1. Google-Cloud-Projekt

- [console.cloud.google.com](https://console.cloud.google.com) → neues Projekt
  anlegen, z. B. `cgw-website`.
- **APIs & Dienste → Bibliothek** → „YouTube Data API v3" aktivieren.

### 2. OAuth-Zustimmungsbildschirm

- Nutzertyp **Extern**, App-Name und Support-Mail eintragen.
- Scope hinzufügen: `https://www.googleapis.com/auth/youtube.readonly`
- **Wichtig:** die App auf **„In Produktion"** veröffentlichen. Bleibt sie im
  Test-Modus, läuft der Refresh Token nach 7 Tagen ab und der Button fällt
  stillschweigend auf den Fallback zurück.

### 3. OAuth-Client

- **Anmeldedaten → Anmeldedaten erstellen → OAuth-Client-ID**
- Typ: **Webanwendung**
- Autorisierter Weiterleitungs-URI:
  `https://developers.google.com/oauthplayground`
- Client-ID und Client-Secret notieren.

### 4. Refresh Token erzeugen

- [OAuth Playground](https://developers.google.com/oauthplayground) öffnen.
- Zahnrad oben rechts → **Use your own OAuth credentials** → Client-ID und
  Secret eintragen.
- Links unter „YouTube Data API v3" den Scope
  `https://www.googleapis.com/auth/youtube.readonly` auswählen →
  **Authorize APIs**.
- Mit dem Google-Konto anmelden, dem der Kanal gehört. Ist der Kanal ein
  **Brand-Account**, dort den richtigen Kanal auswählen — sonst fragt die API
  später den falschen Kanal ab.
- **Exchange authorization code for tokens** → den **Refresh token** kopieren.

### 5. In Vercel hinterlegen

Project Settings → Environment Variables (für Production **und** Preview):

| Variable | Wert |
| --- | --- |
| `YOUTUBE_CLIENT_ID` | aus Schritt 3 |
| `YOUTUBE_CLIENT_SECRET` | aus Schritt 3 |
| `YOUTUBE_REFRESH_TOKEN` | aus Schritt 4 |
| `YOUTUBE_FALLBACK_URL` | optional, z. B. die YouTube-Kanaladresse |

Danach einmal neu deployen.

## Kontingent

`liveBroadcasts.list` kostet 1 Einheit pro Abfrage bei 10.000 Einheiten pro
Tag. Durch den 60-Sekunden-Cache fallen selbst an einem Sonntag nur wenige
hundert Abfragen an — unkritisch.

## Hinweis zum Datenschutz

Der Button ist ein reiner Weiterleitungs-Link; YouTube wird erst im neuen Tab
geladen. Es werden keine YouTube-Ressourcen auf der eigenen Seite eingebunden,
der Cookie-Consent bleibt davon also unberührt.
