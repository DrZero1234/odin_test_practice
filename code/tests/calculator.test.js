import calculator from "../functions/calculator";

it("Basic sum", () => {
  expect(calculator.add(4, 5)).toBe(9);
});

it("Subtraction test", () => {
  expect(calculator.subtract(456, 21)).toBe(435);
});

it("Multiply test", () => {
  expect(calculator.multiply(12, 213)).toBe(2556);
});

it("Division test", () => {
  expect(calculator.divide(4132, 54)).toBeCloseTo(76.518);
});
