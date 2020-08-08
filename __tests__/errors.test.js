//Prepare test
import starkString from "./../lib";

test("should throw error", () => {
  expect(() => starkString({})).toThrowError(Error);
});

test("should throw error", () => {
  expect(() => starkString(["", "1", Symbol()])).toThrowError(Error);
});

test("should throw error", () => {
  expect(() => starkString(() => {})).toThrowError(Error);
});
