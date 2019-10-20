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
} = require("./lib");

/**
 * StarkString constructor
 *
 * @returns {StarkString}
 */
var starkString = function(inputStr) {
  if (!inputStr || inputStr === "") {
    throw new Error("Input is null or empty.");
  }
  return new StarkString(inputStr);
};

/**
 * StarkString main class
 *
 * @class StarkString
 */
class StarkString {
  constructor(value) {
    /**
     * @private
     */
    this._value = value;
  }

  /**
   * Returns a copy of a StarkString Object
   * @return {StarkString} StarkString Object
   */
  clone() {
    return starkString(this._value);
  }

  /**
   * Used for set new string
   * @param {string} value
   * @return {StarkString} StarkString Object
   */
  set(value) {
    this._value = String(value);
    return this;
  }

  /**
   * Used for convert Arabic characters to Persian
   * @return {StarkString} StarkString Object
   */
  persianChar() {
    this._value = persianChar(this.toString());
    return this;
  }

  /**
   * Used for convert any numbers to English
   * @return {StarkString} StarkString Object
   */
  englishNumber() {
    this._value = englishNumber(this._value);
    return this;
  }

  /**
   * Used for convert Arabic numbers to Persian
   * @return {StarkString} StarkString Object
   */
  persianNumber() {
    this._value = persianNumber(this._value);
    return this;
  }

  /**
   * Used for convert English numbers to arabic
   * @return {StarkString} StarkString Object
   */
  arabicNumber() {
    this._value = arabicNumber(this._value);
    return this;
  }

  /**
   * Used for decode Persian Charachters in URL
   * https://fa.wikipedia.org/wiki/مدیاویکی:Gadget-Extra-Editbuttons-Functions.js
   * @return {StarkString} StarkString Object
   */
  fixURL() {
    this._value = decodeURL(this._value);
    return this;
  }

  /**
   * Used for decode Persian Charachters in URL
   * https://fa.wikipedia.org/wiki/مدیاویکی:Gadget-Extra-Editbuttons-Functions.js
   * @return {StarkString} StarkString Object
   */
  decodeURL() {
    this._value = decodeURL(this._value);
    return this;
  }

  /**
   * Used for Change keyboard layout
   * @return {StarkString} StarkString Object
   */
  switchKey() {
    this._value = switchKey(this._value);
    return this;
  }

  /**
   * Used for get persian words representation of a number
   * @return {StarkString} StarkString Object
   */
  digitsToWords() {
    this._value = digitsToWords(this._value);
    return this;
  }

  /**
   * Used for Zero-width non-joiner correction
   * @return {StarkString} StarkString object
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
   * @return {StarkString} StarkString object
   */
  currency() {
    this._value = currency(this._value);
    return this;
  }

  /**
   * Returns the character at the specified index.
   * @param {number} pos The zero-based index of the desired character.
   * @return {StarkString}
   */
  charAt(pos) {
    this._value = this._value.charAt(pos);
    return this;
  }

  /**
   * Returns the Unicode value of the character at the specified location.
   * @param {number} index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
   * @return {number}
   */
  charCodeAt(index) {
    return this._value.charCodeAt(index);
  }

  /**
   * Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
   * value of the UTF-16 encoded code point starting at the string element at position pos in
   * the String resulting from converting this object to a String.
   * If there is no element at that position, the result is undefined.
   * If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.
   * @param {number} pos
   * @return {number}
   */
  codePointAt(pos) {
    return this._value.codePointAt(pos);
  }

  /**
   * Returns a string that contains the concatenation of two or more strings.
   * @param {string[]} strings The strings to append to the end of the string.
   * @return {StarkString}
   */
  concat(...strings) {
    this._value = this._value.concat(...strings);
    return this;
  }

  /**
   * Returns true if the sequence of elements of searchString converted to a String is the
   * same as the corresponding elements of this object (converted to a String) starting at
   * endPosition – length(this). Otherwise returns false.
   * @param {string} searchString
   * @param {number} [endPosition]
   * @returns {boolean}
   *
   */
  endsWith(searchString, endPosition) {
    return this._value.endsWith(searchString, endPosition);
  }

  /**
   * Returns true if searchString appears as a substring of the result of converting this
   * object to a String, at one or more positions that are
   * greater than or equal to position; otherwise, returns false.
   * @param {string} searchString search string
   * @param {number} [position] If position is undefined, 0 is assumed, so as to search all of the String.
   * @returns {boolean}
   */
  includes(searchString, position) {
    return this._value.includes(searchString, position);
  }

  /**
   * Returns the position of the first occurrence of a substring.
   * @param {string} searchString The substring to search for in the string
   * @param {number} [position] The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
   * @returns {number}
   */
  indexOf(searchString, position) {
    return this._value.indexOf(searchString, position);
  }

  /**
   * Returns the last occurrence of a substring in the string.
   * @param {string} searchString The substring to search for.
   * @param {number} [position] The index at which to begin searching. If omitted, the search begins at the end of the string.
   * @returns {number}
   */
  lastIndexOf(searchString, position) {
    return this._value.lastIndexOf(searchString, position);
  }

  /**
   * Returns the length of a String object.
   * @returns {number}
   */
  get length() {
    return this._value.length();
  }

  /**
   * Determines whether two strings are equivalent in the current locale.
   * @param {string} that String to compare to target string
   * @returns {number}
   */
  localeCompare(that) {
    return this._value.localeCompare(that);
  }

  /**
   * Matches a string an object that supports being matched against, and returns an array containing the results of that search.
   * @param {{ [Symbol.match](string: string): RegExpMatchArray | null; }} matcher An object that supports being matched against.
   * @returns {RegExpMatchArray | null}
   */
  match(matcher) {
    return this._value.match(matcher);
  }

  /**
   * Returns the String value result of normalizing the string into the normalization form
   * named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
   * @param {"NFC" | "NFD" | "NFKC" | "NFKD"} form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
   * is "NFC"
   * @returns {StarkString}
   */
  normalize(form) {
    this._value = this._value.normalize(form);
    return this;
  }

  /**
   * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
   * The padding is applied from the end (right) of the current string.
   *
   * @param {number} maxLength The length of the resulting string once the current string has been padded.
   *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
   *
   * @param {string} [fillString] The string to pad the current string with.
   *        If this string is too long, it will be truncated and the left-most part will be applied.
   *        The default value for this parameter is " " (U+0020).
   * @returns {StarkString}
   */
  padEnd(maxLength, fillString) {
    this._value = this._value.padEnd(maxLength, fillString);
    return this;
  }

  /**
   * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
   * The padding is applied from the start (left) of the current string.
   *
   * @param {number} maxLength The length of the resulting string once the current string has been padded.
   *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
   *
   * @param {string} [fillString] The string to pad the current string with.
   *        If this string is too long, it will be truncated and the left-most part will be applied.
   *        The default value for this parameter is " " (U+0020).
   * @returns {StarkString}
   */
  padStart(maxLength, fillString) {
    this._value = this._value.padStart(maxLength, fillString);
    return this;
  }

  /**
   * Returns a String value that is made from count copies appended together. If count is 0,
   * the empty string is returned.
   * @param {number} count number of copies to append
   * @returns {StarkString}
   */
  repeat(count) {
    this._value = this._value.repeat(count);
    return this;
  }

  /**
   * Replaces text in a string, using a regular expression or search string.
   * @param {string | RegExp} searchValue A string to search for.
   * @param {string | (substring: string, ...args: any[]) => string} replaceValue A string containing the text to replace for every successful match of searchValue in this string.
   * @returns {StarkString}
   */
  replace(searchValue, replaceValue) {
    this._value = this._value.replace(searchValue, replaceValue);
    return this;
  }

  /**
   * Finds the first substring match in a regular expression search.
   * @param {string | RegExp} regexp The regular expression pattern and applicable flags.
   * @returns {number}
   */
  search(regexp) {
    return this._value.search(regexp);
  }

  /**
   * Returns a section of a string.
   * @param {number} [start] The index to the beginning of the specified portion of stringObj.
   * @param {number} [end] The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
   * If this value is not specified, the substring continues to the end of stringObj.
   * @returns {StarkString}
   */
  slice(start, end) {
    this._value = this._value.slice(start, end);
    return this;
  }

  /**
   * Split a string into substrings using the specified separator and return them as an array.
   * @param {string | RegExp} separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
   * @param {number} [limit] A value used to limit the number of elements returned in the array.
   * @returns {string[]}
   */
  split(separator, limit) {
    return this._value.split(separator, limit);
  }

  // IE extensions
  /**
   * Gets a substring beginning at the specified location and having the specified length.
   * @param {number} from The starting position of the desired substring. The index of the first character in the string is zero.
   * @param {number} [length] The number of characters to include in the returned substring.
   */
  substr(from, length) {
    this._value = this._value.substr(from, length);
    return this;
  }

  /**
   * Returns the substring at the specified location within a String object.
   * @param {number} start The zero-based index number indicating the beginning of the substring.
   * @param {number} [end] Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
   * If end is omitted, the characters from start through the end of the original string are returned.
   * @returns {StarkString}
   */
  substring(start, end) {
    this._value = this._value.substring(start, end);
    return this;
  }

  /**
   * Returns true if the sequence of elements of searchString converted to a String is the
   * same as the corresponding elements of this object (converted to a String) starting at
   * position. Otherwise returns false.
   * @param {string} searchString
   * @param {number} [position]
   * @returns {boolean}
   */
  startsWith(searchString, position) {
    return this._value.startsWith(searchString, position);
  }

  /**
   * Converts all the alphabetic characters in a string to lowercase.
   * @returns {StarkString}
   */
  toLowerCase() {
    this._value = this._value.toLowerCase(start, end);
    return this;
  }

  /**
   * Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.
   * @returns {StarkString}
   */
  toLocaleLowerCase() {
    this._value = this._value.toLocaleLowerCase();
    return this;
  }

  /**
   * Converts all the alphabetic characters in a string to uppercase.
   * @returns {StarkString}
   */
  toUpperCase() {
    this._value = this._value.toUpperCase();
    return this;
  }

  /**
   * Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.
   * @returns {StarkString}
   */
  toLocaleUpperCase() {
    this._value = this._value.toLocaleUpperCase();
    return this;
  }

  /**
   * Returns a string representation of a StarkString Object
   * @return {string}
   */
  toString() {
    return this._value.toString();
  }

  /**
   * Removes the leading and trailing white space and line terminator characters from a string.
   * @returns {StarkString}
   */
  trim() {
    this._value = this._value.trim();
    return this;
  }

  /**
   * Removes whitespace from the left end of a string.
   * @returns {StarkString}
   */
  trimLeft() {
    this._value = this._value.trimLeft();
    return this;
  }

  /**
   * Removes whitespace from the right end of a string.
   * @returns {StarkString}
   */
  trimRight() {
    this._value = this._value.trimRight();
    return this;
  }

  /** Returns the primitive value of the specified object. */
  valueOf() {
    return this._value.valueOf();
  }
}

//Expose StarkString
//CommonJS module is defined
module.exports = starkString;
