const reverseString = require("./reverseString.js");

test("reverses a single word", () => {
  expect(reverseString("word")).toBe("drow");
  expect(reverseString("longer")).toBe("regnol");
  expect(reverseString("weird")).toBe("driew");
});

test("reverses more than one word", () => {
  expect(reverseString("word donut")).toBe("tunod drow");
  expect(reverseString("longer word")).toBe("drow regnol");
  expect(reverseString("weird singer")).toBe("regnis driew");
});

test("respects alphanumerical characters", () => {
  expect(reverseString("word.donut.")).toBe(".tunod.drow");
  expect(reverseString("longer^wo?d  ")).toBe("  d?ow^regnol");
});
