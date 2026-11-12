import type { JSX } from "react";

import styles from "@/app/invitation.module.css";
import { invitationData as d } from "@/app/data/invitation.data";

export default function Couple(): JSX.Element {
  return (
    <div className={styles.arch}>
      <div className={styles.names}>
        {d.couple.groom}
        <em>&amp;</em>
        {d.couple.bride}
      </div>
    </div>
  );
}
