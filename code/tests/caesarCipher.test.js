import caesarCipher from "../functions/caesarCipher";

it("No text", () => {
  expect(caesarCipher(1, "")).toBe("");
});

it("Not String (1)", () => {
  expect(() => caesarCipher(1, 4)).toThrow(
    "The parameter must be a string"
  );
});

it("Not String (2)", () => {
  expect(() => caesarCipher(1, true)).toThrow();
});

it("Invalid key", () => {
  expect(() => caesarCipher("two", "kek")).toThrow(
    "The key must be a whole number which is higher than 0"
  );
});

it("Invalid key (2)", () => {
  expect(() => caesarCipher(0, "kek")).toThrow(
    "The key must be a whole number which is higher than 0"
  );
});

it("Invalid key (3)", () => {
  expect(() => caesarCipher(-45, "kek")).toThrow(
    "The key must be a whole number which is higher than 0"
  );
});

it("Special characters only", () => {
  expect(caesarCipher(2, "...")).toBe("...");
});

it("z cipher", () => {
  expect(caesarCipher(1, "z")).toBe("a");
});

it("Real test (1)", () => {
  expect(caesarCipher(1, "defend the east wall of the castle")).toBe(
    "efgfoe uif fbtu xbmm pg uif dbtumf"
  );
});

it("Real test (2)", () => {
  expect(caesarCipher(20, "attack at dawn")).toBe("unnuwe un xuqh");
});
