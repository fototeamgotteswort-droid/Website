"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { Heart, X } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { BANK } from "@/lib/links";
import Dialog from "./Dialog";
import { useT } from "./LanguageProvider";

// EPC-QR ("GiroCode"): wird von deutschen Banking-Apps als Ueberweisung erkannt.
const GIROCODE = [
  "BCD",
  "002",
  "1",
  "SCT",
  BANK.bic,
  BANK.recipient,
  BANK.iban,
].join("\n");

const GiveContext = createContext<(() => void) | null>(null);

/** Oeffnet den Spenden-Dialog — fuer "Geben" in Navigation und Footer. */
export function useOpenGive() {
  const open = useContext(GiveContext);
  if (!open) throw new Error("useOpenGive muss innerhalb von GiveProvider genutzt werden");
  return open;
}

export default function GiveProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <GiveContext.Provider value={open}>
      {children}
      <GiveFab onOpen={open} />
      {isOpen && <GiveDialog onClose={close} />}
    </GiveContext.Provider>
  );
}

function GiveFab({ onOpen }: { onOpen: () => void }) {
  const t = useT();
  return (
    <button
      type="button"
      className="give-fab"
      aria-label={t.give.fabLabel}
      aria-haspopup="dialog"
      onClick={onOpen}
    >
      <Heart size={28} strokeWidth={1.9} aria-hidden="true" />
    </button>
  );
}

function GiveDialog({ onClose }: { onClose: () => void }) {
  const t = useT();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(BANK.iban);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard nicht verfuegbar (z.b. ohne https) — label bleibt unveraendert
    }
  };

  return (
    <Dialog
      onClose={onClose}
      labelledBy="give-title"
      overlayClassName="give-overlay"
      className="give-dialog"
    >
      <div className="give-head">
        <h2 id="give-title">{t.give.heading}</h2>
        <button
          type="button"
          className="icon-btn"
          aria-label={t.give.close}
          onClick={onClose}
        >
          <X size={18} strokeWidth={2.2} aria-hidden="true" />
        </button>
      </div>
      <p>{t.give.text}</p>
      <div className="give-bank">
        <QRCodeSVG
          value={GIROCODE}
          size={96}
          level="M"
          marginSize={0}
          fgColor="#1B3B4D"
          bgColor="transparent"
          role="img"
          aria-label={t.give.qrLabel}
          className="give-qr"
        />
        <dl>
          <dt>{t.give.ibanLabel}</dt>
          <dd>{BANK.ibanDisplay}</dd>
          <dt>{t.give.recipientLabel}</dt>
          <dd>{BANK.recipient}</dd>
        </dl>
      </div>
      <div>
        <button type="button" className="btn btn-primary btn-sm" onClick={copy}>
          {copied ? t.give.copied : t.give.copy}
        </button>
        <span className="sr-only" aria-live="polite">
          {copied ? t.give.copied : ""}
        </span>
      </div>
      <small>{t.give.note}</small>
    </Dialog>
  );
}
