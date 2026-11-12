import type { JSX } from "react";

import styles from "@/app/invitation.module.css";
import { cx } from "@/app/lib/cx";
import { invitationData as d } from "@/app/data/invitation.data";

interface EnvelopeIntroProps {
  opened: boolean;
  hidden: boolean;
  onOpen: () => void;
}

export default function EnvelopeIntro({
  opened,
  hidden,
  onOpen,
}: EnvelopeIntroProps): JSX.Element {
  return (
    <section className={cx(styles.intro, hidden && styles.hide)}>
      <div className={styles.to}>
        <div className={styles.label}>{d.intro.label}</div>
      </div>

      <div
        className={styles.scene}
        tabIndex={0}
        role="button"
        aria-label={d.intro.ariaLabel}
        onClick={onOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpen();
          }
        }}
      >
        <div className={cx(styles.envelope, opened && styles.open)}>
          <div className={styles.mini} />
          <div className={styles.bottom} />
          <div className={styles.pocket} />
          <div className={styles.flap} />
          <div className={styles.seal}>✉</div>
        </div>
      </div>

      <div className={styles.hint}>{d.intro.hint}</div>
    </section>
  );
}
