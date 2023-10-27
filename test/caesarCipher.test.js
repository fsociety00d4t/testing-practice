const cipher = require("../code/caesarCipher.js");

describe("cipher the text", () => {
  test("z to a", () => {
    expect(cipher("zaz", 1)).toBe("aba");
  });
  test("keep cases", () => {
    expect(cipher("FFaS", 5)).toBe("KKfX");
  });
  test("punctuation", () => {
    expect(cipher("hello!world", 10)).toBe("rovvy!gybvn");
  });
  test("spaces", () => {
    expect(cipher("random string with spaces and symb0l@", 5)).toBe(
      "wfsitr xywnsl bnym xufhjx fsi xdrg0q@"
    );
  });
});
