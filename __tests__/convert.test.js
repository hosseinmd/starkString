//Prepare test
import starkString from "./../lib";

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

//currency
test("should Convert  numbers to currency persian", () => {
  expect(starkString("12345609").currency().persianNumber().toString()).toBe(
    "۱۲,۳۴۵,۶۰۹",
  );
});

test("should Convert Persian numbers to currency", () => {
  expect(
    starkString("۱۲۳۴۵۶۷۹۰.۰۰").englishNumber().currency().toString(),
  ).toBe("123,456,790.00");
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
});
