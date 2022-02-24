//Prepare test
import starkString from "./../";

test("should throw error", () => {
  expect(() => starkString({})).toThrowError(Error);
});

test("should throw error array with symbol", () => {
  expect(() => starkString(["", "1", Symbol()])).toThrowError(Error);
});

test("should throw error empty function", () => {
  expect(() => starkString(() => {})).toThrowError(Error);
});
