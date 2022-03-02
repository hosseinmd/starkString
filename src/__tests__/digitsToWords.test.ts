//Prepare test
import starkString from "..";

test("should convert numbers to Persian words", () => {
  expect(starkString("999999999999").digitsToWords().toString()).toBe(
    "نهصد و نود و نه میلیارد و نهصد و نود و نه میلیون و نهصد و نود و نه هزار و نهصد و نود و نه",
  );

  expect(starkString("1372").digitsToWords().toString()).toBe(
    "یک هزار و سیصد و هفتاد و دو",
  );

  expect(starkString("19").digitsToWords().toString()).toBe("نوزده");
});
