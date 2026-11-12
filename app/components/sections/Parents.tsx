import type { JSX } from "react";

import Lines from "@/app/components/ui/Lines";
import styles from "@/app/invitation.module.css";
import { invitationData as d } from "@/app/data/invitation.data";

export default function Parents(): JSX.Element {
  return (
    <>
      <div className={styles.parents}>
        {d.parents.map((p) => {
          // En teléfono el título se parte antes de la última palabra
          // ("Padres del / novio", "Padres de la / novia").
          const cut = p.label.lastIndexOf(" ");
          const first = p.label.slice(0, cut);
          const last = p.label.slice(cut + 1);

          return (
            <div key={p.label}>
              <span className={styles.label}>
                {first}
                <br className={styles.phoneBreak} /> {last}
              </span>
              <p>
                <Lines items={p.names} />
              </p>
            </div>
          );
        })}
      </div>

      <p className={styles.introT}>{d.honor}</p>
    </>
  );
}
