/**
 * Returns a string representing a number in fixed-point notation.
 *
 * @param value
 * @param fractionDigits — Number of digits after the decimal point. Must be in
 *   the range 0 - 20, inclusive.
 */
function toFixed(value: string, fractionDigits?: number | undefined): string {
  if (!value) return "";

  return Number(value).toFixed(fractionDigits);
}

/**
 * Returns the greatest integer less than or equal to its numeric argument.
 *
 * @param x — A numeric expression.
 */
function floor(value: string): string {
  if (!value) return "";

  return Math.floor(Number(value)).toString();
}

export { toFixed, floor };
