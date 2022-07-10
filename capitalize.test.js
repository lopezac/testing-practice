const capitalize = require("./capitalize.js");

test("return single word capitalized", () => {
  expect(capitalize("apple")).toBe("Apple");
  expect(capitalize("year")).toBe("Year");
  expect(capitalize("loooooong")).toBe("Loooooong");
});

test("return string longer than one word capitalized", () => {
  expect(capitalize("long word")).toBe("Long word");
  expect(capitalize("even longer word")).toBe("Even longer word");
});

test("works with single character", () => {
  expect(capitalize("a")).toBe("A");
  expect(capitalize("b")).toBe("B");
});

test("works with already capitalized strings", () => {
  expect(capitalize("Already capitalized")).toBe("Already capitalized");
  expect(capitalize("A single test")).toBe("A single test");
});
