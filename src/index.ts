import {
  persianChar,
  englishNumber,
  persianNumber,
  arabicNumber,
  decodeURL,
  switchKey,
  digitsToWords,
  halfSpace,
  isValidBankCard,
  isInteger,
  currency,
  security,
  parseNumber,
} from "./lib";
import NativeString from "./NativeString";

/** StarkString constructor */
function starkString(
  value: string | number | (string | number)[],
): StarkString {
  if (typeof value === "number" || typeof value === "string")
    value = String(value);
  else if (Array.isArray(value)) value = value.join("");
  else if (value === undefined || value === null) value = "";
  else
    throw new Error(
      `StarkString value must be type of string, number or Array<string|number> instead of ${typeof value}`,
    );

  return new StarkString(value);
}

class StarkString extends NativeString {
  constructor(value: string) {
    super(value);
  }

  /** Returns a copy of a StarkString Object */
  clone(): StarkString {
    return starkString(this._value);
  }

  /** Used for set new string */
  set(value: string): StarkString {
    this._value = String(value);
    return this;
  }

  /** Used for convert Arabic characters to Persian */
  persianChar(): StarkString {
    this._value = persianChar(this.toString());
    return this;
  }

  /** Used for convert any numbers to English */
  englishNumber(): StarkString {
    this._value = englishNumber(this._value);
    return this;
  }

  /** Used for convert Arabic numbers to Persian */
  persianNumber(): StarkString {
    this._value = persianNumber(this._value);
    return this;
  }

  /** Used for convert English numbers to arabic */
  arabicNumber(): StarkString {
    this._value = arabicNumber(this._value);
    return this;
  }

  /**
   * Used for decode Persian Characters in URL
   * https://fa.wikipedia.org/wiki/مدیاویکی:Gadget-Extra-Editbuttons-Functions.js
   */
  fixURL(): StarkString {
    this._value = decodeURL(this._value);
    return this;
  }

  /**
   * Used for decode Persian Characters in URL
   * https://fa.wikipedia.org/wiki/مدیاویکی:Gadget-Extra-Editbuttons-Functions.js
   */
  decodeURL(): StarkString {
    this._value = decodeURL(this._value);
    return this;
  }

  /** Used for Change keyboard layout */
  switchKey(): StarkString {
    this._value = switchKey(this._value);
    return this;
  }

  /** Used for get persian words representation of a number */
  digitsToWords(): StarkString {
    this._value = digitsToWords(this._value);
    return this;
  }

  /** Used for Zero-width non-joiner correction */
  halfSpace(): StarkString {
    this._value = halfSpace(this._value);
    return this;
  }

  /** Return true if value is Integer */
  isInteger(): boolean {
    return isInteger(this._value);
  }

  /** Used for validation back card number */
  isValidBankCard(): boolean {
    return isValidBankCard(this._value);
  }

  /** Used for convert to price mode */
  currency(): StarkString {
    this._value = currency(this._value);
    return this;
  }

  /** Remove anything expect numbers */
  parseNumber(): StarkString {
    this._value = parseNumber(this._value);
    return this;
  }

  /** Convert any char to star ("*") */
  security(): StarkString {
    this._value = security(this._value);
    return this;
  }

  /** Convert to number by native Number function */
  toNumber(): number {
    return Number(this._value);
  }
}

//Expose StarkString
//CommonJS module is defined
export default starkString;

export type {StarkString}
