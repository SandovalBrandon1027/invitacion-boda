"use client";

import { useEffect, useState } from "react";

export interface Remaining {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

function getRemaining(eventTime: number): Remaining {
  const r = Math.max(0, eventTime - Date.now());
  const pad = (n: number) => String(n).padStart(2, "0");

  return {
    days: String(Math.floor(r / 86400000)),
    hours: pad(Math.floor((r % 86400000) / 3600000)),
    minutes: pad(Math.floor((r % 3600000) / 60000)),
    seconds: pad(Math.floor((r % 60000) / 1000)),
  };
}

/**
 * Tiempo restante hasta la fecha del evento.
 * Devuelve `null` hasta que monta en el cliente (evita desajustes de hidratación).
 */
export function useCountdown(eventDate: string): Remaining | null {
  const [time, setTime] = useState<Remaining | null>(null);

  useEffect(() => {
    const eventTime = new Date(eventDate).getTime();
    const tick = () => setTime(getRemaining(eventTime));
    const first = window.setTimeout(tick, 0);
    const id = window.setInterval(tick, 1000);

    return () => {
      window.clearTimeout(first);
      window.clearInterval(id);
    };
  }, [eventDate]);

  return time;
}
