import analyzeArray from "../functions/analyzeArray";

it("Empty array", () => {
  expect(() => analyzeArray([])).toThrow(
    "The array must contain AT LEAST one number"
  );
});

it("Non-array parameter", () => {
  expect(() =>
    analyzeArray({ key: value }).toThrow(
      "The parameter must be an array"
    )
  );
});

it("Non-number array (1)", () => {
  expect(() => analyzeArray([4, "ten", 45])).toThrow();
});

it("Non-number array (2)", () => {
  expect(() => analyzeArray([true, 45, { k: "v" }])).toThrow();
});

it("Non-number array (3)", () => {
  expect(() => analyzeArray([true, { k: "v" }])).toThrow();
});

it("Real test (1)", () => {
  expect(analyzeArray([4, 25, 32, 10, 4])).toStrictEqual({
    average: 15,
    min: 4,
    max: 32,
    length: 5,
  });
});

it("Real test (2)", () => {
  expect(analyzeArray([5, 23, 10])).toStrictEqual({
    average: 13,
    min: 5,
    max: 23,
    length: 3,
  });
});
