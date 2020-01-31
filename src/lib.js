// Declare Number Arrays in different locales
const regExpArabicNumber = new RegExp(/[\u0660-\u0669]/, "g"),
  regExpPersianNumber = new RegExp(/[\u06f0-\u06f9]/, "g"),
  regExpEnglishNumber = new RegExp(/[\u0030-\u0039]/, "g");

/**
 * Used for convert Arabic characters to Persian
 * @param {String} value
 * @return {string}
 */
function persianChar(value) {
  if (!value) {
    return "";
  }
  const arabicChars = [
      "ي",
      "ك",
      "‍",
      "دِ",
      "بِ",
      "زِ",
      "ذِ",
      "ِشِ",
      "ِسِ",
      "ى",
    ],
    persianChars = ["ی", "ک", "", "د", "ب", "ز", "ذ", "ش", "س", "ی"];

  for (let i = 0, charsLen = arabicChars.length; i < charsLen; i++) {
    value = value.replace(new RegExp(arabicChars[i], "g"), persianChars[i]);
  }
  return value;
}

/**
 * Used for convert any numbers to English
 *
 * @param {String} value
 * @return {string}
 */
function englishNumber(value) {
  if (!value) {
    return value;
  }

  return value
    .replace(regExpArabicNumber, function(c) {
      return c.charCodeAt(0) - 0x0660;
    })
    .replace(regExpPersianNumber, function(c) {
      return c.charCodeAt(0) - 0x06f0;
    });
}

/**
 * Used for convert any numbers to Persian
 *
 * @param {String} value
 * @return {string}
 */
function persianNumber(value) {
  if (!value) {
    return "";
  }

  return value
    .replace(regExpArabicNumber, function(c) {
      return String.fromCharCode(parseInt(c.charCodeAt(0) - 0x0660) + 0x06f0);
    })
    .replace(regExpEnglishNumber, function(c) {
      return String.fromCharCode(parseInt(c) + 0x06f0);
    });
}

/**
 * Used for convert any numbers to arabic
 *
 * @param {String} value
 * @return {string}
 */
function arabicNumber(value) {
  if (!value) {
    return "";
  }
  value = value.toString();

  return value
    .replace(regExpPersianNumber, function(c) {
      return String.fromCharCode(parseInt(c.charCodeAt(0) - 0x06f0) + 0x0660);
    })
    .replace(regExpEnglishNumber, function(c) {
      return String.fromCharCode(parseInt(c) + 0x0660);
    });
}

/**
 * Used for decode Persian Characters in URL
 * https://fa.wikipedia.org/wiki/مدیاویکی:Gadget-Extra-Editbuttons-Functions.js
 * @param {String} value
 * @return {string}
 */
function decodeURL(value) {
  if (!value) {
    return "";
  }
  // Replace every %20 with _ to protect them from decodeURI
  let old = "";
  while (old != value) {
    old = value;
    value = value.replace(
      /(http\S+?)\%20/g,
      "$1\u200c\u200c\u200c_\u200c\u200c\u200c",
    );
  }
  // Decode URIs
  // NOTE: This would convert all %20's to _'s which could break some links
  // but we will undo that later on
  value = value.replace(/(http\S+)/g, function(s, p) {
    return decodeURI(p);
  });
  // Revive all instances of %20 to make sure no links is broken
  return value.replace(/\u200c\u200c\u200c_\u200c\u200c\u200c/g, "%20");
}

/**
 * Used for Change keyboard layout
 * @param {String} value
 * @return {string}
 */
function switchKey(value) {
  if (!value) {
    return "";
  }
  const persianChar = [
      "ض",
      "ص",
      "ث",
      "ق",
      "ف",
      "غ",
      "ع",
      "ه",
      "خ",
      "ح",
      "ج",
      "چ",
      "ش",
      "س",
      "ی",
      "ب",
      "ل",
      "ا",
      "ت",
      "ن",
      "م",
      "ک",
      "گ",
      "ظ",
      "ط",
      "ز",
      "ر",
      "ذ",
      "د",
      "پ",
      "و",
      "؟",
    ],
    englishChar = [
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "[",
      "]",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      ";",
      "'",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
      ",",
      "?",
    ];

  for (let i = 0, charsLen = persianChar.length; i < charsLen; i++) {
    value = value.replace(new RegExp(persianChar[i], "g"), englishChar[i]);
  }
  return value;
}

/**
 * Used for get persian words representation of a number
 * @param {String} value
 * @return {string}
 */
function digitsToWords(value) {
  if (!isFinite(value)) {
    return "";
  }

  if (typeof value !== "string") {
    value = value.toString();
  }

  const parts = [
    "",
    "هزار",
    "میلیون",
    "میلیارد",
    "تریلیون",
    "کوادریلیون",
    "کویینتیلیون",
    "سکستیلیون",
  ];
  const numbers = {
    0: [
      "",
      "صد",
      "دویست",
      "سیصد",
      "چهارصد",
      "پانصد",
      "ششصد",
      "هفتصد",
      "هشتصد",
      "نهصد",
    ],
    1: ["", "ده", "بیست", "سی", "چهل", "پنجاه", "شصت", "هفتاد", "هشتاد", "نود"],
    2: ["", "یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"],
    two: [
      "ده",
      "یازده",
      "دوازده",
      "سیزده",
      "چهارده",
      "پانزده",
      "شانزده",
      "هفده",
      "هجده",
      "نوزده",
    ],
    zero: "صفر",
  };
  const delimiter = " و ";

  const valueParts = value
    .split("")
    .reverse()
    .join("")
    .replace(/\d{3}(?=\d)/g, "$&,")
    .split("")
    .reverse()
    .join("")
    .split(",")
    .map(function(str) {
      return Array(4 - str.length).join("0") + str;
    });

  let result = (function() {
    const _results = [];
    for (let iThree in valueParts) {
      const three = valueParts[iThree];

      let resultThree = (function() {
        let _i, _len;
        const _results1 = [];

        for (let i = (_i = 0), _len = three.length; _i < _len; i = ++_i) {
          const digit = three[i];
          if (i === 1 && digit === "1") {
            _results1.push(numbers.two[three[2]]);
          } else if (
            (i !== 2 || three[1] !== "1") &&
            numbers[i][digit] !== ""
          ) {
            _results1.push(numbers[i][digit]);
          } else {
            continue;
          }
        }

        return _results1;
      })();

      resultThree = resultThree.join(delimiter);
      const _result = resultThree
        ? resultThree + " " + parts[valueParts.length - parseInt(iThree) - 1]
        : resultThree;
      _results.push(_result);
    }
    return _results;
  })();

  result = result.filter(function(x) {
    return x.trim() !== "";
  });

  result = result.join(delimiter).trim();
  if (result === "") {
    result = numbers.zero;
  }

  return result;
}

/**
 * Used for Zero-width non-joiner correction
 * @param {string} value
 * @return {string}
 */
function halfSpace(value) {
  if (!value) {
    return "";
  }

  // Replace Zero-width non-joiner between persian MI.
  let pattern = /((\s\u0645\u06CC)+( )+([\u0600-\u06EF]{1,}){1,})/g;
  value = value.replace(new RegExp(pattern), "$2\u200C$4");

  // Replace Zero-width non-joiner between persian De-Yii.
  pattern = /(([\u0600-\u06EF]{1,})+( )+(ای|ایی|اند|ایم|اید|ام){1})/g;
  value = value.replace(new RegExp(pattern), "$2\u200C$4");

  return value;
}

/**
 * Remove anything expect numbers
 * @param {String} value
 * @return {string}
 */
function parseNumber(string) {
  return englishNumber(string).replace(/\D/g, "");
}

/**
 * Used for validation integer number
 * @param {string} value
 * @return {boolean}
 */
function isInteger(value) {
  return /^\d+$/.test(value);
}

/**
 * Used for validation back card number
 * @param {string} value 16 digit
 * @return {boolean}
 */
function isValidBankCard(value) {
  // accept only digits, dashes or spaces
  if (!isInteger(value)) return false;

  // The Luhn Algorithm. It's so pretty.
  let nCheck = 0,
    bEven = false;
  value = value.replace(/\D/g, "");

  for (let n = value.length - 1; n >= 0; n--) {
    const cDigit = value.charAt(n);
    let nDigit = parseInt(cDigit, 10);

    if (bEven) {
      if ((nDigit *= 2) > 9) nDigit -= 9;
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return nCheck % 10 == 0;
}

/**
 * Used for convert english number to currency mode
 * @param {string} value
 * @return {boolean}
 */
function currency(value) {
  if (!value) return "";

  return value
    .replace(/[^\d\.\-]/g, "")
    .replace(/(\.\d{2})[\W\w]+/g, "$1")
    .split("")
    .reverse()
    .join("")
    .replace(/(\d{3})/g, "$1,")
    .split("")
    .reverse()
    .join("")
    .replace(/^([\-]{0,1}),/, "$1")
    .replace(/(\.\d)$/, "$1" + "0")
    .replace(/\.$/, ".00");
}

/**
 * convert any char to star ("*")
 * @param {string} value
 * @return {string}
 */
function security(value) {
  return "*".repeat(value.length);
}

//Expose StarkString
//CommonJS module is defined
module.exports = {
  persianChar,
  englishNumber,
  persianNumber,
  arabicNumber,
  decodeURL,
  switchKey,
  digitsToWords,
  halfSpace,
  isInteger,
  isValidBankCard,
  currency,
  security,
  parseNumber,
};
