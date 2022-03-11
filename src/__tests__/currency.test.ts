//Prepare test
import starkString from "..";

//currency
test("should Convert  numbers to currency persian", () => {
  expect(starkString("12345609").toCurrency().persianNumber().toString()).toBe(
    "۱۲,۳۴۵,۶۰۹",
  );
});

test("should Convert Persian numbers to currency", () => {
  expect(
    starkString("۱۲۳۴۵۶۷۹۰.۰۰").englishNumber().toCurrency().toString(),
  ).toBe("123,456,790.00");
});

test("decimal numbers to currency", () => {
  expect(
    starkString("۱۲۳۴۵۶۷۹۰.۰۰").englishNumber().toCurrency().toString(),
  ).toBe("123,456,790.00");
  expect(
    starkString("۱۲۳۴۵۶۷۹۰.").englishNumber().toCurrency().toString(),
  ).toBe("123,456,790.");

  expect(
    starkString("-۱۲۳۴۵۶۷۹۰.").englishNumber().toCurrency().toString(),
  ).toBe("-123,456,790.");

  expect(starkString("456.0").englishNumber().toCurrency().toString()).toBe(
    "456.0",
  );

  expect(starkString("-0.0").toCurrency().toString()).toBe("-0.0");

  expect(starkString("-.0").toCurrency().toString()).toBe("-.0");

  expect(starkString("456.4346640").toCurrency(true).toString()).toBe(
    "456.434,664,0",
  );

  expect(starkString("456.4346640").toCurrency().toString()).toBe(
    "456.4346640",
  );
});
