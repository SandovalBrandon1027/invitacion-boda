import type { JSX } from "react";

import Reveal from "@/app/components/ui/Reveal";
import styles from "@/app/invitation.module.css";

export default function Quote({ text }: { text: string }): JSX.Element {
  return (
    <Reveal>
      <p className={styles.quote}>{text}</p>
    </Reveal>
  );
}
