"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import type { JSX } from "react";

import styles from "../invitation.module.css";
import { cormorant, montserrat } from "../fonts";
import { invitationData as d } from "../data/invitation.data";

const eventTime = new Date(d.eventDate).getTime();

interface Remaining {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

function getRemaining(): Remaining {
  const r = Math.max(0, eventTime - Date.now());
  const pad = (n: number) => String(n).padStart(2, "0");

  return {
    days: String(Math.floor(r / 86400000)),
    hours: pad(Math.floor((r % 86400000) / 3600000)),
    minutes: pad(Math.floor((r % 3600000) / 60000)),
    seconds: pad(Math.floor((r % 60000) / 1000)),
  };
}

const cx = (...c: (string | false)[]) => c.filter(Boolean).join(" ");

function Lines({ items }: { items: string[] }): JSX.Element {
  return (
    <>
      {items.map((n, i) => (
        <Fragment key={n}>
          {i > 0 && <br />}
          {n}
        </Fragment>
      ))}
    </>
  );
}

export default function WeddingInvitation(): JSX.Element {
  const rootRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);
  const [opened, setOpened] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [shown, setShown] = useState(false);
  const [time, setTime] = useState<Remaining | null>(null);

  useEffect(() => {
    const tick = () => setTime(getRemaining());
    const first = window.setTimeout(tick, 0);
    const id = window.setInterval(tick, 1000);

    return () => {
      window.clearTimeout(first);
      window.clearInterval(id);
    };
  }, []);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach((t) => window.clearTimeout(t));
  }, []);

  function openEnvelope() {
    if (opened) return;
    setOpened(true);
    timers.current.push(
      window.setTimeout(() => setHidden(true), 1900),
      window.setTimeout(() => {
        setShown(true);
        rootRef.current?.scrollTo(0, 0);
      }, 2500)
    );
  }

  const v = (value: string | undefined) => value ?? "--";

  return (
    <div
      ref={rootRef}
      className={cx(styles.root, cormorant.variable, montserrat.variable)}
    >
      <section className={cx(styles.intro, hidden && styles.hide)}>
        <div className={styles.to}>
          <div className={styles.label}>{d.intro.label}</div>
        </div>

        <div
          className={styles.scene}
          tabIndex={0}
          role="button"
          aria-label={d.intro.ariaLabel}
          onClick={openEnvelope}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openEnvelope();
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

      <main className={cx(styles.card, shown && styles.show)}>
        <div className={styles.sheet}>
          <div className={styles.label}>{d.blessing}</div>
          <div className={styles.line} />

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
          <div className={styles.line} />

          <div className={styles.names}>
            {d.couple.groom}
            <em>&amp;</em>
            {d.couple.bride}
          </div>
          <div className={styles.line} />

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

          <div
            className={styles.countdown}
            role="timer"
            aria-label="Cuenta regresiva para el evento"
          >
            <div><b>{v(time?.days)}</b><span>Días</span></div>
            <div><b>{v(time?.hours)}</b><span>Horas</span></div>
            <div><b>{v(time?.minutes)}</b><span>Minutos</span></div>
            <div><b>{v(time?.seconds)}</b><span>Segundos</span></div>
          </div>

          <p className={styles.quote}>{d.quote1}</p>

          <div className={styles.place}>
            <div className={styles.label}>{d.ceremony.label}</div>
            <h3>{d.ceremony.name}</h3>
            <p>{d.ceremony.detail}</p>
            <a
              className={styles.btn}
              target="_blank"
              rel="noopener noreferrer"
              href={d.ceremony.href}
            >
              Ver ubicación
            </a>
          </div>
          <div className={styles.line} />

          <div className={cx(styles.place, styles.first)}>
            <div className={styles.label}>{d.reception.label}</div>
            <h3>{d.reception.name}</h3>
            <p>{d.reception.detail}</p>
            <a
              className={styles.btn}
              target="_blank"
              rel="noopener noreferrer"
              href={d.reception.href}
            >
              Ver ubicación
            </a>
          </div>
          <div className={styles.line} />

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

          <p className={styles.quote}>{d.quote2}</p>
          <div className={styles.line} />

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
          <div className={styles.line} />

          <div className={styles.gift}>
            <svg
              width="64"
              height="46"
              viewBox="0 0 64 46"
              fill="none"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="60" height="40" fill="#e9e1d4" stroke="#a8895a" strokeWidth="1.2" />
              <polygon points="2,4 32,28 62,4" fill="#d6cab8" stroke="#a8895a" strokeWidth="1.2" strokeLinejoin="round" />
              <polyline points="2,44 24,24" stroke="#a8895a" strokeWidth="1" />
              <polyline points="62,44 40,24" stroke="#a8895a" strokeWidth="1" />
              <circle cx="32" cy="28" r="4.5" fill="#a8895a" />
            </svg>
            <p className={styles.thanks}>{d.thanks}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
