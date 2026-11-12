import type { JSX } from "react";

import Reveal from "@/app/components/ui/Reveal";
import styles from "@/app/invitation.module.css";
import { cx } from "@/app/lib/cx";

interface PlaceProps {
  label: string;
  name: string;
  detail: string;
  href: string;
  /** Quita el margen superior (cuando va después de un divisor). */
  first?: boolean;
}

/** Tarjeta de lugar (ceremonia o recepción) con botón de ubicación. */
export default function Place({
  label,
  name,
  detail,
  href,
  first,
}: PlaceProps): JSX.Element {
  return (
    <Reveal>
      <div className={cx(styles.place, first && styles.first)}>
        <div className={styles.label}>{label}</div>
        <h3>{name}</h3>
        <p>{detail}</p>
        <a
          className={styles.btn}
          target="_blank"
          rel="noopener noreferrer"
          href={href}
        >
          Ver ubicación
        </a>
      </div>
    </Reveal>
  );
}
