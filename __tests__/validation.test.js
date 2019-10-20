//Prepare test
const starkString = require("./../src");

test("should validate card number 1", () => {
  expect(starkString("6104337638408961").isValidBankCard()).toBe(true);
});

test("should validate card number 2", () => {
  expect(starkString("4839833455243240").isValidBankCard()).toBe(false);
});
