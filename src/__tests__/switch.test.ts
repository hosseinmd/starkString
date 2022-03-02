//Prepare test
import starkString from "..";

test("should Convert Persian Chars to English Chars", () => {
  expect(
    starkString("ضصثقفغعهخحجچشسیبلاتنمکگظطزرذدپو؟").switchKey().toString(),
  ).toBe("qwertyuiop[]asdfghjkl;'zxcvbnm,?");
});
