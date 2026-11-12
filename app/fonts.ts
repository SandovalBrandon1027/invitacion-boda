import localFont from "next/font/local";

// Fuentes incluidas en el repositorio (subconjunto latin): el build no depende
// de descargar nada desde Google.
export const cormorant = localFont({
  src: [
    {
      path: "./font-files/cormorant-normal.woff2",
      weight: "300 700",
      style: "normal",
    },
    {
      path: "./font-files/cormorant-italic.woff2",
      weight: "300 700",
      style: "italic",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

export const montserrat = localFont({
  src: "./font-files/montserrat.woff2",
  weight: "300 500",
  style: "normal",
  variable: "--font-montserrat",
  display: "swap",
});
