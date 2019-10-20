//Prepare test
const starkString = require("./../src");

const persian = starkString("۱۲۳۴۵۶۷۸۹۰");
const persian2 = starkString("۱۲۳۴۵۶۷۹۰");

test("should Convert Persian numbers to English", () => {
  expect(persian.englishNumber().toString()).toBe("1234567890");

  expect(persian2.englishNumber().toString()).toBe("123456790");
});
