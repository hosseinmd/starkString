//Prepare test
const starkString = require("./../src");

test("should Convert  numbers to currency persian", () => {
  expect(
    starkString("12345609")
      .currency()
      .persianNumber()
      .toString(),
  ).toBe("۱۲,۳۴۵,۶۰۹");
});

test("should Convert Persian numbers to currency", () => {
  expect(
    starkString("۱۲۳۴۵۶۷۹۰.۰۰")
      .englishNumber()
      .currency()
      .toString(),
  ).toBe("123,456,790.00");
});
