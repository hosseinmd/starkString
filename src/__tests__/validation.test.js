//Prepare test
import starkString from "./../";

test("should validate card number 1", () => {
  expect(starkString("6104337638408961").isValidBankCard()).toBe(true);
});

test("should not validate card number 2", () => {
  expect(starkString("4839833455243240").isValidBankCard()).toBe(false);
});

test("should validate integer", () => {
  expect(starkString("4839833455").isInteger()).toBe(true);
});
