import type { JSX } from "react";

import Lines from "@/app/components/ui/Lines";
import Reveal from "@/app/components/ui/Reveal";
import styles from "@/app/invitation.module.css";
import { invitationData as d } from "@/app/data/invitation.data";

export default function Baptism(): JSX.Element {
  return (
    <Reveal>
      <div className={styles.bap}>
        <div className={styles.label}>{d.baptism.label}</div>
        <div className={styles.big}>{d.baptism.name}</div>
        <div className={styles.pad}>
          <span className={styles.label}>{d.baptism.godparentsLabel}</span>
          <p>
            <Lines items={d.baptism.godparents} />
          </p>
        </div>
      </div>
    </Reveal>
  );
}
