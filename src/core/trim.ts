export const toDecimalPrecision = (input: string, allLength: number) => {
  const inputArray = input.split(".");
  const integer = inputArray[0];
  const decimal = inputArray[1]?.slice(0, allLength - inputArray[0].length);

  return `${integer}${decimal ? "." : ""}${decimal || ""}`;
};
