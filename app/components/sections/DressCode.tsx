import Image from "next/image";
import type { JSX } from "react";

import Reveal from "@/app/components/ui/Reveal";
import styles from "@/app/invitation.module.css";
import { invitationData as d } from "@/app/data/invitation.data";

export default function DressCode(): JSX.Element {
  return (
    <Reveal>
      <div className={styles.dress}>
        <div className={styles.label}>{d.dressCode.label}</div>
        <Image
          className={styles.dressIcon}
          src="/dress-code.png"
          alt="Vestimenta formal: traje y vestido largo"
          width={640}
          height={900}
        />
      </div>
    </Reveal>
  );
}
