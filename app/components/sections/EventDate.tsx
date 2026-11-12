import type { JSX } from "react";

import styles from "@/app/invitation.module.css";
import { invitationData as d } from "@/app/data/invitation.data";

export default function EventDate(): JSX.Element {
  return (
    <div className={styles.date}>
      <div>
        <span>{d.date.weekday}</span>
      </div>
      <div>
        <b>{d.date.day}</b>
        <span>{d.date.month}</span>
      </div>
      <div>
        <span>{d.date.year}</span>
        <br />
        <span style={{ color: "var(--ink)" }}>{d.date.time}</span>
      </div>
    </div>
  );
}
