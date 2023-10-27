const capitalize = require("../code/capitalize");

describe("capitalizes first letter", () => {
  test("string", () => {
    expect(capitalize("maria")).toBe("Maria");
  });
  test("null", () => {
    expect(capitalize("")).toBe("");
  });
  test("capital-string", () => {
    expect(capitalize("Jason")).toBe("Jason");
  });
});
