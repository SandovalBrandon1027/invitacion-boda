import type { JSX } from "react";

import styles from "@/app/invitation.module.css";
import { cx } from "@/app/lib/cx";
import { invitationData as d } from "@/app/data/invitation.data";

export default function Blessing(): JSX.Element {
  return <div className={cx(styles.label, styles.bigLabel)}>{d.blessing}</div>;
}
