import { Fragment } from "react";
import type { JSX } from "react";

/** Muestra una lista de textos separados por saltos de línea. */
export default function Lines({ items }: { items: string[] }): JSX.Element {
  return (
    <>
      {items.map((item, i) => (
        <Fragment key={item}>
          {i > 0 && <br />}
          {item}
        </Fragment>
      ))}
    </>
  );
}
