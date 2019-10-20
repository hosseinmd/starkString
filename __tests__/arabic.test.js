//Prepare test
const starkString = require("./../src");

test("should change Arabic characters to Persian", () => {
  expect(
    starkString("يكدِبِزِذِشِسِى")
      .persianChar()
      .toString(),
  ).toBe("یکدبزذشسی");
});

test("should change Arabic numbers to Persian", () => {
  expect(
    starkString("١٢٣٤٥٦٧٨٩٠")
      .persianNumber()
      .toString(),
  ).toBe("۱۲۳۴۵۶۷۸۹۰");
});
