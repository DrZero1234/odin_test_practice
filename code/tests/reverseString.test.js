import reverseString from "../functions/reverseString";

it("No text", () => {
  expect(reverseString("")).toBe("");
});

it("Not String (1)", () => {
  expect(() => reverseString(4)).toThrow(
    "The parameter must be a string"
  );
});

it("Not String (2)", () => {
  expect(() => reverseString(true)).toThrow();
});

it("One letter string", () => {
  expect(reverseString("r")).toBe("r");
});

it("Palindrome", () => {
  expect(reverseString("rotator")).toBe("rotator");
});

it("Standard reverse text", () => {
  expect(reverseString("Test")).toBe("tseT");
});

it("Text with special characters", () => {
  expect(
    reverseString("Type your text in the box and let us reverse it!")
  ).toBe("!ti esrever su tel dna xob eht ni txet ruoy epyT");
});

it("Working backwards", () => {
  expect(
    reverseString("ecived a no noitamrofni ssecca ro/dna erotS")
  ).toBe("Store and/or access information on a device");
});
