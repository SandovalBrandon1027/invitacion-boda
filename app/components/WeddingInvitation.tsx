"use client";

import { useEffect, useRef, useState } from "react";
import type { JSX } from "react";

import styles from "../invitation.module.css";
import { cormorant, montserrat } from "../fonts";
import { cx } from "../lib/cx";
import { invitationData as d } from "../data/invitation.data";
import { useBackgroundMusic } from "../hooks/useBackgroundMusic";

import Divider from "./ui/Divider";
import MusicButton from "./ui/MusicButton";
import EnvelopeIntro from "./sections/EnvelopeIntro";
import Blessing from "./sections/Blessing";
import Parents from "./sections/Parents";
import Couple from "./sections/Couple";
import EventDate from "./sections/EventDate";
import Countdown from "./sections/Countdown";
import Calendar from "./sections/Calendar";
import Quote from "./sections/Quote";
import Place from "./sections/Place";
import Baptism from "./sections/Baptism";
import Contact from "./sections/Contact";
import DressCode from "./sections/DressCode";
import Gallery from "./sections/Gallery";
import ThankYou from "./sections/ThankYou";

const MUSIC_SRC = "/EdSheeran-Perfect.mp3";
const MUSIC_VOLUME = 0.25; // suave (0 a 1)

export default function WeddingInvitation(): JSX.Element {
  const rootRef = useRef<HTMLDivElement>(null);
  const timers = useRef<number[]>([]);
  const [opened, setOpened] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [shown, setShown] = useState(false);

  const { audioRef, playing, start, toggle } =
    useBackgroundMusic(MUSIC_VOLUME);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach((t) => window.clearTimeout(t));
  }, []);

  function openEnvelope() {
    if (opened) return;
    setOpened(true);
    start();
    timers.current.push(
      window.setTimeout(() => setHidden(true), 1900),
      window.setTimeout(() => {
        setShown(true);
        rootRef.current?.scrollTo(0, 0);
      }, 2500)
    );
  }

  return (
    <div
      ref={rootRef}
      className={cx(styles.root, cormorant.variable, montserrat.variable)}
    >
      <audio ref={audioRef} src={MUSIC_SRC} loop preload="none" />

      {opened && <MusicButton playing={playing} onToggle={toggle} />}

      <EnvelopeIntro opened={opened} hidden={hidden} onOpen={openEnvelope} />

      <main className={cx(styles.card, shown && styles.show)}>
        <div className={styles.sheet}>
          <Blessing />
          <Divider />

          <Parents />
          <Divider />

          <Couple />
          <Divider />

          <EventDate />
          <Countdown />
          <Calendar />

          <Quote text={d.quote1} />

          <Place {...d.ceremony} />
          <Divider />

          <Place {...d.reception} first />
          <Divider />

          <Baptism />
          <Divider />

          <Contact />
          <Divider />

          <Gallery />
          <Divider />

          <ThankYou />
          <Divider />

          <DressCode />
        </div>
      </main>
    </div>
  );
}
