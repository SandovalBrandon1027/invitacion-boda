import { Fragment } from "react";
import type { JSX } from "react";

import styles from "@/app/invitation.module.css";
import { cx } from "@/app/lib/cx";
import { invitationData as d } from "@/app/data/invitation.data";

export default function Contact(): JSX.Element {
  return (
    <>
      <div className={styles.label}>{d.contact.label}</div>
      <div className={styles.tel}>
        {d.contact.phones.map((p, i) => (
          <Fragment key={p.href}>
            {i > 0 && <>&nbsp; · &nbsp;</>}
            <a href={p.href}>{p.text}</a>
          </Fragment>
        ))}
      </div>
      <a
        className={cx(styles.btn, styles.fill)}
        target="_blank"
        rel="noopener noreferrer"
        href={d.contact.whatsappHref}
      >
        {d.contact.whatsappLabel}
      </a>
    </>
  );
}
