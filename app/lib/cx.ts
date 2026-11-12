/** Une nombres de clases, ignorando los valores falsos. */
export const cx = (...classes: (string | false | undefined)[]): string =>
  classes.filter(Boolean).join(" ");
