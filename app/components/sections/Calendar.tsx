import type { JSX } from "react";

import styles from "@/app/invitation.module.css";
import { cx } from "@/app/lib/cx";
import { invitationData as d } from "@/app/data/invitation.data";

const WEEK_HEADS = ["L", "M", "M", "J", "V", "S", "D"];

export default function Calendar(): JSX.Element {
  const { year, month, day } = d.calendar;
  const offset = (new Date(year, month - 1, 1).getDay() + 6) % 7; // lunes primero
  const total = new Date(year, month, 0).getDate();

  return (
    <div className={styles.cal}>
      <div className={styles.calTitle}>
        {d.date.month} {d.date.year}
      </div>
      <div className={styles.calGrid}>
        {WEEK_HEADS.map((h, i) => (
          <div key={i} className={styles.calHead}>
            {h}
          </div>
        ))}
        {Array.from({ length: offset }, (_, i) => (
          <div key={`e${i}`} />
        ))}
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className={cx(styles.calDay, i + 1 === day && styles.mark)}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
