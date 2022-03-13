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
  security,
  toNumber,
  toDecimalPrecision,
  toCurrency,
  toFixed,
  floor,
} from "./core";
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
   * Used for Normalize url
   * https://fa.wikipedia.org/wiki/مدیاویکی:Gadget-Extra-Editbuttons-Functions. s
   */
  fixURL(): StarkString {
    if (!this._value) {
      return this;
    }

    if (/^(wss?(:|\/))/i.test(this._value)) {
      this._value = this._value.replace(/^(ws)?(s)?(:*)(\/+)?/i, `ws$2://`);
    } else if (/^(ftps?(:|\/))/i.test(this._value)) {
      this._value = this._value.replace(/^(ftp)?(s)?(:*)(\/+)?/i, `ftp$2://`);
    } else {
      this._value = this._value.replace(/^(http)?(s)?(:*)(\/+)?/i, `http$2://`);
    }

    this._value = this._value.replace(/(\/?)$/i, `/`);
    return this;
  }

  /**
   * Used for decode Persian Characters in URL
   * https://fa.wikipedia.org/wiki/مدیاویکی:Gadget-Extra-Editbuttons-Functions. s
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
  toCurrency(formatCurrency = false): StarkString {
    this._value = toCurrency(this._value, formatCurrency);
    return this;
  }

  /** Remove anything expect numbers */
  parseNumber(options?: Parameters<typeof toNumber>[1]): StarkString {
    this.englishNumber();
    this._value = toNumber(this._value, options);
    return this;
  }

  /** Convert any char to star ("*") */
  security(): StarkString {
    this._value = security(this._value);
    return this;
  }

  /** Convert any string to number */
  toStringNumber(options?: Parameters<typeof toNumber>[1]): string {
    this.parseNumber(options);
    return this._value;
  }

  /**
   * Precision decimal number with all number length for
   *
   * @example
   *   starkString(`12.3456`).paddingDecimal(3); //`12.3`
   *   starkString(`123456`).paddingDecimal(3); //`123456`
   */
  toDecimalPrecision(allLength: number): StarkString {
    this._value = toDecimalPrecision(this._value, allLength);
    return this;
  }

  /** Convert any string to number */
  toNumber(options?: Parameters<typeof toNumber>[1]): number {
    this.parseNumber(options);
    return Number(this._value);
  }

  /**
   * Convert to string representing a number in fixed-point notation.
   *
   * @param value
   * @param fractionDigits — Number of digits after the decimal point. Must be
   *   in the range 0 - 20, inclusive.
   */
  toFixed(fractionDigits?: number | undefined): StarkString {
    this._value = toFixed(this._value, fractionDigits);

    return this;
  }
  /**
   * Convert to string representing a number in fixed-point notation and trim .
   *
   * @param value
   * @param fractionDigits — Number of digits after the decimal point. Must be
   *   in the range 0 - 20, inclusive.
   */
  toFixedNumber(fractionDigits?: number | undefined): StarkString {
    this._value = Number(toFixed(this._value, fractionDigits)).toString();

    return this;
  }
  floor(): StarkString {
    this._value = floor(this._value);
    return this;
  }
}

// eslint-disable-next-line no-extend-native
Object.defineProperties(String.prototype, {
  starkString: {
    get: function () {
      return starkString(this);
    },
  },
});
declare global {
  interface String {
    starkString: StarkString;
  }
}

//Expose StarkString
//CommonJS module is defined
export default starkString;

export type { StarkString };
