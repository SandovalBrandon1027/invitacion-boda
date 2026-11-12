import Image from "next/image";
import type { JSX } from "react";

import Reveal from "@/app/components/ui/Reveal";
import styles from "@/app/invitation.module.css";
import { invitationData as d } from "@/app/data/invitation.data";

function Photo(): JSX.Element {
  const g = d.gallery;

  return (
    <div className={styles.photoWrap}>
      <div className={styles.photo}>
        {g.photo ? (
          <Image
            src={g.photo}
            alt={g.alt}
            fill
            sizes="(max-width: 520px) 80vw, 300px"
          />
        ) : (
          <>
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              aria-hidden="true"
            >
              <rect x="3" y="6" width="18" height="14" rx="2" />
              <circle cx="12" cy="13" r="3.5" />
              <path d="M8 6l1.5-2h5L16 6" />
            </svg>
            <span>{g.placeholder}</span>
          </>
        )}
      </div>
    </div>
  );
}

/** Foto de los novios con la frase final debajo. */
export default function Gallery(): JSX.Element {
  return (
    <Reveal>
      <div className={styles.label}>{d.gallery.label}</div>
      <Photo />
      <p className={styles.quote}>{d.quote2}</p>
    </Reveal>
  );
}
