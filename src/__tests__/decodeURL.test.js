import starkString from "../";

test("should decode unreadable characters to correct Persian characters", () => {
  expect(
    starkString(
      "https://fa.wikipedia.org/wiki/%D8%B5%D9%81%D8%AD%D9%87%D9%94_%D8%A7%D8%B5%D9%84%DB%8C",
    )
      .decodeURL()
      .toString(),
  ).toBe("https://fa.wikipedia.org/wiki/صفحهٔ_اصلی");
});
