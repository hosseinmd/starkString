//Prepare test
import starkString from "./../";

//persian char
test("Padding de", () => {
  expect(starkString(`12.3456`).paddingDecimal(3)).toBe(`12.3`);
  expect(starkString(`123456`).paddingDecimal(3)).toBe(`123456`);
});
