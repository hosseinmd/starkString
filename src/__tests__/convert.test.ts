//Prepare test
import starkString from "..";

//persian char
test("should change Arabic characters to Persian", () => {
  expect(starkString("يكدِبِزِذِشِسِى").persianChar().toString()).toBe(
    "یکدبزذشسی",
  );
});

test("should change Arabic numbers to Persian", () => {
  expect(starkString("١٢٣٤٥٦٧٨٩٠").persianNumber().toString()).toBe(
    "۱۲۳۴۵۶۷۸۹۰",
  );
});

// persian number
test("should Convert English numbers to persian", () => {
  expect(starkString("1234567890 ١٢٣٤٥٦٧٨٩٠").persianNumber().toString()).toBe(
    "۱۲۳۴۵۶۷۸۹۰ ۱۲۳۴۵۶۷۸۹۰",
  );
});

// arabic number
test("should Convert English numbers to arabic", () => {
  expect(starkString("1234567890 ۱۲۳۴۵۶۷۸۹۰").arabicNumber().toString()).toBe(
    "١٢٣٤٥٦٧٨٩٠ ١٢٣٤٥٦٧٨٩٠",
  );
});

//english number
test("should Convert Persian and Arabic numbers to English", () => {
  expect(starkString("۱۲۳۴۵۶۷۸۹۰١٢٣٤٥٦٧٨٩٠").englishNumber().toString()).toBe(
    "12345678901234567890",
  );
});

//convert to secure
test("should convert to secure", () => {
  expect(starkString("48.39 d").security().toString()).toBe("*******");
});

//parse number
test("keep number", () => {
  expect(starkString("48g39 d").parseNumber().toString()).toBe("4839");

  expect(starkString("48.39").parseNumber().toString()).toBe("48.39");
});

test("parseNumber with max", () => {
  expect(starkString("48g39 d").parseNumber({ max: 100 }).toString()).toBe(
    "100",
  );
});

test("Negative number", () => {
  expect(starkString("-48g39 d").toNumber({ negative: false })).toBe(4839);
  expect(starkString("-48g39 d").toNumber({ negative: false })).toBe(4839);

  expect(starkString("d -48g39 d").toStringNumber()).toBe("-4839");

  expect(starkString("-48g39 d").toNumber()).toBe(-4839);
  expect(starkString("-48g-39 d").toNumber()).toBe(-4839);

  expect(starkString("-").toStringNumber()).toBe("-");

  expect(starkString("48g39 d").toStringNumber()).toBe("4839");
});

test("Decimal number", () => {
  expect(
    starkString("-48g.39 d").toStringNumber({
      negative: false,
      decimal: false,
    }),
  ).toBe("4839");

  expect(starkString("d 48g34.9 d").toStringNumber({ decimal: true })).toBe(
    "4834.9",
  );

  expect(starkString(".48g39 d").toStringNumber({ decimal: true })).toBe(
    "0.4839",
  );

  expect(starkString("4.8g39 d").toStringNumber()).toBe("4.839");
});

test("Decimal Negative number", () => {
  expect(starkString("-48g.39 d").toStringNumber()).toBe("-48.39");

  expect(starkString("d 4-8g34.9 d").toStringNumber()).toBe("4834.9");

  expect(starkString("-.48g39 d").toStringNumber()).toBe("-0.4839");

  expect(starkString(" -4.8g39 d").toStringNumber()).toBe("-4.839");
});

test("Min number", () => {
  expect(starkString("-48g.39 d").toStringNumber({ min: 0 })).toBe("0");

  expect(starkString("-").toStringNumber({ min: 0 })).toBe("-");

  expect(starkString("-.48g39 d").toStringNumber({ min: -1 })).toBe("-0.4839");

  expect(starkString(" -4.8g39 d").toStringNumber({ min: -1.44 })).toBe(
    "-1.44",
  );
});

test("Science Notation to Decimal", () => {
  expect(starkString("3.2e6").scientificNotationToDecimal()).toBe("3200000");
  expect(starkString("6.3").scientificNotationToDecimal()).toBe("6.3");
  expect(starkString("4.5e-8").scientificNotationToDecimal()).toBe(
    "0.000000045",
  );
  expect(starkString("-2.9e-6").scientificNotationToDecimal()).toBe(
    "-0.0000029",
  );
  expect(starkString("-8.2").scientificNotationToDecimal()).toBe("-8.2");
  expect(starkString("-7.5e6").scientificNotationToDecimal()).toBe("-7500000");
  expect(starkString("Some Text").scientificNotationToDecimal()).toBe(
    "Some Text",
  );
  expect(starkString("").scientificNotationToDecimal()).toBe("");
});
