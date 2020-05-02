const {
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
} = require("./lib");
const NativeString = require("./NativeString");

/**
 * @typedef {import("./NativeString").NativeString} NativeStringType
 */

/**
 * StarkString constructor
 * @param {string | number | (string | number)[]} value
 * @returns {StarkString}
 */
function starkString(value) {
  if (typeof value == "number" || typeof value == "string")
    value = String(value);
  else if (Array.isArray(value)) value = value.join("");
  else if (value === undefined || value === null) value = "";
  else
    throw new Error(
      `StarkString value must be type of string, number or Array<string|number> instead of ${typeof value}`,
    );

  return new StarkString(value);
}

/**
 * @typedef {StarkString}
 * @class
 */
class StarkString extends NativeString {
  constructor(value) {
    super();
    /**
     * @private
     */
    this._value = value;
  }

  /**
   * Returns a copy of a StarkString Object
   * @return {StarkString & NativeStringType} StarkString Object
   */
  clone() {
    return starkString(this._value);
  }

  /**
   * Used for set new string
   * @param {string} value
   * @return {StarkString & NativeStringType} StarkString Object
   */
  set(value) {
    this._value = String(value);
    return this;
  }

  /**
   * Used for convert Arabic characters to Persian
   * @return {StarkString & NativeStringType} StarkString Object
   */
  persianChar() {
    this._value = persianChar(this.toString());
    return this;
  }

  /**
   * Used for convert any numbers to English
   * @return {StarkString & NativeStringType} StarkString Object
   */
  englishNumber() {
    this._value = englishNumber(this._value);
    return this;
  }

  /**
   * Used for convert Arabic numbers to Persian
   * @return {StarkString & NativeStringType} StarkString Object
   */
  persianNumber() {
    this._value = persianNumber(this._value);
    return this;
  }

  /**
   * Used for convert English numbers to arabic
   * @return {StarkString & NativeStringType} StarkString Object
   */
  arabicNumber() {
    this._value = arabicNumber(this._value);
    return this;
  }

  /**
   * Used for decode Persian Characters in URL
   * https://fa.wikipedia.org/wiki/مدیاویکی:Gadget-Extra-Editbuttons-Functions.js
   * @return {StarkString & NativeStringType} StarkString Object
   */
  fixURL() {
    this._value = decodeURL(this._value);
    return this;
  }

  /**
   * Used for decode Persian Characters in URL
   * https://fa.wikipedia.org/wiki/مدیاویکی:Gadget-Extra-Editbuttons-Functions.js
   * @return {StarkString & NativeStringType} StarkString Object
   */
  decodeURL() {
    this._value = decodeURL(this._value);
    return this;
  }

  /**
   * Used for Change keyboard layout
   * @return {StarkString & NativeStringType} StarkString Object
   */
  switchKey() {
    this._value = switchKey(this._value);
    return this;
  }

  /**
   * Used for get persian words representation of a number
   * @return {StarkString & NativeStringType} StarkString Object
   */
  digitsToWords() {
    this._value = digitsToWords(this._value);
    return this;
  }

  /**
   * Used for Zero-width non-joiner correction
   * @return {StarkString & NativeStringType} StarkString object
   */
  halfSpace() {
    this._value = halfSpace(this._value);
    return this;
  }

  /**
   * Return true if value is Integer
   * @return {boolean}
   */
  isInteger() {
    return isInteger(this._value);
  }

  /**
   * Used for validation back card number
   * @return {boolean}
   */
  isValidBankCard() {
    return isValidBankCard(this._value);
  }

  /**
   * Used for convert to price mode
   * @return {StarkString & NativeStringType} StarkString object
   */
  currency() {
    this._value = currency(this._value);
    return this;
  }

  /**
   * Remove anything expect numbers
   * @return {StarkString & NativeStringType} StarkString object
   */
  parseNumber() {
    this._value = parseNumber(this._value);
    return this;
  }

  /**
   * convert any char to star ("*")
   * @return {StarkString & NativeStringType} StarkString object
   */
  security() {
    this._value = security(this._value);
    return this;
  }

  /**
   * convert to number by native Number function
   * @return {number}
   */
  toNumber() {
    return Number(this._value);
  }
}

//Expose StarkString
//CommonJS module is defined
module.exports = starkString;
