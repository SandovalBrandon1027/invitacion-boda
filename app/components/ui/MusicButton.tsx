import type { JSX } from "react";

import styles from "@/app/invitation.module.css";

interface MusicButtonProps {
  playing: boolean;
  onToggle: () => void;
}

export default function MusicButton({
  playing,
  onToggle,
}: MusicButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className={styles.music}
      onClick={onToggle}
      aria-label={playing ? "Pausar música" : "Reproducir música"}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M11 5 6 9H3v6h3l5 4V5z" />
        {playing ? (
          <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13" />
        ) : (
          <path d="m16 9 5 6m0-6-5 6" />
        )}
      </svg>
    </button>
  );
}
