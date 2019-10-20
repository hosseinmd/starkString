//Prepare test
const starkString = require("./../src");

test("should Convert Persian and Arabic numbers to English", () => {
  expect(
    starkString("۱۲۳۴۵۶۷۸۹۰١٢٣٤٥٦٧٨٩٠")
      .englishNumber()
      .toString(),
  ).toBe("12345678901234567890");
});
