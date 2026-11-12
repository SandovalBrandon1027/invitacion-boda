"use client";

import { useEffect, useRef, useState } from "react";
import type { JSX, ReactNode } from "react";

import styles from "@/app/invitation.module.css";
import { cx } from "@/app/lib/cx";

/** Hace aparecer el contenido con un suave desplazamiento al entrar en pantalla. */
export default function Reveal({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cx(styles.reveal, seen && styles.in)}>
      {children}
    </div>
  );
}
