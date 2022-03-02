//Prepare test
import starkString from "..";

test("should throw error", () => {
  //@ts-expect-error
  expect(() => starkString({})).toThrowError(Error);
});

test("should throw error array with symbol", () => {
  //@ts-expect-error
  expect(() => starkString(["", "1", Symbol()])).toThrowError(Error);
});

test("should throw error empty function", () => {
  //@ts-expect-error
  expect(() => starkString(() => {})).toThrowError(Error);
});
