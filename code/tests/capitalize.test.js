import capitalize from "../functions/capitalize.js";

it("No text", () => {
  expect(capitalize("")).toBe("");
});

it("Not String (1)", () => {
  expect(() => capitalize(4)).toThrow(
    "The parameter must be a string"
  );
});

it("Not String (2)", () => {
  expect(() => capitalize(true)).toThrow();
});

it("2 length", () => {
  expect(capitalize("kv")).toBe("Kv");
});

it("Lower all the letters except the first one", () => {
  expect(capitalize("tEsTiNG")).toBe("Testing");
});

it("Returns the same string if its capizalized", () => {
  expect(capitalize("Good")).toBe("Good");
});
