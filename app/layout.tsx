import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "Invitación de Boda y Bautizo";
const description =
  "Ricardo y Evelin te invitan a su boda y al bautizo de Marthyna Luciana.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "es_EC",
    title,
    description,
    siteName: title,
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body style={{ margin: 0 }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
