import type { JSX } from "react";

import styles from "@/app/invitation.module.css";
import { invitationData as d } from "@/app/data/invitation.data";

export default function ThankYou(): JSX.Element {
  return (
    <div className={styles.gift}>
      <svg
        width="64"
        height="46"
        viewBox="0 0 64 46"
        fill="none"
        aria-hidden="true"
      >
        <rect x="2" y="4" width="60" height="40" fill="#e9e1d4" stroke="#a8895a" strokeWidth="1.2" />
        <polygon points="2,4 32,28 62,4" fill="#d6cab8" stroke="#a8895a" strokeWidth="1.2" strokeLinejoin="round" />
        <polyline points="2,44 24,24" stroke="#a8895a" strokeWidth="1" />
        <polyline points="62,44 40,24" stroke="#a8895a" strokeWidth="1" />
        <circle cx="32" cy="28" r="4.5" fill="#a8895a" />
      </svg>
      <p className={styles.thanks}>{d.thanks}</p>
    </div>
  );
}
