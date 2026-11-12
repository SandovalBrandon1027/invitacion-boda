import type { JSX } from "react";

import styles from "@/app/invitation.module.css";

export default function Divider(): JSX.Element {
  return <div className={styles.line} />;
}
