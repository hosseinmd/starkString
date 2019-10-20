//Prepare test

const starkString = require("./../src");

test("should Convert English numbers to persian", () => {
  expect(
    starkString("1234567890")
      .persianNumber()
      .toString(),
  ).toBe("۱۲۳۴۵۶۷۸۹۰");
});

test("should Convert English numbers to arabic", () => {
  expect(
    starkString("1234567890")
      .arabicNumber()
      .toString(),
  ).toBe("١٢٣٤٥٦٧٨٩٠");
});
