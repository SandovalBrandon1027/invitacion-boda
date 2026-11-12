"use client";

import type { JSX } from "react";

import styles from "@/app/invitation.module.css";
import { useCountdown } from "@/app/hooks/useCountdown";
import { invitationData as d } from "@/app/data/invitation.data";

export default function Countdown(): JSX.Element {
  const time = useCountdown(d.eventDate);
  const v = (value: string | undefined) => value ?? "--";

  return (
    <div
      className={styles.countdown}
      role="timer"
      aria-label="Cuenta regresiva para el evento"
    >
      <div><b>{v(time?.days)}</b><span>Días</span></div>
      <div><b>{v(time?.hours)}</b><span>Horas</span></div>
      <div><b>{v(time?.minutes)}</b><span>Minutos</span></div>
      <div><b>{v(time?.seconds)}</b><span>Segundos</span></div>
    </div>
  );
}
