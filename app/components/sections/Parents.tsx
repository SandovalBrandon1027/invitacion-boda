import type { JSX } from "react";

import Lines from "@/app/components/ui/Lines";
import styles from "@/app/invitation.module.css";
import { invitationData as d } from "@/app/data/invitation.data";

export default function Parents(): JSX.Element {
  return (
    <>
      <div className={styles.parents}>
        {d.parents.map((p) => (
          <div key={p.label}>
            <span className={styles.label}>{p.label}</span>
            <p>
              <Lines items={p.names} />
            </p>
          </div>
        ))}
      </div>

      <p className={styles.introT}>{d.honor}</p>
    </>
  );
}
