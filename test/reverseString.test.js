const reverseString = require("../code/reverseString.js");

describe("reverse String", () => {
  test("string", () => {
    expect(reverseString("maria")).toBe("airam");
  });
  test("null", () => {
    expect(reverseString("")).toBe("");
  });
  test("numbers", () => {
    expect(reverseString("123")).toBe("321");
  });
});
