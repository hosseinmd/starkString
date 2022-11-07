function scientificNotationToDecimal(value: number | string): string {
  if (!value) return "";
  const sign = Math.sign(Number(value));
  //if the number is in scientific notation remove it
  if (/\d+\.?\d*e[\+\-]*\d+/i.test(String(value))) {
    const zero = "0";
    const parts = String(value).toLowerCase().split("e"); //split into coeff and exponent
    const e = parts.pop(); //store the exponential part
    let l = Math.abs(Number(e)); //get the number of zeros
    const direction = Number(e) / l; // use to determine the zeroes on the left or right
    const coeff_array = parts[0].split(".").map((i) => Number(i));

    if (direction === -1) {
      coeff_array[0] = Math.abs(Number(coeff_array[0]));
      value = zero + "." + new Array(l).join(zero) + coeff_array.join("");
    } else {
      const dec = coeff_array[1];
      if (dec) l = l - dec.toString().length;
      value = coeff_array.join("") + new Array(l + 1).join(zero);
    }
  }

  if (sign < 0 && value > 0) {
    value = -value;
  }

  return String(value);
}

export { scientificNotationToDecimal };
