const { add, sub, mult, div } = require("../code/calculator.js");

describe("basic calculation", () => {
  test("add", () => {
    expect(add(1, 2)).toEqual(3);
  });
  test("sub", () => {
    expect(sub(5, 3)).toEqual(2);
  });
  test("sub negative", () => {
    expect(sub(5, 8)).toEqual(-3);
  });
  test("mult", () => {
    expect(mult(5, 2)).toEqual(10);
  });
  test("div", () => {
    expect(div(10, 2)).toEqual(5);
  });
  test("div with 0", () => {
    expect(div(10, 0)).toEqual("You cannot divide with 0");
  });
  test("one number is undefined", () => {
    expect(add(10)).toEqual(NaN);
  });
});
