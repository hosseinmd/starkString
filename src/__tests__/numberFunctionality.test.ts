//Prepare test
import starkString from "..";

test("toFixed to string rounding", () => {
  expect(starkString("610433763.8408961").toFixed().toString()).toBe(
    "610433764",
  );
  expect(starkString("610433763.4408961").toFixed().toString()).toBe(
    "610433763",
  );
});

test("toFixed to string decimal", () => {
  expect(starkString("8961").toFixed(2).toString()).toBe("8961.00");
  expect(starkString("6.1").toFixed(5).toString()).toBe("6.10000");
});

test("toFixedNumber to string rounding", () => {
  expect(starkString("610433763.8408961").toFixedNumber().toNumber()).toBe(
    610433764,
  );
  expect(starkString("610433763.4408961").toFixedNumber().toNumber()).toBe(
    610433763,
  );
});

test("toFixedNumber to string decimal", () => {
  expect(starkString("8961").toFixedNumber(2).toNumber()).toBe(8961);
  expect(starkString("6.1").toFixedNumber(5).toNumber()).toBe(6.1);
});

test("floor", () => {
  expect(starkString("610433763.8408961").floor().toString()).toBe("610433763");
  expect(starkString("610433763.4408961").floor().toString()).toBe("610433763");
});
